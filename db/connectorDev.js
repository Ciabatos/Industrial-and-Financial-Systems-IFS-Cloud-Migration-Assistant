import 'dotenv/config'; // Load environment variables
import oracledb from 'oracledb';
import { initializePool } from './functions/initializePool.js';
import { getConnection } from './functions/getConnection.js';

// oracledb.initOracleClient({libDir:'C:\\instantclient'})
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;


export async function connectorDev(statement) {
    const database = 'dev'
    const login = process.env.loginIfs
    const haslo = process.env.hasloDev
    const connectString = process.env.connectStringDev
      let connection;
      
    try {
        const pool = await initializePool(database,login, haslo, connectString);
        const poolAlias = pool.poolAlias; 
        connectorDev.poolAlias = poolAlias;

        if (!poolAlias) {
            throw new Error('Pool is not connected');
        }

        connection = await getConnection(poolAlias);

        const result = await connection.execute(`${statement}`);
        if (result) {

            console.log(`\n\x1b[32m Odpalane na serwerze: \x1b[0m\n`);
            console.log(`\n\x1b[32m'${statement}'\x1b[0m\n`);

        }
        return result.rows;

    } catch (error) {
        console.log(`\n\x1b[31m Odpalane na serwerze: \x1b[0m\n`);
        console.log(`\n\x1b[31m'${statement}'\x1b[0m\n`);
        console.log(`\n\x1b[31m Error executing PL/SQL block \x1b[0m\n`);
        console.log(`\n\x1b[31m ${error} \x1b[0m\n`);
        throw database + error
    }
      finally {
        if (connection) {
            try {
                await connection.close();
                console.log("Connection returned to pool successfully.");
            } catch (err) {
                console.error("Error returing connection to pool:", err);
            }
        }
    }
}
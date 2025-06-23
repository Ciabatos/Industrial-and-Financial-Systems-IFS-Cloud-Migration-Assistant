import 'dotenv/config'; 
import oracledb from 'oracledb';


oracledb.initOracleClient({libDir:'C:\\instantclient'})
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

 export  async function connectorOldDatabase(statement) {
    const connection = await oracledb.getConnection({
        user          : process.env.loginOldDatabase,
        password      : process.env.hasloOldDatabase,  
        connectString : process.env.connectStringOldDatabase
    });


 
    const result = await connection.execute(statement);

    await connection.commit();

    await connection.close(); 
    return result.rows
    


     
}






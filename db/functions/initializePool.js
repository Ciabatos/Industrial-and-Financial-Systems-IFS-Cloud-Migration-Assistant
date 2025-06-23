import oracledb from 'oracledb'
// oracledb.initOracleClient({libDir:'C:\\instantclient'})
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;


export async function initializePool(database,login, haslo, connectString) {

    const poolAlias = `pool${database}`;

    try {
        const existingPool = oracledb.getPool(poolAlias);
        if (existingPool) {
            return existingPool;
        }
    } catch (err) {
        if (err.code === 'NJS-047') {
            try {
               const pool = await oracledb.createPool({
                    user: login,
                    password: haslo,
                    connectString: connectString,
                    poolIncrement: 1,
                    homogeneous: false, // to musi być 
                    poolMax: 1,
                    poolMin: 1,
                    poolAlias: poolAlias,
                    idleTimeout: 60,
                    timeout: 10
                });
                console.log(`Connection pool created for pool ${poolAlias}`);
                return pool
        
            } catch (err) {
                console.error(`Error creating connection pool ${poolAlias}:`, err);
                throw err;
            }
        }    
        
        else {
            console.error(`Error checking for pool ${poolAlias}:`, err);
            throw err;
        }


    }
    
    
}
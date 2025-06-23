import oracledb from 'oracledb';
// oracledb.initOracleClient({libDir:'C:\\instantclient'})
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export async function closePool(databasePool) {
    try {
        await oracledb.getPool(databasePool).close(0);
        console.log(`Connection pool closed for ${databasePool}.`);
    } catch (err) {
        console.error(`Error closing pool ${databasePool}:`, err);
        throw err;
    }
}
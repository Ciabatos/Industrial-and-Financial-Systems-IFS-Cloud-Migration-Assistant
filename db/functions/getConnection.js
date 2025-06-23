import oracledb from 'oracledb';
// oracledb.initOracleClient({libDir:'C:\\instantclient'})
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export async function getConnection(databasePool) {
    try {
        return await oracledb.getConnection(databasePool);
    } catch (err) {
        console.error(`Error getting connection from pool: ${databasePool}`, err);
        throw err;
    }
}
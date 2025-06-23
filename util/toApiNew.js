import {normalizeSqlData} from './functions/normalizeSqlData.js'
import {closePool} from '../db/functions/closePool.js'
import {errorLogger} from './functions/errorLogger.js'
const BATCH_SIZE = 1; // Możesz dostosować rozmiar partii w zależności od wydajności




async function processInBatches(databaseTo, file, batchSize, viewName, logging) {
    for (let i = 0; i < file.length; i += batchSize) {
        const batch = file.slice(i, i + batchSize);
        console.log(`\n--------------------------------------------------------------------------------------------------------------\n`);
        console.log(`\nPrzetwarzanie batchu ${Math.ceil(i / batchSize) + 1} z ${Math.ceil(file.length / batchSize)}\n`);
        await processBatch(databaseTo, batch, viewName, logging);  
    }
}



async function processBatch(databaseTo,batch, viewName, logging) {
    const promises = batch.map(async (row) => {

let assignmentStatements = 
`
DECLARE
Attr_       VARCHAR2(32000);
Info_       VARCHAR2(32000);
Objid_      VARCHAR2(20);
Objversion_ VARCHAR2(100);
BEGIN
Log_Sys.Init_Odp_Debug_Session_('IFSAPP','en');
`;
        assignmentStatements += `Client_SYS.Clear_Attr(attr_);\n`;
        assignmentStatements += `${viewName}_Api.New__(info_, objid_, objversion_, attr_, 'PREPARE');\n`;
        for (let key in row) {
            assignmentStatements += ` Client_SYS.Add_To_Attr('${key}', '${row[key]}', attr_);\n`;
        }
        assignmentStatements += `${viewName}_Api.New__(info_, objid_, objversion_, attr_, 'DO');\n`;
        assignmentStatements += `COMMIT;\n`;
        assignmentStatements += `END;\n`;

        try {
            await databaseTo(assignmentStatements);

        } catch (error) {
            errorLogger(viewName, assignmentStatements, error , row);  
        }
    });

    await Promise.all(promises);
}







export async function toApiNew(databaseFrom, databaseTo, statement, viewName, logging) {

    console.log(`\n Definicja Query: \n`);
    console.log(`\n ${statement} \n`);

try {
    var select = `${statement}`
    var file = await databaseFrom(`${select}`);
 
    if (!file || file.length === 0) {
        throw new Error(`\n \x1b[31m Procedura zwróciła puste dane: ${viewName}\x1b[0m \n`);
    }

    file = normalizeSqlData(file);
      
    await processInBatches(databaseTo, file, BATCH_SIZE, viewName, logging);


} catch (error) {
    console.error(`\n${error}\n`);
}

finally {
    try {
      if (databaseFrom.poolAlias === databaseTo.poolAlias ){
          await closePool(databaseTo.poolAlias)
      }
      else {
          await closePool(databaseFrom.poolAlias)
          await closePool(databaseTo.poolAlias)
      }

    } catch (error) {
        console.error('Błąd podczas zamykania puli połączeń:', error);
    }
}
}
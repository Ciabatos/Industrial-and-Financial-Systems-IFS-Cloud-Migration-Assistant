import {normalizeSqlData} from './functions/normalizeSqlData.js'
import {closePool} from '../db/functions/closePool.js'
import {errorLogger} from './functions/errorLogger.js'
const BATCH_SIZE = 1; // Możesz dostosować rozmiar partii w zależności od wydajności




async function processInBatches(databaseTo, file, statement2, batchSize, viewName,filter, logging) {

    for (let i = 0; i < file.length; i += batchSize) {
        const batch = file.slice(i, i + batchSize);
        console.log(`\n--------------------------------------------------------------------------------------------------------------\n`);
        console.log(`\nPrzetwarzanie batchu ${Math.ceil(i / batchSize) + 1} z ${Math.ceil(file.length / batchSize)}\n`);
        await processBatch(databaseTo, batch, statement2,  viewName, filter, logging);  
    }
}



async function processBatch(databaseTo, batch, statement2, viewName, filter, logging) {
    const promises = batch.map(async (row) => {


var select2 = 
            `
            ${statement2}
            WHERE
            `

let filterColumns = filter.split(';');
let whereConditions = filterColumns
    .map(col => `${col} = '${row[col]}'`)
    .join(' AND ');



select2 += whereConditions + '\n';


var file2 = await databaseTo(select2);
file2 = normalizeSqlData(file2);



file2.map(async (rowSubselect) => {

let assignmentStatements = 
`
BEGIN
UPDATE ${viewName}
SET SOURCE =
`
    for (let key in row) {
            if (!filterColumns.includes(key)) {
                assignmentStatements += `'${row[key]}'\n`
            }
        }

assignmentStatements +=        
`
WHERE 
${whereConditions}
`
        for (let keySubselect in rowSubselect) {
            if (!filterColumns.includes(keySubselect)) {
        assignmentStatements += `AND ${keySubselect} = '${rowSubselect[keySubselect]}'`
    }
            }


assignmentStatements += `;\n`
assignmentStatements +=  `COMMIT;`
assignmentStatements += `\n`  
assignmentStatements +=  `END;`


        try {
        await databaseTo(assignmentStatements);

            } catch (error) {
                errorLogger(viewName, assignmentStatements, error , row);            }
    })
})

    await Promise.all(promises);
}







export async function toApiHardUpdate(databaseFrom, databaseTo, statement, statement2, viewName, filter, logging) {

    console.log(`\n Definicja Query: \n`);
    console.log(`\n ${statement} \n`);
  

    try {
        var select = `${statement}`
        var file = await databaseFrom(`${select}`);
   
      if (!file || file.length === 0) {
          throw new Error(`\n \x1b[31m Procedura zwróciła puste dane: ${viewName}\x1b[0m \n`);
      }

      file = normalizeSqlData(file);

      await processInBatches(databaseTo, file, statement2, BATCH_SIZE, viewName,filter, logging);

 } catch (error) {
      console.error(`\n${error}\n`);
  }

  finally {
    try {
      if (databaseFrom.poolAlias === databaseTo.poolAlias ){
          await closePool(databaseTo.poolAlias)
      }

      else {

        if (databaseFrom.poolAlias = null ){
            await closePool(databaseFrom.poolAlias)
          }
        if ( databaseTo.poolAlias === null ){
            await closePool(databaseTo.poolAlias)
          }
   
      }

    } catch (error) {
        console.error('Błąd podczas zamykania puli połączeń:', error);
    }
}
}
import {toApiNewJoin} from '../util/toApiNewJoin.js'
import { connectorOldDatabase } from "../db/connectorOldDatabase.js";
import {connectorCfg } from "../db/connectorCfg.js";
import {connectorTest } from "../db/connectorTest.js";
import {connectorProd } from "../db/connectorProd.js";
import {connectorXlsx } from "../db/connectorXlsx.js";

async function inserterJoinWybrana() {
    try {


// await toApiNewJoin(connectorOldDatabase,connectorProd,
// `SELECT * FROM PSZABAT.ACCESSORY_ON_HANDLING_UNIT WHERE CO_TO_JEST IN ('PALETY','NADSTAWKA') ` 
// ,`SELECT HANDLING_UNIT_ID FROM HANDLING_UNIT_EXTENDED` /*WHAT TO SELECT */
// ,'ACCESSORY_ON_HANDLING_UNIT'
// ,'ALT_HANDLING_UNIT_LABEL_ID' /* JOIN ON */
// ,1
// )

// await toApiNewJoin(connectorXlsx,connectorProd,
//     `akcesoria kwiecień 2025` 
//     ,`SELECT HANDLING_UNIT_ID FROM HANDLING_UNIT_EXTENDED` /*WHAT TO SELECT */
//     ,'ACCESSORY_ON_HANDLING_UNIT'
//     ,'ALT_HANDLING_UNIT_LABEL_ID' /* JOIN ON */
//     ,1
//     )

await toApiNewJoin(connectorOldDatabase,connectorCfg,
    `SELECT * FROM PSZABAT.ROUT_OPERATION_TEMPLATE` 
    ,`SELECT ROUT_TEMPLATE_ID FROM ROUT_TEMPLATE` /*WHAT TO SELECT */
    ,'ROUT_OPERATION_TEMPLATE'
    ,'ROUT_TEMPLATE_DESC' /* JOIN ON */
    ,1
    )



// await toApiNewJoin(connectorOldDatabase,connectorCfg,
//     `
//     SELECT DISTINCT
//     KODTYPWZORCA_IFS AS ATTRIBUTE_KEY
//     ,TLUMACZENIE AS TEXT
//     FROM PSZABAT.IFS_TYP_WZORCA
//     ` 
//     ,
//     `
//     SELECT * FROM (
//     SELECT T1.main_type,
//        T1.type,
//        T1.attribute,
//        'en' as lang_code,
//        T1.module,
//        T1.attribute_key,
//        'NormType' as LU
//             FROM ( SELECT * FROM BASIC_DATA_TRANSLATION 
//             WHERE MODULE = 'QUAMAN'
//             and lang_code = 'PROG') T1)
//     ` /*WHAT TO SELECT */

//     ,'BASIC_DATA_TRANSLATION'
//     ,'ATTRIBUTE_KEY' /* JOIN ON */
//     ,1
//     )

   


// await toApiNewJoin(connectorCfg,connectorProd,
//     `SELECT 
// T1.CONTRACT
// ,T2.ROUT_TEMPLATE_DESC
// ,T1.OPERATION_NO
// ,T1.OPERATION_DESCRIPTION
// ,T1.EFFICIENCY_FACTOR

// ,T1.WORK_CENTER_NO
// ,T1.MACH_RUN_FACTOR
//  FROM ROUT_OPERATION_TEMPLATE T1
// JOIN ROUT_TEMPLATE T2 ON T1.rout_template_id = T2.rout_template_id` 

//     ,`SELECT ROUT_TEMPLATE_ID FROM ROUT_TEMPLATE` /*WHAT TO SELECT */
//     ,'ROUT_OPERATION_TEMPLATE'
//     ,'ROUT_TEMPLATE_DESC' /* JOIN ON */
//     ,1
//     )





} catch (error) {
    console.error('Error occurred during execution:', error);
}
}



inserterJoinWybrana();
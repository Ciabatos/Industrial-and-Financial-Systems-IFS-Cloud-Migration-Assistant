import {toApiModify} from '../util/toApiModify2.js'
import { connectorOldDatabase } from "../db/connectorOldDatabase.js";
import {connectorCfg } from "../db/connectorCfg.js";
import {connectorTest } from "../db/connectorTest.js";
import {connectorProd } from "../db/connectorProd.js";
import { connectorXlsx } from '../db/connectorXlsx.js';
async function updaterWybrana() {
    try {

        // await toApiModify('select * from PSZABAT.C_TOOL_USAGE_CONDITION','C_TOOL_USAGE_CONDITION',1)
        // await toApiModify(` select CONTRACT,PART_NO ,ENG_ATTRIBUTE  from PSZABAT.IFS_POZYCJA_MAGAZYNOWA_TAB`,'INVENTORY_PART','PART_NO;CONTRACT',1)
        // await toApiModify(` select CONTRACT,PART_NO ,ROUTING_REVISION,ALTERNATIVE_NO ,C_ENG_CHG_LEVEL,C_ALTERNATIVE_NO ,ALTERNATIVE_DESCRIPTION FROM PSZABAT.ALTERNATE_FINAL_NEW_ALT`,'ROUTING_ALTERNATE','PART_NO;ALTERNATIVE_NO;CONTRACT;ROUTING_REVISION',1)
        //  await toApiModify(` select CONTRACT,PART_NO ,TYPE_CODE, TYPE_CODE_DB  from PSZABAT.IFS_POZYCJA_MAGAZYNOWA_TAB`,'INVENTORY_PART','PART_NO;CONTRACT',1)
        //  await toApiModify(` select CONTRACT,CATALOG_NO, PRICE_CONV_FACTOR  from PSZABAT.IFS_SALES_PART`,'SALES_PART','CATALOG_NO;CONTRACT',1)
        
        // await toApiModify(`select PART_NO, CONTRACT, ALTERNATIVE_NO, SUBSTR ( ALTERNATIVE_DESCRIPTION,1,50 ) as ALTERNATIVE_DESCRIPTION FROM PSZABAT.IFS_PROD_STRUCT_ALTERNATE`,'PROD_STRUCT_ALTERNATE','PART_NO;CONTRACT;ALTERNATIVE_NO',1)
        // await toApiModify(`select * FROM PSZABAT.IFS_PROD_STRUCTURE`,'PROD_STRUCTURE','PART_NO;CONTRACT;ALTERNATIVE_NO;LINE_ITEM_NO;LINE_SEQUENCE',1)

        // await toApiModify(`select contract,part_no,customs_stat_no from PSZABAT.IFS_POZYCJA_MAGAZYNOWA_TAB`,'INVENTORY_PART','PART_NO;CONTRACT',1)
        // await toApiModify(`select contract,part_no,alternative_no,operation_id,c_handling_unit_type_id from PSZABAT.FINAL_OPERATIONS_NEW_ALT_TAB where c_handling_unit_type_id is not null `,'ROUTING_OPERATION','CONTRACT;PART_NO;ALTERNATIVE_NO;OPERATION_ID',1)
        // await toApiModify(`select contract,part_no,alternative_no,operation_id, C_REP_OPER_INPUT_U_M_DB from PSZABAT.FINAL_OPERATIONS_NEW_ALT_TAB `,'ROUTING_OPERATION','CONTRACT;PART_NO;ALTERNATIVE_NO;OPERATION_ID',1)
      
        // await toApiModify(`select contract,part_no,alternative_no,operation_id, SETUP_LABOR_CLASS_NO, SETUP_CREW_SIZE  from PSZABAT.FINAL_OPERATIONS_NEW_ALT_TAB where SETUP_LABOR_CLASS_NO  is not null `,'ROUTING_OPERATION','CONTRACT;PART_NO;ALTERNATIVE_NO;OPERATION_ID',1)
        //  await toApiModify(`select * from PSZABAT.C_TOOL_USAGE_CONDITION`,'C_TOOL_USAGE_CONDITION','CONTRACT;TOOL_ID',1)
        //  await toApiModify(`select CONTRACT,WORK_CENTER_NO,RESOURCE_ID,MCH_CODE, EQUIPMENT_OBJECT_SEQ from PSZABAT.IFS_WORK_CENTER_RESOURCE`,'WORK_CENTER_RESOURCE','CONTRACT;WORK_CENTER_NO;RESOURCE_ID',1)
        //  await toApiModify(`select PART_NO, ALLOW_AS_NOT_CONSUMED_DB from PSZABAT.POZ_GLOW_ZMIANA_ZEST`,'PART_CATALOG','PART_NO',1)
        //  await toApiModify(`select  CONTRACT,PART_NO,BOM_TYPE_DB,ALTERNATIVE_NO,LINE_ITEM_NO,LINE_SEQUENCE , ISSUE_OVERREPORTED_QTY_DB  ,CONSUMPTION_ITEM, CONSUMPTION_ITEM_DB    from PSZABAT.IFS_PROD_STRUCTURE_ZMZEST `,'PROD_STRUCTURE','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;LINE_ITEM_NO;LINE_SEQUENCE',1)


        //  await toApiModify(`SELECT CONTRACT,PART_NO,VENDOR_NO,CONV_FACTOR,BUY_UNIT_MEAS,PRICE_CONV_FACTOR,PRICE_UNIT_MEAS FROM PSZABAT.IFS_PURCHASE_PART_SUPPLIER WHERE PRICE_UNIT_MEAS = 'kg'`,'PURCHASE_PART_SUPPLIER','CONTRACT;PART_NO;VENDOR_NO',1)
        // await toApiModify(`select PART_NO, WEIGHT_NET ,UOM_FOR_WEIGHT_NET from PSZABAT.POZ_GLOW_ZMIANA_ZEST`,'PART_CATALOG','PART_NO',1)

        // await toApiModify(`select CONTRACT,PART_NO,MAXWEEK_SUPPLY,MUL_ORDER_QTY,PLANNING_METHOD from PSZABAT.INVENTORY_PART_PLANNING_ZMZEST`,'INVENTORY_PART_PLANNING','CONTRACT;PART_NO',1)

        //await toApiModify(`select HANDLING_UNIT_ACCESSORY_ID , C_ASSOCIATED_PART_NO from WSP.V_HANDLING_UNIT_ACCESSORY`,'HANDLING_UNIT_ACCESSORY','HANDLING_UNIT_ACCESSORY_ID',1)
       
        //await toApiModify(`select CONTRACT,PART_NO,QTY_CALC_ROUNDING  from PSZABAT.POZ_MAG_ZMIANA_ZEST`,'INVENTORY_PART','PART_NO;CONTRACT',1)
        //await toApiModify(`select CONTRACT,PART_NO, nvl( PLANNER_BUYER ,'*') as PLANNER_BUYER    from PSZABAT.POZ_MAG_ZMIANA_ZEST`,'INVENTORY_PART','PART_NO;CONTRACT',1)
    
        // await toApiModify(`select CONTRACT,CATALOG_NO, PART_NO,ACTIVEIND,ACTIVEIND_DB, LIST_PRICE,LIST_PRICE_INCL_TAX   from PSZABAT.IFS_SALES_PART`,'SALES_PART','CONTRACT;CATALOG_NO;PART_NO',1)
    
    
        //await toApiModify(`select SUPPLIER_ID,  '2023-01-01' AS CREATION_DATE FROM WSP.IFS_SUPPLIER_INFO_GENERAL WHERE SUPPLIER_ID = 'L100005667'`,'SUPPLIER_INFO_GENERAL','SUPPLIER_ID',1)
   
        // await toApiModify(`SELECT CONTRACT, TOOL_ID,NOTE_TEXT FROM PSZABAT.IFS_MANUF_TOOL_ZMZEST`,'MANUF_TOOL','CONTRACT;TOOL_ID',1)

         //await toApiModify(connectorOldDatabase,connectorProd,`select HANDLING_UNIT_TYPE_ID,WIDTH,HEIGHT,DEPTH,UOM_FOR_LENGTH from WSP.V_IFS_TYPY_JO_MIG`,'HANDLING_UNIT_TYPE','HANDLING_UNIT_TYPE_ID',1)
  
// await toApiModify(connectorOldDatabase,connectorTest,`SELECT CONTRACT,PART_NO,ACCOUNTING_GROUP  from PSZABAT.POZ_MAG_ZMIANA_ZEST`,'INVENTORY_PART','PART_NO;CONTRACT',1)
// await toApiModify(connectorOldDatabase,connectorProd,`SELECT CONTRACT,PART_NO,ACCOUNTING_GROUP  from PSZABAT.POZ_MAG_ZMIANA_ZEST`,'INVENTORY_PART','PART_NO;CONTRACT',1)
// await toApiModify(connectorProd,connectorProd,`SELECT  T1.PACKING_INSTRUCTION_ID,  T1.NODE_ID,  T1.HANDLING_UNIT_ACCESSORY_ID, CASE WHEN  T2.PRIME_COMMODITY IN ( 'POJEM' ) AND T1.handling_unit_accessory_id = '1052442' THEN 'TRUE'      WHEN T2.PRIME_COMMODITY IN ( 'SMOJ' ,'SMOZ' ,'BIURO' , 'ETYK' , 'OPAK' , 'CHEM') THEN 'TRUE'      WHEN T2.PRIME_COMMODITY IN ( 'POJEM' ,'GOSPD' ,'PALET' , 'PSKRZ') THEN 'FALSE'  END AS C_CALC_PROPORTIONALLY_DB FROM PACK_INSTR_NODE_ACCESSORY T1 LEFT JOIN INVENTORY_PART T2 ON T1.handling_unit_accessory_id = T2.PART_NO`,'PACK_INSTR_NODE_ACCESSORY','PACKING_INSTRUCTION_ID;NODE_ID;HANDLING_UNIT_ACCESSORY_ID',1)
// await toApiModify(connectorTest,connectorTest,`SELECT  T1.PACKING_INSTRUCTION_ID,  T1.NODE_ID,  T1.HANDLING_UNIT_ACCESSORY_ID, CASE WHEN  T2.PRIME_COMMODITY IN ( 'POJEM' ) AND T1.handling_unit_accessory_id = '1052442' THEN 'TRUE'      WHEN T2.PRIME_COMMODITY IN ( 'SMOJ' ,'SMOZ' ,'BIURO' , 'ETYK' , 'OPAK' , 'CHEM') THEN 'TRUE'      WHEN T2.PRIME_COMMODITY IN ( 'POJEM' ,'GOSPD' ,'PALET' , 'PSKRZ') THEN 'FALSE'  END AS C_CALC_PROPORTIONALLY_DB FROM PACK_INSTR_NODE_ACCESSORY T1 LEFT JOIN INVENTORY_PART T2 ON T1.handling_unit_accessory_id = T2.PART_NO`,'PACK_INSTR_NODE_ACCESSORY','PACKING_INSTRUCTION_ID;NODE_ID;HANDLING_UNIT_ACCESSORY_ID',1)



// await toApiModify(connectorProd,connectorProd,
// `
// WITH
//   CTE_MIN AS (

//   SELECT
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.ROUTING_REVISION
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
//   ,MIN(OPERATION_ID) AS OPERATION_ID
//   ,'TRUE' AS C_RECEIVE_SEMIFIN_PART_DB
//   ,'FALSE' AS C_ISSUE_SEMIFIN_PART_DB


//   FROM ROUTING_OPERATION T1
//   JOIN INVENTORY_PART T5 ON T1.part_no = T5.PART_NO
//   WHERE T1.CONTRACT = 'KRLAN'
//   AND T1.PART_NO NOT LIKE '1%'
//   AND T5.PRIME_COMMODITY NOT IN ('NRKPM', 'NRSRB', 'NRSRM', 'NRSRZ' ,'NRSTD')
//   GROUP BY 
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.ROUTING_REVISION
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
//   )

// ,

//   CTE_MAX AS (
//   SELECT
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.ROUTING_REVISION
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
//   ,MAX(OPERATION_ID) AS OPERATION_ID
//   ,'FALSE' AS C_RECEIVE_SEMIFIN_PART_DB
//   ,'TRUE' AS C_ISSUE_SEMIFIN_PART_DB


//   FROM ROUTING_OPERATION T1
//    JOIN INVENTORY_PART T5 ON T1.part_no = T5.PART_NO
//   WHERE T1.CONTRACT = 'KRLAN'
//   AND T1.PART_NO NOT LIKE '1%'
//   AND T5.PRIME_COMMODITY NOT IN ('NRKPM', 'NRSRB', 'NRSRM', 'NRSRZ' ,'NRSTD')
//   GROUP BY 
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.ROUTING_REVISION
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
//   )






// SELECT * FROM CTE_MIN       /*PIERWSZA OPERACJA*/

// UNION ALL

// SELECT                        /*CZĘŚC MIĘDZY PIERWSZĄ A OSTATNIĄ OPERACJĄ*/
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.ROUTING_REVISION
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
// ,T1.OPERATION_ID
// ,'TRUE' AS C_RECEIVE_SEMIFIN_PART_DB
// ,'TRUE' AS C_ISSUE_SEMIFIN_PART_DB
// FROM ROUTING_OPERATION T1
// JOIN INVENTORY_PART T5 ON T1.part_no = T5.PART_NO
// LEFT JOIN CTE_MIN T2  
//      ON T1.CONTRACT                     = T2.CONTRACT
//     AND T1.PART_NO                      = T2.PART_NO
//     AND T1.ROUTING_REVISION             = T2.ROUTING_REVISION
//     AND T1.BOM_TYPE_DB                  = T2.BOM_TYPE_DB
//     AND T1.ALTERNATIVE_NO               = T2.ALTERNATIVE_NO
//     AND T1.OPERATION_ID                 = T2.OPERATION_ID


// LEFT JOIN CTE_MAX T3                    
//      ON T1.CONTRACT                   = T3.CONTRACT   
//     AND T1.PART_NO                    = T3.PART_NO   
//     AND T1.ROUTING_REVISION           = T3.ROUTING_REVISION   
//     AND T1.BOM_TYPE_DB                = T3.BOM_TYPE_DB   
//     AND T1.ALTERNATIVE_NO             = T3.ALTERNATIVE_NO   
//     AND T1.OPERATION_ID               = T3.OPERATION_ID   

// WHERE T1.CONTRACT = 'KRLAN'
// AND T1.PART_NO NOT LIKE '1%'
// AND T5.PRIME_COMMODITY NOT IN ('NRKPM', 'NRSRB', 'NRSRM', 'NRSRZ' ,'NRSTD')    
// AND T2.PART_NO IS NULL
// AND T3.PART_NO IS NULL         
 

// UNION ALL

// SELECT T1.*     /*OSTATNIA OPERACJA*/
// FROM CTE_MAX T1
// LEFT JOIN CTE_MIN T2 
//      ON T1.CONTRACT                     = T2.CONTRACT
//     AND T1.PART_NO                      = T2.PART_NO
//     AND T1.ROUTING_REVISION             = T2.ROUTING_REVISION
//     AND T1.BOM_TYPE_DB                  = T2.BOM_TYPE_DB
//     AND T1.ALTERNATIVE_NO               = T2.ALTERNATIVE_NO
//     AND T1.OPERATION_ID                 = T2.OPERATION_ID  
// WHERE T2.PART_NO IS NULL       
// `
// ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)









// await toApiModify(connectorProd,connectorProd,
//     `
// WITH CTE_ROUTING_OPERATION_SELEK AS  /* - pakowanie jeżeli przed operację występuje selekcja mech lub ręczna NA DOLE JEST UNIA */
// (

//      SELECT 
//            T1.CONTRACT
//           ,T1.PART_NO
//           ,T1.ROUTING_REVISION
//           ,T1.BOM_TYPE_DB
//           ,T1.ALTERNATIVE_NO
//           ,T1.OPERATION_ID
//           ,T1.OPERATION_DESCRIPTION
//           ,'Y' AS PARALLEL_OPERATION_DB
//           ,ROW_NUMBER () OVER (PARTITION BY  T1.CONTRACT
//                                               ,T1.PART_NO
//                                               ,T1.ROUTING_REVISION
//                                               ,T1.BOM_TYPE_DB
//                                               ,T1.ALTERNATIVE_NO
//                                      ORDER BY T1.OPERATION_ID ASC) AS RN  /* POLICZYC KOLEJNOSC OPERACJI BO ID NIE JEST PRAWIDLOWO ODERDOWANE ! */

//           FROM ROUTING_OPERATION T1
//           JOIN INVENTORY_PART T5 ON T1.part_no = T5.PART_NO
//           WHERE T1.CONTRACT = 'KRLAN'
//           AND T1.PART_NO NOT LIKE '1%'
//           AND T5.PRIME_COMMODITY NOT IN ('NRKPM', 'NRSRB', 'NRSRM', 'NRSRZ' ,'NRSTD') 

// )







//     SELECT                          /* - kontroli obróbki cieplnej każda marszruta - odwodorowywanie każde */
//      T1.CONTRACT
//     ,T1.PART_NO
//     ,T1.ROUTING_REVISION
//     ,T1.BOM_TYPE_DB
//     ,T1.ALTERNATIVE_NO
//     ,T1.OPERATION_ID
//     --,T1.OPERATION_DESCRIPTION
//     ,'Y' AS PARALLEL_OPERATION_DB
//     FROM ROUTING_OPERATION T1
//     JOIN INVENTORY_PART T5 ON T1.part_no = T5.PART_NO
//     WHERE T1.CONTRACT = 'KRLAN'
//     AND T1.PART_NO NOT LIKE '1%'
//     AND T5.PRIME_COMMODITY NOT IN ('NRKPM', 'NRSRB', 'NRSRM', 'NRSRZ' ,'NRSTD') 
//     AND T1.OPERATION_DESCRIPTION IN
//     (
//     'ODWODOROWYWANIE'
//     ,'KONTROLA OBRÓBKI CIEPLNEJ'
//     )


// UNION ALL




//     SELECT                        /* - ulepszanie cieplne jeżeli przed ulepszaniem cieplnym występuje usuwanie fosforanów , ZALOZENIE JEST TAKIE ZE JAK WYSTEPUJE USUWANIE FOSFORANOW TO ZAWSZE JEST PRZED ULEPSZENIEM CIEPLNYM, NIE SPRAWDZALEM TEGO TYLKO DOSTALEM PEWNE INFO */
//                DATA1.CONTRACT
//               ,DATA1.PART_NO
//               ,DATA1.ROUTING_REVISION
//               ,DATA1.BOM_TYPE_DB
//               ,DATA1.ALTERNATIVE_NO
//               ,DATA1.OPERATION_ID
//               ,DATA1.PARALLEL_OPERATION_DB
//     FROM (


//               SELECT 
//                T1.CONTRACT
//               ,T1.PART_NO
//               ,T1.ROUTING_REVISION
//               ,T1.BOM_TYPE_DB
//               ,T1.ALTERNATIVE_NO
//               ,T1.OPERATION_ID
//               ,T1.OPERATION_DESCRIPTION
//               ,'Y' AS PARALLEL_OPERATION_DB
//               ,ROW_NUMBER () OVER (PARTITION BY  T1.CONTRACT
//                                                   ,T1.PART_NO
//                                                   ,T1.ROUTING_REVISION
//                                                   ,T1.BOM_TYPE_DB
//                                                   ,T1.ALTERNATIVE_NO
//                                          ORDER BY T1.OPERATION_ID ASC) AS RN

//               FROM ROUTING_OPERATION T1
//               JOIN INVENTORY_PART T5 ON T1.part_no = T5.PART_NO
//               WHERE T1.CONTRACT = 'KRLAN'
//               AND T1.PART_NO NOT LIKE '1%'
//               AND T5.PRIME_COMMODITY NOT IN ('NRKPM', 'NRSRB', 'NRSRM', 'NRSRZ' ,'NRSTD') 
//               AND T1.OPERATION_DESCRIPTION IN
//               (
//               'USUWANIE FOSFORANÓW'
//               ,'USUWANIE FOSFORANÓW(REMIX)'
//               ,'ULEPSZANIE CIEPLNE EMULSJA 15%'
//               ,'ULEPSZANIE CIEPLNE'
//               ,'ULEPSZANIE CIEPLNE EMULSJA 2%'
//               )

//     ) DATA1
//     WHERE DATA1.RN = 2
//     AND DATA1.OPERATION_DESCRIPTION IN ( 
//     'ULEPSZANIE CIEPLNE EMULSJA 15%'
//     ,'ULEPSZANIE CIEPLNE'
//     ,'ULEPSZANIE CIEPLNE EMULSJA 2%'
//      )


// UNION ALL


//           SELECT             /* - pakowanie jeżeli przed operację występuje selekcja mech lub ręczna NA DOLE JEST UNIA */
//            T1.CONTRACT
//           ,T1.PART_NO
//           ,T1.ROUTING_REVISION
//           ,T1.BOM_TYPE_DB
//           ,T1.ALTERNATIVE_NO
//           ,T1.OPERATION_ID
//           ,T1.PARALLEL_OPERATION_DB
//           FROM CTE_ROUTING_OPERATION_SELEK T1
//           LEFT JOIN CTE_ROUTING_OPERATION_SELEK T2 
//                ON T1.CONTRACT                     = T2.CONTRACT
//                 AND T1.PART_NO                      = T2.PART_NO
//                 AND T1.ROUTING_REVISION             = T2.ROUTING_REVISION
//                 AND T1.BOM_TYPE_DB                  = T2.BOM_TYPE_DB
//                 AND T1.ALTERNATIVE_NO               = T2.ALTERNATIVE_NO

//           WHERE T1.OPERATION_DESCRIPTION LIKE  '%PAKOW%'
//             AND T1.OPERATION_DESCRIPTION NOT LIKE ('PAKOWANIE PRZED KOOPERACJ%')
//             AND T2.OPERATION_DESCRIPTION LIKE  '%SEL%'
//             AND  (T1.RN - T2.RN)  = 1 /* JEZELI JEST 1 TO OPERACJE SA OBOK SIEBIE */
  
//     `
//     ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)





// await toApiModify(connectorProd,connectorProd,
//     `
// SELECT
// T1.CONTRACT
// ,T1.PART_NO
// ,'AV' AS INVENTORY_VALUATION_METHOD_DB
// ,'TRANSACTION BASED' as INVOICE_CONSIDERATION_DB
// FROM INVENTORY_PART T1
// WHERE T1.CONTRACT = 'KRLAN'
// AND T1.PRIME_COMMODITY = 'WALC'
//     `
//     ,'INVENTORY_PART','CONTRACT;PART_NO',1)












// await toApiModify(connectorProd,connectorProd,
// `
// SELECT                        /*CZĘŚC MIĘDZY PIERWSZĄ A OSTATNIĄ OPERACJĄ*/
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
// ,T1.OPERATION_ID
// ,'FALSE' AS C_RECEIVE_SEMIFIN_PART_DB
// ,'FALSE' AS C_ISSUE_SEMIFIN_PART_DB
// FROM ROUTING_OPERATION T1
// JOIN INVENTORY_PART T5 ON T1.part_no = T5.PART_NO


// WHERE T1.CONTRACT = 'KRLAN'
// AND T1.PART_NO NOT LIKE '1%'
// AND T5.PRIME_COMMODITY NOT IN ('NRKPM', 'NRSRB', 'NRSRM', 'NRSRZ' ,'NRSTD')    
// AND T1.operation_description LIKE '%KONTR%'
// `
// ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)











// await toApiModify(connectorProd,connectorProd,
// `
// SELECT                        
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
// ,T1.OPERATION_ID
// ,'2' AS CREW_SIZE
// FROM ROUTING_OPERATION T1
// WHERE OPERATION_DESCRIPTION LIKE 'USUWANIE FOSFORANÓW'
// AND WORK_CENTER_NO = 'UCIEP'
// `
// ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)

// await toApiModify(connectorProd,connectorProd,`SELECT CONTRACT ,PART_NO ,'60' AS MAXWEEK_SUPPLY ,'G' AS PLANNING_METHOD FROM INVENTORY_PART_PLANNING WHERE PART_NO IN (SELECT PART_NO FROM INVENTORY_PART WHERE PRIME_COMMODITY IN ('ETYK','KTNKR','KTPDK','KTSRB','KTWSK') ) AND CONTRACT = 'KRLAN' `,'INVENTORY_PART_PLANNING','CONTRACT;PART_NO',1)
//  await toApiModify(connectorXlsx,connectorProd,`PURCHASE_PART_SUPPLIER Patryk Nowak 22.01.2025`,'PURCHASE_PART_SUPPLIER','CONTRACT;PART_NO;VENDOR_NO',1)
//  await toApiModify(connectorXlsx,connectorProd,`PURCHASE_PART_SUPPLIER Patryk Nowak 22.01.2025 WERSJA Z NULL VENDOREM`,'PURCHASE_PART_SUPPLIER','CONTRACT;PART_NO',1)
//   await toApiModify(connectorXlsx,connectorCfg,`Wzajemnie odn poz sprz 22012025 DRUGA WERSJA `,'SALES_PART_CROSS_REFERENCE','CUSTOMER_NO;CONTRACT;CATALOG_NO;CUSTOMER_PART_NO',1)
//   await toApiModify(connectorXlsx,connectorProd,`Wzajemnie odn poz sprz 22012025 DRUGA WERSJA `,'SALES_PART_CROSS_REFERENCE','CUSTOMER_NO;CONTRACT;CATALOG_NO;CUSTOMER_PART_NO',1)


// await toApiModify(connectorProd,connectorProd,
// `
// SELECT                        
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.ENG_CHG_LEVEL
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
// ,T1.LINE_ITEM_NO
// ,T1.LINE_SEQUENCE
// ,'MANUAL' AS ISSUE_TYPE_DB
// FROM PROD_STRUCTURE T1
// JOIN INVENTORY_PART T2 ON T1.COMPONENT_PART = T2.PART_NO
// WHERE T1.CONTRACT =  'KRLAN'
// AND T2.PRIME_COMMODITY = 'DRTC'
// `
// ,'PROD_STRUCTURE','CONTRACT;PART_NO;ENG_CHG_LEVEL;BOM_TYPE_DB;ALTERNATIVE_NO;LINE_ITEM_NO;LINE_SEQUENCE',1)







// await toApiModify(connectorProd,connectorProd,
// `
// SELECT                        
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
// ,T1.OPERATION_ID

// ,NVL(C_OPER_INPUT_UNIT_MEAS,'kg') AS C_OPER_INPUT_UNIT_MEAS
// ,'TRUE' AS C_REP_OPER_INPUT_U_M_DB

// FROM ROUTING_OPERATION T1
// WHERE T1.CONTRACT = 'KRLAN'  
// AND T1.operation_description LIKE 'USUWANIE FOSFORANÓW'
// AND C_REP_OPER_INPUT_U_M_DB = 'FALSE'
// `
// ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)




// await toApiModify(connectorTest,connectorTest,
//     `
//     SELECT                        
//      T1.CONTRACT
//     ,T1.PART_NO
//     ,T1.BOM_TYPE_DB
//     ,T1.ALTERNATIVE_NO
//     ,T1.OPERATION_ID

//     ,'FALSE' AS C_REP_OPER_INPUT_U_M_DB
    
//     FROM ROUTING_OPERATION T1
//     WHERE T1.CONTRACT = 'KRLAN'  
//     AND T1.operation_description LIKE 'KALIBROWANIE GWINTU'
//     AND C_REP_OPER_INPUT_U_M_DB = 'TRUE'
//     `
//     ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)





//     await toApiModify(connectorCfg,connectorCfg,
//         `
//         SELECT                        
//          T1.CONTRACT
//         ,T1.PART_NO
//         ,T1.BOM_TYPE_DB
//         ,T1.ALTERNATIVE_NO
//         ,T1.OPERATION_ID
    
//         ,'FALSE' AS C_REP_OPER_INPUT_U_M_DB
        
//         FROM ROUTING_OPERATION T1
//         WHERE T1.CONTRACT = 'KRLAN'  
//         AND T1.operation_description LIKE 'KALIBROWANIE GWINTU'
//         AND C_REP_OPER_INPUT_U_M_DB = 'TRUE'
//         `
//         ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)






//         await toApiModify(connectorProd,connectorProd,
//             `
//             SELECT                        
//              T1.CONTRACT
//             ,T1.PART_NO
//             ,T1.BOM_TYPE_DB
//             ,T1.ALTERNATIVE_NO
//             ,T1.OPERATION_ID
        
//             ,'FALSE' AS C_REP_OPER_INPUT_U_M_DB
            
//             FROM ROUTING_OPERATION T1
//             WHERE T1.CONTRACT = 'KRLAN'  
//             AND T1.operation_description LIKE 'KALIBROWANIE GWINTU'
//             AND C_REP_OPER_INPUT_U_M_DB = 'TRUE'
//             `
//             ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)




        // await toApiModify(connectorProd,connectorProd,
        //     `
        //     SELECT                        
        //      T1.CONTRACT
        //     ,T1.PART_NO
        
        //     ,CASE
        //     WHEN T1.PRIME_COMMODITY = 'ODZIE'       THEN 'CB01'
        //     WHEN T1.PRIME_COMMODITY = 'ETYK'        THEN 'DA02'
        //     WHEN T1.PRIME_COMMODITY = 'NADST'       THEN 'DA01'
        //     WHEN T1.PRIME_COMMODITY = 'OPAK'        THEN 'DA03'
        //     WHEN T1.PRIME_COMMODITY = 'PALET'       THEN 'DA01'
        //     WHEN T1.PRIME_COMMODITY = 'POJEM'       THEN 'DA03'
        //     WHEN T1.PRIME_COMMODITY = 'PSKRZ'       THEN 'DA03'
        //     WHEN T1.PRIME_COMMODITY = 'SMOJ'        THEN 'DA03'
        //     WHEN T1.PRIME_COMMODITY = 'SMOZ'        THEN 'DA03'
        //     ELSE NULL 
        //     END AS PART_PRODUCT_FAMILY
            
        //     FROM INVENTORY_PART T1
        //     WHERE T1.CONTRACT = 'KRLAN'
        //     AND T1.PRIME_COMMODITY IN
        //         (

        //         'ODZIE'
        //         ,'ETYK'
        //         ,'NADST'
        //         ,'OPAK'
        //         ,'PALET'
        //         ,'POJEM'
        //         ,'PSKRZ'
        //         ,'SMOJ'
        //         ,'SMOZ'

        //         )
        //     `
        //     ,'INVENTORY_PART','CONTRACT;PART_NO',1)





//         await toApiModify(connectorProd,connectorProd,
//             `
// SELECT 
// T1.CONTRACT
// ,T1.PART_NO
// ,T1.CHARACTERISTIC_CODE
// ,(SELECT CHARACTERISTIC_VALUE FROM DISCRETE_CHARAC_VALUE WHERE CHARACTERISTIC_VALUE LIKE '100(NAW%GLANIE)'  )  AS ATTR_VALUE --'100(NAWĘGLANIE)' 
// FROM INVENTORY_PART_CHAR T1
// JOIN INVENTORY_PART T2 ON T2.PART_NO = T1.PART_NO
// WHERE
// T1.CONTRACT = 'KRLAN'
// AND CHARACTERISTIC_CODE ='WYTRZ'
// AND ATTR_VALUE = '100' --100(NAWĘGLANIE)
// AND T1.PART_NO  IN 

// (
// '2166674'
// ,'2189137'
// ,'2185397'
// ,'2184620'
// ,'2181667'
// ,'2179521'
// ,'2179551'
// ,'2179297'
// ,'2178894'
// ,'2178060'
// ,'2178179'
// ,'2178262'
// ,'2177437'
// ,'2177438'
// ,'2177344'
// ,'2176713'
// ,'2176507'
// ,'2176561'
// ,'2176642'
// ,'2176449'
// ,'2176193'
// ,'2176210'
// ,'2176075'
// ,'2175699'
// ,'2175701'
// ,'2175736'
// ,'2175298'
// ,'2175327'
// ,'2175177'
// ,'2175068'
// ,'2174763'
// ,'2174765'
// ,'2174846'
// ,'2174857'
// ,'2174656'
// ,'2174658'
// ,'2174659'
// ,'2174661'
// ,'2174662'
// ,'2174663'
// ,'2174258'
// ,'2174338'
// ,'2174339'
// ,'2174147'
// ,'2174057'
// ,'2174063'
// ,'2174100'
// ,'2173968'
// ,'2173932'
// ,'2173737'
// ,'2173738'
// ,'2173744'
// ,'2173749'
// ,'2173753'
// ,'2173755'
// ,'2173756'
// ,'2173809'
// ,'2173460'
// ,'2173569'
// ,'2173570'
// ,'2173571'
// ,'2173572'
// ,'2173573'
// ,'2173339'
// ,'2173425'
// ,'2172927'
// ,'2172775'
// ,'2172785'
// ,'2172786'
// ,'2172787'
// ,'2172788'
// ,'2172789'
// ,'2172685'
// ,'2172686'
// ,'2172556'
// ,'2172571'
// ,'2172576'
// ,'2172433'
// ,'2172434'
// ,'2172519'
// ,'2172520'
// ,'2172085'
// ,'2171865'
// ,'2171659'
// ,'2171677'
// ,'2171750'
// ,'2171575'
// ,'2171432'
// ,'2170704'
// ,'2170705'
// ,'2170706'
// ,'2170675'
// ,'2170676'
// ,'2170677'
// ,'2170679'
// ,'2169506'
// ,'2169512'
// ,'2169423'
// ,'2169150'
// ,'2168744'
// ,'2168406'
// ,'2168408'
// ,'2168409'
// ,'2168428'
// ,'2168435'
// ,'2168026'
// ,'2168036'
// ,'2167713'
// ,'2167714'
// ,'2167715'
// ,'2167716'
// ,'2167741'
// ,'2167773'
// ,'2167693'
// ,'2167695'
// ,'2167696'
// ,'2167697'
// ,'2167699'
// ,'2167701'
// ,'2167702'
// ,'2167705'
// ,'2167707'
// ,'2167708'
// ,'2167709'
// ,'2167710'
// ,'2167712'
// ,'2167630'
// ,'2167477'
// ,'2167376'
// ,'2167417'
// ,'2167418'
// ,'2167247'
// ,'2167075'
// ,'2167078'
// ,'2167128'
// ,'2166352'
// ,'2166235'
// ,'2166285'
// ,'2165566'
// ,'2163920'
// ,'2163857'
// ,'2163546'
// ,'2163679'
// ,'2162740'
// ,'2162832'
// ,'2162392'
// ,'2161796'
// ,'2161394'
// ,'2161105'
// ,'2161287'
// ,'2160764'
// ,'2160665'
// ,'2160121'
// ,'2159497'
// ,'2158208'
// ,'2156679'
// ,'2156008'
// ,'2155089'
// ,'2155564'
// ,'2155720'
// ,'2154671'
// ,'2154397'
// ,'2154524'
// ,'2154108'
// ,'2153744'
// ,'2153157'
// ,'2153158'
// ,'2153161'
// ,'2153208'
// ,'2152794'
// ,'2152637'
// ,'2151401'
// ,'2151671'
// ,'2150579'
// ,'2150581'
// ,'2150422'
// ,'2150423'
// ,'2150426'
// ,'2150427'
// ,'2150428'
// ,'2150429'
// ,'2150430'
// ,'2150431'
// ,'2150432'
// ,'2150398'
// ,'2150399'
// ,'2150400'
// ,'2150401'
// ,'2150402'
// ,'2150403'
// ,'2150404'
// ,'2150405'
// ,'2150407'
// ,'2150408'
// ,'2150409'
// ,'2150410'
// ,'2150411'
// ,'2150412'
// ,'2150235'
// ,'2150236'
// ,'2173881'
// ,'2171790'
// ,'2172084'
// ,'2167706'
// ,'2151672'
// ,'2150406'
// )
//             `
//             ,'INVENTORY_PART_CHAR','CONTRACT;PART_NO;CHARACTERISTIC_CODE',1)








// await toApiModify(connectorProd,connectorProd,
//     `
// SELECT 
// T1.CONTRACT
// ,T1.CATALOG_NO
// ,T1.CHARACTERISTIC_CODE
// ,(SELECT CHARACTERISTIC_VALUE FROM DISCRETE_CHARAC_VALUE WHERE CHARACTERISTIC_VALUE LIKE '100(NAW%GLANIE)'  )  AS ATTR_VALUE --'100(NAWĘGLANIE)' 
// FROM SALES_PART_CHARACTERISTIC T1
// JOIN INVENTORY_PART T2 ON T2.PART_NO = T1.CATALOG_NO
// WHERE
// T1.CONTRACT = 'KRLAN'
// AND CHARACTERISTIC_CODE ='WYTRZ'
// AND ATTR_VALUE = '100' --100(NAWĘGLANIE)
// AND T1.CATALOG_NO  IN 

// (
// '2166674'
// ,'2189137'
// ,'2185397'
// ,'2184620'
// ,'2181667'
// ,'2179521'
// ,'2179551'
// ,'2179297'
// ,'2178894'
// ,'2178060'
// ,'2178179'
// ,'2178262'
// ,'2177437'
// ,'2177438'
// ,'2177344'
// ,'2176713'
// ,'2176507'
// ,'2176561'
// ,'2176642'
// ,'2176449'
// ,'2176193'
// ,'2176210'
// ,'2176075'
// ,'2175699'
// ,'2175701'
// ,'2175736'
// ,'2175298'
// ,'2175327'
// ,'2175177'
// ,'2175068'
// ,'2174763'
// ,'2174765'
// ,'2174846'
// ,'2174857'
// ,'2174656'
// ,'2174658'
// ,'2174659'
// ,'2174661'
// ,'2174662'
// ,'2174663'
// ,'2174258'
// ,'2174338'
// ,'2174339'
// ,'2174147'
// ,'2174057'
// ,'2174063'
// ,'2174100'
// ,'2173968'
// ,'2173932'
// ,'2173737'
// ,'2173738'
// ,'2173744'
// ,'2173749'
// ,'2173753'
// ,'2173755'
// ,'2173756'
// ,'2173809'
// ,'2173460'
// ,'2173569'
// ,'2173570'
// ,'2173571'
// ,'2173572'
// ,'2173573'
// ,'2173339'
// ,'2173425'
// ,'2172927'
// ,'2172775'
// ,'2172785'
// ,'2172786'
// ,'2172787'
// ,'2172788'
// ,'2172789'
// ,'2172685'
// ,'2172686'
// ,'2172556'
// ,'2172571'
// ,'2172576'
// ,'2172433'
// ,'2172434'
// ,'2172519'
// ,'2172520'
// ,'2172085'
// ,'2171865'
// ,'2171659'
// ,'2171677'
// ,'2171750'
// ,'2171575'
// ,'2171432'
// ,'2170704'
// ,'2170705'
// ,'2170706'
// ,'2170675'
// ,'2170676'
// ,'2170677'
// ,'2170679'
// ,'2169506'
// ,'2169512'
// ,'2169423'
// ,'2169150'
// ,'2168744'
// ,'2168406'
// ,'2168408'
// ,'2168409'
// ,'2168428'
// ,'2168435'
// ,'2168026'
// ,'2168036'
// ,'2167713'
// ,'2167714'
// ,'2167715'
// ,'2167716'
// ,'2167741'
// ,'2167773'
// ,'2167693'
// ,'2167695'
// ,'2167696'
// ,'2167697'
// ,'2167699'
// ,'2167701'
// ,'2167702'
// ,'2167705'
// ,'2167707'
// ,'2167708'
// ,'2167709'
// ,'2167710'
// ,'2167712'
// ,'2167630'
// ,'2167477'
// ,'2167376'
// ,'2167417'
// ,'2167418'
// ,'2167247'
// ,'2167075'
// ,'2167078'
// ,'2167128'
// ,'2166352'
// ,'2166235'
// ,'2166285'
// ,'2165566'
// ,'2163920'
// ,'2163857'
// ,'2163546'
// ,'2163679'
// ,'2162740'
// ,'2162832'
// ,'2162392'
// ,'2161796'
// ,'2161394'
// ,'2161105'
// ,'2161287'
// ,'2160764'
// ,'2160665'
// ,'2160121'
// ,'2159497'
// ,'2158208'
// ,'2156679'
// ,'2156008'
// ,'2155089'
// ,'2155564'
// ,'2155720'
// ,'2154671'
// ,'2154397'
// ,'2154524'
// ,'2154108'
// ,'2153744'
// ,'2153157'
// ,'2153158'
// ,'2153161'
// ,'2153208'
// ,'2152794'
// ,'2152637'
// ,'2151401'
// ,'2151671'
// ,'2150579'
// ,'2150581'
// ,'2150422'
// ,'2150423'
// ,'2150426'
// ,'2150427'
// ,'2150428'
// ,'2150429'
// ,'2150430'
// ,'2150431'
// ,'2150432'
// ,'2150398'
// ,'2150399'
// ,'2150400'
// ,'2150401'
// ,'2150402'
// ,'2150403'
// ,'2150404'
// ,'2150405'
// ,'2150407'
// ,'2150408'
// ,'2150409'
// ,'2150410'
// ,'2150411'
// ,'2150412'
// ,'2150235'
// ,'2150236'
// ,'2173881'
// ,'2171790'
// ,'2172084'
// ,'2167706'
// ,'2151672'
// ,'2150406'
// )
//     `
//     ,'SALES_PART_CHARACTERISTIC','CONTRACT;CATALOG_NO;CHARACTERISTIC_CODE',1)


                







// await toApiModify(connectorProd,connectorProd,
//     `
// SELECT 


// T1.CONTRACT
// ,T1.PART_NO
// ,REPLACE (DESCRIPTION,' 100 ',' ' || (SELECT CHARACTERISTIC_VALUE FROM DISCRETE_CHARAC_VALUE WHERE CHARACTERISTIC_VALUE LIKE '100(NAW%GLANIE)'  )|| ' ' ) AS DESCRIPTION

// FROM INVENTORY_PART T1
// WHERE 
// T1.PART_NO  IN 

// (
// '2166674'
// ,'2189137'
// ,'2185397'
// ,'2184620'
// ,'2181667'
// ,'2179521'
// ,'2179551'
// ,'2179297'
// ,'2178894'
// ,'2178060'
// ,'2178179'
// ,'2178262'
// ,'2177437'
// ,'2177438'
// ,'2177344'
// ,'2176713'
// ,'2176507'
// ,'2176561'
// ,'2176642'
// ,'2176449'
// ,'2176193'
// ,'2176210'
// ,'2176075'
// ,'2175699'
// ,'2175701'
// ,'2175736'
// ,'2175298'
// ,'2175327'
// ,'2175177'
// ,'2175068'
// ,'2174763'
// ,'2174765'
// ,'2174846'
// ,'2174857'
// ,'2174656'
// ,'2174658'
// ,'2174659'
// ,'2174661'
// ,'2174662'
// ,'2174663'
// ,'2174258'
// ,'2174338'
// ,'2174339'
// ,'2174147'
// ,'2174057'
// ,'2174063'
// ,'2174100'
// ,'2173968'
// ,'2173932'
// ,'2173737'
// ,'2173738'
// ,'2173744'
// ,'2173749'
// ,'2173753'
// ,'2173755'
// ,'2173756'
// ,'2173809'
// ,'2173460'
// ,'2173569'
// ,'2173570'
// ,'2173571'
// ,'2173572'
// ,'2173573'
// ,'2173339'
// ,'2173425'
// ,'2172927'
// ,'2172775'
// ,'2172785'
// ,'2172786'
// ,'2172787'
// ,'2172788'
// ,'2172789'
// ,'2172685'
// ,'2172686'
// ,'2172556'
// ,'2172571'
// ,'2172576'
// ,'2172433'
// ,'2172434'
// ,'2172519'
// ,'2172520'
// ,'2172085'
// ,'2171865'
// ,'2171659'
// ,'2171677'
// ,'2171750'
// ,'2171575'
// ,'2171432'
// ,'2170704'
// ,'2170705'
// ,'2170706'
// ,'2170675'
// ,'2170676'
// ,'2170677'
// ,'2170679'
// ,'2169506'
// ,'2169512'
// ,'2169423'
// ,'2169150'
// ,'2168744'
// ,'2168406'
// ,'2168408'
// ,'2168409'
// ,'2168428'
// ,'2168435'
// ,'2168026'
// ,'2168036'
// ,'2167713'
// ,'2167714'
// ,'2167715'
// ,'2167716'
// ,'2167741'
// ,'2167773'
// ,'2167693'
// ,'2167695'
// ,'2167696'
// ,'2167697'
// ,'2167699'
// ,'2167701'
// ,'2167702'
// ,'2167705'
// ,'2167707'
// ,'2167708'
// ,'2167709'
// ,'2167710'
// ,'2167712'
// ,'2167630'
// ,'2167477'
// ,'2167376'
// ,'2167417'
// ,'2167418'
// ,'2167247'
// ,'2167075'
// ,'2167078'
// ,'2167128'
// ,'2166352'
// ,'2166235'
// ,'2166285'
// ,'2165566'
// ,'2163920'
// ,'2163857'
// ,'2163546'
// ,'2163679'
// ,'2162740'
// ,'2162832'
// ,'2162392'
// ,'2161796'
// ,'2161394'
// ,'2161105'
// ,'2161287'
// ,'2160764'
// ,'2160665'
// ,'2160121'
// ,'2159497'
// ,'2158208'
// ,'2156679'
// ,'2156008'
// ,'2155089'
// ,'2155564'
// ,'2155720'
// ,'2154671'
// ,'2154397'
// ,'2154524'
// ,'2154108'
// ,'2153744'
// ,'2153157'
// ,'2153158'
// ,'2153161'
// ,'2153208'
// ,'2152794'
// ,'2152637'
// ,'2151401'
// ,'2151671'
// ,'2150579'
// ,'2150581'
// ,'2150422'
// ,'2150423'
// ,'2150426'
// ,'2150427'
// ,'2150428'
// ,'2150429'
// ,'2150430'
// ,'2150431'
// ,'2150432'
// ,'2150398'
// ,'2150399'
// ,'2150400'
// ,'2150401'
// ,'2150402'
// ,'2150403'
// ,'2150404'
// ,'2150405'
// ,'2150407'
// ,'2150408'
// ,'2150409'
// ,'2150410'
// ,'2150411'
// ,'2150412'
// ,'2150235'
// ,'2150236'
// ,'2173881'
// ,'2171790'
// ,'2172084'
// ,'2167706'
// ,'2151672'
// ,'2150406'
// )
//     `
//     ,'INVENTORY_PART','CONTRACT;PART_NO',1)









// await toApiModify(connectorProd,connectorProd,
//     `
// SELECT 


// T1.CONTRACT
// ,T1.CATALOG_NO
// ,REPLACE (CATALOG_DESC,' 100 ',' ' || (SELECT CHARACTERISTIC_VALUE FROM DISCRETE_CHARAC_VALUE WHERE CHARACTERISTIC_VALUE LIKE '100(NAW%GLANIE)'  )|| ' ' ) AS CATALOG_DESC

// FROM SALES_PART T1
// WHERE 
// T1.CATALOG_NO  IN 


// (
//     '2166674'
//     ,'2189137'
//     ,'2185397'
//     ,'2184620'
//     ,'2181667'
//     ,'2179521'
//     ,'2179551'
//     ,'2179297'
//     ,'2178894'
//     ,'2178060'
//     ,'2178179'
//     ,'2178262'
//     ,'2177437'
//     ,'2177438'
//     ,'2177344'
//     ,'2176713'
//     ,'2176507'
//     ,'2176561'
//     ,'2176642'
//     ,'2176449'
//     ,'2176193'
//     ,'2176210'
//     ,'2176075'
//     ,'2175699'
//     ,'2175701'
//     ,'2175736'
//     ,'2175298'
//     ,'2175327'
//     ,'2175177'
//     ,'2175068'
//     ,'2174763'
//     ,'2174765'
//     ,'2174846'
//     ,'2174857'
//     ,'2174656'
//     ,'2174658'
//     ,'2174659'
//     ,'2174661'
//     ,'2174662'
//     ,'2174663'
//     ,'2174258'
//     ,'2174338'
//     ,'2174339'
//     ,'2174147'
//     ,'2174057'
//     ,'2174063'
//     ,'2174100'
//     ,'2173968'
//     ,'2173932'
//     ,'2173737'
//     ,'2173738'
//     ,'2173744'
//     ,'2173749'
//     ,'2173753'
//     ,'2173755'
//     ,'2173756'
//     ,'2173809'
//     ,'2173460'
//     ,'2173569'
//     ,'2173570'
//     ,'2173571'
//     ,'2173572'
//     ,'2173573'
//     ,'2173339'
//     ,'2173425'
//     ,'2172927'
//     ,'2172775'
//     ,'2172785'
//     ,'2172786'
//     ,'2172787'
//     ,'2172788'
//     ,'2172789'
//     ,'2172685'
//     ,'2172686'
//     ,'2172556'
//     ,'2172571'
//     ,'2172576'
//     ,'2172433'
//     ,'2172434'
//     ,'2172519'
//     ,'2172520'
//     ,'2172085'
//     ,'2171865'
//     ,'2171659'
//     ,'2171677'
//     ,'2171750'
//     ,'2171575'
//     ,'2171432'
//     ,'2170704'
//     ,'2170705'
//     ,'2170706'
//     ,'2170675'
//     ,'2170676'
//     ,'2170677'
//     ,'2170679'
//     ,'2169506'
//     ,'2169512'
//     ,'2169423'
//     ,'2169150'
//     ,'2168744'
//     ,'2168406'
//     ,'2168408'
//     ,'2168409'
//     ,'2168428'
//     ,'2168435'
//     ,'2168026'
//     ,'2168036'
//     ,'2167713'
//     ,'2167714'
//     ,'2167715'
//     ,'2167716'
//     ,'2167741'
//     ,'2167773'
//     ,'2167693'
//     ,'2167695'
//     ,'2167696'
//     ,'2167697'
//     ,'2167699'
//     ,'2167701'
//     ,'2167702'
//     ,'2167705'
//     ,'2167707'
//     ,'2167708'
//     ,'2167709'
//     ,'2167710'
//     ,'2167712'
//     ,'2167630'
//     ,'2167477'
//     ,'2167376'
//     ,'2167417'
//     ,'2167418'
//     ,'2167247'
//     ,'2167075'
//     ,'2167078'
//     ,'2167128'
//     ,'2166352'
//     ,'2166235'
//     ,'2166285'
//     ,'2165566'
//     ,'2163920'
//     ,'2163857'
//     ,'2163546'
//     ,'2163679'
//     ,'2162740'
//     ,'2162832'
//     ,'2162392'
//     ,'2161796'
//     ,'2161394'
//     ,'2161105'
//     ,'2161287'
//     ,'2160764'
//     ,'2160665'
//     ,'2160121'
//     ,'2159497'
//     ,'2158208'
//     ,'2156679'
//     ,'2156008'
//     ,'2155089'
//     ,'2155564'
//     ,'2155720'
//     ,'2154671'
//     ,'2154397'
//     ,'2154524'
//     ,'2154108'
//     ,'2153744'
//     ,'2153157'
//     ,'2153158'
//     ,'2153161'
//     ,'2153208'
//     ,'2152794'
//     ,'2152637'
//     ,'2151401'
//     ,'2151671'
//     ,'2150579'
//     ,'2150581'
//     ,'2150422'
//     ,'2150423'
//     ,'2150426'
//     ,'2150427'
//     ,'2150428'
//     ,'2150429'
//     ,'2150430'
//     ,'2150431'
//     ,'2150432'
//     ,'2150398'
//     ,'2150399'
//     ,'2150400'
//     ,'2150401'
//     ,'2150402'
//     ,'2150403'
//     ,'2150404'
//     ,'2150405'
//     ,'2150407'
//     ,'2150408'
//     ,'2150409'
//     ,'2150410'
//     ,'2150411'
//     ,'2150412'
//     ,'2150235'
//     ,'2150236'
//     ,'2173881'
//     ,'2171790'
//     ,'2172084'
//     ,'2167706'
//     ,'2151672'
//     ,'2150406'
//     )
//     `
//     ,'SALES_PART','CONTRACT;CATALOG_NO',1)







// await toApiModify(connectorProd,connectorProd,
//     `
// SELECT 



// T1.PART_NO
// ,REPLACE (DESCRIPTION,' 100 ',' ' || (SELECT CHARACTERISTIC_VALUE FROM DISCRETE_CHARAC_VALUE WHERE CHARACTERISTIC_VALUE LIKE '100(NAW%GLANIE)'  )|| ' ' ) AS DESCRIPTION

// FROM PART_CATALOG T1
// WHERE 
// T1.PART_NO  IN 


// (
//     '2166674'
//     ,'2189137'
//     ,'2185397'
//     ,'2184620'
//     ,'2181667'
//     ,'2179521'
//     ,'2179551'
//     ,'2179297'
//     ,'2178894'
//     ,'2178060'
//     ,'2178179'
//     ,'2178262'
//     ,'2177437'
//     ,'2177438'
//     ,'2177344'
//     ,'2176713'
//     ,'2176507'
//     ,'2176561'
//     ,'2176642'
//     ,'2176449'
//     ,'2176193'
//     ,'2176210'
//     ,'2176075'
//     ,'2175699'
//     ,'2175701'
//     ,'2175736'
//     ,'2175298'
//     ,'2175327'
//     ,'2175177'
//     ,'2175068'
//     ,'2174763'
//     ,'2174765'
//     ,'2174846'
//     ,'2174857'
//     ,'2174656'
//     ,'2174658'
//     ,'2174659'
//     ,'2174661'
//     ,'2174662'
//     ,'2174663'
//     ,'2174258'
//     ,'2174338'
//     ,'2174339'
//     ,'2174147'
//     ,'2174057'
//     ,'2174063'
//     ,'2174100'
//     ,'2173968'
//     ,'2173932'
//     ,'2173737'
//     ,'2173738'
//     ,'2173744'
//     ,'2173749'
//     ,'2173753'
//     ,'2173755'
//     ,'2173756'
//     ,'2173809'
//     ,'2173460'
//     ,'2173569'
//     ,'2173570'
//     ,'2173571'
//     ,'2173572'
//     ,'2173573'
//     ,'2173339'
//     ,'2173425'
//     ,'2172927'
//     ,'2172775'
//     ,'2172785'
//     ,'2172786'
//     ,'2172787'
//     ,'2172788'
//     ,'2172789'
//     ,'2172685'
//     ,'2172686'
//     ,'2172556'
//     ,'2172571'
//     ,'2172576'
//     ,'2172433'
//     ,'2172434'
//     ,'2172519'
//     ,'2172520'
//     ,'2172085'
//     ,'2171865'
//     ,'2171659'
//     ,'2171677'
//     ,'2171750'
//     ,'2171575'
//     ,'2171432'
//     ,'2170704'
//     ,'2170705'
//     ,'2170706'
//     ,'2170675'
//     ,'2170676'
//     ,'2170677'
//     ,'2170679'
//     ,'2169506'
//     ,'2169512'
//     ,'2169423'
//     ,'2169150'
//     ,'2168744'
//     ,'2168406'
//     ,'2168408'
//     ,'2168409'
//     ,'2168428'
//     ,'2168435'
//     ,'2168026'
//     ,'2168036'
//     ,'2167713'
//     ,'2167714'
//     ,'2167715'
//     ,'2167716'
//     ,'2167741'
//     ,'2167773'
//     ,'2167693'
//     ,'2167695'
//     ,'2167696'
//     ,'2167697'
//     ,'2167699'
//     ,'2167701'
//     ,'2167702'
//     ,'2167705'
//     ,'2167707'
//     ,'2167708'
//     ,'2167709'
//     ,'2167710'
//     ,'2167712'
//     ,'2167630'
//     ,'2167477'
//     ,'2167376'
//     ,'2167417'
//     ,'2167418'
//     ,'2167247'
//     ,'2167075'
//     ,'2167078'
//     ,'2167128'
//     ,'2166352'
//     ,'2166235'
//     ,'2166285'
//     ,'2165566'
//     ,'2163920'
//     ,'2163857'
//     ,'2163546'
//     ,'2163679'
//     ,'2162740'
//     ,'2162832'
//     ,'2162392'
//     ,'2161796'
//     ,'2161394'
//     ,'2161105'
//     ,'2161287'
//     ,'2160764'
//     ,'2160665'
//     ,'2160121'
//     ,'2159497'
//     ,'2158208'
//     ,'2156679'
//     ,'2156008'
//     ,'2155089'
//     ,'2155564'
//     ,'2155720'
//     ,'2154671'
//     ,'2154397'
//     ,'2154524'
//     ,'2154108'
//     ,'2153744'
//     ,'2153157'
//     ,'2153158'
//     ,'2153161'
//     ,'2153208'
//     ,'2152794'
//     ,'2152637'
//     ,'2151401'
//     ,'2151671'
//     ,'2150579'
//     ,'2150581'
//     ,'2150422'
//     ,'2150423'
//     ,'2150426'
//     ,'2150427'
//     ,'2150428'
//     ,'2150429'
//     ,'2150430'
//     ,'2150431'
//     ,'2150432'
//     ,'2150398'
//     ,'2150399'
//     ,'2150400'
//     ,'2150401'
//     ,'2150402'
//     ,'2150403'
//     ,'2150404'
//     ,'2150405'
//     ,'2150407'
//     ,'2150408'
//     ,'2150409'
//     ,'2150410'
//     ,'2150411'
//     ,'2150412'
//     ,'2150235'
//     ,'2150236'
//     ,'2173881'
//     ,'2171790'
//     ,'2172084'
//     ,'2167706'
//     ,'2151672'
//     ,'2150406'
//     )
//     `
//     ,'PART_CATALOG','PART_NO',1)







// await toApiModify(connectorProd,connectorProd,
//     `
// SELECT  
// T1.c_routing_efficiency_id
// ,(SELECT CHARACTERISTIC_VALUE FROM DISCRETE_CHARAC_VALUE WHERE CHARACTERISTIC_VALUE LIKE '100(NAW%GLANIE)'  )AS C_WYTRZ
// FROM C_ROUTING_EFFICIENCY_CONF t1
// WHERE T1.c_wytrz ='100'

//     `
//     ,'C_ROUTING_EFFICIENCY_CONF','C_ROUTING_EFFICIENCY_ID',1)




// await toApiModify(connectorProd,connectorProd,
// `
//  SELECT                        
//   T1.CONTRACT
//  ,T1.PART_NO
//  ,T1.ENG_CHG_LEVEL
//  ,T1.BOM_TYPE_DB
//  ,T1.ALTERNATIVE_NO
//  ,T1.LINE_ITEM_NO
//  ,T1.LINE_SEQUENCE
//  ,'MANUAL' AS ISSUE_TYPE_DB
//  FROM PROD_STRUCTURE T1
//  JOIN INVENTORY_PART T2 ON T1.COMPONENT_PART = T2.PART_NO
//  WHERE T1.CONTRACT =  'KRLAN'
//  AND T2.PRIME_COMMODITY IN (
//                           'WALC'
//                           ,'WAC1'
//                           ,'WAC2'
//                           ,'WU1C'
//                           ,'DRTLC'
//                           ,'WU1EB'
//                           ,'WU2C'
//                           ,'DRTC'
//                           )
// `
// ,'PROD_STRUCTURE','CONTRACT;PART_NO;ENG_CHG_LEVEL;BOM_TYPE_DB;ALTERNATIVE_NO;LINE_ITEM_NO;LINE_SEQUENCE',1)










// await toApiModify(connectorProd,connectorProd,
//     `
// SELECT 
// 'KRLAN' AS CONTRACT
// ,PART_NO 

// ,CASE
//               WHEN DESCRIPTION like  '%pakVCI zgrzew.%' THEN DESCRIPTION || ' pakVCIzgrze' 
//               ELSE DESCRIPTION || ' PAK VCI' 
// END AS DESCRIPTION

// FROM INVENTORY_PART
// WHERE 
//  PART_NO IN
// (
// '2189217'
// ,'2185314'
// ,'2184645'
// ,'2184646'
// ,'2184647'
// ,'2184648'
// ,'2184649'
// ,'2184650'
// ,'2184651'
// ,'2184644'
// ,'2184174'
// ,'2184175'
// ,'2184107'
// ,'2184108'
// ,'2183207'
// ,'2181973'
// ,'2181375'
// ,'2180535'
// ,'2179288'
// ,'2179305'
// ,'2179306'
// ,'2178718'
// ,'2177694'
// ,'2176784'
// ,'2176318'
// ,'2176161'
// ,'2174979'
// ,'2174842'
// ,'2174443'
// ,'2174550'
// ,'2173625'
// ,'2173065'
// ,'2172899'
// ,'2171823'
// ,'2171824'
// ,'2171873'
// ,'2171874'
// ,'2171729'
// ,'2171730'
// ,'2171731'
// ,'2171405'
// ,'2171275'
// ,'2170884'
// ,'2170635'
// ,'2170636'
// ,'2170637'
// ,'2170638'
// ,'2170092'
// ,'2170093'
// ,'2169458'
// ,'2168930'
// ,'2168931'
// ,'2168960'
// ,'2168221'
// ,'2167378'
// ,'2167402'
// ,'2166391'
// ,'2166077'
// ,'2165036'
// ,'2164344'
// ,'2163734'
// ,'2163735'
// ,'2163741'
// ,'2163742'
// ,'2162829'
// ,'2159246'
// ,'2159284'
// ,'2158718'
// ,'2154498'
// ,'2152765'
// ,'2152247'
// ,'2151826'
// ,'2151665'
// ,'2151037'
// ,'2150776'
// ,'2150778'
// ,'2150438'
// ,'2149063'
// ,'2148855'
// ,'2147979'
// ,'2147751'
// ,'2147157'
// ,'2147213'
// ,'2146864'
// ,'2147029'
// ,'2146271'
// ,'2146310'
// ,'2141664'
// ,'2138304'
// ,'2137195'
// ,'2137196'
// ,'2137493'
// ,'2136193'
// ,'2132712'
// ,'2132859'
// ,'2130699'
// ,'2130153'
// ,'2125844'
// ,'2125207'
// ,'2125020'
// ,'2118220'
// ,'2118258'
// ,'2114960'
// ,'2101114'
// ,'2090108'
// ,'2055249'
// ,'2150777'
// ,'2173189'
// ,'2171728'
// ,'2151932'
// ,'2189001'
// )
//     `
//     ,'INVENTORY_PART','CONTRACT;PART_NO',1)








//     await toApiModify(connectorProd,connectorProd,
//     `
// SELECT 


// T1.CONTRACT
// ,T1.CATALOG_NO

// ,CASE
//               WHEN CATALOG_DESC like  '%pakVCI zgrzew.%' THEN CATALOG_DESC || ' pakVCIzgrze' 
//               ELSE CATALOG_DESC || ' PAK VCI' 
// END AS CATALOG_DESC

// FROM SALES_PART T1
// WHERE 
// T1.CATALOG_NO  IN 


//  (
//  '2189217'
//  ,'2185314'
//  ,'2184645'
//  ,'2184646'
//  ,'2184647'
//  ,'2184648'
//  ,'2184649'
//  ,'2184650'
//  ,'2184651'
//  ,'2184644'
//  ,'2184174'
//  ,'2184175'
//  ,'2184107'
//  ,'2184108'
//  ,'2183207'
//  ,'2181973'
//  ,'2181375'
//  ,'2180535'
//  ,'2179288'
//  ,'2179305'
//  ,'2179306'
//  ,'2178718'
//  ,'2177694'
//  ,'2176784'
//  ,'2176318'
//  ,'2176161'
//  ,'2174979'
//  ,'2174842'
//  ,'2174443'
//  ,'2174550'
//  ,'2173625'
//  ,'2173065'
//  ,'2172899'
//  ,'2171823'
//  ,'2171824'
//  ,'2171873'
//  ,'2171874'
//  ,'2171729'
//  ,'2171730'
//  ,'2171731'
//  ,'2171405'
//  ,'2171275'
//  ,'2170884'
//  ,'2170635'
//  ,'2170636'
//  ,'2170637'
//  ,'2170638'
//  ,'2170092'
//  ,'2170093'
//  ,'2169458'
//  ,'2168930'
//  ,'2168931'
//  ,'2168960'
//  ,'2168221'
//  ,'2167378'
//  ,'2167402'
//  ,'2166391'
//  ,'2166077'
//  ,'2165036'
//  ,'2164344'
//  ,'2163734'
//  ,'2163735'
//  ,'2163741'
//  ,'2163742'
//  ,'2162829'
//  ,'2159246'
//  ,'2159284'
//  ,'2158718'
//  ,'2154498'
//  ,'2152765'
//  ,'2152247'
//  ,'2151826'
//  ,'2151665'
//  ,'2151037'
//  ,'2150776'
//  ,'2150778'
//  ,'2150438'
//  ,'2149063'
//  ,'2148855'
//  ,'2147979'
//  ,'2147751'
//  ,'2147157'
//  ,'2147213'
//  ,'2146864'
//  ,'2147029'
//  ,'2146271'
//  ,'2146310'
//  ,'2141664'
//  ,'2138304'
//  ,'2137195'
//  ,'2137196'
//  ,'2137493'
//  ,'2136193'
//  ,'2132712'
//  ,'2132859'
//  ,'2130699'
//  ,'2130153'
//  ,'2125844'
//  ,'2125207'
//  ,'2125020'
//  ,'2118220'
//  ,'2118258'
//  ,'2114960'
//  ,'2101114'
//  ,'2090108'
//  ,'2055249'
//  ,'2150777'
//  ,'2173189'
//  ,'2171728'
//  ,'2151932'
//  ,'2189001'
//  )
//     `
//     ,'SALES_PART','CONTRACT;CATALOG_NO',1)







// await toApiModify(connectorProd,connectorProd,
//     `
// SELECT 



// T1.PART_NO

// ,CASE
//               WHEN DESCRIPTION like  '%pakVCI zgrzew.%' THEN DESCRIPTION || ' pakVCIzgrze' 
//               ELSE DESCRIPTION || ' PAK VCI' 
// END AS DESCRIPTION

// FROM PART_CATALOG T1
// WHERE 
// T1.PART_NO  IN 


// (
//     '2189217'
//     ,'2185314'
//     ,'2184645'
//     ,'2184646'
//     ,'2184647'
//     ,'2184648'
//     ,'2184649'
//     ,'2184650'
//     ,'2184651'
//     ,'2184644'
//     ,'2184174'
//     ,'2184175'
//     ,'2184107'
//     ,'2184108'
//     ,'2183207'
//     ,'2181973'
//     ,'2181375'
//     ,'2180535'
//     ,'2179288'
//     ,'2179305'
//     ,'2179306'
//     ,'2178718'
//     ,'2177694'
//     ,'2176784'
//     ,'2176318'
//     ,'2176161'
//     ,'2174979'
//     ,'2174842'
//     ,'2174443'
//     ,'2174550'
//     ,'2173625'
//     ,'2173065'
//     ,'2172899'
//     ,'2171823'
//     ,'2171824'
//     ,'2171873'
//     ,'2171874'
//     ,'2171729'
//     ,'2171730'
//     ,'2171731'
//     ,'2171405'
//     ,'2171275'
//     ,'2170884'
//     ,'2170635'
//     ,'2170636'
//     ,'2170637'
//     ,'2170638'
//     ,'2170092'
//     ,'2170093'
//     ,'2169458'
//     ,'2168930'
//     ,'2168931'
//     ,'2168960'
//     ,'2168221'
//     ,'2167378'
//     ,'2167402'
//     ,'2166391'
//     ,'2166077'
//     ,'2165036'
//     ,'2164344'
//     ,'2163734'
//     ,'2163735'
//     ,'2163741'
//     ,'2163742'
//     ,'2162829'
//     ,'2159246'
//     ,'2159284'
//     ,'2158718'
//     ,'2154498'
//     ,'2152765'
//     ,'2152247'
//     ,'2151826'
//     ,'2151665'
//     ,'2151037'
//     ,'2150776'
//     ,'2150778'
//     ,'2150438'
//     ,'2149063'
//     ,'2148855'
//     ,'2147979'
//     ,'2147751'
//     ,'2147157'
//     ,'2147213'
//     ,'2146864'
//     ,'2147029'
//     ,'2146271'
//     ,'2146310'
//     ,'2141664'
//     ,'2138304'
//     ,'2137195'
//     ,'2137196'
//     ,'2137493'
//     ,'2136193'
//     ,'2132712'
//     ,'2132859'
//     ,'2130699'
//     ,'2130153'
//     ,'2125844'
//     ,'2125207'
//     ,'2125020'
//     ,'2118220'
//     ,'2118258'
//     ,'2114960'
//     ,'2101114'
//     ,'2090108'
//     ,'2055249'
//     ,'2150777'
//     ,'2173189'
//     ,'2171728'
//     ,'2151932'
//     ,'2189001'
//     )
//     `
//     ,'PART_CATALOG','PART_NO',1)





// await toApiModify(connectorCfg,connectorCfg,
//             `
// SELECT
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
// ,T1.OPERATION_ID

// ,CASE 
// WHEN T1.WORK_CENTER_NO LIKE 'TRAW'  THEN '1.33330'
// WHEN T1.WORK_CENTER_NO LIKE 'EBNER'  THEN '1.33330'
// WHEN T1.WORK_CENTER_NO LIKE 'HERB'  THEN '1.00000'
// WHEN T1.WORK_CENTER_NO LIKE 'ROTH'  THEN '1.00000'
// WHEN T1.WORK_CENTER_NO LIKE 'BR'	THEN '1.00000'
// WHEN T1.WORK_CENTER_NO LIKE 'CJB'	THEN '0.25000'
// ELSE ''
// END AS crew_size

// ,CASE 
// WHEN T1.WORK_CENTER_NO LIKE 'TRAW'  THEN '62.58'
// WHEN T1.WORK_CENTER_NO LIKE 'EBNER'  THEN '59.39'
// WHEN T1.WORK_CENTER_NO LIKE 'HERB'  THEN '55.07'
// WHEN T1.WORK_CENTER_NO LIKE 'ROTH'	THEN '18.40'
// WHEN T1.WORK_CENTER_NO LIKE 'BR'	THEN '55.72'
// WHEN T1.WORK_CENTER_NO LIKE 'CJB'	THEN '111.63'
// ELSE ''
// END AS EFFICIENCY_FACTOR

//  FROM ROUTING_OPERATION T1
// WHERE T1.CONTRACT = 'KRLAN'  
// AND T1.WORK_CENTER_NO IN
// (
// 'TRAW'
// ,'EBNER'
// ,'HERB'
// ,'ROTH'
// ,'BR'
// ,'CJB'
// )
//             `
//             ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)




// await toApiModify(connectorCfg,connectorCfg,
//             `
// SELECT 
// T1.CUSTOMER_ID
// ,'ALLOW INCOMPLETE LINES AND PACKAGES' AS backorder_option_db

// FROM CUST_ORD_CUSTOMER_ENT T1
// WHERE T1.CUSTOMER_ID LIKE 'L%'
//             `
//             ,'CUST_ORD_CUSTOMER_ENT','CUSTOMER_ID',1)





// await toApiModify(connectorProd,connectorProd,
//             `
// select 
// T1.CONTRACT
// ,T1.PART_NO
// ,T1.ENG_CHG_LEVEL
// ,T1.BOM_TYPE_DB 
// ,T1.ALTERNATIVE_NO
// ,T1.LINE_ITEM_NO
// ,T1.LINE_SEQUENCE
// ,'0.01' AS QTY_PER_ASSEMBLY
// from PROD_STRUCTURE T1

// WHERE T1.CONTRACT = 'KRLAN' 
// AND QTY_PER_ASSEMBLY = '1'
//  AND PRINT_UNIT = '100szt'
//             `
//             ,'PROD_STRUCTURE','CONTRACT;PART_NO;ENG_CHG_LEVEL;BOM_TYPE_DB;ALTERNATIVE_NO;LINE_ITEM_NO;LINE_SEQUENCE',1)






   
// await toApiModify(connectorOldDatabase,connectorProd,
//             `
// select 

// 'KRLAN' AS CONTRACT
// ,PART_NO
// ,COMPONENT_PART 
// ,'*' as ALTERNATIVE_NO
// ,ILOSC_PALETY_NA_1_SZT_WKRETA AS QTY_PER_ASSEMBLY
// from  PSZABAT.NADSTAWKI_PALETY_WKRETY
// where ind != 'Indeks'

//             `
//             ,'PROD_STRUCTURE','CONTRACT;PART_NO;ALTERNATIVE_NO;COMPONENT_PART',1)


//             await toApiModify(connectorOldDatabase,connectorProd,
//                 `
//     select 
    
//     'KRLAN' AS CONTRACT
//     ,PART_NO
//     ,COMPONENT_PART 
//     ,'1' as ALTERNATIVE_NO
//     ,ILOSC_PALETY_NA_1_SZT_WKRETA AS QTY_PER_ASSEMBLY
//     from  PSZABAT.NADSTAWKI_PALETY_WKRETY
//     where ind != 'Indeks'
 
//                 `
//                 ,'PROD_STRUCTURE','CONTRACT;PART_NO;ALTERNATIVE_NO;COMPONENT_PART',1)
    
    
//                 await toApiModify(connectorOldDatabase,connectorProd,
//                     `
//         select 
        
//         'KRLAN' AS CONTRACT
//         ,PART_NO
//         ,COMPONENT_PART 
//         ,'2' as ALTERNATIVE_NO
//         ,ILOSC_PALETY_NA_1_SZT_WKRETA AS QTY_PER_ASSEMBLY
//         from  PSZABAT.NADSTAWKI_PALETY_WKRETY
//         where ind != 'Indeks'
 
//                     `
//                     ,'PROD_STRUCTURE','CONTRACT;PART_NO;ALTERNATIVE_NO;COMPONENT_PART',1)
        
        
//                     await toApiModify(connectorOldDatabase,connectorProd,
//                         `
//             select 
            
//             'KRLAN' AS CONTRACT
//             ,PART_NO
//             ,COMPONENT_PART 
//             ,'3' as ALTERNATIVE_NO
//             ,ILOSC_PALETY_NA_1_SZT_WKRETA AS QTY_PER_ASSEMBLY
//             from  PSZABAT.NADSTAWKI_PALETY_WKRETY
//             where ind != 'Indeks'
   
//                         `
//                         ,'PROD_STRUCTURE','CONTRACT;PART_NO;ALTERNATIVE_NO;COMPONENT_PART',1)
            
            
//                         await toApiModify(connectorOldDatabase,connectorProd,
//                             `
//                 select 
                
//                 'KRLAN' AS CONTRACT
//                 ,PART_NO
//                 ,COMPONENT_PART 
//                 ,'4' as ALTERNATIVE_NO
//                 ,ILOSC_PALETY_NA_1_SZT_WKRETA AS QTY_PER_ASSEMBLY
//                 from  PSZABAT.NADSTAWKI_PALETY_WKRETY
//                 where ind != 'Indeks'
    
//                             `
//                             ,'PROD_STRUCTURE','CONTRACT;PART_NO;ALTERNATIVE_NO;COMPONENT_PART',1)
                
                
//                             await toApiModify(connectorOldDatabase,connectorProd,
//                                 `
//                     select 
                    
//                     'KRLAN' AS CONTRACT
//                     ,PART_NO
//                     ,COMPONENT_PART 
//                     ,'5' as ALTERNATIVE_NO
//                     ,ILOSC_PALETY_NA_1_SZT_WKRETA AS QTY_PER_ASSEMBLY
//                     from  PSZABAT.NADSTAWKI_PALETY_WKRETY
//                     where ind != 'Indeks'
   
//                                 `
//                                 ,'PROD_STRUCTURE','CONTRACT;PART_NO;ALTERNATIVE_NO;COMPONENT_PART',1)
                    
                    
//                                 await toApiModify(connectorOldDatabase,connectorProd,
//                                     `
//                         select 
                        
//                         'KRLAN' AS CONTRACT
//                         ,PART_NO
//                         ,COMPONENT_PART 
//                         ,'6' as ALTERNATIVE_NO
//                         ,ILOSC_PALETY_NA_1_SZT_WKRETA AS QTY_PER_ASSEMBLY
//                         from  PSZABAT.NADSTAWKI_PALETY_WKRETY
//                         where ind != 'Indeks'
   
//                                     `
//                                     ,'PROD_STRUCTURE','CONTRACT;PART_NO;ALTERNATIVE_NO;COMPONENT_PART',1)
                        
                        
//                                     await toApiModify(connectorOldDatabase,connectorProd,
//                                         `
//                             select 
                            
//                             'KRLAN' AS CONTRACT
//                             ,PART_NO
//                             ,COMPONENT_PART 
//                             ,'7' as ALTERNATIVE_NO
//                             ,ILOSC_PALETY_NA_1_SZT_WKRETA AS QTY_PER_ASSEMBLY
//                             from  PSZABAT.NADSTAWKI_PALETY_WKRETY
//                             where ind != 'Indeks'

//                                         `
//                                         ,'PROD_STRUCTURE','CONTRACT;PART_NO;ALTERNATIVE_NO;COMPONENT_PART',1)
                            
                            
//                                         await toApiModify(connectorOldDatabase,connectorProd,
//                                             `
//                                 select 
                                
//                                 'KRLAN' AS CONTRACT
//                                 ,PART_NO
//                                 ,COMPONENT_PART 
//                                 ,'8' as ALTERNATIVE_NO
//                                 ,ILOSC_PALETY_NA_1_SZT_WKRETA AS QTY_PER_ASSEMBLY
//                                 from  PSZABAT.NADSTAWKI_PALETY_WKRETY
//                                 where ind != 'Indeks'

//                                             `
//                                             ,'PROD_STRUCTURE','CONTRACT;PART_NO;ALTERNATIVE_NO;COMPONENT_PART',1)
                                
                                
//                                             await toApiModify(connectorOldDatabase,connectorProd,
//                                                 `
//                                     select 
                                    
//                                     'KRLAN' AS CONTRACT
//                                     ,PART_NO
//                                     ,COMPONENT_PART 
//                                     ,'9' as ALTERNATIVE_NO
//                                     ,ILOSC_PALETY_NA_1_SZT_WKRETA AS QTY_PER_ASSEMBLY
//                                     from  PSZABAT.NADSTAWKI_PALETY_WKRETY
//                                     where ind != 'Indeks'
//                                                 `
//                                                 ,'PROD_STRUCTURE','CONTRACT;PART_NO;ALTERNATIVE_NO;COMPONENT_PART',1)
                                    
                                    
                                                                                                                                                                                    









//           await toApiModify(connectorOldDatabase,connectorProd,
//               `
// select 

// 'KRLAN' AS CONTRACT
// ,PART_NO
// ,ID_NADSTAWKI AS  COMPONENT_PART 
// ,ILOSC_NADSTAWKI_NA_1_SZT_WKR AS QTY_PER_ASSEMBLY
// ,'*' as ALTERNATIVE_NO
// from  PSZABAT.NADSTAWKI_PALETY_WKRETY
// where ind != 'Indeks'

  
//               `
//               ,'PROD_STRUCTURE','CONTRACT;PART_NO;ALTERNATIVE_NO;COMPONENT_PART',1)
              
              


//           await toApiModify(connectorOldDatabase,connectorProd,
//             `
// select 

// 'KRLAN' AS CONTRACT
// ,PART_NO
// ,ID_NADSTAWKI AS  COMPONENT_PART 
// ,ILOSC_NADSTAWKI_NA_1_SZT_WKR AS QTY_PER_ASSEMBLY
// ,'1' as ALTERNATIVE_NO
// from  PSZABAT.NADSTAWKI_PALETY_WKRETY
// where ind != 'Indeks'


//             `
//             ,'PROD_STRUCTURE','CONTRACT;PART_NO;ALTERNATIVE_NO;COMPONENT_PART',1)

            



            


//           await toApiModify(connectorOldDatabase,connectorProd,
//             `
// select 

// 'KRLAN' AS CONTRACT
// ,PART_NO
// ,ID_NADSTAWKI AS  COMPONENT_PART 
// ,ILOSC_NADSTAWKI_NA_1_SZT_WKR AS QTY_PER_ASSEMBLY
// ,'2' as ALTERNATIVE_NO
// from  PSZABAT.NADSTAWKI_PALETY_WKRETY
// where ind != 'Indeks'


//             `
//             ,'PROD_STRUCTURE','CONTRACT;PART_NO;ALTERNATIVE_NO;COMPONENT_PART',1)

            




            


//           await toApiModify(connectorOldDatabase,connectorProd,
//             `
// select 

// 'KRLAN' AS CONTRACT
// ,PART_NO
// ,ID_NADSTAWKI AS  COMPONENT_PART 
// ,ILOSC_NADSTAWKI_NA_1_SZT_WKR AS QTY_PER_ASSEMBLY
// ,'3' as ALTERNATIVE_NO
// from  PSZABAT.NADSTAWKI_PALETY_WKRETY
// where ind != 'Indeks'


//             `
//             ,'PROD_STRUCTURE','CONTRACT;PART_NO;ALTERNATIVE_NO;COMPONENT_PART',1)

            



            


//           await toApiModify(connectorOldDatabase,connectorProd,
//             `
// select 

// 'KRLAN' AS CONTRACT
// ,PART_NO
// ,ID_NADSTAWKI AS  COMPONENT_PART 
// ,ILOSC_NADSTAWKI_NA_1_SZT_WKR AS QTY_PER_ASSEMBLY
// ,'4' as ALTERNATIVE_NO
// from  PSZABAT.NADSTAWKI_PALETY_WKRETY
// where ind != 'Indeks'


//             `
//             ,'PROD_STRUCTURE','CONTRACT;PART_NO;ALTERNATIVE_NO;COMPONENT_PART',1)

            
            


//           await toApiModify(connectorOldDatabase,connectorProd,
//             `
// select 

// 'KRLAN' AS CONTRACT
// ,PART_NO
// ,ID_NADSTAWKI AS  COMPONENT_PART 
// ,ILOSC_NADSTAWKI_NA_1_SZT_WKR AS QTY_PER_ASSEMBLY
// ,'5' as ALTERNATIVE_NO
// from  PSZABAT.NADSTAWKI_PALETY_WKRETY
// where ind != 'Indeks'


//             `
//             ,'PROD_STRUCTURE','CONTRACT;PART_NO;ALTERNATIVE_NO;COMPONENT_PART',1)


            
            


//           await toApiModify(connectorOldDatabase,connectorProd,
//             `
// select 

// 'KRLAN' AS CONTRACT
// ,PART_NO
// ,ID_NADSTAWKI AS  COMPONENT_PART 
// ,ILOSC_NADSTAWKI_NA_1_SZT_WKR AS QTY_PER_ASSEMBLY
// ,'6' as ALTERNATIVE_NO
// from  PSZABAT.NADSTAWKI_PALETY_WKRETY
// where ind != 'Indeks'


//             `
//             ,'PROD_STRUCTURE','CONTRACT;PART_NO;ALTERNATIVE_NO;COMPONENT_PART',1)
            

            
            


//           await toApiModify(connectorOldDatabase,connectorProd,
//             `
// select 

// 'KRLAN' AS CONTRACT
// ,PART_NO
// ,ID_NADSTAWKI AS  COMPONENT_PART 
// ,ILOSC_NADSTAWKI_NA_1_SZT_WKR AS QTY_PER_ASSEMBLY
// ,'7' as ALTERNATIVE_NO
// from  PSZABAT.NADSTAWKI_PALETY_WKRETY
// where ind != 'Indeks'


//             `
//             ,'PROD_STRUCTURE','CONTRACT;PART_NO;ALTERNATIVE_NO;COMPONENT_PART',1)

            

            
            


//           await toApiModify(connectorOldDatabase,connectorProd,
//             `
// select 

// 'KRLAN' AS CONTRACT
// ,PART_NO
// ,ID_NADSTAWKI AS  COMPONENT_PART 
// ,ILOSC_NADSTAWKI_NA_1_SZT_WKR AS QTY_PER_ASSEMBLY
// ,'8' as ALTERNATIVE_NO
// from  PSZABAT.NADSTAWKI_PALETY_WKRETY
// where ind != 'Indeks'


//             `
//             ,'PROD_STRUCTURE','CONTRACT;PART_NO;ALTERNATIVE_NO;COMPONENT_PART',1)


            

            
            


//           await toApiModify(connectorOldDatabase,connectorProd,
//             `
// select 

// 'KRLAN' AS CONTRACT
// ,PART_NO
// ,ID_NADSTAWKI AS  COMPONENT_PART 
// ,ILOSC_NADSTAWKI_NA_1_SZT_WKR AS QTY_PER_ASSEMBLY
// ,'9' as ALTERNATIVE_NO
// from  PSZABAT.NADSTAWKI_PALETY_WKRETY
// where ind != 'Indeks'


//             `
//             ,'PROD_STRUCTURE','CONTRACT;PART_NO;ALTERNATIVE_NO;COMPONENT_PART',1)

            

            
            


//           await toApiModify(connectorOldDatabase,connectorProd,
//             `
// select 

// 'KRLAN' AS CONTRACT
// ,PART_NO
// ,ID_NADSTAWKI AS  COMPONENT_PART 
// ,ILOSC_NADSTAWKI_NA_1_SZT_WKR AS QTY_PER_ASSEMBLY
// ,'10' as ALTERNATIVE_NO
// from  PSZABAT.NADSTAWKI_PALETY_WKRETY
// where ind != 'Indeks'


//             `
//             ,'PROD_STRUCTURE','CONTRACT;PART_NO;ALTERNATIVE_NO;COMPONENT_PART',1)

            











              



// await toApiModify(connectorProd,connectorProd,
//             `
// SELECT
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
// ,T1.OPERATION_ID
// ,'TRUE' AS C_RECEIVE_SEMIFIN_PART_DB
// ,'TRUE' AS C_ISSUE_SEMIFIN_PART_DB

// FROM ROUTING_OPERATION T1
// WHERE OPERATION_DESCRIPTION LIKE '%KALIBROWANIE%'
// AND
// ( C_RECEIVE_SEMIFIN_PART_DB = 'FALSE'
// OR C_ISSUE_SEMIFIN_PART_DB = 'FALSE')
//             `
//             ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)




















//Zmiana UCIEP na UCIES

// await toApiModify(connectorProd,connectorProd,
//             `
// SELECT
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
// ,T1.OPERATION_ID
// ,'FALSE' AS C_RECEIVE_SEMIFIN_PART_DB
// ,'FALSE' AS C_ISSUE_SEMIFIN_PART_DB

// FROM ROUTING_OPERATION T1
// WHERE OPERATION_DESCRIPTION LIKE 'ULEPSZANIE CIEPLNE'
// AND WORK_CENTER_NO != 'FREMX'
//             `
//             ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)




// await toApiModify(connectorProd,connectorProd,
//                 `
//     SELECT
//      T1.CONTRACT
//     ,T1.PART_NO
//     ,T1.BOM_TYPE_DB
//     ,T1.ALTERNATIVE_NO
//     ,T1.OPERATION_ID
//     ,'TRUE' AS C_RECEIVE_SEMIFIN_PART_DB
//     ,'TRUE' AS C_ISSUE_SEMIFIN_PART_DB
    
//     FROM ROUTING_OPERATION T1
//     WHERE OPERATION_DESCRIPTION LIKE 'ULEPSZANIE CIEPLNE'
//     AND WORK_CENTER_NO != 'FREMX'
//                 `
//                 ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
    
    


// await toApiModify(connectorProd,connectorProd,
//                     `
//         SELECT
//          T1.CONTRACT
//         ,T1.PART_NO
//         ,T1.BOM_TYPE_DB
//         ,T1.ALTERNATIVE_NO
//         ,T1.OPERATION_ID
//         ,'USUW. FOSFORANÓW + ULEPSZ. CIEPLNE'  as OPERATION_DESCRIPTION 
        
//         FROM ROUTING_OPERATION T1
//         WHERE OPERATION_DESCRIPTION LIKE 'ULEPSZANIE CIEPLNE'
//         AND WORK_CENTER_NO != 'FREMX'
//                     `
//                     ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)











// await toApiModify(connectorCfg,connectorCfg,
//             `
// SELECT
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
// ,T1.OPERATION_ID
// ,'FALSE' AS C_RECEIVE_SEMIFIN_PART_DB
// ,'FALSE' AS C_ISSUE_SEMIFIN_PART_DB

// FROM ROUTING_OPERATION T1
//    WHERE  T1.Contract = 'KRLAN'
//                    AND T1.PART_NO IN ( SELECT DISTINCT PART_NO FROM ROUTING_OPERATION WHERE work_center_no IN ( 'FREMX' , 'OREMX' ) )
//             `
//             ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)




// await toApiModify(connectorCfg,connectorCfg,
// `

//  WITH
//   CTE_MIN AS (

//   SELECT
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.ROUTING_REVISION
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
//   ,MIN(OPERATION_ID) AS OPERATION_ID
//   ,'TRUE' AS C_RECEIVE_SEMIFIN_PART_DB
//   ,'FALSE' AS C_ISSUE_SEMIFIN_PART_DB


//   FROM ROUTING_OPERATION T1
//   JOIN INVENTORY_PART T5 ON T1.part_no = T5.PART_NO
//   WHERE T1.CONTRACT = 'KRLAN'
//   AND T1.work_center_no !='LKJ'
//   AND T1.PART_NO NOT LIKE '1%'
//   AND T5.PRIME_COMMODITY NOT IN ('NRKPM', 'NRSRB', 'NRSRM', 'NRSRZ' ,'NRSTD')
//   GROUP BY 
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.ROUTING_REVISION
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
//   )

// ,

//   CTE_MAX AS (
//   SELECT
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.ROUTING_REVISION
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
//   ,MAX(OPERATION_ID) AS OPERATION_ID
//   ,'FALSE' AS C_RECEIVE_SEMIFIN_PART_DB
//   ,'TRUE' AS C_ISSUE_SEMIFIN_PART_DB


//   FROM ROUTING_OPERATION T1
//    JOIN INVENTORY_PART T5 ON T1.part_no = T5.PART_NO
//   WHERE T1.CONTRACT = 'KRLAN'
//   AND T1.work_center_no !='LKJ'
//   AND T1.PART_NO NOT LIKE '1%'
//   AND T5.PRIME_COMMODITY NOT IN ('NRKPM', 'NRSRB', 'NRSRM', 'NRSRZ' ,'NRSTD')
//   GROUP BY 
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.ROUTING_REVISION
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
//   )





// SELECT * FROM CTE_MIN       /*PIERWSZA OPERACJA*/

// UNION ALL

// SELECT                        /*CZĘŚC MIĘDZY PIERWSZĄ A OSTATNIĄ OPERACJĄ*/
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.ROUTING_REVISION
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
// ,T1.OPERATION_ID
// ,'TRUE' AS C_RECEIVE_SEMIFIN_PART_DB
// ,'TRUE' AS C_ISSUE_SEMIFIN_PART_DB
// FROM ROUTING_OPERATION T1
// JOIN INVENTORY_PART T5 ON T1.part_no = T5.PART_NO
// LEFT JOIN CTE_MIN T2  
//      ON T1.CONTRACT                     = T2.CONTRACT
//     AND T1.PART_NO                      = T2.PART_NO
//     AND T1.ROUTING_REVISION             = T2.ROUTING_REVISION
//     AND T1.BOM_TYPE_DB                  = T2.BOM_TYPE_DB
//     AND T1.ALTERNATIVE_NO               = T2.ALTERNATIVE_NO
//     AND T1.OPERATION_ID                 = T2.OPERATION_ID


// LEFT JOIN CTE_MAX T3                    
//      ON T1.CONTRACT                   = T3.CONTRACT   
//     AND T1.PART_NO                    = T3.PART_NO   
//     AND T1.ROUTING_REVISION           = T3.ROUTING_REVISION   
//     AND T1.BOM_TYPE_DB                = T3.BOM_TYPE_DB   
//     AND T1.ALTERNATIVE_NO             = T3.ALTERNATIVE_NO   
//     AND T1.OPERATION_ID               = T3.OPERATION_ID   

// WHERE T1.CONTRACT = 'KRLAN'
//  AND T1.work_center_no !='LKJ'
// AND T1.PART_NO NOT LIKE '1%'
// AND T5.PRIME_COMMODITY NOT IN ('NRKPM', 'NRSRB', 'NRSRM', 'NRSRZ' ,'NRSTD')    
// AND T2.PART_NO IS NULL
// AND T3.PART_NO IS NULL         
 

// UNION ALL

// SELECT T1.*     /*OSTATNIA OPERACJA*/
// FROM CTE_MAX T1
// LEFT JOIN CTE_MIN T2 
//      ON T1.CONTRACT                     = T2.CONTRACT
//     AND T1.PART_NO                      = T2.PART_NO
//     AND T1.ROUTING_REVISION             = T2.ROUTING_REVISION
//     AND T1.BOM_TYPE_DB                  = T2.BOM_TYPE_DB
//     AND T1.ALTERNATIVE_NO               = T2.ALTERNATIVE_NO
//     AND T1.OPERATION_ID                 = T2.OPERATION_ID  
// WHERE T2.PART_NO IS NULL       

// `
// ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)








// await toApiModify(connectorProd,connectorProd,
//                     `
//      SELECT
//       T1.CONTRACT
//      ,T1.PART_NO
//      ,T1.BOM_TYPE_DB
//      ,T1.ALTERNATIVE_NO
//      ,T1.OPERATION_ID
//      ,'USUW. FOSFORANÓW + ULEPSZ. CIEPLNE'  as OPERATION_DESCRIPTION 
  
//      FROM ROUTING_OPERATION T1
//        WHERE  Contract = 'KRLAN'
//                     and work_center_no IN ( 'HREMX' )
//                     `
//                     ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)






//   await toApiModify(connectorXlsx,connectorProd
//     ,`Migracja wejsciowe JM`
//     ,'INPUT_UNIT_MEAS'
//     ,'INPUT_UNIT_MEAS_GROUP_ID;UNIT_CODE',1)










// await toApiModify(connectorProd,connectorProd,
//     `
//      SELECT
//       T1.CONTRACT
//      ,T1.PART_NO
//      ,T1.BOM_TYPE_DB
//      ,T1.ALTERNATIVE_NO
//      ,T1.OPERATION_ID
//      ,'1011793-00' AS C_HANDLING_UNIT_TYPE_ID
  
//      FROM ROUTING_OPERATION T1
//        WHERE OPERATION_DESCRIPTION LIKE 'SELEKCJA%'
//     `
//                     ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)



// await toApiModify(connectorProd,connectorProd,
//     `
//      SELECT 
//      CONTRACT
//      ,CATALOG_NO 
//      ,CASE WHEN LIST_PRICE = 0 THEN 1 ELSE
//       LIST_PRICE END AS LIST_PRICE
//      ,'Y' AS ACTIVEIND_DB
//     FROM SALES_PART
//     WHERE CONTRACT =  'KRLAN'
//     AND ACTIVEIND_DB = 'N'
//     AND C_PKWIU IS NOT NULL
//     `
//     ,'SALES_PART','CONTRACT;CATALOG_NO',1)



// await toApiModify(connectorProd,connectorProd,
//     `
//      SELECT
//       T1.CONTRACT
//      ,T1.PART_NO
//      ,T1.BOM_TYPE_DB
//      ,T1.ALTERNATIVE_NO
//      ,T1.OPERATION_ID
//      ,'N' AS PARALLEL_OPERATION_DB
  
//      FROM ROUTING_OPERATION T1
//        WHERE OPERATION_DESCRIPTION = 'USUW. FOSFORANÓW + ULEPSZ. CIEPLNE'
//     `
//                     ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)





/* 27.03.2025 ODPALANE */
// await toApiModify(connectorOldDatabase,connectorProd,
//     `
// SELECT 
// 'KRLAN' AS CONTRACT
// ,ID_MASZYNY AS RESOURCE_ID
// ,NUMER_INWENTARZOW AS MCH_CODE
//  ,'''||PSZ_Get_Equipment_Object_Seq(''' || NUMER_INWENTARZOW || ''')||''' AS EQUIPMENT_OBJECT_SEQ
// FROM  WSP.IFS_MASZYNY
//     `
//                     ,'WORK_CENTER_RESOURCE','CONTRACT;RESOURCE_ID',1)       
                    
 /* SPRAWDZANIE CZY UZUPELNILO
 SELECT 
*
FROM WORK_CENTER_RESOURCE
WHERE CONTRACT ='KRLAN'
AND MCH_CODE IS NULL
 */


/* 27.03.2025 ODPALANE */
// await toApiModify(connectorOldDatabase,connectorProd,
//     `
// SELECT 
// 'KRLAN' AS CONTRACT
// ,ID AS RESOURCE_ID
// ,ID_OPISOWY AS MCH_CODE
//  ,'''||PSZ_Get_Equipment_Object_Seq(''' || ID_OPISOWY || ''')||''' AS EQUIPMENT_OBJECT_SEQ
// FROM PRD.MASZYNY
//     `
//                     ,'WORK_CENTER_RESOURCE','CONTRACT;RESOURCE_ID',1)      






// await toApiModify(connectorOldDatabase,connectorCfg,
//         `
//     SELECT * FROM PSZABAT.ROUTING_OPERATION_COST_ROBERT
//         `
//                         ,'ROUTING_OPERATION_COST','CONTRACT;PART_NO;ROUTING_REVISION;ALTERNATIVE_NO;COST_SET;OPERATION_NO',1)      





// await toApiModify(connectorProd,connectorProd,
//     `
//      SELECT
//       T1.CONTRACT
//      ,T1.PART_NO
//      ,T1.BOM_TYPE_DB
//      ,T1.ALTERNATIVE_NO
//      ,T1.OPERATION_ID

//      ,CASE 
//         WHEN WORK_CENTER_NO = '515K5'	THEN   '5'
//         WHEN WORK_CENTER_NO = '518K'    THEN   '7'
//         WHEN WORK_CENTER_NO = '518K5'   THEN   '5.5'
//         WHEN WORK_CENTER_NO = 'BMV3'    THEN   '4'
//         WHEN WORK_CENTER_NO = 'BMV5'    THEN   '3'
//         WHEN WORK_CENTER_NO = 'BV4'     THEN   '4.5'
//         WHEN WORK_CENTER_NO = 'BV5'     THEN   '5'
//         WHEN WORK_CENTER_NO = 'HBV5'    THEN   '4'
//         WHEN WORK_CENTER_NO = 'HPT3'    THEN   '4.5'
//         WHEN WORK_CENTER_NO = 'HPT4'    THEN   '4.5'
//         WHEN WORK_CENTER_NO = 'HPT6'    THEN   '4.5'
//         WHEN WORK_CENTER_NO = 'JY16'    THEN   '5'
//         WHEN WORK_CENTER_NO = 'N412'    THEN   '4'
//         WHEN WORK_CENTER_NO = 'N515L'   THEN   '6'
//         WHEN WORK_CENTER_NO = 'NAT'     THEN   '5'
//         WHEN WORK_CENTER_NO = 'NB515'   THEN   '5'
//         WHEN WORK_CENTER_NO = 'NB518'   THEN   '3.5'
//         WHEN WORK_CENTER_NO = 'NB522'   THEN   '4.5'
//         WHEN WORK_CENTER_NO = 'S18V'    THEN   '4.5'
//         WHEN WORK_CENTER_NO = 'S28'     THEN   '4'
//         WHEN WORK_CENTER_NO = 'S28EL'   THEN   '4'
//         WHEN WORK_CENTER_NO = 'S28EM'   THEN   '4'
//         WHEN WORK_CENTER_NO = 'S38CR'   THEN   '4'
//         WHEN WORK_CENTER_NO = 'S38EC'   THEN   '5'
//         WHEN WORK_CENTER_NO = 'S38EL'   THEN   '4.5'
//         WHEN WORK_CENTER_NO = 'S38K'    THEN   '3'
//         WHEN WORK_CENTER_NO = 'SP470'   THEN   '4'
//         WHEN WORK_CENTER_NO = 'SP660'   THEN   '6'
//         WHEN WORK_CENTER_NO = 'OR8A'    THEN   '0.4'
//         WHEN WORK_CENTER_NO = 'OR8B'    THEN   '0.4'
//         WHEN WORK_CENTER_NO = 'OR10A'   THEN   '0.4'
//         WHEN WORK_CENTER_NO = 'OR10B'   THEN   '0.4'
//         WHEN WORK_CENTER_NO = 'OR12A'   THEN   '0.4'
//         WHEN WORK_CENTER_NO = 'OR12B'   THEN   '0.4'
//         WHEN WORK_CENTER_NO = 'OR16A'   THEN   '0.4'
//         WHEN WORK_CENTER_NO = 'MKO10'   THEN   '0.4'
//         WHEN WORK_CENTER_NO = 'MKO12'   THEN   '0.4'
//         WHEN WORK_CENTER_NO = 'MRK1'    THEN   '0.25'
//         WHEN WORK_CENTER_NO = 'RAST'    THEN   '1.5'
//         ELSE '0'
//         END AS MACH_SETUP_TIME
  
//      FROM ROUTING_OPERATION T1
//     WHERE T1.CONTRACT = 'KRLAN'
//     `
//                     ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)








//   await toApiModify(connectorXlsx,connectorProd
//     ,`UPDATE 0 ALTERNATE`
//     ,'PROD_STRUCT_ALTERNATE'
//     ,'CONTRACT;PART_NO;ALTERNATIVE_NO;BOM_TYPE_DB;ENG_CHG_LEVEL',1)

// await toApiModify(connectorXlsx,connectorProd
//     ,`UPDATE 1 ALTERNATE`
//     ,'PROD_STRUCT_ALTERNATE'
//     ,'CONTRACT;PART_NO;ALTERNATIVE_NO;BOM_TYPE_DB;ENG_CHG_LEVEL',1)
    

// await toApiModify(connectorOldDatabase,connectorProd,
//         `
//     SELECT * FROM PSZABAT.ROUTING_OPERATION_COST_ROBERT
//         `
//                         ,'ROUTING_OPERATION_COST','CONTRACT;PART_NO;ROUTING_REVISION;ALTERNATIVE_NO;COST_SET;OPERATION_NO',1)      


// await toApiModify(connectorXlsx,connectorProd,
//         `koszty do wlania do bazy produkcyjnej 20250331v2`
//          ,'WORK_CENTER_COST'
//          ,'CONTRACT;WORK_CENTER_NO;COST_SET'
//          ,1)      











// await toApiModify(connectorXlsx,connectorCfg,
//             `WYDAJNOSCI NA ROUTING_OPERATION`
//             ,'ROUTING_OPERATION'
//             ,'CONTRACT;WORK_CENTER_NO'
//             ,1)





// await toApiModify(connectorProd,connectorProd,
//             `
// SELECT
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
// ,T1.OPERATION_ID

// ,CASE 

// WHEN T1.WORK_CENTER_NO LIKE	   'TRAW'			THEN		'1.3333'
// WHEN T1.WORK_CENTER_NO LIKE     'EBNER'         THEN          '1.3333'
// WHEN T1.WORK_CENTER_NO LIKE     'HERB'          THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'ROTH'          THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'BR'            THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'CJB'           THEN          '0.2500'
// WHEN T1.WORK_CENTER_NO LIKE     'BMV3'          THEN          '0.5000'
// WHEN T1.WORK_CENTER_NO LIKE     'BV4'           THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'CZ-HD'         THEN          '0.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'HBV5'          THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'HPT3'          THEN          '0.5000'
// WHEN T1.WORK_CENTER_NO LIKE     'HPT4'          THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'JY16'          THEN          '0.5000'
// WHEN T1.WORK_CENTER_NO LIKE     'N412'          THEN          '0.5000'
// WHEN T1.WORK_CENTER_NO LIKE     'N515L'         THEN          '0.5000'
// WHEN T1.WORK_CENTER_NO LIKE     'NB515'         THEN          '0.5000'
// WHEN T1.WORK_CENTER_NO LIKE     'R12'           THEN          '0.3300'
// WHEN T1.WORK_CENTER_NO LIKE     'R16'           THEN          '0.3300'
// WHEN T1.WORK_CENTER_NO LIKE     'R420'          THEN          '0.3300'
// WHEN T1.WORK_CENTER_NO LIKE     'R420L'         THEN          '0.3300'
// WHEN T1.WORK_CENTER_NO LIKE     'R62'           THEN          '0.3300'
// WHEN T1.WORK_CENTER_NO LIKE     'S18R'          THEN          '0.5000'
// WHEN T1.WORK_CENTER_NO LIKE     'S18V'          THEN          '0.5000'
// WHEN T1.WORK_CENTER_NO LIKE     'S28'           THEN          '0.5000'
// WHEN T1.WORK_CENTER_NO LIKE     'S28EL'         THEN          '0.5000'
// WHEN T1.WORK_CENTER_NO LIKE     'S28EM'         THEN          '0.5000'
// WHEN T1.WORK_CENTER_NO LIKE     'S28X'          THEN          '0.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'S38CR'         THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'S38EC'         THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'S38EL'         THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'NF550'         THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'NUTUP'         THEN          '0.6666'
// WHEN T1.WORK_CENTER_NO LIKE     'MAS14'         THEN          '0.3333'
// WHEN T1.WORK_CENTER_NO LIKE     'MAS20'         THEN          '0.3333'
// WHEN T1.WORK_CENTER_NO LIKE     'AM10'          THEN          '0.3333'
// WHEN T1.WORK_CENTER_NO LIKE     'HATEB'         THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'HNT38'         THEN          '0.5000'
// WHEN T1.WORK_CENTER_NO LIKE     'CGR60'         THEN          '0.5000'
// WHEN T1.WORK_CENTER_NO LIKE     'CGR70'         THEN          '0.5000'
// WHEN T1.WORK_CENTER_NO LIKE     'GR5V'          THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'GWB16'         THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'UPW25'         THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'BMV5'          THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'BV5'           THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'CF5'           THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'HPT6'          THEN          '2.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'NAT'           THEN          '2.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'NB518'         THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'NB522'         THEN          '2.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'SP470'         THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'SP660'         THEN          '2.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'RP720'         THEN          '0.5000'
// WHEN T1.WORK_CENTER_NO LIKE     'RP92'          THEN          '0.5000'
// WHEN T1.WORK_CENTER_NO LIKE     'UM50'          THEN          '0.0000'
// WHEN T1.WORK_CENTER_NO LIKE     '518K'          THEN          '0.5000'
// WHEN T1.WORK_CENTER_NO LIKE     '515K5'         THEN          '0.5000'
// WHEN T1.WORK_CENTER_NO LIKE     '518K5'         THEN          '0.5000'
// WHEN T1.WORK_CENTER_NO LIKE     'S38K'          THEN          '0.5000'
// WHEN T1.WORK_CENTER_NO LIKE     'JNC32'         THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'PLATG'         THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'RAST'          THEN          '0.3333'
// WHEN T1.WORK_CENTER_NO LIKE     'MREMX'         THEN          '0.3056'
// WHEN T1.WORK_CENTER_NO LIKE     'HREMX'         THEN          '0.3056'
// WHEN T1.WORK_CENTER_NO LIKE     'UCIES'         THEN          '2.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'NOYEN'         THEN          '0.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'UCIEP'         THEN          '2.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'UCSY'          THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'MEA'           THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'IHE6'          THEN          '0.5000'
// WHEN T1.WORK_CENTER_NO LIKE     'IHE12'         THEN          '0.5000'
// WHEN T1.WORK_CENTER_NO LIKE     'SRUT'          THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'PUB'           THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'ODWO'          THEN          '0.1000'
// WHEN T1.WORK_CENTER_NO LIKE     'PKOOP'         THEN          '0.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'CYNKF'         THEN          '1.9000'
// WHEN T1.WORK_CENTER_NO LIKE     'MLA'           THEN          '0.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'MLR'           THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'MR'            THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'FAR'           THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'LAKR'          THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'OS10'          THEN          '0.1818'
// WHEN T1.WORK_CENTER_NO LIKE     'SLC'           THEN          '0.1818'
// WHEN T1.WORK_CENTER_NO LIKE     'TBI30'         THEN          '0.1818'
// WHEN T1.WORK_CENTER_NO LIKE     'TBIMC'         THEN          '0.1818'
// WHEN T1.WORK_CENTER_NO LIKE     'DT12M'         THEN          '0.1818'
// WHEN T1.WORK_CENTER_NO LIKE     'TBI42'         THEN          '0.1818'
// WHEN T1.WORK_CENTER_NO LIKE     'ADW'           THEN          '0.1818'
// WHEN T1.WORK_CENTER_NO LIKE     'PRST'          THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'PRSKW'         THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'PRKMP'         THEN          '2.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'SR'            THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'WPIA'          THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'WPIM'          THEN          '2.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'ACVM'          THEN          '0.4000'
// WHEN T1.WORK_CENTER_NO LIKE     'ACVML'         THEN          '0.4000'
// WHEN T1.WORK_CENTER_NO LIKE     'ACVS'          THEN          '0.4000'
// WHEN T1.WORK_CENTER_NO LIKE     'WPIH'          THEN          '2.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'PFF1'          THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'ZMK'           THEN          '0.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'OR10A'         THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'OR10B'         THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'OR12A'         THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'OR12B'         THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'OR16A'         THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'OR8A'          THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'OR8B'          THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'PKKTW'         THEN          '0.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'MKO10'         THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'MKO12'         THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'MRK1'          THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'EBS'           THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'LKO'           THEN          '1.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'KGIM'          THEN          '0.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'KPR'           THEN          '0.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'KWPIM'         THEN          '0.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'KACVM'         THEN          '0.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'KACVS'         THEN          '0.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'KSR'           THEN          '0.0000'
// WHEN T1.WORK_CENTER_NO LIKE     'KPRLX'         THEN          '0.0000'
// ELSE ''
// END AS crew_size

// ,CASE 

// WHEN T1.WORK_CENTER_NO LIKE	   'TRAW'			THEN		'62.58'
// WHEN T1.WORK_CENTER_NO LIKE     'EBNER'         THEN        '59.39'
// WHEN T1.WORK_CENTER_NO LIKE     'HERB'          THEN        '55.07'
// WHEN T1.WORK_CENTER_NO LIKE     'ROTH'          THEN        '18.40'
// WHEN T1.WORK_CENTER_NO LIKE     'BR'            THEN        '55.72'
// WHEN T1.WORK_CENTER_NO LIKE     'CJB'           THEN        '111.63'
// WHEN T1.WORK_CENTER_NO LIKE     'BMV3'          THEN        '40.00'
// WHEN T1.WORK_CENTER_NO LIKE     'BV4'           THEN        '46.76'
// WHEN T1.WORK_CENTER_NO LIKE     'CZ-HD'         THEN        '0.00'
// WHEN T1.WORK_CENTER_NO LIKE     'HBV5'          THEN        '46.62'
// WHEN T1.WORK_CENTER_NO LIKE     'HPT3'          THEN        '40.00'
// WHEN T1.WORK_CENTER_NO LIKE     'HPT4'          THEN        '28.44'
// WHEN T1.WORK_CENTER_NO LIKE     'JY16'          THEN        '40.00'
// WHEN T1.WORK_CENTER_NO LIKE     'N412'          THEN        '26.80'
// WHEN T1.WORK_CENTER_NO LIKE     'N515L'         THEN        '38.41'
// WHEN T1.WORK_CENTER_NO LIKE     'NB515'         THEN        '52.23'
// WHEN T1.WORK_CENTER_NO LIKE     'R12'           THEN        '47.60'
// WHEN T1.WORK_CENTER_NO LIKE     'R16'           THEN        '40.00'
// WHEN T1.WORK_CENTER_NO LIKE     'R420'          THEN        '37.35'
// WHEN T1.WORK_CENTER_NO LIKE     'R420L'         THEN        '32.90'
// WHEN T1.WORK_CENTER_NO LIKE     'R62'           THEN        '40.00'
// WHEN T1.WORK_CENTER_NO LIKE     'S18R'          THEN        '40.00'
// WHEN T1.WORK_CENTER_NO LIKE     'S18V'          THEN        '37.34'
// WHEN T1.WORK_CENTER_NO LIKE     'S28'           THEN        '30.22'
// WHEN T1.WORK_CENTER_NO LIKE     'S28EL'         THEN        '28.29'
// WHEN T1.WORK_CENTER_NO LIKE     'S28EM'         THEN        '30.00'
// WHEN T1.WORK_CENTER_NO LIKE     'S28X'          THEN        '40.00'
// WHEN T1.WORK_CENTER_NO LIKE     'S38CR'         THEN        '40.00'
// WHEN T1.WORK_CENTER_NO LIKE     'S38EC'         THEN        '40.00'
// WHEN T1.WORK_CENTER_NO LIKE     'S38EL'         THEN        '75.79'
// WHEN T1.WORK_CENTER_NO LIKE     'NF550'         THEN        '40.00'
// WHEN T1.WORK_CENTER_NO LIKE     'NUTUP'         THEN        '40.00'
// WHEN T1.WORK_CENTER_NO LIKE     'MAS14'         THEN        '40.00'
// WHEN T1.WORK_CENTER_NO LIKE     'MAS20'         THEN        '40.00'
// WHEN T1.WORK_CENTER_NO LIKE     'AM10'          THEN        '40.00'
// WHEN T1.WORK_CENTER_NO LIKE     'HATEB'         THEN        '40.00'
// WHEN T1.WORK_CENTER_NO LIKE     'HNT38'         THEN        '40.00'
// WHEN T1.WORK_CENTER_NO LIKE     'CGR60'         THEN        '22.61'
// WHEN T1.WORK_CENTER_NO LIKE     'CGR70'         THEN        '39.00'
// WHEN T1.WORK_CENTER_NO LIKE     'GR5V'          THEN        '73.03'
// WHEN T1.WORK_CENTER_NO LIKE     'GWB16'         THEN        '39.00'
// WHEN T1.WORK_CENTER_NO LIKE     'UPW25'         THEN        '39.00'
// WHEN T1.WORK_CENTER_NO LIKE     'BMV5'          THEN        '43.12'
// WHEN T1.WORK_CENTER_NO LIKE     'BV5'           THEN        '39.00'
// WHEN T1.WORK_CENTER_NO LIKE     'CF5'           THEN        '39.00'
// WHEN T1.WORK_CENTER_NO LIKE     'HPT6'          THEN        '26.04'
// WHEN T1.WORK_CENTER_NO LIKE     'NAT'           THEN        '39.00'
// WHEN T1.WORK_CENTER_NO LIKE     'NB518'         THEN        '37.02'
// WHEN T1.WORK_CENTER_NO LIKE     'NB522'         THEN        '34.88'
// WHEN T1.WORK_CENTER_NO LIKE     'SP470'         THEN        '39.00'
// WHEN T1.WORK_CENTER_NO LIKE     'SP660'         THEN        '39.00'
// WHEN T1.WORK_CENTER_NO LIKE     'RP720'         THEN        '39.00'
// WHEN T1.WORK_CENTER_NO LIKE     'RP92'          THEN        '39.00'
// WHEN T1.WORK_CENTER_NO LIKE     'UM50'          THEN        '39.00'
// WHEN T1.WORK_CENTER_NO LIKE     '518K'          THEN        '31.00'
// WHEN T1.WORK_CENTER_NO LIKE     '515K5'         THEN        '53.44'
// WHEN T1.WORK_CENTER_NO LIKE     '518K5'         THEN        '40.54'
// WHEN T1.WORK_CENTER_NO LIKE     'S38K'          THEN        '36.54'
// WHEN T1.WORK_CENTER_NO LIKE     'JNC32'         THEN        '65.63'
// WHEN T1.WORK_CENTER_NO LIKE     'PLATG'         THEN        '60.93'
// WHEN T1.WORK_CENTER_NO LIKE     'RAST'          THEN        '60.93'
// WHEN T1.WORK_CENTER_NO LIKE     'MREMX'         THEN        '15.34'
// WHEN T1.WORK_CENTER_NO LIKE     'HREMX'         THEN        '15.34'
// WHEN T1.WORK_CENTER_NO LIKE     'UCIES'         THEN        '27.37'
// WHEN T1.WORK_CENTER_NO LIKE     'NOYEN'         THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'UCIEP'         THEN        '27.37'
// WHEN T1.WORK_CENTER_NO LIKE     'UCSY'          THEN        '60.08'
// WHEN T1.WORK_CENTER_NO LIKE     'MEA'           THEN        '72.69'
// WHEN T1.WORK_CENTER_NO LIKE     'IHE6'          THEN        '11.27'
// WHEN T1.WORK_CENTER_NO LIKE     'IHE12'         THEN        '27.32'
// WHEN T1.WORK_CENTER_NO LIKE     'SRUT'          THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'PUB'           THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'ODWO'          THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'PKOOP'         THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'CYNKF'         THEN        '72.45'
// WHEN T1.WORK_CENTER_NO LIKE     'MLA'           THEN        '0.00'
// WHEN T1.WORK_CENTER_NO LIKE     'MLR'           THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'MR'            THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'FAR'           THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'LAKR'          THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'OS10'          THEN        '34.25'
// WHEN T1.WORK_CENTER_NO LIKE     'SLC'           THEN        '34.25'
// WHEN T1.WORK_CENTER_NO LIKE     'TBI30'         THEN        '34.25'
// WHEN T1.WORK_CENTER_NO LIKE     'TBIMC'         THEN        '34.25'
// WHEN T1.WORK_CENTER_NO LIKE     'DT12M'         THEN        '34.25'
// WHEN T1.WORK_CENTER_NO LIKE     'TBI42'         THEN        '34.25'
// WHEN T1.WORK_CENTER_NO LIKE     'ADW'           THEN        '34.25'
// WHEN T1.WORK_CENTER_NO LIKE     'PRST'          THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'PRSKW'         THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'PRKMP'         THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'SR'            THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'WPIA'          THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'WPIM'          THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'ACVM'          THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'ACVML'         THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'ACVS'          THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'WPIH'          THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'PFF1'          THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'ZMK'           THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'OR10A'         THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'OR10B'         THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'OR12A'         THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'OR12B'         THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'OR16A'         THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'OR8A'          THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'OR8B'          THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'PKKTW'         THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'MKO10'         THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'MKO12'         THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'MRK1'          THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'EBS'           THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'LKO'           THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'KGIM'          THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'KPR'           THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'KWPIM'         THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'KACVM'         THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'KACVS'         THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'KSR'           THEN        '100.00'
// WHEN T1.WORK_CENTER_NO LIKE     'KPRLX'         THEN        '100.00'
// ELSE ''
// END AS EFFICIENCY_FACTOR

//  FROM ROUTING_OPERATION T1
// WHERE T1.CONTRACT = 'KRLAN'  
// AND T1.WORK_CENTER_NO IN
// (
// 'TRAW'
// ,'EBNER'
// ,'HERB'
// ,'ROTH'
// ,'BR'
// ,'CJB'
// ,'BMV3'
// ,'BV4'
// ,'CZ-HD'
// ,'HBV5'
// ,'HPT3'
// ,'HPT4'
// ,'JY16'
// ,'N412'
// ,'N515L'
// ,'NB515'
// ,'R12'
// ,'R16'
// ,'R420'
// ,'R420L'
// ,'R62'
// ,'S18R'
// ,'S18V'
// ,'S28'
// ,'S28EL'
// ,'S28EM'
// ,'S28X'
// ,'S38CR'
// ,'S38EC'
// ,'S38EL'
// ,'NF550'
// ,'NUTUP'
// ,'MAS14'
// ,'MAS20'
// ,'AM10'
// ,'HATEB'
// ,'HNT38'
// ,'CGR60'
// ,'CGR70'
// ,'GR5V'
// ,'GWB16'
// ,'UPW25'
// ,'BMV5'
// ,'BV5'
// ,'CF5'
// ,'HPT6'
// ,'NAT'
// ,'NB518'
// ,'NB522'
// ,'SP470'
// ,'SP660'
// ,'RP720'
// ,'RP92'
// ,'UM50'
// ,'518K'
// ,'515K5'
// ,'518K5'
// ,'S38K'
// ,'JNC32'
// ,'PLATG'
// ,'RAST'
// ,'MREMX'
// ,'HREMX'
// ,'UCIES'
// ,'NOYEN'
// ,'UCIEP'
// ,'UCSY'
// ,'MEA'
// ,'IHE6'
// ,'IHE12'
// ,'SRUT'
// ,'PUB'
// ,'ODWO'
// ,'PKOOP'
// ,'CYNKF'
// ,'MLA'
// ,'MLR'
// ,'MR'
// ,'FAR'
// ,'LAKR'
// ,'OS10'
// ,'SLC'
// ,'TBI30'
// ,'TBIMC'
// ,'DT12M'
// ,'TBI42'
// ,'ADW'
// ,'PRST'
// ,'PRSKW'
// ,'PRKMP'
// ,'SR'
// ,'WPIA'
// ,'WPIM'
// ,'ACVM'
// ,'ACVML'
// ,'ACVS'
// ,'WPIH'
// ,'PFF1'
// ,'ZMK'
// ,'OR10A'
// ,'OR10B'
// ,'OR12A'
// ,'OR12B'
// ,'OR16A'
// ,'OR8A'
// ,'OR8B'
// ,'PKKTW'
// ,'MKO10'
// ,'MKO12'
// ,'MRK1'
// ,'EBS'
// ,'LKO'
// ,'KGIM'
// ,'KPR'
// ,'KWPIM'
// ,'KACVM'
// ,'KACVS'
// ,'KSR'
// ,'KPRLX'

// )
//             `
//             ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)









// await toApiModify(connectorXlsx,connectorProd,
//             `Kopia pliku GLUSZCZKI PREF ZASOBY`
//             ,'ROUTING_OPERATION'
//             ,'CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;WORK_CENTER_NO'
//             ,1)



// await toApiModify(connectorXlsx,connectorProd,
//     `Walcówki IFS`
//     ,'INVENTORY_PART_CONFIG'
//     ,'CONTRACT;PART_NO'
//     ,1)

// await toApiModify(connectorXlsx,connectorProd,
//     `Opakowania`
//     ,'INVENTORY_PART_CONFIG'
//     ,'CONTRACT;PART_NO'
//     ,1)





// await toApiModify(connectorProd,connectorProd,
//             `
// select 
// T1.CONTRACT
// ,T1.PART_NO
// ,T1.ENG_CHG_LEVEL
// ,T1.BOM_TYPE_DB 
// ,T1.ALTERNATIVE_NO
// ,T1.LINE_ITEM_NO
// ,T1.LINE_SEQUENCE
// ,'TRUE' AS ISSUE_OVERREPORTED_QTY_DB
// from PROD_STRUCTURE T1
// JOIN INVENTORY_PART T2 ON T2.CONTRACT = T1.CONTRACT AND T2.PART_NO = T1.COMPONENT_PART 
// WHERE T2.PRIME_COMMODITY = 'SRB'
// AND ISSUE_OVERREPORTED_QTY_DB = 'FALSE'
//             `
//             ,'PROD_STRUCTURE','CONTRACT;PART_NO;ENG_CHG_LEVEL;BOM_TYPE_DB;ALTERNATIVE_NO;LINE_ITEM_NO;LINE_SEQUENCE',1)












// await toApiModify(connectorProd,connectorProd,
//     `
//      SELECT
//       T1.CONTRACT
//      ,T1.PART_NO
//      ,T1.BOM_TYPE_DB
//      ,T1.ALTERNATIVE_NO
//      ,T1.OPERATION_ID

//      ,'FALSE' AS C_REP_OPER_INPUT_U_M_DB
//      ,NULL AS C_OPER_INPUT_UNIT_MEAS
//      ,'FALSE' AS C_RECEIVE_SEMIFIN_PART_DB
//      ,'FALSE' AS C_ISSUE_SEMIFIN_PART_DB
//      ,NULL AS C_HANDLING_UNIT_TYPE_ID

//      FROM ROUTING_OPERATION T1
//        WHERE CONTRACT = 'KRLAN'
// AND WORK_CENTER_NO IN (
// 'K0030'
// ,'K0031'
// ,'K0032'
// )
//     `
//                     ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)



// await toApiModify(connectorXlsx,connectorProd,
//     `RECURSYWA koszty szacowane mat.na narzędzia wlane do IFSAPP 20250403`
//     ,'INVENTORY_PART_CONFIG'
//     ,'CONTRACT;PART_NO'
//     ,1)



// await toApiModify(connectorOldDatabase,connectorProd,
//         `
//     select * from wsp.v_lot_batch_master
//         `
//                         ,'LOT_BATCH_MASTER','LOT_BATCH_NO',1)      


// await toApiModify(connectorXlsx,connectorProd,
//         `koszty do wlania do bazy produkcyjnej 20250331v2`
//          ,'WORK_CENTER_COST'
//          ,'CONTRACT;WORK_CENTER_NO;COST_SET'
//          ,1)      


// await toApiModify(connectorXlsx,connectorProd,
//     `WYCENA KOTWY`
//     ,'INVENTORY_PART_CONFIG'
//     ,'CONTRACT;PART_NO'
//     ,1)



// await toApiModify(connectorXlsx,connectorProd,
//     `SRB01 wer1`
//     ,'INVENTORY_PART_CONFIG'
//     ,'CONTRACT;PART_NO'
//     ,1)



// await toApiModify(connectorProd,connectorProd,
//     `
// SELECT
// T1.CONTRACT
// ,T1.PART_NO
// ,T1.ENG_CHG_LEVEL
// ,to_char ( to_date('2020.01.01', 'YYYY-MM-DD'), 'YYYY-MM-DD') AS EFF_PHASE_IN_DATE
// FROM PART_REVISION T1
// WHERE T1.CONTRACT = 'KRLAN'
// and EFF_PHASE_IN_DATE not like to_date('2020.01.01', 'YYYY-MM-DD')
//     `
//     ,'PART_REVISION','CONTRACT;PART_NO;ENG_CHG_LEVEL',1)


// await toApiModify(connectorProd,connectorProd,
//     `
// SELECT
// T1.CONTRACT
// ,T1.PART_NO
// ,'TRUE' AS C_ISSUE_FULL_HU

// FROM MANUF_PART_ATTRIBUTE T1
// JOIN INVENTORY_PART T2 ON T1.contract = T2.CONTRACT AND T1.part_no = T2.PART_NO 
// WHERE T2.PRIME_COMMODITY IN ( 'SRB','PDK','NKR','KTSRB','KTWSK','KTNKR','KTPDK')
// AND T1.CONTRACT = 'KRLAN'
//     `
//     ,'MANUF_PART_ATTRIBUTE','CONTRACT;PART_NO',1)


    // await toApiModify(connectorProd,connectorProd,
    //     `
    // SELECT
    // T1.CONTRACT
    // ,T1.PART_NO
    // ,'TRUE' AS C_EXCLUDE_FROM_SHIP_ORDER_DB
    
    // FROM MANUF_PART_ATTRIBUTE T1
    // JOIN INVENTORY_PART T2 ON T1.contract = T2.CONTRACT AND T1.part_no = T2.PART_NO 
    // WHERE T2.PRIME_COMMODITY NOT IN ( 'SRB','PDK','NKR','KTSRB','KTWSK','KTNKR','KTPDK')
    // AND T1.CONTRACT = 'KRLAN'
    //     `
    //     ,'MANUF_PART_ATTRIBUTE','CONTRACT;PART_NO',1)


// await toApiModify(connectorXlsx,connectorProd,
//     `Kopia pliku BLEDNE CECHY GATMA STNMA WER 2`
//     ,'INVENTORY_PART_CHAR'
//     ,'CONTRACT;PART_NO;CHARACTERISTIC_CODE'
//     ,1)





// await toApiModify(connectorProd,connectorProd,
//     `
//  SELECT
//  T1.CONTRACT
//  ,T1.PART_NO
//  ,T1.ROUTING_REVISION
//  ,T1.BOM_TYPE_DB
//  ,T1.ALTERNATIVE_NO
//  ,T1.OPERATION_ID
//    ,'FALSE' AS C_RECEIVE_SEMIFIN_PART_DB
//    ,'FALSE' AS C_ISSUE_SEMIFIN_PART_DB

//    FROM ROUTING_OPERATION T1
//    JOIN INVENTORY_PART T5 ON T1.part_no = T5.PART_NO
//    WHERE T1.CONTRACT = 'KRLAN'
//    AND T1.work_center_no IN ('LKJ','LDK','LM')
//     `
// ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)




// await toApiModify(connectorProd,connectorProd,
//             `
// SELECT
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
// ,T1.OPERATION_ID



// ,CASE 
// WHEN T1.WORK_CENTER_NO LIKE        'BMV3'          THEN 		'62.00'
// WHEN T1.WORK_CENTER_NO LIKE        'BV4'          THEN          '77.00'
// WHEN T1.WORK_CENTER_NO LIKE        'HBV5'          THEN         '77.00'
// WHEN T1.WORK_CENTER_NO LIKE        'HPT3'          THEN         '47.00'
// WHEN T1.WORK_CENTER_NO LIKE        'HPT4'          THEN         '71.00'
// WHEN T1.WORK_CENTER_NO LIKE        'JY16'          THEN         '47.00'
// WHEN T1.WORK_CENTER_NO LIKE			'N412'			THEN        '55.00'
// WHEN T1.WORK_CENTER_NO LIKE			'N515L'         THEN        '69.00'
// WHEN T1.WORK_CENTER_NO LIKE          'NB515'        THEN        '80.00'
// WHEN T1.WORK_CENTER_NO LIKE          'S18V'         THEN        '68.00'
// WHEN T1.WORK_CENTER_NO LIKE          'S28'          THEN        '63.00'
// WHEN T1.WORK_CENTER_NO LIKE          'S28EL'        THEN        '61.00'
// WHEN T1.WORK_CENTER_NO LIKE          'S28EM'        THEN        '54.00'
// WHEN T1.WORK_CENTER_NO LIKE          'S38CR'        THEN        '60.00'
// WHEN T1.WORK_CENTER_NO LIKE          'S38EC'        THEN        '53.00'
// WHEN T1.WORK_CENTER_NO LIKE          'S38EL'        THEN        '75.79'
// WHEN T1.WORK_CENTER_NO LIKE          'BMV5'         THEN        '77.00'
// WHEN T1.WORK_CENTER_NO LIKE          'BV5'          THEN        '62.00'
// WHEN T1.WORK_CENTER_NO LIKE          'HPT6'         THEN        '71.00'
// WHEN T1.WORK_CENTER_NO LIKE          'NAT'          THEN        '45.00'
// WHEN T1.WORK_CENTER_NO LIKE          'NB518'        THEN        '56.00'
// WHEN T1.WORK_CENTER_NO LIKE          'NB522'        THEN        '54.00'
// WHEN T1.WORK_CENTER_NO LIKE          'SP660'        THEN        '28.00'
// WHEN T1.WORK_CENTER_NO LIKE          '518K'         THEN        '57.00'
// WHEN T1.WORK_CENTER_NO LIKE          '515K5'        THEN        '74.00'
// WHEN T1.WORK_CENTER_NO LIKE          '518K5'        THEN        '69.00'
// WHEN T1.WORK_CENTER_NO LIKE          'S38K'         THEN        '68.00'
// ELSE ''                   								   
// END AS EFFICIENCY_FACTOR  

//  FROM ROUTING_OPERATION T1
// WHERE T1.CONTRACT = 'KRLAN'  
// AND T1.WORK_CENTER_NO IN
// (
// 'BMV3'
// ,'BV4'
// ,'HBV5'
// ,'HPT3'
// ,'HPT4'
// ,'JY16'
// ,'N412'
// ,'N515L'
// ,'NB515'
// ,'S18V'
// ,'S28'
// ,'S28EL'
// ,'S28EM'
// ,'S38CR'
// ,'S38EC'
// ,'S38EL'
// ,'BMV5'
// ,'BV5'
// ,'HPT6'
// ,'NAT'
// ,'NB518'
// ,'NB522'
// ,'SP660'
// ,'518K'
// ,'515K5'
// ,'518K5'
// ,'S38K'
// )
//             `
//             ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)







//             await toApiModify(connectorProd,connectorProd,
//                 `
// SELECT
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.ORDER_NO
// ,T1.RELEASE_NO
// ,T1.SEQUENCE_NO
// ,T1.OP_ID


// ,CASE 
// WHEN T1.WORK_CENTER_NO LIKE        'BMV3'          THEN     '62.00'
// WHEN T1.WORK_CENTER_NO LIKE        'BV4'          THEN          '77.00'
// WHEN T1.WORK_CENTER_NO LIKE        'HBV5'          THEN         '77.00'
// WHEN T1.WORK_CENTER_NO LIKE        'HPT3'          THEN         '47.00'
// WHEN T1.WORK_CENTER_NO LIKE        'HPT4'          THEN         '71.00'
// WHEN T1.WORK_CENTER_NO LIKE        'JY16'          THEN         '47.00'
// WHEN T1.WORK_CENTER_NO LIKE     'N412'      THEN        '55.00'
// WHEN T1.WORK_CENTER_NO LIKE     'N515L'         THEN        '69.00'
// WHEN T1.WORK_CENTER_NO LIKE          'NB515'        THEN        '80.00'
// WHEN T1.WORK_CENTER_NO LIKE          'S18V'         THEN        '68.00'
// WHEN T1.WORK_CENTER_NO LIKE          'S28'          THEN        '63.00'
// WHEN T1.WORK_CENTER_NO LIKE          'S28EL'        THEN        '61.00'
// WHEN T1.WORK_CENTER_NO LIKE          'S28EM'        THEN        '54.00'
// WHEN T1.WORK_CENTER_NO LIKE          'S38CR'        THEN        '60.00'
// WHEN T1.WORK_CENTER_NO LIKE          'S38EC'        THEN        '53.00'
// WHEN T1.WORK_CENTER_NO LIKE          'S38EL'        THEN        '75.79'
// WHEN T1.WORK_CENTER_NO LIKE          'BMV5'         THEN        '77.00'
// WHEN T1.WORK_CENTER_NO LIKE          'BV5'          THEN        '62.00'
// WHEN T1.WORK_CENTER_NO LIKE          'HPT6'         THEN        '71.00'
// WHEN T1.WORK_CENTER_NO LIKE          'NAT'          THEN        '45.00'
// WHEN T1.WORK_CENTER_NO LIKE          'NB518'        THEN        '56.00'
// WHEN T1.WORK_CENTER_NO LIKE          'NB522'        THEN        '54.00'
// WHEN T1.WORK_CENTER_NO LIKE          'SP660'        THEN        '28.00'
// WHEN T1.WORK_CENTER_NO LIKE          '518K'         THEN        '57.00'
// WHEN T1.WORK_CENTER_NO LIKE          '515K5'        THEN        '74.00'
// WHEN T1.WORK_CENTER_NO LIKE          '518K5'        THEN        '69.00'
// WHEN T1.WORK_CENTER_NO LIKE          'S38K'         THEN        '68.00'
// ELSE ''                                      
// END AS EFFICIENCY_FACTOR  

//  FROM SHOP_ORDER_OPERATION T1
// WHERE T1.CONTRACT = 'KRLAN'  
// AND T1.WORK_CENTER_NO IN
// (
// 'BMV3'
// ,'BV4'
// ,'HBV5'
// ,'HPT3'
// ,'HPT4'
// ,'JY16'
// ,'N412'
// ,'N515L'
// ,'NB515'
// ,'S18V'
// ,'S28'
// ,'S28EL'
// ,'S28EM'
// ,'S38CR'
// ,'S38EC'
// ,'S38EL'
// ,'BMV5'
// ,'BV5'
// ,'HPT6'
// ,'NAT'
// ,'NB518'
// ,'NB522'
// ,'SP660'
// ,'518K'
// ,'515K5'
// ,'518K5'
// ,'S38K'
// )
//                 `
//                 ,'SHOP_ORDER_OPERATION','CONTRACT;PART_NO;ORDER_NO;RELEASE_NO;SEQUENCE_NO;OP_ID',1)




// await toApiModify(connectorOldDatabase,connectorCfg,
//     `
// select * from wsp.v_lot_batch_master
//     `
//                     ,'LOT_BATCH_MASTER','LOT_BATCH_NO',1)    











//           await toApiModify(connectorProd,connectorProd,
//             `
// SELECT
// T1.CONTRACT
// ,T1.TOOL_ID
// ,T1.TOOL_INSTANCE

// ,CASE WHEN T4.attr_value IS NOT NULL AND T3.attr_value IS NOT NULL THEN SUBSTR( T4.attr_value || ' ' || T3.attr_value,1,35)
// ELSE T2.DESCRIPTION
// END AS DESCRIPTION 


// FROM MANUF_TOOL_DETAIL T1
// JOIN INVENTORY_PART T2 ON T2.CONTRACT = T1.contract AND T2.PART_NO = T1.tool_id
// LEFT JOIN INVENTORY_PART_CHAR_ALL T3 ON T3.contract = T2.CONTRACT AND T3.part_no = T2.PART_NO AND T3.characteristic_code = 'NCECH'
// LEFT JOIN INVENTORY_PART_CHAR_ALL T4 ON T4.contract = T2.CONTRACT AND T4.part_no = T2.PART_NO AND T4.characteristic_code = 'NRODZ'
// WHERE T1.CONTRACT = 'KRLAN'



//             `
//             ,'MANUF_TOOL_DETAIL','CONTRACT;TOOL_ID;TOOL_INSTANCE',1)



// await toApiModify(connectorXlsx,connectorProd,
//     `PACKING_INSTRUCTION_NODE`
//     ,'PACKING_INSTRUCTION_NODE'
//     ,'PACKING_INSTRUCTION_ID'
//     ,1)


// await toApiModify(connectorXlsx,connectorProd,
//     `PACKING_INSTRUCTION`
//     ,'PACKING_INSTRUCTION'
//     ,'PACKING_INSTRUCTION_ID'
//     ,1)






// await toApiModify(connectorCfg,connectorCfg,
//             `
// SELECT
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
// ,T1.OPERATION_ID
// ,'TRUE' AS C_RECEIVE_SEMIFIN_PART_DB
// ,'FALSE' AS C_ISSUE_SEMIFIN_PART_DB

// FROM ROUTING_OPERATION T1
//    WHERE  T1.Contract = 'KRLAN'
//                    AND T1.PART_NO IN ('2002963' )
//                 and ALTERNATIVE_NO = '*'
            
//             `
//             ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)



// await toApiModify(connectorProd,connectorProd,
//             `
// SELECT
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
// ,T1.OPERATION_ID
// ,'FALSE' AS C_REP_OPER_INPUT_U_M_DB

// FROM ROUTING_OPERATION T1
//    WHERE  T1.Contract = 'KRLAN'
//                    AND T1.WORK_CENTER_NO IN ('HATEB')
            
//             `
//             ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)


// await toApiModify(connectorXlsx,connectorProd,
//     `Zmiana pref zasobu_20250424_104259`
//     ,'ROUTING_OPERATION'
//     ,'CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_NO'
//     ,1)




// await toApiModify(connectorCfg,connectorCfg,
//             `
// SELECT
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
// ,T1.OPERATION_ID
// -- ,T1.OPERATION_DESCRIPTION
// -- ,T1.MOVE_TIME

// ,CASE  
// WHEN  T1.OPERATION_DESCRIPTION LIKE 'T%OCZENIE'                                    THEN 0
// WHEN  T1.OPERATION_DESCRIPTION LIKE 'USUW. FOSFORAN%W + ULEPSZ. CIEPLNE'           THEN 48
// WHEN  T1.OPERATION_DESCRIPTION LIKE 'WALCOWANIE GWINTU'                            THEN 72
// -- WHEN  T1.OPERATION_DESCRIPTION LIKE 'FOSFORANOWANIE'                               THEN 
// -- WHEN  T1.OPERATION_DESCRIPTION LIKE 'NAŁOŻENIE POWŁOKI TOP COAT'                   THEN 
// WHEN  T1.OPERATION_DESCRIPTION LIKE 'SELEKCJA 100% MECHANICZNA'                    THEN 72
// WHEN  T1.OPERATION_DESCRIPTION LIKE 'WALCOWANIE GWINTU PO ULEP. CIEPL.'            THEN 72
// WHEN  T1.OPERATION_DESCRIPTION LIKE 'WYKONANIE POKRYCIA OCHRONNEGO'                THEN 72
// -- WHEN  T1.OPERATION_DESCRIPTION LIKE 'KALIBROWANIE GWINTU'                          THEN 
// -- WHEN  T1.OPERATION_DESCRIPTION LIKE 'CYNKOWANIE'                                   THEN 
// -- WHEN  T1.OPERATION_DESCRIPTION LIKE 'ODWODOROWYWANIE'                              THEN 
// -- WHEN  T1.OPERATION_DESCRIPTION LIKE 'NAŁOŻENIE USZCZELNIANIA FINIGARD105'          THEN 
// -- WHEN  T1.OPERATION_DESCRIPTION LIKE 'SELEKCJA 100% RĘCZNA'                         THEN 
// WHEN  T1.OPERATION_DESCRIPTION LIKE 'NAK%ADANIE PODK%. WALCOWANIE GWINTU'          THEN 72
// -- WHEN  T1.OPERATION_DESCRIPTION LIKE 'MYCIE'                                        THEN 
// -- WHEN  T1.OPERATION_DESCRIPTION LIKE 'NAŁOŻENIE POWŁOKI PREAPLIKOWANEJ'             THEN 
// -- WHEN  T1.OPERATION_DESCRIPTION LIKE 'OBRÓBKA SKRAWANIEM'                           THEN 
// -- WHEN  T1.OPERATION_DESCRIPTION LIKE 'OBRÓBKA SKRAWANIEM TOKARKA'                   THEN 
// -- WHEN  T1.OPERATION_DESCRIPTION LIKE 'MYCIE PRZED OBRÓBKĄ SKARAWANIEM'              THEN 
// WHEN  T1.OPERATION_DESCRIPTION LIKE 'SELEKCJA 100% MECHANICZNA+WORKI VCI'          THEN 72
// -- WHEN  T1.OPERATION_DESCRIPTION LIKE 'PASYWACJA'                                    THEN 
// -- WHEN  T1.OPERATION_DESCRIPTION LIKE 'WYKONANIE POKRYCIA OCHRONNEGO OCYN. OGN.'     THEN 
// WHEN  T1.OPERATION_DESCRIPTION LIKE 'PAKOWANIE'                                    THEN 48
// WHEN  T1.OPERATION_DESCRIPTION LIKE 'PAKOWANIE WG TECHNOLOGII VCI'                 THEN 48
// -- WHEN  T1.OPERATION_DESCRIPTION LIKE 'GWINTOWANIE'                                  THEN 
// ELSE T1.MOVE_TIME
// END AS MOVE_TIME

// FROM ROUTING_OPERATION T1
// WHERE T1.PART_NO = '2118114'
//             `
//             ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO',1)










// await toApiModify(connectorProd,connectorProd,
//             `
// SELECT
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
// ,T1.OPERATION_ID
// ,'398' as C_PREF_RESOURCE

// FROM ROUTING_OPERATION T1
// WHERE T1.C_PREF_RESOURCE = '16'
//             `
//             ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)




// await toApiModify(connectorXlsx,connectorProd,
//     `etykiety do IFS 13.05.2025`
//     ,'PURCHASE_PART_SUPPLIER'
//     ,'CONTRACT;PART_NO;VENDOR_NO'
//     ,1)


// await toApiModify(connectorXlsx,connectorProd,
//     `Preferowane zasoby_lista_20250510_084513-1`
//     ,'ROUTING_OPERATION'
//     ,'CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_NO'
//     ,1)







// await toApiModify(connectorProd,connectorProd,
//     `
// SELECT
// T1.CONTRACT
// ,T1.PART_NO
// ,T1.ENG_CHG_LEVEL
// ,to_char ( to_date('2020.01.01', 'YYYY-MM-DD'), 'YYYY-MM-DD') AS EFF_PHASE_IN_DATE
// FROM PART_REVISION T1
// WHERE T1.CONTRACT = 'KRLAN'
// and EFF_PHASE_IN_DATE not like to_date('2020.01.01', 'YYYY-MM-DD')
//     `
//     ,'PART_REVISION','CONTRACT;PART_NO;ENG_CHG_LEVEL',1)


    




// await toApiModify(connectorProd,connectorProd,
//     `
// SELECT 
// CONTRACT
// ,PART_NO
// ,ENG_CHG_LEVEL
// ,BOM_TYPE_DB
// ,ALTERNATIVE_NO
// ,LINE_ITEM_NO
// ,'1027506' AS COMPONENT_PART
// FROM PROD_STRUCTURE
// WHERE CONTRACT = 'KRLAN'
// AND COMPONENT_PART = '1078857'
//     `
//     ,'PROD_STRUCTURE','CONTRACT;PART_NO;ENG_CHG_LEVEL;BOM_TYPE_DB;ALTERNATIVE_NO;LINE_ITEM_NO',1)


    

/////// WYDAJNOSCI


// await toApiModify(connectorXlsx,connectorProd,
//     `UNIA WSZYSTKICH PLIKOW`
//     ,'C_ROUTING_EFFICIENCY_CONF'
//     ,'C_ROUTING_EFFICIENCY_ID'
//     ,1)










// await toApiModify(connectorCfg,connectorCfg, `SELECT Contract       ,Part_No       ,Routing_Revision       ,Bom_Type_Db       ,Alternative_No       ,Operation_Id       ,'120' AS Move_Time FROM   Routing_Operation WHERE  Contract = 'KRLAN' AND    (Operation_Description LIKE 'OBR%BKA SKRAWANIEM'        OR Operation_Description LIKE 'OBR%BKA SKRAWANIEM TOKARKA' )` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)

// await toApiModify(connectorProd,connectorProd, `  SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'0.001' AS MACH_RUN_FACTOR FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND WORK_CENTER_NO LIKE '%KOOP1%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
    
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'0' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%T%OCZENIE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)

// await toApiModify(connectorProd,connectorProd,     ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'48' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND PART_NO IN (                   SELECT DISTINCT                   PART_NO                   FROM INVENTORY_PART_CHAR_ALL T1                   WHERE T1.ATTR_VALUE LIKE '%10.9%'                   AND CHARACTERISTIC_CODE = 'WYTRZ'                  ) AND OPERATION_DESCRIPTION LIKE '%ULEPSZANIE CIEPLNE EMULSJA 2%%'     `     ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd,     ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'48' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND PART_NO IN (                   SELECT DISTINCT                   PART_NO                   FROM INVENTORY_PART_CHAR_ALL T1                   WHERE T1.ATTR_VALUE LIKE '%10.9%'                   AND CHARACTERISTIC_CODE = 'WYTRZ'                  ) AND OPERATION_DESCRIPTION LIKE '%USUW. FOSFORAN%W + ULEPSZ. CIEPLNE%'     `     ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd,     ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'48' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND PART_NO IN (                   SELECT DISTINCT                   PART_NO                   FROM INVENTORY_PART_CHAR_ALL T1                   WHERE T1.ATTR_VALUE LIKE '%10.9%'                   AND CHARACTERISTIC_CODE = 'WYTRZ'                  ) AND OPERATION_DESCRIPTION LIKE '%ULEPSZANIE CIEPLNE EMULSJA 15%%'     `     ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd,     ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'240' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND PART_NO IN (                   SELECT DISTINCT                   PART_NO                   FROM INVENTORY_PART_CHAR_ALL T1                   WHERE T1.ATTR_VALUE LIKE '%100%'                   AND CHARACTERISTIC_CODE = 'WYTRZ'                  ) AND OPERATION_DESCRIPTION LIKE '%USUW. FOSFORAN%W + ULEPSZ. CIEPLNE%'     `     ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd,     ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'240' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND PART_NO IN (                   SELECT DISTINCT                   PART_NO                   FROM INVENTORY_PART_CHAR_ALL T1                   WHERE T1.ATTR_VALUE LIKE '%100(NAW%GLANIE)%'                   AND CHARACTERISTIC_CODE = 'WYTRZ'                  ) AND OPERATION_DESCRIPTION LIKE '%USUW. FOSFORAN%W + ULEPSZ. CIEPLNE%'     `     ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd,     ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'240' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND PART_NO IN (                   SELECT DISTINCT                   PART_NO                   FROM INVENTORY_PART_CHAR_ALL T1                   WHERE T1.ATTR_VALUE LIKE '%100(NAW%GLANIE)%'                   AND CHARACTERISTIC_CODE = 'WYTRZ'                  ) AND OPERATION_DESCRIPTION LIKE '%ULEPSZANIE CIEPLNE + NAW%GLANIE%'     `     ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd,     ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'96' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND PART_NO IN (                   SELECT DISTINCT                   PART_NO                   FROM INVENTORY_PART_CHAR_ALL T1                   WHERE T1.ATTR_VALUE LIKE '%12.9%'                   AND CHARACTERISTIC_CODE = 'WYTRZ'                  ) AND OPERATION_DESCRIPTION LIKE '%USUW. FOSFORAN%W + ULEPSZ. CIEPLNE%'     `     ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd,     ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'120' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND PART_NO IN (                   SELECT DISTINCT                   PART_NO                   FROM INVENTORY_PART_CHAR_ALL T1                   WHERE T1.ATTR_VALUE LIKE '%5.6%'                   AND CHARACTERISTIC_CODE = 'WYTRZ'                  ) AND OPERATION_DESCRIPTION LIKE '%USUW. FOSFORAN%W + ULEPSZ. CIEPLNE%'     `     ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd,     ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'48' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND PART_NO IN (                   SELECT DISTINCT                   PART_NO                   FROM INVENTORY_PART_CHAR_ALL T1                   WHERE T1.ATTR_VALUE LIKE '%8.8%'                   AND CHARACTERISTIC_CODE = 'WYTRZ'                  ) AND OPERATION_DESCRIPTION LIKE '%USUW. FOSFORAN%W + ULEPSZ. CIEPLNE%'     `     ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd,     ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'48' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND PART_NO IN (                   SELECT DISTINCT                   PART_NO                   FROM INVENTORY_PART_CHAR_ALL T1                   WHERE T1.ATTR_VALUE LIKE '%8.8(250-300HV)%'                   AND CHARACTERISTIC_CODE = 'WYTRZ'                  ) AND OPERATION_DESCRIPTION LIKE '%USUW. FOSFORAN%W + ULEPSZ. CIEPLNE%'     `     ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd,     ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'48' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND PART_NO IN (                   SELECT DISTINCT                   PART_NO                   FROM INVENTORY_PART_CHAR_ALL T1                   WHERE T1.ATTR_VALUE LIKE '%8.8/8%'                   AND CHARACTERISTIC_CODE = 'WYTRZ'                  ) AND OPERATION_DESCRIPTION LIKE '%USUW. FOSFORAN%W + ULEPSZ. CIEPLNE%'     `     ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd,     ` SELECT T2.CONTRACT ,T2.PART_NO ,T2.ROUTING_REVISION ,T2.BOM_TYPE_DB ,T2.ALTERNATIVE_NO ,T2.OPERATION_ID ,'48' AS MOVE_TIME FROM INVENTORY_PART T1 JOIN ROUTING_OPERATION T2 ON T1.part_no = T2.part_no AND T1.contract = T2.contract WHERE T2.CONTRACT = 'KRLAN' AND T1.PRIME_COMMODITY IN  ( 'ZMCLK') AND OPERATION_DESCRIPTION LIKE '%USUW. FOSFORAN%W + ULEPSZ. CIEPLNE%'     ` ,  'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd,     ` SELECT T2.CONTRACT ,T2.PART_NO ,T2.ROUTING_REVISION ,T2.BOM_TYPE_DB ,T2.ALTERNATIVE_NO ,T2.OPERATION_ID ,'120' AS MOVE_TIME FROM INVENTORY_PART T1 JOIN ROUTING_OPERATION T2 ON T1.part_no = T2.part_no AND T1.contract = T2.contract WHERE T2.CONTRACT = 'KRLAN' AND T1.PRIME_COMMODITY IN  ( 'RLX') AND OPERATION_DESCRIPTION LIKE '%USUW. FOSFORAN%W + ULEPSZ. CIEPLNE%'     ` ,  'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd,     ` SELECT T2.CONTRACT ,T2.PART_NO ,T2.ROUTING_REVISION ,T2.BOM_TYPE_DB ,T2.ALTERNATIVE_NO ,T2.OPERATION_ID ,'48' AS MOVE_TIME FROM INVENTORY_PART T1 JOIN ROUTING_OPERATION T2 ON T1.part_no = T2.part_no AND T1.contract = T2.contract WHERE T2.CONTRACT = 'KRLAN' AND T1.PRIME_COMMODITY IN  ( 'SRB','KTSRB') AND OPERATION_DESCRIPTION LIKE '%CYNKOWANIE%'     ` ,  'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd,     ` SELECT T2.CONTRACT ,T2.PART_NO ,T2.ROUTING_REVISION ,T2.BOM_TYPE_DB ,T2.ALTERNATIVE_NO ,T2.OPERATION_ID ,'72' AS MOVE_TIME FROM INVENTORY_PART T1 JOIN ROUTING_OPERATION T2 ON T1.part_no = T2.part_no AND T1.contract = T2.contract WHERE T2.CONTRACT = 'KRLAN' AND T1.PRIME_COMMODITY IN  ( 'RLX') AND OPERATION_DESCRIPTION LIKE '%CYNKOWANIE%'     ` ,  'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd,     ` SELECT T2.CONTRACT ,T2.PART_NO ,T2.ROUTING_REVISION ,T2.BOM_TYPE_DB ,T2.ALTERNATIVE_NO ,T2.OPERATION_ID ,'96' AS MOVE_TIME FROM INVENTORY_PART T1 JOIN ROUTING_OPERATION T2 ON T1.part_no = T2.part_no AND T1.contract = T2.contract WHERE T2.CONTRACT = 'KRLAN' AND T1.PRIME_COMMODITY IN  ( 'ZMCLK') AND OPERATION_DESCRIPTION LIKE '%CYNKOWANIE%'     ` ,  'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'240' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%FOSFORANOWANIE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'240' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%FOSFORANOWANIE + PAKOWANIE  VCI%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'168' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%NA%O%ENIE POW%OKI TOP COAT%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%WYKONANIE POKRYCIA OCHRONNEGO-2xVLH%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%WYKONANIE POKRYCIA OCHRONNEGO%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'24' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%ODWODOROWYWANIE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'240' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%NA%O%ENIE USZCZELNIANIA FINIGARD105%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'48' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%MYCIE Z INHIBITOREM KOROZJI%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'48' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '% MYCIE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'48' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%MYCIE (K%PIEL BEZ NAOH)%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'48' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%MYCIE BEZ WODOROTLENKU SODU%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'48' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%MYCIE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'48' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%MYCIE NATRYSK EMULSJI 15%%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'24' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '% MYCIE PRZED OBR%BK% SKRAWANIEM%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'24' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%MYCIE PRZED OBR%BK% SKRAWANIEM%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'240' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%NA%O%ENIE POW%OKI PREAPLIKOWANEJ%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'0' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%PASYWACJA%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'336' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%WYKONANIE POKRYCIA OCHRON.OCYN.OGN.%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'336' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%WYK POKRYCIA OCHRONNEGO+TOP COAT%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'48' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%USUWANIE FOSFORAN%W%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'120' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%OLIWIENIE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'120' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%USUNI%CIE OCYNKU%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'48' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%%ARZENIE 1 - KR%TKIE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'120' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%TRAWIENIE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'24' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%CZYSZCZENIE MECHANICZNE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'48' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%%ARZENIE 2 - D%UGIE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'120' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%WY%ARZANIE REKRYSTALIZUJ%CE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'24' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%TRAWIENIE 1 EB%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'48' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%NA%O%ENIE EMULSJI 15%%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'48' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '% CYNKOWANIE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'24' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%%RUTOWANIE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'24' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%KONTROLA OBR%BKI CIEPLNEJ%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'120' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%NAK%ADANIE EMULSJI%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'24' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%TRAWIENIE 2 EB%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'120' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%KONSERWACJA%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'120' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%WYB%YSZCZANIE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'120' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%ODWIROWYWANIE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%NAW%GLANIE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'24' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%TRAWIENIE 1 CIAG%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%PAKOWANIE w worki PE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'120' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%WALCOWANIE GWINTU M7%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%PAKOWANIE  WG TECHNOLOGII VCI%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%PAKOWANIE W WORECZKI + KARTON%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '% PAKOWANIE LAK%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'240' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%SELEKCJA 100% R%CZNA+SIATKA%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%PAKOWANIE PRZED KOOPERAJ%%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'240' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '% NA%O%ENIE POW%OKI PREAPLIKOWANEJ%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%MONTOWANIE AUTOMAT.+PAKOWANIE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%PAKOWANIE + SELEKCJA R%CZNA%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%KALIBROWANIE GWINTU+NAK%ADANIE SIAT%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'24' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '% KONTROLA PO KOOPERACJI%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%MONTOWANIE AUTOMATYCZNE+PAKOWANIE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%PAKOWANIE W WORECZKI PE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%PAKOWANIE MASTER%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'120' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%GWINTOWANIE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'240' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%NAK%ADANIE PODK%. WALCOWANIE GWINTU%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'120' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%WALCOWANIE GWINTU PO ULEP. CIEPL.%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'120' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%WIERCENIE+GWINTOWANIE CNC%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%LAK. PAKOWANIE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'120' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '% WALCOWANIE GWINTU%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'240' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%SELEKCJA 100% R%CZNA+PROSTOWANIE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'24' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%KONTROLA PO KOOPERACJI%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'120' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%GWINTOWANIE CNC%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'48' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%PAKOWANIE WG TECHNOLOGII VCI%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%PAKOWANIE W WORECZKI PE+ KARTON%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%PAKOWANIE W POJEMNIKI KLIENTA%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'120' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%WALCOWANIE GWINTU M8%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'120' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '% SELEKCJA 100% MECHANICZNA%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%KALIBROWANIE GWINTU PO OBR. SKR.%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%KALIBROWANIE GWINTU OBOWI%ZKOWE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'120' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%WALCOWANIE GWINTU PO POKRYCIU%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '% MONTOWANIE+PAKOWANIE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'120' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%SELEKCJA 100% MECHANICZNA P%KNI%CIA%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%PAKOWANIE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'240' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%SELEKCJA 100% R%CZNA%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%PAKOWANIE WG. TECHNOLOGII VCI%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'120' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%SELEKCJA 100% MECHANICZNA%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%PAKOWANIE w worki%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%***KALIBROWANIE GWINTU%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%PAKOWANIE WG. TECHNOLOGII VCI Worki%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%KALIBROWANIE GWINTU NA SUCHO%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%PAKOWANIE PRZED KOOPERACJA%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%PAKOWANIE W WORECZKI KLIENTA%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%PAKOWANIE PRZED KOOPERACJ%%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'240' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%NAK%ADANIE PODK%ADKI%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%KALIBROWANIE GWINTU + NAK%ADANIE SI%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'120' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%WALCOWANIE GWINTU%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%PAKOWANIE w Pojemnik technologiczny%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%PAKOWANIE W WORECZKI +KARTON%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'120' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%SELEKCJA 100% MECHANICZNA+WORKI VCI%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'72' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%MONTOWANIE+PAKOWANIE%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
// await toApiModify(connectorProd,connectorProd, ` SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'48' AS MOVE_TIME FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND OPERATION_DESCRIPTION LIKE '%PAKOWANIE WG TECHNOLOGII VCI ZGRZ.%' ` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)

// await toApiModify(connectorXlsx,connectorProd,
//     `DANE OD SLAWKA`
//     ,'ROUTING_OPERATION'
//     ,'PART_NO;OPERATION_DESCRIPTION'
//     ,1)

// await toApiModify(connectorXlsx,connectorProd,
//     `DANE OD ADAMA`
//     ,'ROUTING_OPERATION'
//     ,'PART_NO;WORK_CENTER_NO;OPERATION_NO'
//     ,1)



























// await toApiModify(connectorProd,connectorProd,
//             `
// SELECT
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
// ,T1.OPERATION_ID
// ,T1.CREW_SIZE AS SETUP_CREW_SIZE
// ,T1.LABOR_CLASS_NO AS SETUP_LABOR_CLASS_NO
// FROM ROUTING_OPERATION T1
//    WHERE  T1.Contract = 'KRLAN'
            
//             `
//             ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)








// await toApiModify(connectorProd,connectorProd,
//     `
// SELECT 
//  T1.PART_NO
// ,'ONE_LOT' AS LOT_QUANTITY_RULE_DB
// ,'ONE_LOT_ALLOWED' AS COMPONENT_LOT_RULE_DB
// FROM PART_CATALOG T1
// JOIN INVENTORY_PART T2 ON T1.part_no = T2.PART_NO
// WHERE T2.CONTRACT = 'KRLAN'
// AND T2.ACCOUNTING_GROUP = 'WGT'
// AND (COMPONENT_LOT_RULE_DB != 'ONE_LOT_ALLOWED' OR LOT_QUANTITY_RULE_DB != 'ONE_LOT')
//     `
//     ,'PART_CATALOG','PART_NO',1)





// await toApiModify(connectorProd,connectorProd,
//     `
// SELECT 
//  T1.PART_NO
// ,'ONE_LOT' AS LOT_QUANTITY_RULE_DB
// ,'MANY_LOTS_ALLOWED' AS COMPONENT_LOT_RULE_DB
// FROM PART_CATALOG T1
// JOIN INVENTORY_PART T2 ON T1.part_no = T2.PART_NO
// WHERE T2.CONTRACT = 'KRLAN'
// AND T2.ACCOUNTING_GROUP = 'WGT'
//     `
//     ,'PART_CATALOG','PART_NO',1)




// await toApiModify(connectorProd,connectorProd,
//             `
// SELECT
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
// ,T1.OPERATION_ID
// ,'FALSE' AS C_REP_OPER_INPUT_U_M_DB
// FROM ROUTING_OPERATION T1
// WHERE  T1.Contract = 'KRLAN'
// AND T1.work_center_no = 'HART'
// AND T1.C_REP_OPER_INPUT_U_M_DB = 'TRUE'
            
//             `
//             ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)





// await toApiModify(connectorProd,connectorProd,
//             `
// SELECT
// -- P1.PART_NO
// -- ,P1.DESCRIPTION
// T0.contract
// ,T0.part_no
// ,T0.configuration_id
// -- ,T2.DESCRIPTION
// -- ,T0.ESTIMATED_MATERIAL_COST
// ,MAX(T1.INVENTORY_VALUE) AS ESTIMATED_MATERIAL_COST
// FROM INVENTORY_PART P1
// JOIN PROD_STRUCTURE_HEAD P2 ON P2.contract = P1.CONTRACT 
//                             AND P2.part_no = P1.PART_NO
// JOIN PROD_STRUCT_ALTERNATE P3 ON P3.contract = P2.contract 
//                               AND P3.part_no = P2.part_no 
//                               AND P3.bom_type_db = P2.bom_type_db 
//                               AND P3.eng_chg_level = P2.eng_chg_level
// JOIN PROD_STRUCTURE P4 ON P4.CONTRACT = P3.CONTRACT 
//                         AND  P4.PART_NO = P3.PART_NO  
//                         AND P4.ENG_CHG_LEVEL  = P3.ENG_CHG_LEVEL 
//                         AND P4.BOM_TYPE_DB  = P3.BOM_TYPE_DB 
//                         AND P4.ALTERNATIVE_NO = P3.ALTERNATIVE_NO
// JOIN INVENTORY_PART_CONFIG T0 ON T0.contract = P4.CONTRACT
//                               AND T0.part_no = P4.COMPONENT_PART
// JOIN INVENTORY_PART_UNIT_COST_SUM T1 ON T1.contract = T0.contract 
//                                      AND T1.part_no = T0.PART_NO
// JOIN INVENTORY_PART T2 ON T2.CONTRACT = T1.contract
//                        AND T2.PART_NO = T1.part_no
// WHERE P1.CONTRACT = 'KRLAN'
// AND P1.PRIME_COMMODITY = 'NRSRB'
// AND T0.ESTIMATED_MATERIAL_COST = '0'
// AND T2.INVENTORY_VALUATION_METHOD_DB != 'ST'  --KOMPONENT NIE MOZE MIEC KOSZT STALY
// --  AND P1.PART_NO = '2186504'

// GROUP BY 
// T0.contract
// ,T0.part_no
// ,T0.configuration_id
            
//             `
//             ,'INVENTORY_PART_CONFIG','CONTRACT;PART_NO;CONFIGURATION_ID',1)




// await toApiModify(connectorProd,connectorProd,
//             `
// SELECT
//  T1.CONTRACT
// ,T1.PART_NO
// ,T1.BOM_TYPE_DB
// ,T1.ALTERNATIVE_NO
// ,T1.OPERATION_ID
// ,'FALSE' AS C_ISSUE_SEMIFIN_PART_DB
// ,'FALSE' AS C_RECEIVE_SEMIFIN_PART_DB
// FROM ROUTING_OPERATION T1
// JOIN INVENTORY_PART T2 ON T2.PART_NO = T1.part_no AND T2.CONTRACT = T1.contract
// WHERE  T1.Contract = 'KRLAN'
// AND T2.PRIME_COMMODITY = 'NRSRB'
// AND (T1.C_ISSUE_SEMIFIN_PART_DB = 'TRUE' OR  C_RECEIVE_SEMIFIN_PART_DB = 'TRUE' )
            
//             `
//             ,'ROUTING_OPERATION','CONTRACT;PART_NO;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)



         






// await toApiModify(connectorTest,connectorTest,
//     `
// SELECT 
//  T1.PART_NO
// ,'ONE_LOT' AS LOT_QUANTITY_RULE_DB
// ,'ONE_LOT_ALLOWED' AS COMPONENT_LOT_RULE_DB
// FROM PART_CATALOG T1
// JOIN INVENTORY_PART T2 ON T1.part_no = T2.PART_NO
// WHERE T2.CONTRACT = 'KRLAN'
// AND T2.ACCOUNTING_GROUP = 'WGT'
// AND T2.PRIME_COMMODITY = 'SRKPL'
// AND (COMPONENT_LOT_RULE_DB != 'ONE_LOT_ALLOWED' OR LOT_QUANTITY_RULE_DB != 'ONE_LOT')
//     `
//     ,'PART_CATALOG','PART_NO',1)








// await toApiModify(connectorCfg,connectorCfg,
//     `
// SELECT 
// T1.ORDER_NO,
// T1.RELEASE_NO,
// T1.SEQUENCE_NO,
// T1.ORDER_CODE_DB,
// T1.CONTRACT,
// T1.PART_NO,
// 'FALSE' AS ADJUST_ON_OP_QTY_DEVIATION_DB

// FROM SHOP_ORD T1
// JOIN INVENTORY_PART T2 ON T1.CONTRACT = T2.CONTRACT 
//                        AND T1.PART_NO = T2.PART_NO
// WHERE T1.CONTRACT = 'KRLAN'
// AND T2.PRIME_COMMODITY IN ('NRSRB','NRSRM','NRSTD')
// AND T1.OBJSTATE NOT IN ('Closed')
// AND ADJUST_ON_OP_QTY_DEVIATION_DB = 'TRUE'
//     `
//     ,'SHOP_ORD','ORDER_NO;RELEASE_NO;SEQUENCE_NO;ORDER_CODE_DB;CONTRACT;PART_NO',1)




// await toApiModify(connectorProd,connectorProd, `SELECT CONTRACT ,PART_NO ,ROUTING_REVISION ,BOM_TYPE_DB ,ALTERNATIVE_NO ,OPERATION_ID ,'0.001' AS MACH_RUN_FACTOR FROM ROUTING_OPERATION WHERE CONTRACT = 'KRLAN' AND WORK_CENTER_NO = 'KOOP1' AND MACH_RUN_FACTOR != 0.001` ,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)
    




// await toApiModify(connectorProd,connectorProd,
//     `
// SELECT  
// T1.c_routing_efficiency_id
// ,0.001 AS C_WYDAJNOSC
// ,3 AS C_UNIT_MEASURE_DB
// FROM C_ROUTING_EFFICIENCY_CONF t1
// where t1.work_center_no = 'KOOP1'
// AND C_WYDAJNOSC != 0.001

//     `
//     ,'C_ROUTING_EFFICIENCY_CONF','C_ROUTING_EFFICIENCY_ID',1)




// await toApiModify(connectorCfg,connectorCfg,
//     `
// SELECT 
// T1.TRANSACTION_ID
// ,'DADA' AS SOURCE
// FROM INVENTORY_TRANSACTION_HIST2 t1
// WHERE T1.TRANSACTION_ID = 121230

//     `
//     ,'inventory_transaction_hist','TRANSACTION_ID',1)


await toApiModify(connectorXlsx,connectorProd,
            `Raport-1`
            ,'ROUTING_OPERATION'
            ,'CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID'
            ,1)


} catch (error) {
    console.error('Error occurred during execution:', error);
}
}



updaterWybrana()
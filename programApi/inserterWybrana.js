import {toApiNew} from '../util/toApiNew.js'
import { connectorOldDatabase } from "../db/connectorOldDatabase.js";
import {connectorCfg } from "../db/connectorCfg.js";
import {connectorTest } from "../db/connectorTest.js";
import {connectorProd } from "../db/connectorProd.js";
import {connectorXlsx } from "../db/connectorXlsx.js";

async function inserterWybrana() {
    try {

        // await toApiNew('select * from PSZABAT.IFS_WAREHOUSE_BAY_BIN_LOK_MAG','WAREHOUSE_BAY_BIN',1)
        //await toApiNew('select * from  PSZABAT.C_TOOL_USAGE_CONDITION_ZMZEST','C_TOOL_USAGE_CONDITION',1)
        //await toApiNew('select CONTRACT,ROWNUM AS C_ROUTING_EFFICIENCY_ID,WORK_CENTER_NO,C_DLUG,C_WYTRZ,C_NRM,C_NRMNC,C_GWINT,C_POKR,C_ZAWAL,C_NRODZ,C_NCECH,C_NRYSW,C_WYMMA, C_UNIT_MEASURE,C_WYDAJNOSC from PSZABAT.SLOWNIK_WYDAJNOSCI_IFS','C_ROUTING_EFFICIENCY_CONF',1)
    
        //Arkadiusz Wrona Pomiary obiektu - konfiguracja zrobione 10.12.2024 tylko na tescie
        //await toApiNew(connectorOldDatabase,connectorTest,'SELECT * FROM WSP.V_C_MEAS_FOR_OBJECT_CONFIG','C_MEAS_FOR_OBJECT_CONFIG',1)

//zrobione 16.12.2024 10:30 poprawka kolejnosci marszrut dla wytycznych roboczych dla tloczenia await toApiNew(connectorProd,connectorProd,`SELECT DISTINCT 'KRLAN' AS  CONTRACT ,T1.PART_NO AS  PART_NO ,'1' AS ROUTING_REVISION ,'Produkcja'   AS BOM_TYPE ,'M'   AS BOM_TYPE_DB ,T1.ALTERNATIVE_NO AS ALTERNATIVE_NO ,T1.OPERATION_ID   AS OPERATION_ID ,'100'   AS GUIDELINE_NO ,'ZATWIERDZENIE ZLECENIA DO PROD'   AS GUIDELINE_DESC ,'ZATWIERDŹ ZLECENIE DO PRODUKCJI'   AS GUIDELINE_TEXT ,'1'   AS GUIDELINE_SEQ ,NULL   AS GUIDELINE_TEMPLATE ,'Wymagane do zamknięcia operacji'   AS SIGN_OFF_REQ ,'REQUIRED_AT_OP_CLOSE'   AS SIGN_OFF_REQ_DB ,'Niewymagany'   AS INSPECT_SIGN_OFF_REQ ,'NOREQUIRED'   AS INSPECT_SIGN_OFF_REQ_DB ,NULL   AS SIGN_OFF_NOTE ,NULL   AS INSPECT_SIGN_OFF_NOTE ,'Zadanie podrzędne'   AS OPER_WORK_GUIDE_TYPE ,'SUBTASK'   AS OPER_WORK_GUIDE_TYPE_DB ,NULL   AS EMP_QUALIF_PROF_ID ,NULL   AS INSP_EMP_QUALIF_PROF_ID ,NULL   AS REFERENCE_NUMBER ,NULL   AS REFERENCE_TYPE FROM ROUTING_OPERATION T1 WHERE T1.OPERATION_DESCRIPTION LIKE '%T%OCZENIE%' AND PART_NO != '2020780'`,'ROUTING_OPER_WORK_GUIDE',1)
      
// await toApiNew(connectorOldDatabase,connectorCfg,'SELECT * FROM PSZABAT.IFS_DISCRETE_CHARACTERISTIC','DISCRETE_CHARACTERISTIC',1)
// await toApiNew(connectorOldDatabase,connectorCfg,'SELECT * FROM  PSZABAT.IFS_DISCRETE_CHARAC_VALUE','DISCRETE_CHARAC_VALUE',1)
// await toApiNew(connectorOldDatabase,connectorCfg,'SELECT * FROM  PSZABAT.IFS_CHARACTERISTIC_TEMPLATE','CHARACTERISTIC_TEMPLATE',1)
// await toApiNew(connectorOldDatabase,connectorCfg,'SELECT * FROM PSZABAT.IFS_CHAR_TEMPL_DISCRETE_CHAR','CHAR_TEMPL_DISCRETE_CHAR',1)

// await toApiNew(connectorOldDatabase,connectorCfg,'SELECT * FROM  PSZABAT.INVENTORY_PART_CHAR_ALL','INVENTORY_PART_CHAR',1)
// await toApiNew(connectorOldDatabase,connectorCfg,'SELECT * FROM  PSZABAT.SALES_PART_CHARACTERISTIC','SALES_PART_CHARACTERISTIC',1)

// await toApiNew(connectorOldDatabase,connectorProd,'SELECT * FROM PSZABAT.IFS_DISCRETE_CHARACTERISTIC','DISCRETE_CHARACTERISTIC',1)
// await toApiNew(connectorOldDatabase,connectorProd,'SELECT * FROM  PSZABAT.IFS_DISCRETE_CHARAC_VALUE','DISCRETE_CHARAC_VALUE',1)
// await toApiNew(connectorOldDatabase,connectorProd,'SELECT * FROM  PSZABAT.IFS_CHARACTERISTIC_TEMPLATE','CHARACTERISTIC_TEMPLATE',1)
// await toApiNew(connectorOldDatabase,connectorProd,'SELECT * FROM PSZABAT.IFS_CHAR_TEMPL_DISCRETE_CHAR','CHAR_TEMPL_DISCRETE_CHAR',1)

// await toApiNew(connectorOldDatabase,connectorProd,'SELECT * FROM  PSZABAT.INVENTORY_PART_CHAR_ALL','INVENTORY_PART_CHAR',1)
// await toApiNew(connectorOldDatabase,connectorProd,'SELECT * FROM  PSZABAT.SALES_PART_CHARACTERISTIC','SALES_PART_CHARACTERISTIC',1)



//  await toApiNew(connectorProd,connectorProd,`SELECT 'PEMR' AS CHARACTERISTIC_CODE ,CHARACTERISTIC_VALUE_NUMERIC  ,CHARACTERISTIC_VALUE_DESC FROM DISCRETE_CHARAC_VALUE WHERE CHARACTERISTIC_CODE = 'PEMA' UNION ALL SELECT 'PEMA' AS CHARACTERISTIC_CODE  ,CHARACTERISTIC_VALUE_NUMERIC  ,CHARACTERISTIC_VALUE_DESC FROM DISCRETE_CHARAC_VALUE WHERE CHARACTERISTIC_CODE = 'PEMR'`,'DISCRETE_CHARAC_VALUE',1)
//await toApiNew(connectorOldDatabase,connectorCfg,`SELECT * FROM  PSZABAT.INVENTORY_PART_CHAR_ALL WHERE CHARACTERISTIC_CODE IN ('PEMR','PEMA')`,'INVENTORY_PART_CHAR',1)
// await toApiNew(connectorOldDatabase,connectorTest,`SELECT * FROM  PSZABAT.SALES_PART_CHARACTERISTIC WHERE CHARACTERISTIC_CODE IN ('PEMR','PEMA')`,'SALES_PART_CHARACTERISTIC',1)
// await toApiNew(connectorOldDatabase,connectorProd,`SELECT * FROM  PSZABAT.SALES_PART_CHARACTERISTIC WHERE CHARACTERISTIC_CODE IN ('PEMR','PEMA')`,'SALES_PART_CHARACTERISTIC',1)
 


// await toApiNew(connectorOldDatabase,connectorCfg,`SELECT * FROM  PSZABAT.C_CHARACTERISTIC_STNMA`,'C_CHARACTERISTIC_STNMA',1)
// await toApiNew(connectorOldDatabase,connectorCfg,`SELECT * FROM  PSZABAT.ROUT_TEMPLATE`,'ROUT_TEMPLATE',1)
//TUTAJ ODPALAM INSERTERJOINWYBRANA

// await toApiNew(connectorOldDatabase,connectorCfg,`SELECT * FROM   PSZABAT.EXT_OUT_INV_PARAM`,'EXT_OUT_INV_PARAM',1)



// await toApiNew(connectorProd,connectorProd,
//     `
// SELECT
// 'KRLAN' AS CONTRACT, 
// PART_NO, 
// 'PAKOW' AS CHARACTERISTIC_CODE, 
// '' AS UNIT_MEAS, 
// 'PAK VCI' AS ATTR_VALUE

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
// `
//     ,'INVENTORY_PART_CHAR',1)








// await toApiNew(connectorProd,connectorProd,
//     `
//  SELECT
//  'KRLAN' AS CONTRACT, 
//  PART_NO AS CATALOG_NO, 
//  'PAKOW' AS CHARACTERISTIC_CODE, 
//  '' AS UNIT_MEAS, 
//  'PAK VCI' AS ATTR_VALUE
//  FROM INVENTORY_PART
//  WHERE 
//   PART_NO IN
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
//     ,'SALES_PART_CHARACTERISTIC',1)



// await toApiNew(connectorOldDatabase,connectorCfg,
//     `
// --CREATE OR REPLACE VIEW PSZABAT.EXT_OUT_INV_POST
// --AS

// SELECT 
//  T1.COMPANY AS  COMPANY
// ,T1.LOAD_ID AS LOAD_ID
// ,T1.INVOICE_TYPE AS INVOICE_TYPE
// ,T1.INVOICE_NO AS INVOICE_NO
// ,RANK() OVER(PARTITION BY T1.INVOICE_NO ORDER BY T1.VAT_CODE ASC ) AS ITEM_ID

// ,ROW_NUMBER() OVER (PARTITION BY T1.INVOICE_TYPE || T1.INVOICE_NO ORDER BY T3.CUST_GRP ASC ) AS ROW_ID 


// ,CASE WHEN T3.CUST_GRP LIKE 'EX-%'           AND POZ_JEST.ACCOUNTING_GROUP = 'MAT'                THEN '7040020000'
//            WHEN T3.CUST_GRP LIKE 'EX-%'         AND POZ_JEST.ACCOUNTING_GROUP = 'WGT'               THEN '7010010000'

//         WHEN T3.CUST_GRP LIKE 'IC%'         AND POZ_JEST.ACCOUNTING_GROUP = 'MAT'                THEN '7041020000'
//         WHEN T3.CUST_GRP LIKE 'IC%'         AND POZ_JEST.ACCOUNTING_GROUP = 'WGT'                THEN '7011010000'
//             ELSE '' 
// END AS CODE_A



// ,'2051010020' AS CODE_B
// ,NULL AS CODE_C
// ,'EX_PL' AS CODE_D
// ,NULL AS CODE_E
// ,NULL AS CODE_F
// , POZ_JEST.PART_PRODUCT_FAMILY AS CODE_G
// ,NULL AS CODE_H
// ,NULL AS CODE_I
// ,'TX-PO' AS CODE_J
// ,NULL AS PROJECT_ACTIVITY_ID
// ,NULL AS QUANTITY


// ,CASE WHEN POZ_JEST.DS_SKONTO IS NOT NULL THEN ROUND (  POZ_JEST.DS_SKONTO / 100 *  POZ_JEST.PDS_WAR_BRUTTO , 2 )
// ELSE ROUND (  POZ_BYLO.PDS_WAR_BRUTTO + POZ_JEST.PDS_WAR_BRUTTO , 2 )
// END AS CURR_AMOUNT



// ,NULL AS DOM_AMOUNT
// ,NULL AS AUTO_POSTING_PROC_CODE
// ,T1.NAME AS TEXT
// ,T1.VAT_CODE AS OPTIONAL_CODE
// ,NULL AS PARALLEL_AMOUNT
// ,T1.CURRENCY AS CURRENCY

// FROM  DYS.KOREKTY_GLOWNE_DANE T1
// LEFT JOIN (

//                 SELECT 
//                 DS_ID
//                 ,DS_SKONTO
//                 ,ROUND ( SUM ( PDS_WAR_BRUTTO ) , 2 ) AS PDS_WAR_BRUTTO
// --               ,PDS_KIT_ID
// --               ,PDS_MITM_ID
//                 ,POZ_MAG.ACCOUNTING_GROUP
//                 ,POZ_MAG.PART_PRODUCT_FAMILY
                
//                  FROM (
//                                  SELECT DISTINCT
//                                     DS_ID
//                                      ,PDS_ID
//                                     ,DS_SKONTO
//                                     , PDS_WAR_BRUTTO
//                                     ,PDS_KIT_ID
//                                     ,PDS_MITM_ID
//                                 FROM DYS.V_KSEF_DSPZ_DETALE 
//                                   WHERE JB = 'B'  --BYLO 
//                                   AND DS_ID = 294129
// --                                       AND DS_ID = 286963
//                                        --DS_ID IN (286963,286183) 
//                                 -- NALEZY ZROBIC DISTINCT TYCH DANYCH BO W TYM WIDOKU SA ZDUPLIKOWANE WARTOSCI
//                              )    T1
                             
//                 LEFT JOIN  PSZABAT.IFS_POZYCJA_MAGAZYNOWA_TAB POZ_MAG ON  POZ_MAG.PART_NO  = NVL ( TO_CHAR ( T1.PDS_KIT_ID + 2000000 ) ,TO_CHAR (  T1.PDS_MITM_ID + 1000000) )    
             
                 
//                  GROUP BY
//                   DS_ID
//                 ,DS_SKONTO
// --               ,PDS_KIT_ID
// --               ,PDS_MITM_ID 
//                  ,POZ_MAG.ACCOUNTING_GROUP
//                 ,POZ_MAG.PART_PRODUCT_FAMILY
                
//                 ) POZ_BYLO ON T1.DS_ID = POZ_BYLO.DS_ID
                
         
     
// LEFT JOIN (

//                 SELECT 
//                 DS_ID
//                 ,DS_SKONTO
//                 ,ROUND ( SUM ( PDS_WAR_BRUTTO ) , 2 ) AS PDS_WAR_BRUTTO
// --                ,PDS_KIT_ID
// --                ,PDS_MITM_ID
//                 ,POZ_MAG.ACCOUNTING_GROUP
//                 ,POZ_MAG.PART_PRODUCT_FAMILY
                
//                  FROM (
//                                  SELECT DISTINCT
//                                     DS_ID
//                                      ,PDS_ID
//                                     ,DS_SKONTO
//                                     , PDS_WAR_BRUTTO
//                                     ,PDS_KIT_ID
//                                     ,PDS_MITM_ID
//                                 FROM DYS.V_KSEF_DSPZ_DETALE 
//                                   WHERE JB IS NULL --JEST 
//                                    AND DS_ID = 294129
// --                                  AND DS_ID = 286963
//                                   --DS_ID IN (286963,286183) 
//                                 -- NALEZY ZROBIC DISTINCT TYCH DANYCH BO W TYM WIDOKU SA ZDUPLIKOWANE WARTOSCI
//                              )    T1
                             
//                 LEFT JOIN  PSZABAT.IFS_POZYCJA_MAGAZYNOWA_TAB POZ_MAG ON  POZ_MAG.PART_NO  = NVL ( TO_CHAR ( T1.PDS_KIT_ID + 2000000 ) ,TO_CHAR (  T1.PDS_MITM_ID + 1000000) )    
              
                 
//                  GROUP BY
//                   DS_ID
//                 ,DS_SKONTO
// --              ,PDS_KIT_ID
// --              ,PDS_MITM_ID 
//                 ,POZ_MAG.ACCOUNTING_GROUP
//                 ,POZ_MAG.PART_PRODUCT_FAMILY
                
//                 ) POZ_JEST ON T1.DS_ID = POZ_JEST.DS_ID     AND             POZ_JEST.DS_ID = POZ_BYLO.DS_ID   AND             POZ_JEST.PART_PRODUCT_FAMILY = POZ_BYLO.PART_PRODUCT_FAMILY
            


// LEFT JOIN  PSZABAT.Cust_Ord_Customer T3 ON  T3.CUSTOMER_ID = T1.IDENTITY

// WHERE DS_ID = 294129
//     `
//     ,'EXT_OUT_INV_POST',1)





// await toApiNew(connectorProd,connectorProd,
//         `
//   SELECT 
// T1.RESOURCE_PARENT_SEQ
// ,T1.RESOURCE_SEQ
// ,T1.COMPANY
// ,T1.SITE 
// , to_char ( to_date('2020.01.01', 'YYYY-MM-DD'), 'YYYY-MM-DD')  AS START_DATE
// ,TO_CHAR(T1.START_DATE - 1, 'YYYY-MM-DD') AS END_DATE
// ,t1.efficiency
// FROM  WORK_CENTER_RESOURCE T0
// JOIN RESOURCE_AVAILABILITY T1 ON T0.resource_seq = T1.resource_seq AND T0.contract = T1.site
// WHERE T1.SITE = 'KRLAN'
//         `
//         ,'RESOURCE_AVAILABILITY',1)



// await toApiNew(connectorProd,connectorProd,
//         `
// SELECT  
// T1.CONTRACT
// ,T1.TOOL_ID
// ,T1.tool_id AS TOOL_INSTANCE      
// ,T1.tool_description AS DESCRIPTION  
//    FROM   Manuf_Tool T1
//     JOIN INVENTORY_PART  T2 ON T1.tool_id = T2.PART_NO
//     LEFT JOIN  Manuf_Tool_Detail T3 ON T1.tool_id = T3.tool_id AND T1.contract = T3.contract
//     WHERE T1.CONTRACT = 'KRLAN'
//     AND T2.PRIME_COMMODITY IN 
//                (
//               'NRSRM'
//               )
//   AND T3.tool_instance IS NULL
//         `
//         ,'MANUF_TOOL_DETAIL',1)




// await toApiNew(connectorOldDatabase,connectorProd,
//         `
// select * from PSZABAT.R_WAREHOUSE_BAY_LOK_MAG
//         `
//         ,'WAREHOUSE_BAY',1)


// await toApiNew(connectorOldDatabase,connectorProd,
//         `
// select * from PSZABAT.R_WAREHOUSE_BAY_ROW_LOK_MAG
//         `
//         ,'WAREHOUSE_BAY_ROW',1)


// await toApiNew(connectorOldDatabase,connectorProd,
//             `
// select * from PSZABAT.R_WAREHOUSE_BAY_TIER_LOK_MAG
//             `
//             ,'WAREHOUSE_BAY_TIER',1)


// await toApiNew(connectorOldDatabase,connectorProd,
//                 `
//     select * from PSZABAT.R_WAREHOUSE_BAY_BIN
//                 `
//                 ,'WAREHOUSE_BAY_BIN',1)



//   await toApiNew(connectorXlsx,connectorCfg
    
//     ,`Inventory_Part_In_Stock_Deliv`
//     ,'Inventory_Part_In_Stock'
//     ,1)






//   await toApiNew(connectorCfg,connectorProd
    
//     ,`SELECT CONTRACT, ROUT_TEMPLATE_DESC FROM ROUT_TEMPLATE`
//     ,'ROUT_TEMPLATE'
//     ,1)


    // await toApiNew(connectorCfg,connectorProd
    
    //     ,`SELECT CONTRACT, ROUT_TEMPLATE_DESC FROM ROUTING_ALTERNATE`
    //     ,'ROUTING_ALTERNATE'
    //     ,1)


    // await toApiNew(connectorXlsx,connectorCfg
    // ,`Inventory_Part_In_Stock_Deliv v.2`
    // ,'Inventory_Part_In_Stock'
    // ,1)

    // await toApiNew(connectorXlsx,connectorCfg
    //     ,`Inventory_Part_In_Stock_Deliv v.3`
    //     ,'Inventory_Part_In_Stock'
    //     ,1)


    // await toApiNew(connectorXlsx,connectorProd
    //     ,`INSERT index test PROD_STRUCTURE 0`
    //     ,'PROD_STRUCTURE'
    //     ,1)

        // await toApiNew(connectorXlsx,connectorProd
        //     ,`INSERT 1 PROD_STRUCTURE`
        //     ,'PROD_STRUCTURE'
        //     ,1)
    


// await toApiNew(connectorOldDatabase,connectorProd
//     ,`SELECT 
// HANDLING_UNIT_TYPE_ID
// ,DESCRIPTION
// ,HANDLING_UNIT_CATEGORY_ID
// ,WIDTH
// ,HEIGHT
// ,DEPTH
// ,VOLUME
// ,TARE_WEIGHT
// ,UOM_FOR_LENGTH
// ,UOM_FOR_VOLUME
// ,UOM_FOR_WEIGHT
// ,ADDITIVE_VOLUME_DB
// ,MAX_VOLUME_CAPACITY
// ,MAX_WEIGHT_CAPACITY
// ,STACKABLE_DB
// ,COST
// ,CURRENCY_CODE
// ,GENERATE_SSCC_NO_DB
// ,PRINT_LABEL_DB
// ,NO_OF_HANDLING_UNIT_LABELS
// ,PRINT_CONTENT_LABEL_DB
// ,NO_OF_CONTENT_LABELS
// ,PRINT_SHIPMENT_LABEL_DB
// ,NO_OF_SHIPMENT_LABELS
// ,USE_HU_RESERVATION_RANKING_DB
// ,NOTE_TEXT
// ,TRANSPORT_TASK_CAPACITY
// ,PART_NO
// ,REUSABLE_DB 
//  FROM WSP.V_IFS_TYPY_JO_MIG
//  order by 1 desc`
//     ,'HANDLING_UNIT_TYPE'
//     ,1)
  

    // await toApiNew(connectorProd,connectorCfg
    //     ,`SELECT  
    //     ORDER_NO
    //     ,RELEASE_NO
    //     ,SEQUENCE_NO
    //     ,ORDER_CODE_DB
    //     ,CONTRACT
    //     ,PART_NO
    //     , to_char ( to_date(NEED_DATE, 'YYYY-MM-DD'), 'YYYY-MM-DD')   as NEED_DATE
    //     ,ORG_QTY_DUE
    //     ,ENG_CHG_LEVEL
    //     ,STRUCTURE_ALTERNATIVE
    //     ,ROUTING_REVISION
    //     ,ROUTING_ALTERNATIVE
    //     ,NOTE_TEXT
        
    //     FROM IC_BO_SO_CRE_001 WHERE PART_NO = '2178480'`
    //     ,'SHOP_ORD'
    //     ,1)



// await toApiNew(connectorCfg,connectorCfg,
//         `
// SELECT 
// T2.contract AS CONTRACT
// ,T2.tool_id AS TOOL_ID
// ,T1.serial_no AS TOOL_INSTANCE
// ,TOOL_DESCRIPTION as DESCRIPTION
// FROM PART_SERIAL_CATALOG T1
// JOIN MANUF_TOOL T2 ON T1.part_no = T2.tool_id
// WHERE T2.CONTRACT = 'KRLAN'
//     and t2.tool_id = '2010364'
//         `
//         ,'MANUF_TOOL_DETAIL',1)








//   await toApiNew(connectorXlsx,connectorProd
    
//     ,`CECHY DYSKRETNE`
//     ,'DISCRETE_CHARAC_VALUE'
//     ,1)



//   await toApiNew(connectorXlsx,connectorProd
    
//     ,`struktura pakowania kotwy - RAFAL BOCZKOWSKI`
//     ,'PART_HANDLING_UNIT'
//     ,1)

    // await toApiNew(connectorXlsx,connectorProd
    
    //     ,`test-boczek`
    //     ,'PART_HANDLING_UNIT'
    //     ,1)




    // await toApiNew(connectorXlsx,connectorProd
    //     ,`PACK_INSTR_NODE_ACCESSORY BOCZKOWSKI`
    //     ,'PACK_INSTR_NODE_ACCESSORY'
    //     ,1)



    // await toApiNew(connectorXlsx,connectorProd,
    //     `etykiety do IFS 13.05.2025`
    //     ,'PURCHASE_PART_SUPPLIER'
    //     ,1)





/*  Łukasz Szpytma, Wojciech Rączka - Marszruty i struktury demontażu  */


// await toApiNew(connectorProd,connectorProd,
// `
// WITH POCZATKOWE_DANE AS (
// SELECT
// T1.PART_NO
// FROM INVENTORY_PART T1
// JOIN PROD_STRUCT_ALTERNATE T2 ON T1.CONTRACT = T2.contract 
//                               AND T1.PART_NO = T2.part_no    
// LEFT JOIN PROD_STRUCTURE T3 ON T1.CONTRACT = T3.contract 
//                               AND T1.PART_NO = T3.part_no 
//                               AND T3.bom_type_db = 'DA'              
// WHERE T1.CONTRACT = 'KRLAN'
// AND T1.PRIME_COMMODITY = 'NRSRM'
// AND T2.alternative_no = '*'
// AND T2.bom_type_db = 'M'
// AND T2.OBJSTATE = 'Buildable'
// AND T3.part_no IS NULL
// )


// SELECT
// T1.contract,
// T1.part_no,
// T1.routing_revision,
// 'DA' AS bom_type_db,
// to_char ( to_date('2020.01.01', 'YYYY-MM-DD'), 'YYYY-MM-DD')  AS  PHASE_IN_DATE

// FROM ROUTING_HEAD T1
// WHERE T1.CONTRACT = 'KRLAN'
// AND T1.routing_revision = 1
// AND T1.bom_type_db = 'M'
// AND T1.PART_NO IN ( SELECT PART_NO FROM POCZATKOWE_DANE )

//         `
//         ,'ROUTING_HEAD',1)




/* GWIAZDKOWA SIE TWORZY AUTOMATYCZNIE
await toApiNew(connectorCfg,connectorCfg,
`
WITH POCZATKOWE_DANE AS (
SELECT
T1.PART_NO
FROM INVENTORY_PART T1
JOIN PROD_STRUCT_ALTERNATE T2 ON T1.CONTRACT = T2.contract 
                              AND T1.PART_NO = T2.part_no    
LEFT JOIN PROD_STRUCTURE T3 ON T1.CONTRACT = T3.contract 
                              AND T1.PART_NO = T3.part_no 
                              AND T3.bom_type_db = 'DA'              
WHERE T1.CONTRACT = 'KRLAN'
AND T1.PRIME_COMMODITY = 'NRSRM'
AND T2.alternative_no = '*'
AND T2.bom_type_db = 'M'
AND T2.OBJSTATE = 'Buildable'
AND T3.part_no IS NULL
)


SELECT
T1.contract,
T1.part_no,
T1.routing_revision,
'DA' AS bom_type_db,
T1.alternative_no
FROM ROUTING_ALTERNATE T1
WHERE T1.CONTRACT = 'KRLAN'
AND T1.routing_revision = 1
AND T1.bom_type_db = 'M'
AND AND T1.ALTERNATIVE_NO = '*'
AND T1.PART_NO IN ( SELECT PART_NO FROM POCZATKOWE_DANE )

        `
        ,'ROUTING_ALTERNATE',1)
*/




// await toApiNew(connectorProd,connectorProd,
// `
// WITH POCZATKOWE_DANE AS (
// SELECT
// T1.PART_NO
// FROM INVENTORY_PART T1
// JOIN PROD_STRUCT_ALTERNATE T2 ON T1.CONTRACT = T2.contract 
//                               AND T1.PART_NO = T2.part_no    
// LEFT JOIN PROD_STRUCTURE T3 ON T1.CONTRACT = T3.contract 
//                               AND T1.PART_NO = T3.part_no 
//                               AND T3.bom_type_db = 'DA'              
// WHERE T1.CONTRACT = 'KRLAN'
// AND T1.PRIME_COMMODITY = 'NRSRM'
// AND T2.alternative_no = '*'
// AND T2.bom_type_db = 'M'
// AND T2.OBJSTATE = 'Buildable'
// AND T3.part_no IS NULL
// )


// SELECT
// T1.contract,
// T1.part_no,
// T1.routing_revision,
// 'DA' AS bom_type_db,
// T1.alternative_no,
// T1.operation_no,
// T1.operation_description,
// to_char ( to_date('2020.01.01', 'YYYY-MM-DD'), 'YYYY-MM-DD')  AS PHASE_IN_DATE,
// T1.lot_qty,
// T1.efficiency_factor,
// T1.mach_run_factor,
// T1.mach_setup_time,
// T1.move_time,
// T1.labor_run_factor,
// T1.labor_setup_time,
// T1.crew_size,
// T1.setup_crew_size,
// T1.outside_op_item,
// T1.machine_no,
// T1.note_text,
// T1.source,

// T1.parallel_operation_db,

// T1.run_time_code_db,
// T1.work_center_no,
// T1.alternate_work_center,
// T1.labor_class_no,
// T1.setup_labor_class_no,
// T1.std_operation_name,
// T1.operation_usage_factor,

// T1.outside_op_supply_type_db,

// T1.outside_op_backflush_db,
// T1.overlap,

// T1.overlap_unit_db,

// T1.include_setup_for_overlap_db,

// T1.milestone_operation_db,

// T1.increase_lotsize_on_scrap_db,
// T1.company,
// T1.comp_profile_id,
// T1.setup_comp_profile_id,

// T1.send_to_next_supplier_db,
// T1.resource_share_per_unit,
// T1.fixed_resource_share,
// T1.reference_number,
// T1.reference_type,

// T1.manual_operation_qty_db,
// T1.operation_qty_factor,
// T1.c_pref_resource,

// T1.c_rep_oper_input_u_m_db,
// T1.c_oper_input_unit_meas,
// T1.c_input_unit_meas_group_id,

// T1.c_receive_semifin_part_db,

// T1.c_issue_semifin_part_db,
// T1.c_handling_unit_type_id,
// T1.c_qty_pieces_per_cycle,

// T1.c_semifin_oper_block_db

// FROM ROUTING_OPERATION T1
// WHERE T1.CONTRACT = 'KRLAN'
// AND T1.operation_description = 'N430'
// AND T1.routing_revision = 1
// AND T1.bom_type_db = 'M'
// AND T1.ALTERNATIVE_NO = '*'
// AND T1.PART_NO IN ( SELECT PART_NO FROM POCZATKOWE_DANE )

//         `
//         ,'ROUTING_OPERATION',1)







// await toApiNew(connectorProd,connectorProd,
// `
// WITH POCZATKOWE_DANE AS (
// SELECT
// T1.PART_NO
// FROM INVENTORY_PART T1
// JOIN PROD_STRUCT_ALTERNATE T2 ON T1.CONTRACT = T2.contract 
//                               AND T1.PART_NO = T2.part_no    
// LEFT JOIN PROD_STRUCTURE T3 ON T1.CONTRACT = T3.contract 
//                               AND T1.PART_NO = T3.part_no 
//                               AND T3.bom_type_db = 'DA'              
// WHERE T1.CONTRACT = 'KRLAN'
// AND T1.PRIME_COMMODITY = 'NRSRM'
// AND T2.alternative_no = '*'
// AND T2.bom_type_db = 'M'
// AND T2.OBJSTATE = 'Buildable'
// AND T3.part_no IS NULL
// )


// SELECT
// T1.contract,
// T1.part_no,
// T1.eng_chg_level,
// 'DA' AS bom_type_db,
// T1.note_text,
// to_char ( to_date('2020.01.01', 'YYYY-MM-DD'), 'YYYY-MM-DD')  AS eff_phase_in_date

// FROM PROD_STRUCTURE_HEAD T1
// WHERE T1.CONTRACT = 'KRLAN'
// AND T1.ENG_CHG_LEVEL = 1
// AND T1.bom_type_db = 'M'
// AND T1.ALTERNATIVE_NO = '*'
// AND T1.PART_NO IN ( SELECT PART_NO FROM POCZATKOWE_DANE )

//         `
//         ,'PROD_STRUCTURE_HEAD',1)






/* GWIAZDKOWA SIE TWORZY AUTOMATYCZNIE
await toApiNew(connectorCfg,connectorCfg,
`
WITH POCZATKOWE_DANE AS (
SELECT
T1.PART_NO
FROM INVENTORY_PART T1
JOIN PROD_STRUCT_ALTERNATE T2 ON T1.CONTRACT = T2.contract 
                              AND T1.PART_NO = T2.part_no    
LEFT JOIN PROD_STRUCTURE T3 ON T1.CONTRACT = T3.contract 
                              AND T1.PART_NO = T3.part_no 
                              AND T3.bom_type_db = 'DA'              
WHERE T1.CONTRACT = 'KRLAN'
AND T1.PRIME_COMMODITY = 'NRSRM'
AND T2.alternative_no = '*'
AND T2.bom_type_db = 'M'
AND T2.OBJSTATE = 'Buildable'
AND T3.part_no IS NULL
)


SELECT
T1.contract,
T1.part_no,
T1.eng_chg_level,
'DA' AS bom_type_db,
T1.alternative_no,
T1.note_text,
T1.use_cost_distribution_db
FROM PROD_STRUCT_ALTERNATE T1
WHERE T1.CONTRACT = 'KRLAN'
AND T1.ENG_CHG_LEVEL = 1
AND T1.bom_type_db = 'M'
AND T1.ALTERNATIVE_NO = '*'
AND T1.PART_NO IN ( SELECT PART_NO FROM POCZATKOWE_DANE )

        `
        ,'PROD_STRUCT_ALTERNATE',1)
*/        
        




        


// await toApiNew(connectorProd,connectorProd,
// `
// WITH POCZATKOWE_DANE AS (
// SELECT
// T1.PART_NO
// FROM INVENTORY_PART T1
// JOIN PROD_STRUCT_ALTERNATE T2 ON T1.CONTRACT = T2.contract 
//                               AND T1.PART_NO = T2.part_no    
// LEFT JOIN PROD_STRUCTURE T3 ON T1.CONTRACT = T3.contract 
//                               AND T1.PART_NO = T3.part_no 
//                               AND T3.bom_type_db = 'DA'              
// WHERE T1.CONTRACT = 'KRLAN'
// AND T1.PRIME_COMMODITY = 'NRSRM'
// AND T2.alternative_no = '*'
// AND T2.bom_type_db = 'M'
// AND T2.OBJSTATE = 'Buildable'
// AND T3.part_no IS NULL
// )


// SELECT
// T1.CONTRACT,
// T1.PART_NO,
// T1.ENG_CHG_LEVEL,

// 'DA' AS BOM_TYPE_DB,

// T1.ALTERNATIVE_NO,
// T1.LINE_ITEM_NO,
// T1.LINE_SEQUENCE,

// T1.QTY_PER_ASSEMBLY * (-1) AS QTY_PER_ASSEMBLY,

// T1.ISSUE_TO_LOC,
// T1.CONSUMPTION_ITEM_DB,
// T1.PHANTOM_CONSUME_DB,
// T1.CHARGED_ITEM_DB,
// T1.COMPONENT_PART,
// T1.PRINT_UNIT,
// T1.PROMISE_PLANNED_DB,
// T1.VALUE_ANALYSIS_FUNC_ID,
// T1.VALUE_ANALYSIS_FUNC_TYPE_DB,
// T1.PROCEDURE_STEP,
// T1.COMPONENT_USAGE_FACTOR,
// T1.CUST_WARRANTY_ID,
// T1.PURCHASE_COMP_BACKFLUSH_DB,
// T1.STD_PLANNED_ITEM,
// T1.GEN_OH_COST_DISTRIBUTION,
// T1.OPER_COST_DISTRIBUTION,
// T1.EXCLUDE_FROM_AS_BUILT_DB,
// T1.ISSUE_TYPE_DB,
// T1.ISSUE_PLANNED_SCRAP_DB,
// T1.LOT_BATCH_ORIGIN_DB,
// T1.EXPIRATION_DATE_ORIGIN_DB,
// T1.ISSUE_OVERREPORTED_QTY_DB,

// 'DA_COMPONENT' AS STRUCTURE_COMPONENT_TYPE_DB,

// T1.CONDITION_CODE,

// 'TRUE' AS AUTO_ADJUST_COST_DISTR_DB,

// T1.PRODUCED_PART_COST_BASE_DB,

// to_char ( to_date('2020.01.01', 'YYYY-MM-DD'), 'YYYY-MM-DD')  AS EFF_PHASE_IN_DATE,

// T1.COMPONENT_SCRAP,
// T1.SHRINKAGE_FACTOR,
// T1.OPERATION_NO,
// T1.LEADTIME_OFFSET,
// T1.NOTE_TEXT,
// T1.SOURCE,
// T1.DRAW_POS_NO,
// T1.COMPONENT_CONTRACT,
// T1.VIM_STRUCTURE_SOURCE_DB,
// T1.PROD_PART_AS_SUPPLY_IN_MRP_DB,

// T1.QTY_PER_ASSEMBLY AS PROD_PART_QTY_PER_ASSEMBLY,


// T1.STOP_BOM_EXPLOSION_DB,
// T1.ALTERNATE_COMPONENT_FACTOR,
// T1.C_COMPONENT_TYPE,
// T1.mrp_order_code
// FROM PROD_STRUCTURE T1
// WHERE T1.CONTRACT = 'KRLAN'
// AND T1.ENG_CHG_LEVEL = 1
// AND T1.bom_type_db = 'M'
// AND T1.ALTERNATIVE_NO = '*'
// AND T1.PART_NO IN ( SELECT PART_NO FROM POCZATKOWE_DANE )

//         `
//         ,'PROD_STRUCTURE',1)        



/*  END Łukasz Szpytma, Wojciech Rączka - Marszruty i struktury demontażu  END */













await toApiNew(connectorProd,connectorProd,
        `
SELECT
'KRLAN'                         AS  CONTRACT  
,PART_NO                     AS  PART_NO
,'1'                            AS  ROUTING_REVISION
,'M'                            AS  BOM_TYPE_DB
,'*'                            AS  ALTERNATIVE_NO
,'3400'                         AS  OPERATION_NO
,'PAKOWANIE'                    AS  OPERATION_DESCRIPTION
,'100'                          AS  EFFICIENCY_FACTOR
,'0.001'                        AS  MACH_RUN_FACTOR
,'0'                            AS  MACH_SETUP_TIME
,'0.5'                          AS  MOVE_TIME
,'0.001'                        AS  LABOR_RUN_FACTOR
,'0'                            AS  LABOR_SETUP_TIME
,'1'                            AS  CREW_SIZE
,'N'                  AS  PARALLEL_OPERATION_DB
,'3'                        AS  RUN_TIME_CODE_DB
,'PKKTW'                        AS  WORK_CENTER_NO
,'PPMONT'                       AS  LABOR_CLASS_NO
,'REQUISITION'             AS  OUTSIDE_OP_SUPPLY_TYPE_DB
,'DISALLOWED'                   AS  OUTSIDE_OP_BACKFLUSH_DB
,'0'                            AS  OVERLAP
,'UNITS'                        AS  OVERLAP_UNIT_DB
,'FALSE'                        AS  MILESTONE_OPERATION_DB
,'FALSE'                        AS  INCREASE_LOTSIZE_ON_SCRAP_DB
,'205'                          AS  COMPANY
,'FALSE'                        AS  SEND_TO_NEXT_SUPPLIER_DB
,'1'                            AS  FIXED_RESOURCE_SHARE
,'FALSE'                        AS  C_REP_OPER_INPUT_U_M_DB
,PART_NO                      AS  C_INPUT_UNIT_MEAS_GROUP_ID
,'FALSE'                        AS  C_RECEIVE_SEMIFIN_PART_DB
,'TRUE'                       AS  C_ISSUE_SEMIFIN_PART_DB
,'FALSE'                        AS  C_SEMIFIN_OPER_BLOCK_DB
,'N'                        AS  INCLUDE_SETUP_FOR_OVERLAP_DB

FROM ROUTING_ALTERNATE
WHERE ALTERNATIVE_NO = '*'
AND PART_NO IN (


'2177636'
,'2177605'
,'2177635'
,'2177607'
,'2177637'
,'2177609'
,'2177611'
,'2177478'
,'2177472'
,'2177479'
,'2177473'
,'2177480'
,'2177477'
,'2177474'
,'2177662'
,'2177475'
,'2177476'
,'2177481'
,'2183747'
,'2183748'
,'2183749'
,'2183750'
,'2183751'
,'2183752'
,'2181087'
,'2181089'
,'2181091'
,'2181092'
,'2181094'
,'2181095'
,'2178552'
,'2176659'
,'2176658'
,'2176660'
,'2176661'
,'2176662'
,'2176664'
,'2177458'
,'2177459'
,'2177460'
,'2177517'
,'2177461'
,'2177462'
,'2181116'
,'2181118'
,'2181120'
,'2181121'
,'2181123'
,'2181124'
,'2177536'
,'2177564'
,'2177485'
,'2177565'
,'2177533'
,'2177486'
,'2177549'
,'2177566'
,'2177567'
,'2177464'
,'2177463'
,'2177629'
,'2177630'
,'2177450'
,'2177465'
,'2177631'
,'2177467'
,'2177466'
,'2177468'
,'2177469'
,'2183753'
,'2183754'
,'2183755'
,'2183756'
,'2183757'
,'2183758'
,'2183759'
,'2181096'
,'2181097'
,'2181098'
,'2181099'
,'2181100'
,'2178390'
,'2176667'
,'2176668'
,'2176670'
,'2176671'
,'2176672'
,'2177511'
,'2177512'
,'2177513'
,'2177514'
,'2177515'
,'2177516'
,'2181125'
,'2181126'
,'2181127'
,'2181128'
,'2181129'
,'2181130'
,'2177493'
,'2177489'
,'2177575'
,'2177490'
,'2177492'
,'2177495'
,'2177577'
,'2177580'
,'2177358'
,'2177359'
,'2177632'
,'2177554'
,'2177366'
,'2177360'
,'2177367'
,'2177470'
,'2177361'
,'2177633'
,'2177362'
,'2177497'
,'2177498'
,'2177552'
,'2177499'
,'2177553'
,'2177500'
,'2183760'
,'2183762'
,'2183763'
,'2183764'
,'2183765'
,'2183766'
,'2183767'
,'2183768'
,'2183769'
,'2183770'
,'2181102'
,'2181103'
,'2181366'
,'2181367'
,'2181105'
,'2181106'
,'2178391'
,'2176678'
,'2176679'
,'2176680'
,'2176681'
,'2176682'
,'2176683'
,'2176684'
,'2177518'
,'2177519'
,'2177530'
,'2177940'
,'2177520'
,'2177521'
,'2177522'
,'2181131'
,'2181132'
,'2181133'
,'2181135'
,'2181136'
,'2181137'
,'2177600'
,'2177529'
,'2177584'
,'2177586'
,'2177484'
,'2177589'
,'2177550'
,'2177551'
,'2177590'
,'2177591'
,'2177592'
,'2177596'
,'2177594'
,'2177598'
,'2177599'
,'2177351'
,'2177346'
,'2177352'
,'2177345'
,'2177634'
,'2177491'
,'2177347'
,'2177353'
,'2177348'
,'2177507'
,'2177453'
,'2177508'
,'2177454'
,'2177509'
,'2183771'
,'2183772'
,'2183773'
,'2183774'
,'2183775'
,'2183776'
,'2183777'
,'2183778'
,'2183779'
,'2187243'
,'2187245'
,'2187246'
,'2187247'
,'2187248'
,'2179914'
,'2176673'
,'2176674'
,'2176675'
,'2176676'
,'2176677'
,'2177523'
,'2177524'
,'2177525'
,'2177526'
,'2187233'
,'2187234'
,'2187235'
,'2187242'
,'2177612'
,'2177614'
,'2177601'
,'2177510'
,'2177602'
,'2177531'
,'2177603'
,'2177604'
,'2177606'
,'2177608'
,'2177610'
,'2177494'
,'2177496'
,'2177555'
,'2177663'
,'2177548'
,'2177456'
,'2177451'
,'2183780'
,'2183781'
,'2183782'
,'2183783'
,'2183784'
,'2187249'
,'2187250'
,'2187251'
,'2187252'
,'2187253'
,'2177666'
,'2177502'
,'2177532'
,'2177621'
,'2177772'
,'2177773'
,'2177618'
,'2177774'
,'2180684'
,'2177659'
,'2177660'
,'2177661'
,'2177665'

)
        `
        ,'ROUTING_OPERATION',1)





} catch (error) {
    console.error('Error occurred during execution:', error);
}
}



inserterWybrana();
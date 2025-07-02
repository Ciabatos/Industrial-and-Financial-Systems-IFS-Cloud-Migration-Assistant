import {toApiHardUpdate} from '../util/toApiHardUpdate.js'
import { connectorOldDatabase } from "../db/connectorOldDatabase.js";
import {connectorCfg } from "../db/connectorCfg.js";
import {connectorTest } from "../db/connectorTest.js";
import {connectorProd } from "../db/connectorProd.js";
import {connectorXlsx } from "../db/connectorXlsx.js";

async function updaterApiHardUpdate() {
    try {





    await toApiHardUpdate(connectorOldDatabase,connectorProd
        ,`SELECT DISTINCT CONTRACT ,PART_NO ,MAX(MANUFACTURER_NO) AS MANUFACTURER_NO FROM WSP.IFS_RWL_STANY_MAGAZYNOWE WHERE  MANUFACTURER_NO != '*' GROUP BY CONTRACT ,PART_NO `
        ,`
with RAPORT_TRANSAKCJI AS (

SELECT
T1.CONTRACT
,T2.part_no
,T2.location_no
,T3.warehouse_id
,T1.PART_PRODUCT_FAMILY
,T1.PRIME_COMMODITY
,T1.ACCOUNTING_GROUP
,T2.lot_batch_no
,T2.serial_no

,T2.TRANSACTION_CODE
,T2.TRANSACTION
,T2.DIRECTION

,CASE WHEN T2.DIRECTION = '-' THEN  T2.quantity * (-1)
 ELSE T2.quantity 
END AS quantity

,T1.UNIT_MEAS
,T2.DATE_APPLIED
-- ,T2.COST
,T2.transaction_id
,T2.SOURCE
-- ,CASE WHEN T2.DIRECTION = '-' THEN  ROUND(T2.quantity,2) * ROUND( T2.COST,2) * (-1)
--  ELSE ROUND(T2.quantity,2) * ROUND(T2.COST,2)
-- END AS WARTOSC



            ,CASE 
                  WHEN to_char(trunc(sysdate, 'MM')-365-2,'YYYY-MM') <= TO_CHAR (T2.date_applied, 'yyyy-mm-dd') THEN 1
                  WHEN TO_CHAR (T2.date_applied, 'yyyy-mm-dd') BETWEEN to_char(trunc(sysdate, 'MM')-(365*2)-2,'YYYY-MM') AND to_char(trunc(sysdate, 'MM')-(365*1)-2,'YYYY-MM')  THEN 2
                  WHEN TO_CHAR (T2.date_applied, 'yyyy-mm-dd')BETWEEN to_char(trunc(sysdate, 'MM')-(365*3)-2,'YYYY-MM') AND to_char(trunc(sysdate, 'MM')-(365*2)-2,'YYYY-MM')  THEN 3
                  WHEN TO_CHAR (T2.date_applied, 'yyyy-mm-dd') BETWEEN to_char(trunc(sysdate, 'MM')-(365*4)-2,'YYYY-MM') AND to_char(trunc(sysdate, 'MM')-(365*3)-2,'YYYY-MM')  THEN 4
                  WHEN TO_CHAR (T2.date_applied, 'yyyy-mm-dd') BETWEEN to_char(trunc(sysdate, 'MM')-(365*5)-2,'YYYY-MM') AND to_char(trunc(sysdate, 'MM')-(365*4)-2,'YYYY-MM')  THEN 5
                  WHEN TO_CHAR (T2.date_applied, 'yyyy-mm-dd') BETWEEN to_char(trunc(sysdate, 'MM')-(365*6)-2,'YYYY-MM') AND to_char(trunc(sysdate, 'MM')-(365*5)-2,'YYYY-MM')  THEN 6
                  ELSE 9999
              END AS MAX_OKRES_ZALEGANIA

,NVL(P1.VENDOR_NO,B1.MANUFACTURER_NO) AS VENDOR_NO

FROM INVENTORY_PART T1
JOIN INVENTORY_TRANSACTION_HIST2 T2 ON T1.CONTRACT = T2.contract AND T1.PART_NO = T2.part_no
JOIN WAREHOUSE_BAY_BIN T3 ON T2.location_no = T3.location_no
LEFT JOIN PURCHASE_ORDER P1 ON P1.ORDER_NO = T2.SOURCE_REF1
                            AND P1.CONTRACT = T1.CONTRACT 
                            AND P1.vendor_no IN (
                                                  SELECT 
                                                  VENDOR_NO
                                                  FROM SUPPLIER
                                                  WHERE SUPP_GRP LIKE 'IC%'
                                                  )
LEFT JOIN LOT_BATCH_MASTER B1 ON B1.part_no = T1.part_no -- INFORMACJA O DOSTAWCY Z DANYCH PROMIS(STARYCH) SA ZAPISANE TUTAJ
                              AND B1.lot_batch_no = T2.lot_batch_no
--                              AND B1.initial_contract = T1.contract
                             AND B1.MANUFACTURER_NO IN (
                                                  SELECT 
                                                  VENDOR_NO
                                                  FROM SUPPLIER
                                                  WHERE SUPP_GRP LIKE 'IC%'
                                                  )
WHERE T1.CONTRACT = 'KRLAN'
AND T2.DIRECTION != '0'
-- AND t1.part_no = '1000449'
-- AND T2.lot_batch_no  = '22/06-2097/1'
-- AND T2.location_no = 'O5010 N1 01-00-0100'
AND T2.DATE_APPLIED <= LAST_DAY(TO_DATE('01' || '04' || '2025', 'DDMMYYYY'))
AND T2.PART_OWNERSHIP_DB != 'SUPPLIER LOANED'
AND T3.warehouse_id NOT IN ('SK040','SK050','SK060')-- ONE SA WLASNOSCIA NIE NASZA MIMO ZE W IFS WIDAC ZE SA NASZE XD
AND T2.TRANSACTION_CODE = 'NREC'

)




SELECT
*
FROM (

SELECT 
R1.CONTRACT
,R1.PART_NO
,R1.TRANSACTION_ID


FROM RAPORT_TRANSAKCJI R1 
 WHERE R1.VENDOR_NO IS  NULL
AND R1.LOT_BATCH_NO = '*'
AND R1.SOURCE IS NULL
)


        ` /* TO WHERE STATEMENT ALL OF THIS */
        ,'INVENTORY_TRANSACTION_HIST_TAB' /* VIEW  TO UPDATE */
        ,`CONTRACT;PART_NO` /* TO WHERE STATEMENT FROM FIRST ARGUMENT*/
        ,1
        )

    
    
    

} catch (error) {
    console.error('Error occurred during execution:', error);
}
}



updaterApiHardUpdate();
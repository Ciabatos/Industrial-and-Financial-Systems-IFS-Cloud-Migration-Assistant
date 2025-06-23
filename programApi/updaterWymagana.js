import {toApiModify} from '../util/toApiModify2.js'
import { connectorOldDatabase } from "../db/connectorOldDatabase.js";
import {connectorCfg } from "../db/connectorCfg.js";
import {connectorTest } from "../db/connectorTest.js";
import {connectorProd } from "../db/connectorProd.js";

async function updaterWybrana() {
    try {

    // zasoby
      //await toApiModify(`select CONTRACT,WORK_CENTER_NO,RESOURCE_ID,MCH_CODE, EQUIPMENT_OBJECT_SEQ from PSZABAT.IFS_WORK_CENTER_RESOURCE`,'WORK_CENTER_RESOURCE','CONTRACT;WORK_CENTER_NO;RESOURCE_ID',1)
    
    //ROUTING_OPERATION_COST KOSZTY OD DANUTY I ROBERTA
     // await toApiModify(`select CONTRACT,PART_NO,COST_SET,OPERATION_NO,OUTSIDE_UNIT_COST from PSZABAT.ROUTING_OPERATION_COST`,'ROUTING_OPERATION_COST','CONTRACT;PART_NO;COST_SET;OPERATION_NO',1)

    //MANUF_PART_ATTRIBUTE
    // ZROBIONE 06.12.2024 await toApiModify(`SELECT CONTRACT,PART_NO, C_EXCLUDE_FROM_SHIP_ORDER_DB , C_FULL_HANDLING_UNIT_DB FROM PSZABAT.MANUF_PART_ATTRIBUTE`,'MANUF_PART_ATTRIBUTE','CONTRACT;PART_NO',1)

     //ZMIANA USUWANIE FOSFORANÓW Z MEA NA UCIEP

     // ZROBIONE 06.12.2024 await toApiModify(`SELECT CONTRACT,PART_NO,ALTERNATIVE_NO,OPERATION_ID,'UCIEP' AS WORK_CENTER_NO FROM PSZABAT.FINAL_OPERATIONS_NEW_ALT_TAB WHERE OPERATION_DESCRIPTION like 'USUWANIE FOSFORAN%W'`,'ROUTING_OPERATION','CONTRACT;PART_NO;ALTERNATIVE_NO;OPERATION_ID',1)
     

//ZMIANA WORK CENTER NA HART DLA OPERACJI N920 I STANOWISKA KOOP1
//zrobione await  toApiModify(connectorProd,connectorProd,`             SELECT               T1.CONTRACT               ,T1.part_no               ,T1.routing_revision               ,T1.bom_type_db               ,T1.alternative_no               ,T1.operation_id               ,'HART' AS WORK_CENTER_NO               ,NULL AS OUTSIDE_OP_ITEM   ,'168' as MOVE_TIME             FROM routing_operation  t1               JOIN INVENTORY_PART     T2 ON T1.PART_NO = T2.PART_NO               WHERE T2.CONTRACT = 'KRLAN'               AND T1.work_center_no = 'KOOP1'               AND T1.operation_description = 'N920'                          AND T2.PRIME_COMMODITY IN               (               'NRKPM'               ,'NRSRB'               ,'NRSRM'               ,'NRSRZ'               ,'NRSTD'               )`,'ROUTING_OPERATION','CONTRACT;PART_NO;ROUTING_REVISION;BOM_TYPE_DB;ALTERNATIVE_NO;OPERATION_ID',1)


//zapomnialem dodac do tabeli ostatecznej tych kolumn ROBIE ODDZIELNIE BO TRZEBA
//zrobione await  toApiModify(connectorOldDatabase,connectorProd,`SELECT CONTRACT,PART_NO,ALTERNATIVE_NO,OPERATION_ID,C_ISSUE_SEMIFIN_PART_DB FROM PSZABAT.FINAL_OPERATIONS_NEW_ALT_TAB_2`,'ROUTING_OPERATION','CONTRACT;PART_NO;ALTERNATIVE_NO;OPERATION_ID',1)
//zapomnialem dodac do tabeli ostatecznej tych kolumn ROBIE ODDZIELNIE BO TRZEBA
//zrobione await  toApiModify(connectorOldDatabase,connectorProd,`SELECT CONTRACT,PART_NO,ALTERNATIVE_NO,OPERATION_ID,C_RECEIVE_SEMIFIN_PART_DB FROM PSZABAT.FINAL_OPERATIONS_NEW_ALT_TAB_2`,'ROUTING_OPERATION','CONTRACT;PART_NO;ALTERNATIVE_NO;OPERATION_ID',1)


     //Update narzedzi na planach kontroli (aktywowanie narzedzi na konkretnych operacjach)
// zrobione await toApiModify(connectorOldDatabase,connectorProd,`SELECT * FROM PSZABAT.QMAN_CONN_CTRL_PLAN_TOOLS`,'QMAN_CONN_CTRL_PLAN_TOOLS','CONTROL_PLAN_NO;CTRL_PLAN_REVISION_NO;DATA_POINT;TOOL_ID;CONTRACT',1)

//Pani Danuta Rut uzupełnienie Dostawców dla EDM
// zrobione await toApiModify(connectorProd,connectorProd,`select COMPANY,IDENTITY,PARTY_TYPE_DB ,'*' as DEF_AUTHORIZER ,'NBP' as DEFAULT_CURRENCY_RATE_TYPE  from IDENTITY_INVOICE_INFO where company = '205' and party_type_db = 'SUPPLIER'`,'IDENTITY_INVOICE_INFO','COMPANY;IDENTITY;PARTY_TYPE_DB',1)


await toApiModify(connectorOldDatabase,connectorCfg,`select CONTRACT,WORK_CENTER_NO,RESOURCE_ID,MCH_CODE, EQUIPMENT_OBJECT_SEQ from PSZABAT.IFS_WORK_CENTER_RESOURCE where work_center_no = '2600S'`,'WORK_CENTER_RESOURCE','CONTRACT;WORK_CENTER_NO;RESOURCE_ID',1)

} catch (error) {
    console.error('Error occurred during execution:', error);
}
}



updaterWybrana();
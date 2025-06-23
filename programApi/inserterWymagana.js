import {toApiNew} from '../util/toApiNew.js'
import { connectorOldDatabase } from "../db/connectorOldDatabase.js";
import {connectorCfg } from "../db/connectorCfg.js";
import {connectorTest } from "../db/connectorTest.js";
import {connectorProd } from "../db/connectorProd.js";

async function inserterWymagana() {
    try {

        //zrobione await toApiNew('select * from  PSZABAT.Cust_Ord_Customer','CUST_ORD_CUSTOMER',1)
        //zrobione await toApiNew(`select * from PSZABAT.IFS_WAREHOUSE_BAY_BIN_LOK_MAG`,'WAREHOUSE_BAY_BIN',1)
        //zrobione await toApiNew('select * from PSZABAT.C_WAREHOUSE_SHIP_SETTINGS','C_WAREHOUSE_SHIP_SETTINGS',1)
        //zrobione 06.12.2024 await toApiNew('select * from  PSZABAT.C_TOOL_USAGE_CONDITION_ZMZEST','C_TOOL_USAGE_CONDITION',1) 

        // Arkadiusz Wrona Pomiary obiektu - czeka na Arka zmiany
        //CFG 07.02.2025
        await toApiNew(connectorOldDatabase,connectorProd,`SELECT * FROM WSP.V_C_MEAS_FOR_OBJECT_CONFIG`,'C_MEAS_FOR_OBJECT_CONFIG',1)

        //zrobione await toApiNew(connectorTest,connectorProd,'SELECT        contract                       contract,        c_routing_efficiency_id        c_routing_efficiency_id,        work_center_no                 work_center_no,        c_dlug                         c_dlug,        c_wytrz                        c_wytrz,        c_nrm                          c_nrm,        c_nrmnc                        c_nrmnc,        c_gwint                        c_gwint,        c_pokr                         c_pokr,        c_zawal                        c_zawal,        c_nrodz                        c_nrodz,        c_ncech                        c_ncech,        c_nrysw                        c_nrysw,        c_wymma                        c_wymma,        c_unit_measure                 c_unit_measure_db,        c_wydajnosc                    c_wydajnosc FROM   c_routing_efficiency_conf_tab','C_ROUTING_EFFICIENCY_CONF',1)
 
 
        //zrobione await toApiNew(connectorTest,connectorProd,`select USER_ID, CONTRACT, WAREHOUSE_ID, STOCK_RESERV_ALLOWED, STOCK_RESERV_ALLOWED_DB, INVENT_TRANS_ALLOWED, INVENT_TRANS_ALLOWED_DB from USER_WAREHOUSE_ACCESS where contract = 'KRLAN'`,'USER_WAREHOUSE_ACCESS',1)
 
} catch (error) {
    console.error('Error occurred during execution:', error);
}
}



inserterWymagana();
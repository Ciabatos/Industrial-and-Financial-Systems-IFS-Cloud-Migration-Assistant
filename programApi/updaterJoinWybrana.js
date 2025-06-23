import {toApiModifyJoin} from '../util/toApiModifyJoin.js'
import { connectorOldDatabase } from "../db/connectorOldDatabase.js";
import {connectorCfg } from "../db/connectorCfg.js";
import {connectorTest } from "../db/connectorTest.js";
import {connectorProd } from "../db/connectorProd.js";
import {connectorXlsx } from "../db/connectorXlsx.js";

async function updaterJoinWybrana() {
    try {





    // await toApiModifyJoin(connectorOldDatabase,connectorProd
    //     ,`SELECT NR_HUTNICZY AS ALT_HANDLING_UNIT_LABEL_ID, ZAMOWIENIE_KOE AS NOTE_TEXT FROM ZPT.WALC_DOST_IMPORT ORDER BY 1 DESC` /*DATA TO UPDATE WHEN NOT IN FOURTH ARGUMENT */
    //     ,`SELECT HANDLING_UNIT_ID, ALT_HANDLING_UNIT_LABEL_ID FROM HANDLING_UNIT_EXTENDED` /* TO WHERE STATEMENT ALL OF THIS */
    //     ,'HANDLING_UNIT' /* VIEW  TO UPDATE */
    //     ,`ALT_HANDLING_UNIT_LABEL_ID` /* TO WHERE STATEMENT FROM FIRST ARGUMENT*/
    //     ,1
    //     )

    
    
    

} catch (error) {
    console.error('Error occurred during execution:', error);
}
}



updaterJoinWybrana();
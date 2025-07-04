import {toCsv} from '../util/toCsv.js'
import { connectorOldDatabase } from '../db/connectorOldDatabase.js';
import { connectorXlsx } from '../db/connectorXlsx.js';

async function migracjaWybrana() {
    try {

// await toCsv('PSZABAT.IFS_PROD_STRUCTURE','3.PROD_STRUCTURE','11. Struktura produktowa')
// await toCsv('PSZABAT.WYDAJNOSCI_KONCOWE','WYDAJNOSCI_KONCOWE','WYDAJNOSCI_KONCOWE')
// await toCsv('PSZABAT.POZ_GLOW','1.PART_CATALOG','6. Pozycja główna')
// await toCsv('PSZABAT.IFS_ROUTING_OPERATION_TOOL','4.ROUTING_OPERATION_TOOL','12. Narzędzia produkcyjne')
// await toCsv('PSZABAT.INVENTORY_PART_PLANNING','1.INVENTORY_PART_PLANNING','16. Dane planistyczne poz. mag')
// await toCsv('PSZABAT.IFS_PROD_STRUCTURE_HEAD','1.PROD_STRUCTURE_HEAD','11. Struktura produktowa')
// await toCsv('PSZABAT.IFS_PROD_STRUCT_ALTERNATE','2.PROD_STRUCT_ALTERNATE','11. Struktura produktowa')
// await toCsv('PSZABAT.IFS_PROD_STRUCTURE','3.PROD_STRUCTURE','11. Struktura produktowa')

// await toCsv('PSZABAT.MARSZRUTA_FULL_WYD_KONC','3.ROUTING_OPERATION','10.3. Marszruta Full')
// await toCsv('PSZABAT.HANDLING_UNIT_CATEGORY','1.HANDLING_UNIT_CATEGORY','8.5 Kategorie jednostek obsługi')
// await toCsv('PSZABAT.HANDLING_UNIT_TYPE','2.HANDLING_UNIT_TYPE','8.5 Kategorie jednostek obsługi')
// await toCsv('PSZABAT.FORWARDER_INFO','19.FORWARDER_INFO','19.FORWARDER_INFO')
// await toCsv('PSZABAT.FORWARDER_INFO_ADDRESS','20.FORWARDER_INFO_ADDRESS','20.FORWARDER_INFO_ADDRESS')
// await toCsv('PSZABAT.IFS_WORK_CENTER_RESOURCE','1.WORK_CENTER_RESOURCE','8.1 Gniazdo produkcyjne')
// await toCsv('PSZABAT.IFS_WORK_CENTER','1.WORK_CENTER','8.1 Gniazdo produkcyjne')
// await toCsv('PSZABAT.IFS_PURCHASE_PART_SUPPLIER','2.PURCHASE_PART_SUPPLIER','7. Pozycja Zakupowa')
// await toCsv('PSZABAT.WORK_CENTER_LOCATION','1.WORK_CENTER_LOCATION','9.1 Lokalizacje Gniazda prod')
// await toCsv('PSZABAT.INVENTORY_LOCATION_GROUP','20.INVENTORY_LOCATION_GROUP','20. Grupy lokalizacji magazynowych')
// await toCsv('PSZABAT.IFS_WAREHOUSE_LOKALIZACJE_MAG','21.IFS_WAREHOUSE_LOKALIZACJE_MAG','21. Magazyny')
// await toCsv('PSZABAT.IFS_WAREHOUSE_BAY_LOK_MAG','22.WAREHOUSE_BAY_LOK_MAG','22. WAREHOUSE_BAY_LOK_MAG')
// await toCsv('PSZABAT.IFS_WAREHOUSE_BAY_ROW_LOK_MAG','23.IFS_WAREHOUSE_BAY_ROW_LOK_MAG','23. IFS_WAREHOUSE_BAY_ROW_LOK_MAG')
// await toCsv('PSZABAT.IFS_WAREHOUSE_BAY_TIER_LOK_MAG','24.IFS_WAREHOUSE_BAY_TIER_LOK_MAG','24. IFS_WAREHOUSE_BAY_TIER_LOK_MAG')
// await toCsv('PSZABAT.IFS_WAREHOUSE_BAY_BIN_LOK_MAG','25.IFS_WAREHOUSE_BAY_BIN_LOK_MAG','25. IFS_WAREHOUSE_BAY_BIN_LOK_MAG')'
// await toCsv('PSZABAT.IFS_MARSZRUTA_FULL_UNION_HEAD','1.ROUTING_HEAD','10.3. Marszruta Full')
// await toCsv('PSZABAT.ALTERNATE_FINAL_NEW_ALT','2.ROUTING_ALTERNATE','10.3. Marszruta Full')
// await toCsv('PSZABAT.FINAL_OPERATIONS_NEW_ALT','dupa','10.3. Marszruta Full')
// await toCsv('PSZABAT.IFS_PROD_STRUCTURE_HEAD','1.PROD_STRUCTURE_HEAD','11. Struktura produktowa')
// await toCsv('PSZABAT.IFS_PROD_STRUCT_ALTERNATE','2.PROD_STRUCT_ALTERNATE','11. Struktura produktowa')
// await toCsv('PSZABAT.IFS_PROD_STRUCTURE','3.PROD_STRUCTURE','11. Struktura produktowa')

// await toCsv('WSP.V_IFS_TYPY_JO_MIG','0.HANDLING_UNIT_TYPE ','8.6 Instrukcje pakowania')
// await toCsv('WSP.V_HANDLING_UNIT_ACCESSORY','1.HANDLING_UNIT_ACCESSORY','8.6 Instrukcje pakowania')
// await toCsv('WSP.V_PACKING_INSTRUCTION','2.PACKING_INSTRUCTION','8.6 Instrukcje pakowania')
// await toCsv('WSP.IFS_T_PACKING_INSTRUCTION_NODE','3.PACKING_INSTRUCTION_NODE','8.6 Instrukcje pakowania')
// await toCsv('WSP.V_PACK_INSTR_NODE_ACCESSORY','4.PACK_INSTR_NODE_ACCESSORY','8.6 Instrukcje pakowania')
// await toCsv('WSP.V_PART_HANDLING_UNIT','5.PART_HANDLING_UNIT','8.6 Instrukcje pakowania')



// await toCsv('PSZABAT.IFS_WARUNK_PLATNOSCI','8.PAYMENT_TERM','26. FINANSE')
// await toCsv('PSZABAT.PAYMENT_TERM_DETAILS','8.PAYMENT_TERM_DETAILS','26. FINANSE')


// await toCsv('PSZABAT.IDENTITY_INVOICE_INFO','10.IDENTITY_INVOICE_INFO','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.CUSTOMER_INFO_OUR_ID_FIN_AUTH','2.3 CUSTOMER_INFO_OUR_ID_FIN_AUTH','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.SUPPLIER_INFO_OUR_ID_FIN_AUTH','2.4 SUPPLIER_INFO_OUR_ID_FIN_AUTH','27. KLIENCI I DOSTAWCY')

// await toCsv('PSZABAT.IFS_CUSTOMER_DELIVERY_TAX_INFO','16. CUSTOMER_DELIVERY_TAX_INFO','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.C_TOOL_USAGE_CONDITION','5.C_TOOL_USAGE_CONDITION','12. Narzędzia produkcyjne')
// await toCsv('PSZABAT.WORK_CENTER_CHAR','3.WORK_CENTER_CHAR','8.1 Gniazdo produkcyjne')

// await toCsv('PSZABAT.MARSZRUTA_FULL_WYD_KONC','0.PSZABAT.MARSZRUTA_FULL_WYD_KONC','0 TEST')
// await toCsv('PSZABAT.FINAL_OPERATIONS_NEW_ALT','3.ROUTING_OPERATION','10.3. Marszruta Full')
// await toCsv('PSZABAT.IFS_DISCRETE_CHARAC_VALUE','2.DISCRETE_CHARAC_VALUE','1. Cecha dyskretna')
// await toCsv('PSZABAT.IFS_COMM_METHOD_FORWARDER','19.COMM_METHOD','27. KLIENCI I DOSTAWCY')

// await toCsv('PSZABAT.IFS_PURCHASE_PART_SUPPLIER','2.PURCHASE_PART_SUPPLIER','7. Pozycja Zakupowa')


// await toCsv('PSZABAT.MANUF_TOOL_DETAIL_PLAN_KONTR','2.MANUF_TOOL_DETAIL','15. Narzedzia planu kontroli')
// await toCsv('PSZABAT.MANUF_TOOL_DETAIL_AVAIL_PLAN','2.MANUF_TOOL_DETAIL_AVAIL','15. Narzedzia planu kontroli')
// await toCsv('PSZABAT.IFS_POZYCJA_MAGAZYNOWA_TAB','1.INVENTORY_PART','7. Pozycja magazynowa')
// await toCsv('PSZABAT.IFS_COMMODITY_GROUP','1.COMMODITY_GROUP','5. KOD GRUPY KOSZTOWEJ - commodity group')
// await toCsv('PSZABAT.IFS_WORK_CENTER_RESOURCE','1.WORK_CENTER_RESOURCE','8.1 Gniazdo produkcyjne')


// migracja nowych zestawów 
// await toCsv(`PSZABAT.POZ_GLOW_ZMIANA_ZEST where DESCRIPTION = 'Zestaw narzędziowy' `,'1.PART_CATALOG','6. Pozycja główna')
// await toCsv(`PSZABAT.POZ_MAG_ZMIANA_ZEST where DESCRIPTION = 'Zestaw narzędziowy' `,'1.INVENTORY_PART','7. Pozycja magazynowa')
// await toCsv(`PSZABAT.MANUF_PART_ATTRIBUTE_ZMI_ZEST where PART_NO IN (select PART_NO FROM PSZABAT.POZ_GLOW_ZMIANA_ZEST where DESCRIPTION = 'Zestaw narzędziowy')`,'1.MANUF_PART_ATTRIBUTE','7.5 Pozycja magazynowa - produkcja')
// await toCsv(`PSZABAT.IFS_PROD_STRUCTURE_HEAD_ZMZEST where PART_NO IN (select PART_NO FROM PSZABAT.POZ_GLOW_ZMIANA_ZEST where DESCRIPTION = 'Zestaw narzędziowy')`,'1.PROD_STRUCTURE_HEAD','11. Struktura produktowa')
// await toCsv(`PSZABAT.IFS_PROD_STRUCT_ALTE_ZMZEST where PART_NO IN (select PART_NO FROM PSZABAT.POZ_GLOW_ZMIANA_ZEST where DESCRIPTION = 'Zestaw narzędziowy')`,'2.PROD_STRUCT_ALTERNATE','11. Struktura produktowa')
// await toCsv(`( SELECT * FROM PSZABAT.IFS_PROD_STRUCTURE_ZMZEST where  PART_NO  IN (select PART_NO FROM PSZABAT.POZ_GLOW_ZMIANA_ZEST where DESCRIPTION = 'Zestaw narzędziowy') UNION ALL SELECT * FROM PSZABAT.IFS_PROD_STRUCTURE_ZMZEST where  COMPONENT_PART IN  (select PART_NO FROM PSZABAT.POZ_GLOW_ZMIANA_ZEST where DESCRIPTION = 'Zestaw narzędziowy') )`,'3.PROD_STRUCTURE','11. Struktura produktowa')
// await toCsv(`PSZABAT.IFS_MANUF_TOOL_ZMZEST where TOOL_ID IN (select PART_NO FROM PSZABAT.POZ_GLOW_ZMIANA_ZEST where DESCRIPTION = 'Zestaw narzędziowy')`,'2.MANUF_TOOL','12. Narzędzia produkcyjne')
// await toCsv(`PSZABAT.IFS_ROUTING_OPER_TOL_ZMZEST where TOOL_ID IN (select PART_NO FROM PSZABAT.POZ_GLOW_ZMIANA_ZEST where DESCRIPTION = 'Zestaw narzędziowy')`,'4.ROUTING_OPERATION_TOOL','12. Narzędzia produkcyjne')
// await toCsv(`PSZABAT.C_TOOL_USAGE_CONDITION_ZMZEST where TOOL_BOX_ID IN (select PART_NO FROM PSZABAT.POZ_GLOW_ZMIANA_ZEST where DESCRIPTION = 'Zestaw narzędziowy')`,'5.C_TOOL_USAGE_CONDITION','12. Narzędzia produkcyjne')
// END

// await toCsv('PSZABAT.IFS_PROD_STRUCTURE_ZMZEST','3.PROD_STRUCTURE','11. Struktura produktowa')
// await toCsv('PSZABAT.IFS_WORK_CENTER_RESOURCE','1.WORK_CENTER_RESOURCE','8.1 Gniazdo produkcyjne')
// await toCsv('PSZABAT.INVENTORY_PART_PLANNING_ZMZEST','1.INVENTORY_PART_PLANNING','16. Dane planistyczne poz. mag')
// await toCsv('PSZABAT.WAREHOUSE_BIN_HU_CAPACITY','26.WAREHOUSE_BIN_HU_CAPACITY','26. WAREHOUSE_BIN_HU_CAPACITY')
// await toCsv('PSZABAT.WORK_CENTER_LOCATION','1.WORK_CENTER_LOCATION','9.1 Lokalizacje Gniazda prod')

// await toCsv('PSZABAT.IFS_QMAN_CONTROL_PLAN_LINE','2.QMAN_CONTROL_PLAN_LINE','14.Plan kontroli produkcja') // FULL REKORDÓW

// await toCsv('PSZABAT.IFS_QMAN_CONTROL_PLAN_MANUF','1.QMAN_CONTROL_PLAN_MANUF','14.Plan kontroli produkcja')
// await toCsv('PSZABAT.IFS_PLAN_LINE_PAGINATION_1','2.QMAN_CONTROL_PLAN_LINE_1','14.Plan kontroli produkcja') // PIERWSZE 1 MILION REKORDÓW
// await toCsv('PSZABAT.IFS_PLAN_LINE_PAGINATION_2','2.QMAN_CONTROL_PLAN_LINE_2','14.Plan kontroli produkcja') // POZNIEJSZE REKORDY DO 2 MILIONOW

// await toCsv('PSZABAT.IFS_PURCHASE_PART_SUPPLIER','2.PURCHASE_PART_SUPPLIER','7. Pozycja Zakupowa')
// await toCsv('PSZABAT.CUST_ORD_CUSTOMER_ADDRESS_ENT','11.CUST_ORD_CUSTOMER_ADDRESS_ENT','27. KLIENCI I DOSTAWCY')





// await toCsv('WSP.CONTACT_ROLE','0. CONTACT_ROLE','27. KLIENCI I DOSTAWCY')
// await toCsv('WSP.IFS_CUSTOMER_INFO','1. CUSTOMER_INFO','27. KLIENCI I DOSTAWCY')
// await toCsv('WSP.IFS_SUPPLIER_INFO_GENERAL','1. SUPPLIER_INFO','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.IFS_CUSTOMER_INFO_ADRESS_MIGR','2. CUSTOMER_INFO_ADDRESS','27. KLIENCI I DOSTAWCY')
// await toCsv(' PSZABAT.IFS_SUPPLIER_INFO_ADRESS_MIGR','2. SUPPLIER_INFO_ADDRESS','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.CUSTOMER_INFO_OUR_ID_FIN_AUTH','2.3 CUSTOMER_INFO_OUR_ID_FIN_AUTH','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.SUPPLIER_INFO_OUR_ID_FIN_AUTH','2.4 SUPPLIER_INFO_OUR_ID_FIN_AUTH','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.CUST_INFO_ADDRESS_TYPE','3. CUSTOMER_INFO_ADDRESS_TYPE','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.IFS_SUPPLIER_INFO_ADDRESS_TYPE','3. SUPPLIER_INFO_ADDRESS_TYPE','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.IFS_COMM_METHOD','4. COMM_METHOD','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.IFS_COMM_METHOD_SUPPLIER','4. COMM_METHOD_SUPPLIER','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.IFS_OSOBY','4.5 PERSON_INFO_ALL','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.IFS_CUSTOMER_INFO_CONTACT','5. CUSTOMER_INFO_CONTACT','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.IFS_SUPPLIER_INFO_CONTACT','5. SUPPLIER_INFO_CONTACT','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.Cust_Ord_Customer','5.1 CUST_ORD_CUSTOMER','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.IFS_CUST_ORD_CUSTOMER_ENT','6. CUST_ORD_CUSTOMER_ENT','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.IFS_SUPPLIER','6. SUPPLIER','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.IDENTITY_INVOICE_INFO','10.IDENTITY_INVOICE_INFO','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.IFS_SUPPLIER_ADDRESS_ENT','11. SUPPLIER_ADDRESS_ENT','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.CUST_ORD_CUSTOMER_ADDRESS_ENT','11.CUST_ORD_CUSTOMER_ADDRESS_ENT','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.SUPP_OUTBOUND_ADDR_INFO','11.SUPP_OUTBOUND_ADDR_INFO','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.IFS_INDENTITY_PAY_INFO','12. IDENTITY_PAY_INFO','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.IFS_PAYMENT_WAY_PER_IDENTITY','12. PAYMENT_WAY_PER_IDENTITY','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.IFS_SUPPLIER_TAX_INFO','13. SUPPLIER_TAX_INFO','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.IFS_TAX_ID_TYPE','13. TAX_ID_TYPE','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.PAYMENT_ADDRESS','13.PAYMENT_ADDRESS','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.IFS_SUPPLIER_DOCUMENT_TAX_INFO','14. SUPPLIER_DOCUMENT_TAX_INFO','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.IFS_CUSTOMER_TAX_INFO','15. CUSTOMER_TAX_INFO','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.IFS_CUSTOMER_DELIVERY_TAX_INFO','16.CUSTOMER_DELIVERY_TAX_INFO','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.IFS_CUSTOMER_TAX_FREE_TAX_CODE','17. CUSTOMER_TAX_FREE_TAX_CODE','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.IFS_CUSTOMER_DOCUMENT_TAX_INFO','18. CUSTOMER_DOCUMENT_TAX_INFO','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.FORWARDER_INFO','10.5.FORWARDER_INFO','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.FORWARDER_INFO_ADDRESS','10.5.FORWARDER_INFO_ADDRESS','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.IFS_COMM_METHOD_FORWARDER','19.COMM_METHOD','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.DUMMY','8.CUSTOMER_GROUP','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.DUMMY','8.SUPPLIER_GROUP','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.DUMMY','9.INVOICE_PARTY_TYPE_GROUP','27. KLIENCI I DOSTAWCY')

// await toCsv('PSZABAT.INVENTORY_LOCATION_GROUP','20.INVENTORY_LOCATION_GROUP','20. Grupy lokalizacji magazynowych')
// await toCsv('PSZABAT.IFS_WAREHOUSE_LOKALIZACJE_MAG','21.IFS_WAREHOUSE_LOKALIZACJE_MAG','21. Magazyny')
// await toCsv('PSZABAT.IFS_WAREHOUSE_BAY_LOK_MAG','22.WAREHOUSE_BAY_LOK_MAG','22. WAREHOUSE_BAY_LOK_MAG')
// await toCsv('PSZABAT.IFS_WAREHOUSE_BAY_ROW_LOK_MAG','23.IFS_WAREHOUSE_BAY_ROW_LOK_MAG','23. IFS_WAREHOUSE_BAY_ROW_LOK_MAG')
// await toCsv('PSZABAT.IFS_WAREHOUSE_BAY_TIER_LOK_MAG','24.IFS_WAREHOUSE_BAY_TIER_LOK_MAG','24. IFS_WAREHOUSE_BAY_TIER_LOK_MAG')
// await toCsv('PSZABAT.IFS_WAREHOUSE_BAY_BIN_LOK_MAG','25.IFS_WAREHOUSE_BAY_BIN_LOK_MAG','25. IFS_WAREHOUSE_BAY_BIN_LOK_MAG')
// await toCsv('PSZABAT.WAREHOUSE_BIN_HU_CAPACITY','26.WAREHOUSE_BIN_HU_CAPACITY','26. WAREHOUSE_BIN_HU_CAPACITY')
// await toCsv('PSZABAT.C_WAREHOUSE_SHIP_SETTINGS','27.C_WAREHOUSE_SHIP_SETTINGS','27. C_WAREHOUSE_SHIP_SETTINGS')
// await toCsv('PSZABAT.WHSE_SHIPMENT_RECEIPT_INFO','28.PSZABAT.WHSE_SHIPMENT_RECEIPT_INFO','28. PSZABAT.WHSE_SHIPMENT_RECEIPT_INFO')

// await toCsv('PSZABAT.HANDLING_UNIT_CATEGORY','1.HANDLING_UNIT_CATEGORY','8.5 Kategorie jednostek obsługi')
// await toCsv('PSZABAT.HANDLING_UNIT_TYPE','2.HANDLING_UNIT_TYPE','8.5 Kategorie jednostek obsługi')



// await toCsv('PSZABAT.IFS_OSOBY','1.PERSON_INFO_ALL','33.OSOBY')
// await toCsv('PSZABAT.IFSS_FND_USER','2.FND_USER','34.PRACOWNICY')
// await toCsv('PSZABAT.USER_HANDLING_COMP_BY_USER','3.USER_HANDLING_COMP_BY_USER','34.PRACOWNICY')
// await toCsv('PSZABAT.USER_DEFAULT','4.USER_DEFAULT','34.PRACOWNICY')
// await toCsv('PSZABAT.USER_ALLOWED_STIE','5.USER_ALLOWED_STIE','34.PRACOWNICY')
// await toCsv('PSZABAT.PERSON_COMPANY_ACCESS','6.PERSON_COMPANY_ACCESS','34.PRACOWNICY')
// await toCsv('PSZABAT.COMPANY_EMP','7.COMPANY_EMP','34.PRACOWNICY')





// await toCsv('PSZABAT.SALES_PART_BASE_PRICE','3.SALES_PART_BASE_PRICE','7. Pozycja Sprzedażowa')
// await toCsv('PSZABAT.SALES_PRICE_LIST_PART','4.SALES_PRICE_LIST_PART','7. Pozycja Sprzedażowa')

// await toCsv('PSZABAT.SALES_PART_CHARACTERISTIC','1.SALES_PART_CHARACTERISTIC','8. Cechy pozycji magazynowej')



// await toCsv('PSZABAT.IFS_CUSTOMER_INFO_ADRESS_MIGR','2. CUSTOMER_INFO_ADDRESS','27. KLIENCI I DOSTAWCY')
// await toCsv('PSZABAT.CUST_INFO_ADDRESS_TYPE','3. CUSTOMER_INFO_ADDRESS_TYPE','27. KLIENCI I DOSTAWCY')

// await toCsv('PSZABAT.IFS_PLAN_LINE_PAGINATION_1','2.QMAN_CONTROL_PLAN_LINE_1','14.Plan kontroli produkcja') // PIERWSZE 1 MILION REKORDÓW
// await toCsv('PSZABAT.IFS_PLAN_LINE_PAGINATION_2','2.QMAN_CONTROL_PLAN_LINE_2','14.Plan kontroli produkcja') // POZNIEJSZE REKORDY DO 2 MILIONOW


//await toCsv(connectorOldDatabase,'PSZABAT.ARKOWE_POZYCJE_ZAKUPOWE','35.ARKOWE_POZYCJE_ZAKUPOWE','35.ARKOWE_POZYCJE_ZAKUPOWE')
// await toCsv('PSZABAT.C_TOOL_USAGE_CONDITION_ZMZEST','5.C_TOOL_USAGE_CONDITION','12. Narzędzia produkcyjne')




// await toCsv(connectorOldDatabase,'PSZABAT.IFS_DISCRETE_CHARACTERISTIC','1.DISCRETE_CHARACTERISTIC','1. Cecha dyskretna')
// await toCsv(connectorOldDatabase,'PSZABAT.IFS_DISCRETE_CHARAC_VALUE','2.DISCRETE_CHARAC_VALUE','1. Cecha dyskretna')
// await toCsv(connectorOldDatabase,'PSZABAT.IFS_CHARACTERISTIC_TEMPLATE','3.CHARACTERISTIC_TEMPLATE','1. Cecha dyskretna')
// await toCsv(connectorOldDatabase,'PSZABAT.IFS_CHAR_TEMPL_DISCRETE_CHAR','4.CHAR_TEMPL_DISCRETE_CHAR','1. Cecha dyskretna')


// await toCsv(connectorOldDatabase,'PSZABAT.INVENTORY_PART_CHAR_ALL','1.INVENTORY_PART_CHAR_ALL','8. Cechy pozycji magazynowej')
// await toCsv(connectorOldDatabase,'PSZABAT.SALES_PART_CHARACTERISTIC','1.SALES_PART_CHARACTERISTIC','8. Cechy pozycji magazynowej')

await toCsv(connectorXlsx,'test','999.XLS','XLS')
} catch (error) {
    console.error('Error migracjaWybrana:', error);
}
}



migracjaWybrana();
```
1.Configure .env file
2.Configure db folder files to match correct database
3.Use one of the API in util folder to run the migration of data

toApiModify(databaseFrom, databaseTo, statement, viewName, filter, logging)
It UPDATE records from statement into viewName (viewName in IFS) filter is a names of columns that are KEYS to match together in db's
filter - should be separated by ;

example code in updaterWybrana.js


toApiModifyJoin(databaseFrom, databaseTo, statement, statement2, viewName, filter, logging)
it does the same thing as toApiModify but the second statement2 is to join data from second database and integrate it into migration


example code in updaterJoinWybrana.js

it runs first select and the second select with WHERE clause where data is from first select, name of the columns must be the same and match filter


toApiNew(databaseFrom, databaseTo, statement, viewName, logging)
It creates new record in database

examples in programApi/inserterWybrana.js


toApiNewJoin(databaseFrom, databaseTo, statement, statement2, viewName, filter, logging)
It creates new record in database but with join like i said erlier in toApiModifyJoin
examples in programApi/inserterJoinWybrana.js


toApiRemove(databaseFrom, databaseTo, statement, viewName, filter, logging)
it deletes records

examples in removerWybrana.js



migration from .xlsx files:
connectorXlsx - it take .xlsx file and treat it like a table in SQL, just use it in databaseFrom and use correct names of the column and put file to folder xlsxToMigrate






Just use one of the programApi and run like in package.json
for example use it in terminal "npm run updaterWybrana"

```

```
if you want you can use API in own files
just create 



import {toApiNew} from '../util/toApiNew.js'
import { connectorOldDatabase } from "../db/connectorOldDatabase.js";
import {connectorCfg } from "../db/connectorCfg.js";
import {connectorTest } from "../db/connectorTest.js";
import {connectorProd } from "../db/connectorProd.js";

async function NAME() {
    try {

       use API here like normal javaScript function
 
} catch (error) {
    console.error('Error occurred during execution:', error);
}
}



NAME();


and then run it with node --max-old-space-size=16384 NAME.js
```
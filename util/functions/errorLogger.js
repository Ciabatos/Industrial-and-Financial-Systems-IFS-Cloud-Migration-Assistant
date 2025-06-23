import { v4 as uuidv4 } from 'uuid' 
import fs from 'fs'
import path from 'path'


export function errorLogger(viewName, statement, error, row) {

        const today = new Date() 
        const dd = String(today.getDate()).padStart(2, '0') 
        const mm = String(today.getMonth() + 1).padStart(2, '0') 
        const yyyy = today.getFullYear() 
        const hh = String(today.getHours()).padStart(2, '0') 
        const min = String(today.getMinutes()).padStart(2, '0') 
        const timestamp = ` ${mm} ${dd} ${yyyy} ${hh}` 
        const timestampWithSec = ` ${mm} ${dd} ${yyyy} ${hh} ${min}` 
    
        const mainLogFolderName = 'errorLogs'
        const logFileName = viewName + '_errorLogs'
        const logFilePath = path.join(mainLogFolderName, logFileName)

        if (!fs.existsSync(mainLogFolderName)) {
            fs.mkdirSync(mainLogFolderName) 
        }

        if (!fs.existsSync(logFilePath)) {
            fs.mkdirSync(logFilePath) 
        }
    
        const mainLogText = 
        `\n\n\n______________________________________________________________________________\n` +
        `TimeStamp :${timestampWithSec} \n`        +
        `______________________________________________________________________________\n` +
         `ViewName :${viewName}  \n`       +
         `\nStatement :${statement} \n`      +
         `\nError : ${error}     \n`         +
         `\nRow : ${JSON.stringify(row)} \n`

        // const fileLogPath = path.join(mainLogFolderName, logFileName, `${logFileName}${timestamp} ${uuidv4()}.txt`) 

        const mainFileLogPath = path.join(mainLogFolderName, logFileName, `${logFileName}${timestamp}.txt`) 
        fs.appendFileSync(mainFileLogPath, mainLogText);

        const rowLogText = 
         `TimeStamp|${timestampWithSec}|${JSON.stringify(row)}`+
         ` ${error.replace(/\n/g, ' ')}`

        const rowFileLogPath = path.join(mainLogFolderName, logFileName, `${logFileName}_rows_${timestamp}.txt`) 
        fs.appendFileSync(rowFileLogPath, rowLogText);
         
}
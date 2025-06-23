import readXlsxFile from 'read-excel-file/node'

export async function connectorXlsx(fileName) {
  try {
      const rows = await readXlsxFile(`xlsxToMigrate/${fileName}.xlsx`); // Await the Promise
      const columnNames = rows.shift(); // Separate first row with column names

      const objs = rows.map((row) => {
          const obj = {}; // Create object literal for current row
          row.forEach((cell, i) => {
              obj[columnNames[i]] = cell; // Map column name to cell
          });
          return obj
      });

      console.log(objs)  
      return objs      
  } catch (error) {
      console.error("Error reading the file:", error);
  }
}


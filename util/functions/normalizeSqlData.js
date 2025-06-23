export function normalizeSqlData(file){ 
   return file.map((row) => {
    let trimmedRow = {};
    for (let key in row) {
        trimmedRow[key] = row[key] != null ? String(row[key]).trim() : "";
    }
    return trimmedRow;
})}
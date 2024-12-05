import * as ExcelJS from "exceljs";


const grabFileRows = async (excelFile) => {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(excelFile);

    const worksheet = workbook.getWorksheet(1); // Get the first worksheet
    const rows = [];

    worksheet.eachRow((row) => {
        rows.push(row.values.slice(1)); // `row.values` includes a null at index 0
    });

    console.log("Extracted Rows:", rows);
    return rows;
};


export default grabFileRows;

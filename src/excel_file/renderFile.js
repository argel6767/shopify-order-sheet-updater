import * as XLSX from "xlsx";

const renderFile = (excelFile, setData) => {
    const reader = new FileReader();
    reader.onload = (e) => {
        const binaryStr = e.target.result;
        const workbook = XLSX.read(binaryStr, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName]
        // Convert the sheet data to a 2D array
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        setData(jsonData);
    };

    reader.readAsArrayBuffer(excelFile);
};

export default renderFile;
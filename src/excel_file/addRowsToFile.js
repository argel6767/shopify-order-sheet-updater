import * as Excel from "exceljs";

const addRowsToFile = async (excelFile, newData) => {

    console.log(excelFile);
    console.log(newData);

    try {
        //open up file and grab sheet
        const workbook = new Excel.Workbook();
        await workbook.xlsx.load(await excelFile.arrayBuffer());
        const workSheet = workbook.getWorksheet(1);

        //add new data
        newData.forEach(row => {
            const rowArray = Object.values(row);
            const shiftedRow = [null, ...rowArray];
            workSheet.addRow(shiftedRow);
        });

        console.log(workSheet);

        // Export the modified workbook to a Blob
        const modifiedBlob = await workbook.xlsx.writeBuffer();

        // Create a downloadable link for the modified file
        const blob = new Blob([modifiedBlob], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = excelFile.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        console.log('Rows added and file downloaded.');
    }
    catch (error) {
        console.error(error);
    }
}

export default addRowsToFile;
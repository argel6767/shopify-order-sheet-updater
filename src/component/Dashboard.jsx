import DataTable from "./DataTable.jsx";
import {UploadExcelFile} from "./UploadExcelFile.jsx";
import {useState} from "react";

export const Dashboard = () => {
    const [file, setFile] = useState(null);

    return (
        <main>
            <DataTable/>
            <span className="flex flex-col justify-center items-center gap-3 pt-2.5">
                <p className="text-center text-lg">Add desired rows to excel files below:</p>
                <div className="flex justify-center items-center gap-3 pt-2.5">
                    <UploadExcelFile sendUpFile={setFile}/>
                    <button className="btn btn-primary">Add Rows</button>
                </div>

            </span>
        </main>
    )
}
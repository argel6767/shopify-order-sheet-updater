import DataTable from "./DataTable.jsx";
import {UploadExcelFile} from "./UploadExcelFile.jsx";
import {RenderExcelFile} from "./RenderExcelFile.jsx";
import {useState} from "react";

export const Dashboard = () => {
    const [file, setFile] = useState(null);
    const[data, setData] = useState([]);

    const handleFile = (file) => {
        setFile(file);
    }

    return (
        <main>
            <DataTable/>
            <span className="flex flex-col justify-center items-center gap-3 pt-2.5">
                <div className="flex justify-center items-center gap-3 pt-2.5">
                    <UploadExcelFile sendUpFile={handleFile}/>
                    <RenderExcelFile excelFile={file}/>
                    <button className="btn btn-primary">Add Row To File</button>
                </div>

            </span>
        </main>
    )
}
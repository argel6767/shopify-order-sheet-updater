import DataTable from "./DataTable.jsx";
import {UploadExcelFile} from "./UploadExcelFile.jsx";
import {RenderExcelFile} from "./RenderExcelFile.jsx";
import {useState} from "react";
import addRowsToFile from "../excel_file/addRowsToFile.js";

export const Dashboard = () => {
    const [file, setFile] = useState(null);
    const[data, setData] = useState([]);
    const [newData, setNewData] = useState([]);

    const handleFile = (file) => {
        setFile(file);
    }

    const handleData = (fileData) => {
        console.log("newData", fileData);
        setData((prevState) => [...prevState, ...fileData]);
    }

    const handleNewData = (apiData) => {
        console.log("newData", apiData);
        setNewData((prevState) => [...prevState, ...apiData]);
    }


    return (
        <main className="pb-4">
            <DataTable sendUpApiData={handleNewData}/>
            <span className="flex flex-col justify-center items-center gap-3 pt-2.5">
                <div className="flex justify-center items-center gap-3 pt-2.5 pl-4">
                    <UploadExcelFile sendUpFile={handleFile} sendUpData={handleData}/>
                    <RenderExcelFile rows={data}/>
                    <button onClick={() => {addRowsToFile(file, newData);}} className="btn btn-primary">Add Rows To File</button>
                </div>
            </span>
        </main>
    )
}
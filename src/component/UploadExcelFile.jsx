import {useState} from "react";
import grabFileRows from "../excel_file/grabFileRows.js";
import {Loading} from "./Loading.jsx";

export const UploadExcelFile = ({sendUpFile, sendUpData}) => {

    const [isPoppedUp, setIsPoppedUp] = useState(true);
    const [hasSent, setHasSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const handlePopUp = () => {
        setIsPoppedUp(!isPoppedUp);
    }

    const sendFile = (file) => {
        sendUpFile(file);
    }


    const handleFileSubmission = async () => {
        const file = document.getElementById("file-input").files[0];
        console.log("trying to read file", file);
        setIsLoading(true);
        const newData = await grabFileRows(file);
        console.log("newData", newData);
        setIsLoading(false);
        sendData(newData);
        sendFile(file);
        setIsPoppedUp(false);
    }


    const sendData = (rows) => {
        if (!hasSent) {
            sendUpData(rows);
            setHasSent(true);
        }
    }

    return (
        <main>
           <button className="btn btn-primary" onClick={handlePopUp}>Re-Upload File</button>
            {isPoppedUp && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="p-6 rounded shadow-lg flex flex-col gap-5 bg-background">
                        {isLoading ? <Loading loadingMessage={"Grabbing Excel Rows..."}/> :
                            <><h2 className="text-center text-lg">Upload Shopify Excel File Below</h2>
                                <div className="flex items-center justify-center gap-3">
                                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" id='file-input'
                                           data-testid="file-input"/>
                                    <button className="btn btn-primary" onClick={handleFileSubmission}>Submit</button>
                                </div>
                                <button className="btn btn-primary" onClick={handlePopUp}>Close</button>
                            </>}
                    </div>
                </div>
            )}
        </main>
    )
}
import {useEffect, useState} from "react";
import renderFile from "../excel_file/renderFile.js";

export const UploadExcelFile = ({sendUpFile, sendUpData}) => {

    const [isPoppedUp, setIsPoppedUp] = useState(true);
    const [data, setData] = useState([]);
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
        setIsLoading(true);
        await renderFile(file, setData);
        setIsLoading(false);
        sendData(data);
        sendFile(file);
        console.log(data)
        setIsLoading(true);
        console.log(file);
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
                        {isLoading ? <div>Loading...</div> :
                            <><h2 className="text-center text-lg">Upload Shopify Excel File Below</h2>
                                <input type="file" onChange={handleFileSubmission}
                                       className="file-input file-input-bordered w-full max-w-xs" id='file-input'
                                       data-testid="file-input"/>
                                <button className="btn btn-primary" onClick={handlePopUp}>Close</button>
                            </>}
                    </div>
                </div>
            )}
        </main>
    )
}
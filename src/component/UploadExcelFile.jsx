import {useState} from "react";

export const UploadExcelFile = ({sendUpFile}) => {

    const [isPoppedUp, setIsPoppedUp] = useState(true);

    const handlePopUp = () => {
        setIsPoppedUp(!isPoppedUp);
    }

    const sendFile = (file) => {
        sendUpFile(file);
    }

    const handleFileSubmission = () => {
        const file = document.getElementById("file-input").files[0];
        sendFile(file);
        console.log(file);
        handlePopUp();
    }

    return (
        <main>
           <button className="btn btn-primary" onClick={handlePopUp}>Re-Upload File</button>
            {isPoppedUp && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="p-6 rounded shadow-lg flex flex-col gap-5 bg-background">
                        <h2 className="text-center text-lg">Upload Shopify Excel File Below</h2>
                        <input type="file" onChange={handleFileSubmission}
                               className="file-input file-input-bordered w-full max-w-xs" id='file-input'
                               data-testid="file-input"/>
                        <button className="btn btn-primary" onClick={handlePopUp}>Close</button>
                    </div>
                </div>
            )}
        </main>
    )
}
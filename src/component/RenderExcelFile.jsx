import {useState} from "react";
import renderFile from "../excel_file/renderFile.js";
import close from "../assets/cancel_button.svg"

export const RenderExcelFile = ({excelFile, sendUpData}) => {
    const [data, setData] = useState([]);
    const [isPoppedUp, setIsPoppedUp] = useState(false);

    const handleIsPoppedUp = () => {
        setIsPoppedUp(!isPoppedUp);
    }

    const render = () => {
        renderFile(excelFile, setData);
    }

        const viewFile = () => {
            render();
            handleIsPoppedUp();
        }

    return (
        <main>
            <button className="btn btn-primary" onClick={viewFile}>View File</button>
            {isPoppedUp && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="p-6 rounded shadow-lg flex flex-col gap-5 bg-background">
                        <div className="flex justify-end items-end">
                            <button className="btn btn-circle bg-secondary" onClick={handleIsPoppedUp}>
                                <img src={close} className="w-6 h-6" alt="Cancel button"/>
                            </button>
                        </div>
                        <div className="overflow-x-auto overflow-y-scroll max-w-6xl max-h-[550px] p-4">
                            <table className="table table-zebra text-xs">
                                <tbody>
                                {data.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((cell, cellIndex) => (
                                            <td key={cellIndex}>{cell || ""}</td>
                                        ))}
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            )}
        </main>
    )
}
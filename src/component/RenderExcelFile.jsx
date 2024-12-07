import {useState} from "react";
import close from "../assets/cancel_button.svg"
import {CloseOutButton} from "./CloseOutButton.jsx";

export const RenderExcelFile = ({rows}) => {
    const data = rows;
    const [isPoppedUp, setIsPoppedUp] = useState(false);

    const handleIsPoppedUp = () => {
        setIsPoppedUp(!isPoppedUp);
    }

    return (
        <main>
            <button className="btn btn-primary" onClick={handleIsPoppedUp}>View File</button>
            {isPoppedUp && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="p-6 rounded shadow-lg flex flex-col gap-5 bg-background">
                        <CloseOutButton closeFunction={handleIsPoppedUp}/>
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
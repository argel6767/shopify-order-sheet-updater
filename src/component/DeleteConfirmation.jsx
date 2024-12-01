import {useState} from "react";
import confirmButton from "../assets/confirm_button.svg"
import cancelButton from "../assets/cancel_button.svg"
import deleteButton from "../assets/delete_button.svg"

export const DeleteConfirmation = ({confirmationNumber, onDelete}) => {

    const [confirmDelete, setConfirmDelete] = useState(false);
    const [confirmationId, setConfirmationId] = useState(null);

    const deleteConfirmation = () => {
        handleConformationID();
        handleConfirmDelete();
    }

    const handleConfirmDelete = () => {
        setConfirmDelete(!confirmDelete);
    }

    const handleConformationID = () => {
        setConfirmationId(confirmationNumber);
    }

    const isDeleteConfirmation = () => {
        return confirmDelete && confirmationId === confirmationNumber;
    }

    const handleChatDeletion = () => {
        onDelete();
    }

    return (
        <div className="flex justify-center items-end gap-3">
            {isDeleteConfirmation() && (
                <button data-testid={"confirm-button"} onClick={handleChatDeletion}
                        className="btn btn-circle bg-secondary hover:bg-accent">
                    <img src={confirmButton} alt="Delete" className="w-6 h-6"/>
                </button>
            )}
            <button onClick={() => {
                deleteConfirmation()
            }}
                    className={`btn btn-circle ${isDeleteConfirmation() ? "bg-red-500" : "bg-secondary"} hover:bg-accent`}>
                <img src={isDeleteConfirmation() ? cancelButton : deleteButton} alt="Delete"
                     className="w-6 h-6"/>
            </button>
        </div>
    )
}
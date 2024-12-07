import close from "../assets/cancel_button.svg";

export const CloseOutButton = ({closeFunction}) => {
    return (
        <>
            <div className="flex justify-end items-end">
                <button className="btn btn-circle bg-secondary" onClick={closeFunction}>
                    <img src={close} className="w-6 h-6" alt="Cancel button"/>
                </button>
            </div>
        </>
    )
}
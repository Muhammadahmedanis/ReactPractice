import React from "react";
function Modal({children}) {
    console.log({children});
    return (
        <>
        <div className="modal">
            {children}
        </div>
        </>
    )
}

export default Modal;
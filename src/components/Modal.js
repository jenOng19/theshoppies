import React from "react";

const Modal = (props) => {
    return (
        <div className={props.status !== false? "hide": "modal"}>
            <div className="modal-content">
                <span className="close" onClick={props.changeStatus}>&times;</span>
                <p>You can only nominate 5 movies.  Please edit on nominations page.</p>
            </div>
        </div>
    );
}

export default Modal;
import React from "react";

const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div className="modal" id={id || "Modal"}>
      <div className="modal-content-box">
        <div className="modal-header">
          <h2>{header ? header : "Modal Header"}</h2>
          <span className="close-modal-icon" onClick={onClose}>
            &times;
          </span>
        </div>

        <div className="modal-body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is our modal body.</p>
            </div>
          )}
        </div>
        <div className="modal-footer">
          {footer ? (
            footer
          ) : (
            <div>
              <h2>This is modal footer</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;

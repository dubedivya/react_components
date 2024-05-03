import React, { useState } from "react";
import "./modal.css";
import Modal from "./modal.jsx";

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);
  const handleToggleModalPopup = () => {
    setShowModalPopup(!showModalPopup);
  };

  const onClose = () => {
    setShowModalPopup(false);
  };
  return (
    <div className="wrapper">
      <button onClick={handleToggleModalPopup} className="modal-toggle-btn">
        Open Modal Popup
      </button>
      {showModalPopup && (
        <Modal
          id={"1"}
          body={<div>Customised Body</div>}
          header={<h2>Customised Header</h2>}
          footer={<h2>Customised Footer</h2>}
          onClose={onClose}
        />
      )}
    </div>
  );
};

export default ModalTest;

import React, { useRef, useState } from "react";
import ModalTest from "../../11_ModalPopup/modal-test.jsx";
import useOutsideClick from "./index.jsx";

const UseOnClickOutsideTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h1>Use Outside Click</h1>
      {showContent ? (
        <div ref={ref}>
          <ModalTest />
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default UseOnClickOutsideTest;

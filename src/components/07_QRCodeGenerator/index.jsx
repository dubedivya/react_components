import React, { useState } from "react";
import "./style.css";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQRCode = () => {
    setQrCode(input);
    setInput("");
  };
  return (
    <div className="qr-generator-container">
      <h1>QR Code Generator</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="type something here..."
          value={input}
          name="qr-code"
          className="input-box"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={!(input && input.trim() !== "")}
          onClick={handleGenerateQRCode}
          className="qr-btn"
        >
          Generate
        </button>
      </div>
      <div className="qr-code-box">
        <QRCode value={qrCode} id="qr-code-value" size={400} />
      </div>
    </div>
  );
};

export default QRCodeGenerator;

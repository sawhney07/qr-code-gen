import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./QRCodeGenerator.css";

const QRCodeGenerator: React.FC = () => {
  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedText(text);
  };

  return (
    <div className="qr-code-generator">
      <h1>QR Code Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Enter text to convert"
        />
              {submittedText.length === 0 && (
        <h2>Please enter text to generate a QR Code!</h2>
      )}
        <button type="submit">Generate</button>
              {submittedText 
               && <QRCode className="qr-code" value={submittedText} />}
      </form>


    </div>
  );
};

export default QRCodeGenerator;

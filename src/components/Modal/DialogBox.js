import React from "react";

const DialogBox = ({ onClose }) => {
  return (
    <div style={modalStyles}>
      <div style={overlayStyles} onClick={onClose}></div>
      <div style={modalContentStyles}>
        <h2>Modal Title</h2>
        <p>This is the modal content!</p>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>
  );
};

const modalStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const overlayStyles = {
  position: " absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
};

const modalContentStyles = {
  padding: "20px",
  borderRadius: "8px",
  backgroundColor: "white",
  zIndex: 1001,
};

export default DialogBox;

import React, { useState } from "react";
import DialogBox from "./DialogBox";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>React Modal Example</h1>
      <button onClick={openModal}>Open Modal</button>

      {isModalOpen && <DialogBox onClose={closeModal} />}
    </div>
  );
};

export default Modal;

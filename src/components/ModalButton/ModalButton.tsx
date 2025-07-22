import React, { ReactNode, useState } from "react";

import Modal from "../Modal/Modal";

import "./modalButton.css";

export type ModalButtonProps = {
  buttonText: string;
  content: ReactNode;
};

const ModalButton = ({ buttonText, content }: ModalButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="modal__button" onClick={() => setIsOpen(!isOpen)}>
        {buttonText}
      </button>
      <Modal
        isVisible={isOpen}
        onClickHandle={() => setIsOpen(!isOpen)}
        title="Game rules"
        content={content}
      />
    </>
  );
};

export default ModalButton;

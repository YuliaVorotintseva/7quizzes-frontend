import React, { ReactNode, useState } from "react";

import "./modalButton.css";
import Modal from "../Modal/Modal";

export type ModalButtonProps = {
  buttonText: string;
  content: ReactNode;
};

const ModalButton = (props: ModalButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="modal__button" onClick={() => setIsOpen(!isOpen)}>
        {props.buttonText}
      </button>
      <Modal
        isVisible={isOpen}
        onClickHandle={() => setIsOpen(!isOpen)}
        title="Game rules"
        content={props.content}
      />
    </>
  );
};

export default ModalButton;

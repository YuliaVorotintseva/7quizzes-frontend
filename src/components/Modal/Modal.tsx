import React, { ReactNode } from "react";

import "./modal.css";
import CloseButton from "../CloseButton/CloseButton";

export type ModalProps = {
  onClickHandle: () => void;
  title: string;
  content: ReactNode;
};

const Modal = ({ onClickHandle, title, content }: ModalProps) => (
  <div className="overlay">
    <div className="modal">
      <CloseButton onClickHandle={onClickHandle} />
      <p className="modal__title">{title}</p>
      {content}
    </div>
  </div>
);

export default Modal;

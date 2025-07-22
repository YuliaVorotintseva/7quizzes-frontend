import React, { ReactNode } from "react";

import CloseButton from "../CloseButton/CloseButton";

import "./modal.css";

export type ModalProps = {
  isVisible: boolean;
  onClickHandle: () => void;
  title: string;
  content: ReactNode;
};

const Modal = ({ isVisible, onClickHandle, title, content }: ModalProps) => (
  <div className={isVisible ? "overlay" : "overlay hidden"}>
    <div className="modal">
      <CloseButton onClickHandle={onClickHandle} />
      <p className="modal__title">{title}</p>
      {content}
    </div>
  </div>
);

export default Modal;

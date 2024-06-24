import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="min-h-[200px] max-w-[80%] bg-white relative z-50 m-auto">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-2xl self-end" />
            </div>
            {children}
          </div>
          <div
            onClick={onClose}
            className="absolute top-0 h-screen backdrop-blur w-screen z-40"
          />
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;

import React from "react";
import ReactModal from "react-modal";



interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClick: React.MouseEventHandler;
}

ReactModal.setAppElement("#root");
const Modal: React.FC<IModalProps> = ({ children, isOpen, handleClick }) => {
  const customStyles: typeof ReactModal.defaultStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0,0, 0.75)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
      borderRadius: "20px",

    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClick}
      shouldCloseOnOverlayClick={false}
      style={customStyles}
      shouldReturnFocusAfterClose={false}
      >
      
      {children}
    </ReactModal>
  );
};

export default Modal;

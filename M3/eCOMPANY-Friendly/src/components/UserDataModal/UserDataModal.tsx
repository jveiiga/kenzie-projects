import { useState } from "react";
import { StyledUserDataModal } from "./style";
import { IoIosCloseCircle } from "react-icons/io";
import { transform } from "typescript";
import { before } from "node:test";

const customStyles = {
  content: {},
  overlay: {
    with: "100%",
    height: "100%",
  },
};

interface iModalProps {
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user: iUser;
}

interface iUser {
  email: string;
  name: string;
  tellphone: string;
  image?: string;
}

export const UserDataModal = ({
  modalIsOpen,
  setModalIsOpen,
  user,
}: iModalProps) => {
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <StyledUserDataModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName="modal-overlay"
      className="modal-content"
      style={{
        content: {
          backgroundColor: "var(--primary)",
          minWidth: "287px",
          width: "393px",
          height: "355px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
        },
        overlay: {
          position: "fixed",
          top: "0",
          zIndex: "100",
          backgroundColor: "rgba(0,0,0,0.4)",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <div className="container">
        <button>
          <IoIosCloseCircle className="closeIcon" onClick={closeModal} />
        </button>
        <div className="content">
          <div className="headerModal">
            <h2>Dados do usuário</h2>
          </div>
          <div className="dataContainer">
            <div className="userName">
              {user?.image ? (
                <img src={user.image} alt={`foto de ${user.name}`} />
              ) : (
                <img
                  src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"
                  alt="avatar usuário"
                />
              )}
              <h2>{user?.name}</h2>
            </div>
            <div className="userData">
              <span>E-mail: {user?.email}</span>
              <span>Contato: {user?.tellphone}</span>
            </div>
          </div>
        </div>
      </div>
    </StyledUserDataModal>
  );
};

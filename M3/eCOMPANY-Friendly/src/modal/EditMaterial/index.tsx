import { useState } from "react";
import Modal from "react-modal";
import { IoMdCloseCircle } from "react-icons/io";

import "./styles.css";

Modal.setAppElement("#root");

const EditMaterial = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      {/* <button onClick={openModal}>abrir</button> */}
      <Modal ariaHideApp={false} isOpen={modalIsOpen} className="Modal" overlayClassName="Overlay">
        <div className="containerButtonClose">
          <button className="buttonClose" onClick={closeModal}>
            <IoMdCloseCircle />
          </button>
        </div>
        <div className="containerForm">
          <p>Editar material</p>
          <form className="formStyle">
            <input type="text" placeholder="Insira a url da imagem" />
            <input type="text" placeholder="Digite o nome do material" />
            <input type="text" placeholder="Digite o tipo de material" />
            <input type="text" placeholder="Digite o peso do material" />
            <input type="text" placeholder="Digite Descrição do material" />
            <button className="buttonSubmit" type="submit">
              Editar
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default EditMaterial;

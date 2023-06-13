import { useContext } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { AuthContext, IProduct } from "../../contexts/authContext";
import { IoMdCloseCircle } from "react-icons/io";
import "./styles.css";

export const NewProduct = () => {
  const { openModalProduct, setOpenModalProduct, modalClose, newProduct } =
    useContext(AuthContext);

  const { register, handleSubmit } = useForm<IProduct>();

  return (
    <Modal
      isOpen={openModalProduct}
      onRequestClose={modalClose}
      contentLabel="Example Modal"
      overlayClassName="Overlay"
      className="Modal"
    >
      <div className="containerButtonClose">
        <button
          className="buttonClose"
          onClick={() => setOpenModalProduct(false)}
        >
          <IoMdCloseCircle />
        </button>
      </div>
      <div className="containerForm">
        <h2 className="public">Publicar material</h2>
        <form
          className="formStyle"
          onSubmit={handleSubmit((data) => newProduct(data))}
        >
          <input
            type="text"
            placeholder="Insira a url da imagem"
            {...register("image")}
          />
          <input
            type="text"
            placeholder="Digite o nome do material"
            {...register("name")}
          />
          <input
            type="text"
            placeholder="Digite o tipo de material"
            {...register("type")}
          />
          <input
            type="text"
            placeholder="Digite o peso do material"
            {...register("weight")}
          />
          <input
            type="text"
            placeholder="Descrição do material"
            {...register("description")}
          />
          <input
            type="text"
            placeholder="Estado onde está o material"
            {...register("country")}
          />
          <input
            type="text"
            placeholder="Cidade onde está o material"
            {...register("city")}
          />
          <button className="buttonSubmit" type="submit">
            Publicar
          </button>
        </form>
      </div>
    </Modal>
  );
};

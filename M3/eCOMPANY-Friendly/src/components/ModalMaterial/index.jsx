import {
  BtnClose,
  ContainerContent,
  ContainerModal,
  ContentDescriptionModal,
  ContentModal,
  DescriptionModal,
  StyledModal as Modal,
  TitleModal,
} from "./styles";

const ModalMaterial = ({
  modalMaterialIsOpen,
  setModalMaterialIsOpen,
  productClick,
}) => {
  const closeModal = () => {
    setModalMaterialIsOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={modalMaterialIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={{
          overlay: {
            zIndex: "420",
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "100%",
          },
          content: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "555px",
            width: "93%",
            maxWidth: "393px",
            borderRadius: "10px",
            backgroundColor: "#142518",
          },
        }}
      >
        <ContainerModal>
          <BtnClose onClick={closeModal}>
            <span>X</span>
          </BtnClose>

          <TitleModal>Descrição do material</TitleModal>

          <ContainerContent>
            <ContentModal>{productClick?.name}</ContentModal>
            <ContentModal>Tipo: {productClick?.type}</ContentModal>
            <ContentModal>Peso: {productClick?.weight}</ContentModal>

            <ContentDescriptionModal>
              <DescriptionModal>Description</DescriptionModal>
              <DescriptionModal>{productClick?.description}</DescriptionModal>
            </ContentDescriptionModal>
          </ContainerContent>
        </ContainerModal>
      </Modal>
    </>
  );
};

export default ModalMaterial;

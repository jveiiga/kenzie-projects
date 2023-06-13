// import { useContext } from "react";
// import { MaterialContext } from "../../contexts/MaterialContext";
// import { StyledAddOrRemoveButton } from "../Button/styles";

import { StyledUl, StyledLi } from "../ProductList/styles";

const MaterialList = () => {
  //   const { material, deleteMaterial } = useContext(MaterialContext);

  return (
    <StyledUl>
      {/* {material.length > 0 ? ( */}
      <StyledLi>
        <img src="" alt="" />
        <h2>nome</h2>
        <div>
          {/* <StyledCollectButton onClick={() => deleteMaterial(el)}>
                coletar
              </StyledCollectButton> */}
        </div>
      </StyledLi>
      {/* )) */}
      {/* ) : ( */}
      <p>Adicione Tecnologias</p>
      {/* )}  */}
    </StyledUl>
  );
};

export default MaterialList;

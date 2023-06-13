import styled from "styled-components";

export const StyledUl = styled.ul`
  height: 60vh;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  top: 31%;
  left: 20%;

  margin-top: 40px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: scroll;
  
  @media (min-width: 600px) {
    height: 70vh;
    width: 79%;
    top: 17%;
    left: 10%;
  }

  @media (max-width: 600px) {
    overflow: hidden;
    overflow-y: scroll;
  }

  ${
    "" /* > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  } */
  }

  > div > p {
    font-size: 16px;
    color: var(--white);
  }
`;

export const StyledContainer = styled.div`

  
`

export const StyledLi = styled.li`
  margin-bottom: 20px;
  margin-right: 35px;
  cursor: pointer;

  @media (min-width: 600px) {
  }
  /* &:hover {
    background-color: var(--grey-3);
  } */
`;

export const StyledImageProduct = styled.img`
  width: 185px;
  height: 141px;
  border-radius: 8px 8px 0 0;
  box-shadow: 0px 4px 20px 10px rgba(0, 0, 0, 0.6);
`;

export const StyledContainerCard = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const StyledContainerUser = styled.span`
  display: flex;
  align-items: center;
`;

export const StyledImageUser = styled.img`
  width: 27px;
  height: 27px;
  border: 1px solid green;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 10px;
`;

export const StyledNameUser = styled.p`
  font-size: 12px;
  color: var(--white);
  flex-wrap: wrap;
  width: 20px;
`

export const StyledBtn = styled.button`
  width: 66px;
  height: 19px;
  font-size: 12px;
  color: var(--white);
  background-color: #152913;
  border-radius: 10px 10px 0 10px;
  cursor: pointer;

  :hover {
    background-color: #428653;
    transition: 1s ease;
  }
`;

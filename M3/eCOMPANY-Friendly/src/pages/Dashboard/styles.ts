import styled, { DefaultTheme } from "styled-components";
import { ITheme } from "../Login/styles";

export const StyledDashboard = styled.section`
  background-color: ${({ theme }) => theme.maindash};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  z-index: 1;
  
  .dash-nav {
    height: 25vh;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 5px;
    align-items: center;
    box-shadow: 0px 1px 0px 0px var(--white);
    position: absolute;
    z-index: 5;
    left: 10%;
    top: 40px;
  }
  .ellipse {
    display: flex;
    height: 300px;
    width: 100%;
    background-color: #1A2E1F;
    background-color: ${({ theme }) => theme.ellipse};
    border-radius: 45%;
    position: absolute;
    z-index: 0;
    top: -120px;
    @media screen and (min-width: 750px) {
      height: 500px;
      width: 100%;
      border-radius: 50%;
      margin-top: -20px;
      top: -100px;
      left: -200px;
    }

    @media screen and (min-width: 900px) {
      height: 550px;
      width: 100%;
    }

    @media screen and (min-width: 960px) {
      height: 650px;
      width: 90%;
    }
  }


  .search {
    width: 60%
  }
  .search input{
    width: 70%;
    margin: 0 5px 0 5px
  }

  .box-cards{
    width: 100%;
    position: absolute;
    margin: 0 auto;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 15px;
    z-index: 4;
  }
  .container {
    display: flex;
    width: 90vw;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 90vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    margin: 0 auto;
    left: 5%;
    margin-top: 30px;
    border-radius: 10px;
  }

  .newProduct {
    display: flex;
  }

  .modals {
    position: relative;
  }

  main {
    width: 100%;
    height: 80%;
  }

  h2 {
    display: flex;
  }

  
  .logo {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    color: ${({ theme }) => theme.logo};
  }
  
  .interative {
    width: 80%;
    display: flex;
    flex-direction: column;
  }
  
  .user-info {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: var(--white);
  }

  .user {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
  }
  
  .user > a {
    color: var(--white);
    font-weight: 800;
    text-decoration: none;
  }
  
  .search {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .lupa{
      position: relative;
      margin-left: -22%;
      border-left: 1px solid #000000;
      padding-left: 10px;
    }
  
  @media (min-width: 600px) {
    .dash-nav {
      flex-direction: row;
      height: 10vh;
      width: 85%;
      left: 7.5%;
    }
    
    .logo {
      width: 40%;
      justify-content: flex-start;
      margin-left: 20px;
    }

    .interative {
      flex-direction: row-reverse;
    }
    
    .user {
      flex-direction: row-reverse;
      justify-content: center;
    }
    
    .search > input {
      margin-right: 10px;
    }
  }
  `;

export const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  `;
export const Elipse = styled.img`
  width: 100%;
  height: 70%;
`;
export const Background = styled.div`
  display: flex;
  width: 90vw;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: ${({ theme }) => theme.containerdash};
  opacity: 0.45;
  position: absolute;
  margin: 0 auto;
  z-index: 1;
  left: 5%;
  margin-top: 30px;
  border-radius: 10px;
  overflow: hidden;
  `;

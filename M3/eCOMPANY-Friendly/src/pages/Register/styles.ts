

/*
export const BackgroundForm = styled.main<ITheme>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.mainn};
  
  align-items: center;
  justify-content: center;
  
  height: max-content;
  width: 100vw;
  z-index: 1;


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

  .logo {
    display: flex;
    flex-direction: row;
    width: 100vw;
    
    align-items: center;
    
    position: relative;
    bottom: 500px;
    top: 20px;

    margin-top: 10px;
    
    @media screen and (min-width: 750px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      left: 210px;
      top: -50px;
    }
    
    @media screen and (min-width: 900px) {
      width: 100%;
      top: -80px;
    }
    
    @media screen and (min-width: 960px) {
      width: 100%;
      top: -120px;
    }
  }

  .logo-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    width: 20vw;
    justify-content: center;
  }
  
  .toggle {
    display: flex;
    margin-right: 150px;
    align-items: center;
    margin-top: -30px;
    justify-content: center;
  }
  
  .logo-image {
    display: flex;
    width: 100px;
  }
  
  `;
  
  export const Company = styled.img`
  position: relative;
  top: 240px;
  width: 100%;
  margin: 20px 0;
  height: max-content;
  margin-bottom: 30px;
  
  @media screen and (min-width: 425px) {
    width: 100vw;
    height: 300px;
    top: 160px;
    padding-bottom: 70px;
  }
  
  @media screen and (min-width: 750px) {
    width: 500px;
    height: 500px;
    top: 280px;
    margin-left: -40%;
  }
  
  @media screen and (min-width: 900px) {
    height: 400px;
  }
  
  @media screen and (min-width: 960px) {
    top: 320px;
    height: 450px;
    width: 100%;
    left: 20px;
  }
  `;
  
  export const Container = styled.section`
  display: flex;
  padding-top: 10px;
  `
  
  export const FormStyle = styled.div<ITheme>`
  
  display: flex;
  margin-top: 170px;
  width: 800px;
  max-width: 990px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  
input {
  display: flex;

  max-width: 270px;
  height: 45px;
  
  padding-left: 10px;
  margin-top: 16px;
  
  margin-bottom: 10px;
  
  border: none;
  background-color: #d9d9d9;
  
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  
  
  @media screen and (min-width: 689px) {
    height: 45px;
  }
  
  @media screen and (min-width: 750px) {
    min-width: 25%;
    height: 30px;
    margin-bottom: -5px;
  }
  
    @media screen and (min-width: 900px) {
      margin-bottom: 5px;
    }
  }

  @media screen and (min-width: 375px) {
    margin-top: 170px;
  }

  @media screen and (min-width: 425px) {
    margin-top: 5px;
  }
  
  @media screen and (min-width: 750px) {
    min-width: 30%;
    width: 30%;
    height: 10%;
    position: relative;
    background-color: rgba(34, 95, 62, 0.4);
    left: 60%;
    top: -260px;
    z-index: 1;
    border-radius: 8px;
    justify-content: center;
    
    input {
      display: flex;
      min-height: 40px;
    }
  }
  
  @media screen and (min-width: 900px) {
    top: -230px;
  }
  
  @media screen and (min-width: 960px) {
    left: 100%;
    top: -230px;
    height: 400px;
    width: 300px;
  }
  
  button {
    min-height: 45px;
    border-radius: 8px 8px 0 8px;
    background-color: rgba(34, 95, 62, 0.4);
  }
  
  div {
    display: flex;
    width: 100vw;
    z-index: 1;
    
    margin-top: 15px;
    
    justify-content: end;
    
    
    form {
      display: flex;
      flex-direction: column;
      z-index: 1;
      
      align-items: center;
      
      gap: 10px;
      
      margin-top: 25px;
      max-width: 900px;
      
      
      @media (min-width: 750px) {
        margin-top: 5px;
      }
      
      @media screen and (min-width: 900px) {
        h2 {
          font-size: 16px;
          margin-top: 10px;
      }
    }
    
  }
  
  
  button {
    display: flex;
    border: none;
    
    align-items: center;
    justify-content: center;
    
    min-width: 83%;
    padding: 10px;
    height: 35px;
    
    margin-top: 15px;
    
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    
    background-color: ${({theme}) => theme.buttongreen};
    color: white;
    
    @media screen and (min-width: 689px) {
      height: 45px;
    }
    
    @media screen and (min-width: 750px) {
      min-width: 26%;
      }
      
      @media screen and (min-width: 900px) {
        font-size: 16px;
      }
      
      @media screen and (min-width: 960px) {
        font-size: 16px;
        min-width: 29%;
      }
      
    }
  }
  `;
  
  export const Logo = styled.h1<ITheme>`
  display: flex;
  flex-direction: row;
  color: #5EFFA8;
  color: ${({theme}) => theme.logo};
  font-weight: 700;
  font-size: 20px;
  width: 100vw;
  
  @media screen and (min-width: 900px) {
    font-size: 30px;
  }
  `
  */
 
 

 
 
 
 
 
 import { Link } from "react-router-dom";
import styled, {createGlobalStyle, DefaultTheme, StyledComponent} from "styled-components"
 interface ITheme {
   mainn?: string;
   ellipse?: string;
   logo?: string;
   buttongreen?: string;
   btnRegister?: string;
   question?: string;
 }
 
 interface ITheme {
   mainn?: string;
  ellipse?: string;
  logo?: string;
  buttongreen?: string;
  btnRegister?: string;
  question?: string;
}


export const BackgroundForm = styled.main<ITheme>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.mainn};
  
  align-items: center;
  justify-content: center;
  
  height: max-content;
  width: 100vw;
  z-index: 1;


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

  .logo {
    display: flex;
    flex-direction: row;
    width: 100vw;

    align-items: center;

    position: relative;
    bottom: 500px;
    top: 20px;

    margin-top: 10px;

    @media screen and (min-width: 750px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      left: 210px;
      top: -50px;
    }

    @media screen and (min-width: 900px) {
      width: 100%;
      top: -80px;
    }

    @media screen and (min-width: 960px) {
      width: 100%;
      top: -120px;
    }
  }

  .logo-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    width: 20vw;
    justify-content: center;
  }

  .toggle {
    display: flex;
    margin-right: 150px;
    align-items: center;
    margin-top: -30px;
    justify-content: center;
  }

    .logo-image {
      display: flex;
      width: 100px;
    }

`;

export const BtnComeBack = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78px;
  min-height: 30px;
  font-size: 18px;
  color: #1A2E1F;
  background-color: #5EFFA8;
  border-radius: 8px;
  text-decoration: none;
  margin: 21px 0 0 193px;

  :hover {
    border: 1px solid #FFF;
    border-radius: 8px;
  }
`


export const Company = styled.img`
  position: relative;
  top: 180px;
  width: 100%;
  margin: 20px 0;
  height: max-content;

  @media screen and (min-width: 425px) {
    width: 100vw;
    height: 300px;
    top: 160px;
    padding-bottom: 70px;
  }

  @media screen and (min-width: 750px) {
    width: 500px;
    height: 500px;
    top: 280px;
    margin-left: -40%;
  }

  @media screen and (min-width: 900px) {
    height: 400px;
  }

  @media screen and (min-width: 960px) {
    top: 320px;
    height: 450px;
    width: 100%;
    left: 20px;
  }
`;

export const Container = styled.section`
  display: flex;
  padding-top: 10px;
  `

export const FormStyle = styled.div<ITheme>`
  display: flex;
  justify-content: flex-end;
  margin-top: 170px;
  max-width: 990px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (min-width: 375px) {
    margin-top: 170px;
  }

  @media screen and (min-width: 425px) {
    margin-top: 5px;
  }

  @media screen and (min-width: 750px) {
  min-width: 30%;
  width: 30%;
  height: 10%;
  position: relative;
  background-color: rgba(34, 95, 62, 0.4);
  left: 60%;
  top: -260px;
  z-index: 1;
  border-radius: 8px;
  justify-content: center;

  input {
    display: flex;
    min-height: 40px;
  }
  }

  @media screen and (min-width: 900px) {
    top: -230px;
  }

  @media screen and (min-width: 960px) {
    left: 100%;
    top: -230px;
    height: 510px;
    width: 300px;
  }
  
  button {
    min-height: 45px;
    border-radius: 8px 8px 0 8px;
    background-color: rgba(34, 95, 62, 0.4);
  }

  div {
    display: flex;
    width: 100vw;
    z-index: 1;

    margin-top: 15px;
    
    justify-content: end;
    
    
  }
  
  form {
    display: flex;
    flex-direction: column;
    z-index: 1;
    
    align-items: center;
    
    gap: 10px;
    
    margin-top: 25px;
    max-width: 900px;
    
    
    @media (min-width: 750px) {
      margin-top: 5px;
    }
    
    @media screen and (min-width: 900px) {
    h2 {
      font-size: 16px;
      margin-top: 10px;
    }
  }

    input {
      display: flex;

      max-width: 270px;
      min-width: 80%;
      height: 45px;
      
      padding-left: 10px;
      margin-top: 8px;
      
      border: none;
      background-color: #d9d9d9;
      
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom-left-radius: 8px;
      
      @media screen and (min-width: 689px) {
        height: 45px;
      }
      
      @media screen and (min-width: 750px) {
        min-width: 25%;
        height: 30px;
        margin-bottom: -5px;
      }
      
      @media screen and (min-width: 900px) {
        
      }
    }

    button {
      display: flex;
      border: none;
      
      align-items: center;
      justify-content: center;
      
      min-width: 83%;
      padding: 10px;
      height: 35px;
      
      margin-top: 15px;
      
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom-left-radius: 8px;
      
      background-color: ${({theme}) => theme.buttongreen};
      color: white;
      
      @media screen and (min-width: 689px) {
        height: 45px;
      }

      @media screen and (min-width: 750px) {
        min-width: 26%;
      }

      @media screen and (min-width: 900px) {
      font-size: 16px;
      }

      @media screen and (min-width: 960px) {
      font-size: 16px;
      min-width: 29%;
      }

    }
    .account {
      color: #5effa8;
      font-weight: 400;
      color: ${({theme}) => theme.question};
      margin-top: 5px;
      font-size: medium;
      
      @media screen and (min-width: 750px) {
        font-size: 12px;
      }
      
      @media screen and (min-width: 900px) {
          font-size: 14px;
      }
      
    }
  
  .link {
    display: flex;
    border: none;
    
    align-items: center;
    justify-content: center;
    
    min-width: 83%;
    height: 45px;
    
    margin-top: 5px;
    
    
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    
    background-color: ${({theme}) => theme.btnRegister};
    color: white;
    
    text-decoration: none;
    
    @media screen and (min-width: 750px) {
      min-width: 26%;
    }

    @media screen and (min-width: 960px) {
      font-size: 16px;
      min-width: 29%;
      }
  }
}
`;

export const DivWelcome = styled.div`
  display: none;

  h2 {
    display: none;
  }

  @media screen and (min-width: 750px) {
    display: flex;
    display: block;
    flex-direction: column;
    align-items: center;
    min-width: 80%;
  
  h2 {
    color: #FFF;
    display: flex;
    font-weight: 300;
    margin-bottom: 20px;
    font-size: 14px;
  }
  }

  @media screen and (min-width: 900px) {
    h2 {
      font-size: 16px;
    }
  }

`

export const Logo = styled.h1<ITheme>`
  display: flex;
  flex-direction: row;
  color: #5EFFA8;
  color: ${({theme}) => theme.logo};
  font-weight: 700;
  font-size: 20px;
  width: 100vw;

  @media screen and (min-width: 900px) {
    font-size: 30px;
  }
`
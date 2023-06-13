import styled from "styled-components";

export const StyledDashboardProfile = styled.section`

  .dash-nav {
    position: fixed;
    top: 30px;
  }

  .search {
    width: 70%
  }
  .search input{
    width: 90%;
    margin: 0 5px 0 5px
  }

  .containerDash {
    display: flex;
  width: 90vw;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: rgba(0, 0, 0, 0.45);
  opacity: 0.45;
  position: absolute;
  margin: 0 auto;
  z-index: 1;
  left: 5%;
  margin-top: 30px;
  border-radius: 10px;
  overflow: hidden;
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
  aside{
    width: 80%;
    position: absolute;
    top: 275px;
    left: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid white;
    z-index: 4;

    @media screen and (max-width: 600px) {
      top: 200px;
    }
  }
  .asideInfoUser {
    width: 180px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .imgNoBorder{
    border-radius: 0px;
  }
  .asideInfoUser > h2 {
    color: var(--white);
  }
  .box-cards{
    width: 100%;
    position: absolute;
    top: 340px;
    margin: 0 auto;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 15px;
    z-index: 4;
    height: 60vh;

    @media screen and (max-width: 600px) {
      top: 250px;
      position: absolute;
      overflow: scroll;
    }
  }
  .card{
    min-width: 190px;
    height: 180px;
    margin: 5px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card > img{
    width:185px;
    max-width: 100%;
    min-height: 141px;
    border-radius: 10px 10px 0 0;
    box-shadow: 0px 4px 20px 10px rgba(0, 0, 0, 0.6);
  }
  .card-options{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
   
  }
  .card-options > img{
    background-color: var(--primary);
    padding: 4px;
    border-radius: 5px;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    .search{
      width: 100%;
    }
    .box-cards{
      flex-direction: column;
      max-width: 80%;
      left: 10%;
      height: 299px;
      overflow-x: scroll;
      margin-top: 120px;
    }
    .search input{
      width: 40px;
      margin-left: -5px;
    }
    .lupa{
      position: relative;
      margin-left: -22%;
      border-left: 1px solid #000000;
      padding-left: 10px;
    }
  }
  @media (min-width: 600px) {
    .search{
      width: 80%;
    }
    .search input{
      max-width: 72%;
      margin-left: -5px;
    }
    .lupa{
      position: relative;
      margin-left: -16%;
      border-left: 1px solid #000000;
      padding-left: 10px;
    }
    aside{
      max-width: 25%;
      height: 70vh;
      top: 127px;
      left: 8%;
      border: none;
      border-right: 1px solid white;
    }
    .asideInfoUser {
      width: 90%;
      margin-top: 20px;
    }
    .box-cards{
      max-width: 58%;
      top: 157px;
      left: 35%;
      flex-direction: row;
      flex-wrap: wrap;
      overflow-y: auto;
    }
    .card{
        width: 180px;
        height: 160px;
        margin: 5px auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
    @media (min-width: 850px) {
    aside{
        max-width: 22%;
    }
    .box-cards{
        width: 69%;
        left: 30%;
    }
}
    @media (min-width: 900px) {
    aside{
        max-width: 20%;
    }
}
`;
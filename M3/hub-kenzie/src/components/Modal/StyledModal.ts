import styled from "styled-components"

export const ModalRegister = styled.div`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100vh;
    z-index: 420;
    animation: appearFromTopLeft 1s;

    .overlay {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, .35) ;
    }

    .content {
        width: 296px;
        height: 275px;
        border-radius: 4px;
        background-color: #212529;
    }

    ${'' /* .disappear {
        animation: disappearTopLeft 1s;
    } */}

    @keyframes appearFromTopLeft {
    0% {
        opacity: 0;
        transform: translate(-30%, -30%);
    }

    100% {
        opacity: 1;
        transform: translate(0, 0);

    }
}

    ${'' /* @keyframes disappearTopLeft {
        0% {
            opacity: 1;
            transform: translate(0, 0);
        }
        
        100% {
            opacity: 0;
            transform: translate(-30%, -30%);
        
        }
    } */}
`

export const Form = styled.form`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    .data-tech {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px;
        margin-top: 10px;
    }

    .label1 {
        font-weight: 400;
        font-size: 10px;
        line-height: 0px;
        color: #F8F9FA;
        margin-bottom: 10px;
    }

    .label2 {
        font-weight: 400;
        font-size: 11.5px;
        color: #F8F9FA;
        margin-bottom: 10px;
    }

    .input1 {
        margin-bottom: 10px;
        width: 255px;
        height: 39px;
        border: none;
        background-color: #343B41;
        border-radius: 4px;
        color: #fff;
        padding-left: 15px;

        :hover {
            border: 2px solid #F8F9FA;
        }
    }

    .input2 {
        margin-bottom: 10px;
        width: 272px;
        height: 39px;
        border: none;
        background-color: #343B41;
        border-radius: 4px;
        color: #fff;
        padding-left: 15px;

        :hover {
            border: 2px solid #F8F9FA;
        }
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 190px;
        height: 98.5px;
        border: none;
        border-radius: 4px;
        font-size: 12.8px;
        line-height: 21px;
        color: #FFFFFF;
        cursor: pointer;
        background-color: #FF577F;
        margin: 0 0 25px 12px;

        :hover {
            border: 0.9px solid #F8F9FA;
        }

        @media (min-width: 1024px) {
            width: 269px;
            height: 72px;
            font-size: 15px;
        }
    }
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    border-radius: 4px 4px 0 0;
    background-color: #343B41;
    font-weight: 700;
    font-size: 12px;
    line-height: 19px;
    padding: 10px;

    .close {
        border: none;
        background-color: transparent;
        font-size: 13px;
        color: #868E96;
        cursor: pointer;
    }
    
`

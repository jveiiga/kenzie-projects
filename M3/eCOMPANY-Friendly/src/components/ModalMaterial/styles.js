import styled from "styled-components"
import Modal from "react-modal"

export const StyledModal = styled(Modal)`
    animation: appearFromTopLeft 1s;
    @keyframes appearFromTopLeft {
        0% {
            opacity: 0;
            transform: translate(-30%, -30%);
        }
        100% {
            opacity: 1;
            transform: translate(10, 10);
        }
    }
`

export const ContainerModal = styled.div`
        color: #142518;
        width: 90%;
        max-width: 322px;
        height: 465px;
        border-radius: 9px;
        background-color: #141414;
        box-shadow: 0px 5px 20px 7px rgba(0, 0, 0, 0.25);
        @media (min-width: 1024px) {
                max-width: 333px;
        }
`

export const BtnClose = styled.button`
        z-index: 510;
        position: relative;
        top: -40px;
        left: 295px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: #141414;;
        :hover {
                background-color: #181818;
        } 
`

export const TitleModal = styled.h2`
        font-size: 22px;
        color: #FFFFFF;
        text-align: center;
        margin-bottom: 30px;
`

export const ContainerContent = styled.div`
        padding-left: 30px;
`

export const ContentModal = styled.p`
        width: max-content;
        font-size: 22px;
        color: #FFFFFF;   
        margin-bottom: 20px;
`

export const DescriptionModal = styled.p`
        font-size: 18px;
        margin-bottom: 10px;
`

export const ContentDescriptionModal = styled.div`
        width: 83%;
        max-width: 263px;
        height: 207px;
        font-size: 18px;
        padding: 10px;
        color: #000000;
        background-color: #D0D0D0;
        border-radius: 10px;
        overflow: hidden;
        overflow-y: scroll;
        margin-bottom: 20px;
        @media (min-width: 1024px) {
                max-width: 273px;
        }
`
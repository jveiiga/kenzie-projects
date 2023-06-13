import styled from "styled-components"
import { Link } from "react-router-dom"

export const LogoLogIn = styled.h1`
    color: #FF577F;
    margin-bottom: 20px;
    font-size: 22px;

    @media (min-width: 1024px) {
        font-size: 28px;
    }
`

export const ContainerLogIn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 296px;
    max-width: 100%;
    height: 402px;
    background-color: #212529;
    box-shadow: 0px 3.2px 32px -8px rgba(0, 0, 0, 0.25);
    border-radius: 3.2px;

    @media (min-width: 1024px) {
        width: 369px;
        height: 502px;
    }
`

export const TitleLogin = styled.h2`
    font-size: 14px;
    line-height: 22px;
    color: #F8F9FA;

    @media (min-width: 1024px) {
        font-size: 17px;
    }
`

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const LinkRegister = styled(Link)`
    font-weight: 600;
    font-size: 9.6px;
    line-height: 14px;
    color: #868E96;
    margin-bottom: 15px;

    :hover {
        border-bottom: 1px solid #868E96;
    }

    @media (min-width: 1024px) {
        font-size: 12px;
    }
`

export const MessageError = styled.p`
        margin: 5px 0;
        color: #FF576F;
        font-size: 10px;
`
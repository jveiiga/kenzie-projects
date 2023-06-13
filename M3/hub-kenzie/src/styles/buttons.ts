import { Link } from "react-router-dom"
import styled, { css, FlattenSimpleInterpolation } from "styled-components"

interface IStyledButtonProps {
    variant: string;
    ButtonTypeVariations?: "primary";
}

interface ButtonTypeVariationsProps {
    [key: string]: FlattenSimpleInterpolation;
}



export const ButtonTypeVariations: ButtonTypeVariationsProps = { 
    primary: css`
        background-color: #FF577F;
    `,
    negative: css`
        background-color: #59323F;
    `
}

export const ButtonMedium = styled.button<IStyledButtonProps>`
    ${({ variant }) => ButtonTypeVariations[variant || "primary"]};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3px;
    width: 259.9px;
    height: 38.5px;
    border: none;
    border-radius: 4.06px;
    margin: 17px 0;
    font-size: 12.8px;
    line-height: 21px;
    color: #FFFFFF;
    cursor: pointer;

    :hover {
        border: 0.9px solid #F8F9FA;
    }

    @media (min-width: 1024px) {
        width: 324px;
        height: 48px;
        font-size: 15px;
    }
`

export const ButtonRegister = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 22px;
    width: 259.9px;
    height: 38.5px;
    margin: 5px 0;
    background-color: #868E96;
    border: 1.2px solid #868E96;
    border-radius: 4px;
    color: #fff;
    font-size: 12px;
    line-height: 21px;
    color: #FFFFFF;

    :hover {
        border: 0.9px solid #F8F9FA;
    }

    @media (min-width: 1024px) {
        width: 324px;
        height: 48px;
        font-size: 15px;
    }
`

export const ButtonComeBack = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 16.2px;
    width: 79px;
    height: 31px;
    background-color: #212529;
    border-radius: 4px;
    color: #F8F9FA;
    font-size: 9px;
    line-height: 23px;

    :hover {
        border: 1px solid;
    }

    @media (min-width: 1024px) {
        width: 67px;
        height: 40px; 
        font-size: 12px;
    }
`

export const ButtonGoOut = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 16.2px;
    width: 55px;
    height: 32px;
    color: #fff;
    background-color: #212529;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    :hover {
        border: 1px solid;
    }
`
import styled from "styled-components"

export const InputLogin = styled.input`
    width: 239px;
    height: 38px;   
    padding-left: 20px;
    background-color: #343B41;
    border: none;
    border-radius: 3.1px; 
    color: #fff;

    :hover {
        border: 0.9px solid #F8F9FA;
    }
 
    @media (min-width: 1024px) {
        width: 304px;
        height: 48px;
        font-size: 16px;
    }
`

export const LabelLogin = styled.label`
    font-weight: 400;
    font-size: 9.7px;
    font-weight: 400;
    color: #F8F9FA;
    margin: 10px 0;
    
    @media (min-width: 1024px) {
        font-size: 12px;
    }
`

export const InputRegister = styled.input`
    width: 239px;
    height: 38px;
    background-color: #343B41;
    border: 0.9px solid #343B41;
    border-radius: 3.1px;
    padding-left: 20px;
    color: #fff;

    :hover {
        border: 0.9px solid #F8F9FA;
    }

    @media (min-width: 1024px) {
        width: 304px;
        height: 48px;
    }
`

export const LabelRegister = styled.label`
    font-size: 9px;
    font-weight: 400;
    color: #F8F9FA;
    margin: 10px 0;

    @media (min-width: 1024px) {
        font-size: 12px;
    }
`

export const SelectRegister = styled.select`
    width: 263px;
    height: 38px;
    background-color: #343B41;
    border: 0.9px solid #343B41;
    border-radius: 3.1px;
    margin-bottom: 20px;
    color: #F8F9FA;
    cursor: pointer;

    :hover {
        border: 0.9px solid #F8F9FA;
    }

    @media (min-width: 1024px) {
        width: 329px;
        height: 48px;
    }
`
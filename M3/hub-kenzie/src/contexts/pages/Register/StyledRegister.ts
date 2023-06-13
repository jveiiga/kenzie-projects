import styled from "styled-components"

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 295px;
    height: 710px;
    background-color: #212529;
    box-shadow: 0px 3.2px 32px -8px rgba(0, 0, 0, 0.25);
    border-radius: 3.2px;
    margin-top: 50px;

    @media (min-width: 1024px) {
        width: 370px;
        height: 891px;
        margin-top: 90px;
    }
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;    
`

export const StyledTitle = styled.h1`
    font-weight: 700;
    font-size: 14.3916px;
    line-height: 22px;
    color: #F8F9FA;
`

export const StyledCaption = styled.p`
    font-weight: 400;
    font-size: 9.59437px;
    line-height: 18px;
    color: #868E96;
`

export const StyledInput = styled.input`
    width: 300px;
    height: 38px;
    color: #fff;
    margin: 15px 0;
`

export const StyledError = styled.p`
    margin: 5px 0;
    color: #FF576F;
    font-size: 10px;
`
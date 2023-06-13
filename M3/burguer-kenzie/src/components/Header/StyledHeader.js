import styled from "styled-components"

export const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 139px; 
    background-color: var(--color-grey-0);

    @media (min-width: 1024px) {
        flex-direction: initial;
        justify-content: space-between;
        padding: 0 120px;
    }
`

export const StyledContainerLogoHeader = styled.span`
    display: flex;
`

export const StyledLogoBlack = styled.h1`
    font-weigth: 700;
    font-size: 25px;
    margin: 0 10px;
`

export const StyledLogoColor = styled.h1`
    font-weigth: 400;
    font-size: 25px;
    margin-bottom: 10px;
    color: #EB5757;
`

export const StyledContainerInput = styled.span`
      position: relative;
`

export const StyledContainerBtn = styled.span`
    position: absolute;
    margin-left: -120px;
`

export const StyledInput = styled.input`
    border: 1px solid red;
    width: 382px;
    max-width: 100%;
    height: 60px;
    border: 2px solid #E0E0E0;
    border-radius: 8px;
    padding: 10px;
    background-color: #FFFFFf;
`

export const StyledButtonSearch = styled.button`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    width: 107px;
    max-width: 100%;
    height: 40px;
    color: #FFFFFF;
    background-color: #27AE60;
    border: 2px solid #27AE60;
    border-radius: 8px;
    cursor: pointer;
`

export const StyledContainerInputButton = styled.span`

` 
import styled from "styled-components"

export const StyledHeader = styled.header`
    position: absolute;
    top: 0;
    height: 70px;
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 290px;
    @media (min-width: 1024px) {
        width: 370px;
    }
`

export const StyledLogo = styled.h2`
    font-size: 22px;
    color: #FF577F;
    @media (min-width: 1024px) {
        font-size: 26px;
    }
`
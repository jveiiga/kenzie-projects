import styled from "styled-components"

export const StyledCard = styled.li`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 300px;
    height: 346px;
    background-color: #FFFFFf;
    border: 2px solid #E0E0E0;
    border-radius: 5px; 
`

export const StyledImgCard = styled.img`
    width: 100%;
    height: 150px;
    background-color: #F5F5F5;
    object-fit: contain;
`

export const StyledTitle = styled.h2`
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #333333;
    margin: 15px 0 0 15px;
`

export const StyledCategory = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #828282;
    margin: 15px 0 0 15px;
`

export const StyledPrice = styled.p`
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #27AE60;
    margin: 15px 0 0 15px;
`
import styled from "styled-components"
import { TfiTrash } from "react-icons/tfi"

export const Li = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 49px;
    background-color: #121214;
    border-radius: 4px;
    padding: 0 40px;
    margin: 20px 0;

    :hover {
        background-color: #343B41;
    }
`

export const TitleTech = styled.h2`
    font-weight: 700;
    font-size: 14.2123px;
    line-height: 24px;
    color: #F8F9FA;
`

export const TitleStatus = styled.p`
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
    color: #868E96;
`

export const Container = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    ${'' /* border: 1px solid; */}
    
`

export const Trash = styled(TfiTrash)`
    font-size: 24px;
    color: #FFFFFF;
    background-color: #212529;
    padding: 3px;
    background-color: transparent;
    :hover {
        border: 1px solid;
        border-radius: 4px;
    } 
`
export const Button = styled.button`
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
`
import styled from "styled-components"

export const StyledProductList = styled.ul`
    display: flex;
    overflow-x: scroll;
    gap: 20px;
    margin-top: 160px;
    padding: 0 15px ;

    @media (min-width: 1024px) {
        flex-wrap: wrap;
        overflow-x: none;
        margin: 165px 0 30px 100px;
        min-width: 70%;
        /* border: 1px solid red; */
        /* margin-left: 100px; */
    }

`

import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    padding: 0 50px;
`

export const ContainerInfoTechnologies = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
`

export const Title = styled.p`
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #F8F9FA;
`
export const ContainerLista = styled.div`
    ${'' /* display: flex;
    flex-direction: column;
    align-items: center; */}
`
export const Button = styled.button`
    width: 32.49px;
    height: 32px;
    border: none;
    border-radius: 4px;
    background-color: #212529;
    color: #F8F9FA;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    cursor: pointer;

    :hover {
        border: 1px solid;
    }
`

export const Ul = styled.ul`
    position: fixed;
    right: 45px;
    left: 45px;
    padding: 10px 10px;
    border-radius: 4px;
    background-color: #212529;
`
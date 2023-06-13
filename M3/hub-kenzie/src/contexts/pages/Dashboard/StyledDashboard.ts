import styled from "styled-components"

export const Header = styled.header`
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    padding: 0 50px;
    box-shadow: 0px -6px 6px 4px #F8F9FA;
`

export const Logo = styled.h1`
    color: #FF577F;
    font-size: 22px;
`

export const ContainerInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 120px;
    padding: 0 50px;
    margin-top: -370px;
    box-shadow: 0px 1px 1px 0px #f8f9fa59;
`

export const UserName = styled.h2`
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #F8F9FA;
    margin: 10px 0;
`

export const StatusCourse = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #868E96;
`

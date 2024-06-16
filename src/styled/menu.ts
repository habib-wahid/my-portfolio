import styled from "styled-components"

export const MenuContainerStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
`
export const MenuComponentStyled = styled.div`
    width: 400px;
    height: 80px;
    background-color: #F2F7FC;
    border-radius: 10px;
    margin-top: -100px;
    display: flex;
    justify-content: space-evenly;
`

export const MenuButton = styled.button`
    background-color: transparent;
    padding: 10px;
    margin: 0;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: lightgray;
    }
`

export const ButtonImage = styled.img`
    width: 60px;
    height: 60px;
`
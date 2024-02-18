import styled from "styled-components"

export const Button = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: none;
    background-color: ${p=>p.theme.colors.button};
    color:${p=>p.theme.colors.bgColor};
    font-size: 18px;

    &:hover{
    background-color: ${p=>p.theme.colors.accent};
    }
`




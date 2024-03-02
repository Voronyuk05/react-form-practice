import styled from "styled-components";

export const Item = styled.li`
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    border: 1px solid black;
    padding: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    p {
        text-decoration: ${({checked}) =>  checked ? 'line-through' : 'none'}
    }
`

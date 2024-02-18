import styled from "styled-components";

export const Editor = styled.form`
    width: 700px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 5px;
`


export const TextArea = styled.textarea`
    width: 100%;
    height: 100px;
    border-radius: 5px;
`

export const Button = styled.button`
    width: 200px;
    height: 50px;
    color: white;
    background-color: #009c22;
    border: none;
    border-radius: 10px;
`
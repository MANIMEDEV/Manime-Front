import {styled}  from "styled-components";

export const SFormRegistar = styled.form`
    max-width: 390px;
    width:100%;
    height: 320px;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.primaryBG};
    display:flex;
    flex-direction: column;
    gap: 40px;
    border-radius: 10px;
`;

export const CssTextField = styled.input`

`;


export const ColorButton = styled.button`
    color: '#fff';
    width: 100%;
    height: 30px;
    border: 1px solid #E0E;
    :hover{
        color: '#E0E';
        background-color: '#cb6ce6',

    }`;


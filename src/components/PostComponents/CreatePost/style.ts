import { styled } from "styled-components";

export const SBackdrop = styled.div`
    z-index: 10;
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: rgba(0,0,0,0.6);
    display: flex;
    justify-content: center;
`;

export const SCard = styled.form`
    position: relative;
    top: 150px;
    width: 100%;
    max-width: 580px;
    max-height: 500px;
    background-color: ${props => props.theme.colors.secondary};
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .Description{
        width: 100%;
        height: 200px;
        background-color: transparent;
        resize: none;
        padding: 15px;
        color: #fff;
    }
    .submitPost{
        width: 200px;
        height: 50px;
        border: 2px solid royalblue;
        background-color: transparent;
        color: #fff;
        font-size: 20px;
        align-self: center;
        margin-top: 15px;
    }
`;
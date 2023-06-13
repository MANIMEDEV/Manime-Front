import { styled, keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
    opacity: 0;
    }
    to {
    opacity: 1;
    }
`;


export const SHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.primaryBG};
    width: 100%;
    max-width:1024px;
    height: 80px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content:space-between;
    padding: 20px;
    .logo{
        width:120px;
    }
    .menu-button {
    background-color: transparent;

    padding: 10px 20px;
    border: none;
    cursor: pointer;
    }

    .menu {
    list-style-type: none;
    padding: 10px 0;
    margin: 0;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primaryBG};
    width: 100%;
    opacity: 0;
    visibility: hidden;
    animation: ${fadeIn} 0.3s ease;
    animation-fill-mode: forwards;
    animation-delay: 0.3s;
    display:flex;
    flex-direction:column;
    gap:5px;
    z-index:999;
    }

    .menu.show {
        visibility: visible;
        animation-delay: 0s;
    }

    .menu li {
        background-color: ${({ theme }) => theme.colors.primaryBG};
        color: ${({ theme }) => theme.colors.white};
        padding: 10px;
        display: flex;
        justify-content: center;
        cursor: pointer;
        align-items:center;
    }
    .menu li:hover{
        
            background-color: ${({ theme }) => theme.colors.secondaryBG};
            color: ${({ theme }) => theme.colors.white};
    
    }
    .desktop{
        position:relative;
        flex-direction: row;
        top: 0;
        gap: 0;
        padding: 5px;
        order: 1;
        width: fit-content;
    }
    .hidden {
    display: none;
    }
    .menu input{
        @media (min-width: 1024px) {
            width:520px;
    }
        width:100%;
        height:30px;
        padding:10px;
        box-sizing:border-box;
        border-radius: 7px;
    }
    @media (min-width: 760px) {
        .IconDescription{
            display:none;
        }
    }
`;

export const SBg = styled.div`
width:100%;
display:flex;
justify-content:center;
background-color: ${props => props.theme.colors.primaryBG}
`;

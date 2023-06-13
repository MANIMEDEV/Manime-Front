import { Link } from "react-router-dom";
import { keyframes, styled } from "styled-components";
import Avatar from "./Avatar";

const fadeIn = keyframes`
    from {
    opacity: 0;
    }
    to {
    opacity: 1;
    }
`;


export const SAvatar = styled.div <{ $avatarUrl: string; }>`
    width:90px;
    height:90px;
    border: 3px solid ${props => props.theme.colors.white};
    border-radius: 50%;
    background-image: url(${props => props.$avatarUrl});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: ${props => props.theme.colors.secondary};
    font-size: 24px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:700;
    color: #fff;
    text-align:center;
    ${props => props.$avatarUrl.length < 1 ? "" : `h1{font-size: 0px;}`};
    position: relative;
    order:3;
    .AvatarMMenu{
        list-style-type: none;
        background-color: ${({ theme }) => theme.colors.primaryBG};
        width: 100%;
        animation: ${fadeIn} 0.3s ease;
        animation-fill-mode: forwards;
        animation-delay: 0.3s;
        display:flex;
        flex-direction:column;
        gap:5px;
        width:200px;
        position:absolute;
        left: -123px;
        top: 65px;
    }
    .AvatarMMenu{
        button{
            width:100%;
            background-color:transparent;
            height:20px;
            color: #fff;
            font-size: 14px;
        }
        a{
            color: #fff;
            font-size: 14px;
        }
    }

    .AvatarMMenu.show {
        visibility: visible;
        animation-delay: 0s;
    }

    .AvatarMMenu li {
    background-color: ${({ theme }) => theme.colors.primaryBG};
    color: ${({ theme }) => theme.colors.white};
    padding: 10px;
    cursor: pointer;
}

.AvatarMMenu li:hover {
    background-color: ${({ theme }) => theme.colors.secondaryBG};
}
    .hidden {
    display: none;
    }
`;

export const SAvatarMenuButton = styled.button`
        width:55px;
        height:25px;
        border-radius:0% 0% 27px 27px;
        position:relative;
        top: 15px;
        opacity:0.8;
        background-color:#fff;
        cursor: pointer;
        img{
            width:20px;
        }
        
        .isOpen{
            transform: rotate(-180deg);
            transition: all 0.3s ease-in;
        }
        .isClosed{
            transform: rotate(360deg);
            transition: all 0.3s ease-in;
        }
    
`;
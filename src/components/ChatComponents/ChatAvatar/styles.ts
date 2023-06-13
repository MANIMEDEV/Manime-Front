import { keyframes, styled } from "styled-components";


export const SAvatar = styled.div <{ $avatarUrl: string; }>`
    min-width:60px;
    height:60px;
    border: 3px solid ${props => props.theme.colors.secondary};
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

    &:hover{
        transform:scaleY(1);
    }
`;


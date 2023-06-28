import { styled } from "styled-components";

export const SNewChat = styled.div`
    width: 100%;
   // height: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .inputNewChat{
        color: #fff;
        font-size: 16px;
        width: 100px;
        height: 30px;
        background-color: ${props => props.theme.colors.secondaryBG};
        width: 100%;
        border-radius: 5px;
        &:focus, &:active {
            outline: none;
            &::placeholder {
                color: transparent;
            }
        }
    }
    gap: 10px;
    padding: 0 10px;
    background-color: ${props => props.theme.colors.primaryBG};
    border-bottom: 2px solid ${props => props.theme.colors.secondaryBG};

    .SelecUser{
        display: flex;
        text-align: center;
        gap: 20px;
        align-items: center;
        min-width: 100%;
        height: 60px;
        background-color: ${props => props.theme.colors.secondaryBG};
        img{
            width: 50px;
            height: 50px;
            border-radius: 50px;
            background-color: #000;
            border: 2px solid #fff;
        }
        p{
            color: #fff;
        }
    }

`;
import { styled } from "styled-components";

export const SNewChat = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
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

`;
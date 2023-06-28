import { styled } from "styled-components";

export const SBody = styled.form`

    width:100%;
    min-height: 60px;
    background-color: transparent;
    position: absolute;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 2px solid  ${props => props.theme.colors.secondaryBG};
    gap: 10px;
    .sendMessage{
        background-color: transparent;
        :hover{
            background-color: ${props => props.theme.colors.secondaryBG};
        }
    }
    textarea{
        width:90%;
        height: 40px;
        max-height: 70px;
        box-sizing: border-box;
        padding: 0 15px;
        font-size: 16px;
        color: #fff;
        resize: none;
        border: none;
        border-radius: 5px;
        padding: 10px;
        background-color: ${props => props.theme.colors.secondaryBG};
        &:focus, &:active {
            outline: none;
            &::placeholder {
                color: transparent;
            }
        }

    }
`;
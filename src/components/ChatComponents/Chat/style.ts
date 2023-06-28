import { styled } from "styled-components";

export const SChat = styled.div`

    @media (min-width: 760px) {
    min-width: calc(100% - 310px);
    } 
    min-width: 100%;
    position:relative;
    background-color: ${props => props.theme.colors.primaryBG};
    border: 3px solid ${props => props.theme.colors.secondary};
    border-top: 0;
    .headerChat{
        width:100%;
        height:80px;
        display:flex;
        padding: 10px;
        color: #fff;
        align-items: center;
        gap: 20px;
        border-bottom: 2px solid ${props => props.theme.colors.secondaryBG};
        position:relative;
        .CloseChat{
            font-size: 18px;
            color: ${props => props.theme.colors.secondaryBG};
            background-color: transparent;
            border: 2px solid ${props => props.theme.colors.secondaryBG};
            width: 30px;
            height: 30px;
            border-radius: 50%;
            position: absolute;
            right: 20px;
            &:hover{
                color: #fff;
                border-color: #fff;
            }
        }
    }
    .messages{
        width:100%;
        height: calc(100% - 145px);
    }
    .messagesDiv{
        width:100%;
        height: 100%;
        overflow-y: auto;
        padding: 10px;
        display:flex;
        flex-direction: column;
        position: relative;
        gap: 10px;
    }
    .userSend{
        div{
            color: #fff;
            background-color: rgb(43 43 43)
        }
        align-self: flex-end;
    }
`;
export const SChatNone = styled.div`
    min-width: calc(100% - 310px);
    min-height: 100%;
    background-color: ${props => props.theme.colors.primaryBG};
    display: flex;
    justify-content: center;
    align-items: center;
`;
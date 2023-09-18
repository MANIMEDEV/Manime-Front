import { styled } from "styled-components";

export const SComment = styled.section`
    margin-top: 20px;
    width:100%;
    padding: 10px;
    border-top: 1px solid #fff;
    background-color: ${(props) => props.theme.colors.secondary};
    p{
        width: 100%;
        color: #fff;
        line-height: 125%;
    }

    .CommentUserInfos{
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        gap: 10px;
        color: #fff;
        border-bottom: 2px solid #000;
        & img{
            width:35px;
            height:35px;
            border-radius: 50px;
            object-fit: cover;
        }
        h3{
            position: relative;
            top: -10px;
            font-size: 16px;
        }
    }

    .card-body{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 5px;
    }
    .cardInteractions{
        width: 100%;
        display: flex;
        color: #fff;
        gap: 10px;
    }
    button{
        background-color: transparent;   
    }
    .postFooterIcon{
        color: #fff;
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
`;
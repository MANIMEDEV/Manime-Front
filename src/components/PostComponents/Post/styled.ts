import { styled } from "styled-components";

export const SPost = styled.div`

        width: 100%;
        max-width: 580px;
        margin: 0 auto;
        background: #16181F;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 15px;

    .postUserInfos{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        color: #fff;
        border-bottom: 2px solid #000;
        & img{
            width:50px;
            height:50px;
            border-radius: 50px;
            object-fit: cover;
        }
    }
    .postBody{
        width:95%;
        display: flex;
        flex-direction: column;
        position: relative;
        margin: 0 auto;
        p{
            color: #fff;
            align-self:  flex-start;
            padding: 5px 15px 0px 5px;
        }
        gap: 10px;
        img {
            margin: 0 auto;
            max-width: 100%;
            border-radius: 10px;
            margin-bottom: 15px;
        }
    }
    .slick-dots .slick-active{
        button::before{
            color: #fff;
        }
    }
    .slick-dots{
        bottom: -10px;
        button::before{
            color: #fff;
        }
    }


    .postFooter{
        margin-top: 15px;
        width:100%;
        display:flex;
        justify-content: center;
        gap: 10px;
        color: #fff;
        button{
            background-color: transparent;
            color: #fff;
        }
    }
    .postFooterIcon{
        width: 25px;
        height: 25px;
        cursor: pointer;
    }

    .inputComment{
        width: calc(100% - 50px);
        background-color: transparent;
        border-bottom: 2px solid #000;
        font-size: 16px;
        margin-top: 5px;
        padding: 5px;
        color: #fff;
        outline: none;
    }
    .sendComment{
        width: 50px;
        height: 25px;
        background-color: ${(props) => props.theme.colors.secondary};
        color: #fff;
    }
`;
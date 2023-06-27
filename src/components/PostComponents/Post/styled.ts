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
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
            color: #fff;
            align-self:  flex-start;
            padding: 5px 15px 0px 5px;
        }
        gap: 10px;
        & img {
            width: 75%;
            border-radius: 10px;
            margin-bottom: 15px;
        }
    }

`;
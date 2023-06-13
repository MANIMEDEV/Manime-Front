import { styled } from "styled-components";

export const Banner = styled.div<{ $BannerUrl: string; }>`
    width: 100%;
    height: 100px;
    z-index:0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props => props.$BannerUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 5px 15px;
    position:relative;
    .accontInfos{
        padding: 5px 0; 
        .FollowsInfo{
            display:flex;
            gap: 10px;
            padding: 10px 0;
        }
        position:absolute;
        top:0;
        left: 120px;
        h1{
            color: #fff;
            font-size: 24px;
        }
        h2{
            color: #fff;
            font-size: 18px;
        }
    }
`;
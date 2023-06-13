
import { styled } from "styled-components";

export const SHeader = styled.header`
    width: 100%;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.primaryBG};
    div{
    position:relative;
    width: 100%;
    margin: 0 auto;
    max-width: 1280px;
    display: flex;
    justify-content: end;
    padding: 10px;
    gap: 20px;
    .logo{
        position: absolute;
        left:10px;
        max-width:120px;
    }

}
`;

export const SContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.secondaryBG};
    width:100vw;
    height: calc(100vh - 60px);
    padding: 20px 0;
`;
export const SContent = styled.div`
    padding: 20px;
    width:100%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;


    div{
        width:100%;
        p{
        font-family: 'Nerko One', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 44px;
        text-align: center;
        color: ${({ theme }) => theme.colors.white};
        max-width: 500px;

        }
        img{
        width:90%;
        max-width: 320px;
        height: 60px;
        }

}

`;

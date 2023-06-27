import { styled } from "styled-components";

export const SContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.secondaryBG};
    width:100%;
    height: calc(100vh - 80px);
    padding: 0;
    overflow-y: auto;
`;
export const SContent = styled.div`
    padding: 0px 0;
    width:100%;
    height:100%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .Chat{
        display:none;
    }
    .Chat.isOpen{
        display:block;
    }

    @media (min-width: 760px) {
    .Chat{
        display:flex;
    }
    }
    `;
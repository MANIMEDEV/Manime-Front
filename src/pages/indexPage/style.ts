import { styled } from "styled-components";

export const SContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.secondaryBG};
    width:100vw;
    height: calc(100vh - 80px);
`;

export const SContent = styled.div`
    background-color: ${({ theme }) => theme.colors.secondaryBG};
    width:100vw;
    height: 100%;
    overflow-y: auto;
    padding: 20px 0;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;


`;
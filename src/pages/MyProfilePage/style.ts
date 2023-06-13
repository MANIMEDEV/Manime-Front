import { styled} from "styled-components";

export const SContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.secondaryBG};
    width:100vw;
    height: calc(100vh - 80px);
    padding: 20px 0;
`;
export const MainContent = styled.div`
    margin: 0 auto;
    width:100%;
    max-width:1024px;
    display:flex;
    flex-direction:column;
`;
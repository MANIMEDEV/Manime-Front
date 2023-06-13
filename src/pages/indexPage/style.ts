import { styled} from "styled-components";

export const SContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.secondaryBG};
    width:100vw;
    height: calc(100vh - 80px);
    padding: 20px 0;
`;
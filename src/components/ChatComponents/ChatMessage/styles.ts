import { styled } from "styled-components";

export const SChatMessage = styled.div`

    width: fit-content;
    padding: 10px;
    background-color: ${props => props.theme.colors.blue};
    border-radius: 10px;
    overflow: hidden;
    word-break: break-all;

    max-width: 300px;

    @media (min-width: 760px) {
        max-width: 425px;
    }
    @media (min-width: 1000px) {
        max-width: 650px;
    }
    @media (min-width: 1400px) {
        max-width: 850px;
    }

    .morecontent span {
    display: none;
    }
    .morelink {
    display: block;
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.secondaryBG};
    padding: 2px;
    border-radius: 2px;

    }

    .syntax-highlighter-container {
        max-width: 100%;
        overflow-x: auto;
}

`;
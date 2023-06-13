import { styled } from "styled-components";
interface IProp {
    isOpen: any;
}
export const SChatList = styled.ul<IProp>`
    width: 100%;
    min-height: 100%;
    background-color: ${props => props.theme.colors.primaryBG};
    display:flex;
    flex-direction: column;
    gap:0px;
    overflow-y: auto;
    ${props => props.isOpen ? "display: none;" : "display:flex;"}
    @media (min-width: 760px){
        min-width: 320px;
        max-width: 320px;
        display:flex;
    }

`;
import { styled } from "styled-components";

export const SChatItem = styled.li`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    .UserName{
        color: #fff;
        font-size: 24px;
    }
    gap: 10px;
    padding: 0 10px;
    background-color: ${props => props.theme.colors.primaryBG};
    border-bottom: 2px solid ${props => props.theme.colors.secondaryBG};
    cursor: pointer;
    
    &:hover{
        height: 85px;
        border-top: 2px solid;
        border-color: #fff;
    }
`;
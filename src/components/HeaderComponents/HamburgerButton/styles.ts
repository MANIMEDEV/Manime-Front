import { styled } from "styled-components";

export const StyledButton = styled.div`
.hamburger-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.hamburger-button .line {
    width: 30px;
    height: 3px;
    background-color: #fff;
    margin-bottom: 6px;
    transition: transform 0.3s;
}

.hamburger-button.open .line:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
}
.hamburger-button.open .line:nth-child(2) {
    opacity: 0;
}
.hamburger-button.open .line:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
}
`;
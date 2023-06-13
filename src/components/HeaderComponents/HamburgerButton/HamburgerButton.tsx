import React, { useState } from 'react';
import {StyledButton} from './styles';


interface myProps{
    openMenu:()=> void;
    isOpen: boolean;
}
const HamburgerButton: React.FC<myProps> = (props:myProps) => {
    const [isOpen, setIsOpen] = useState(props.isOpen);

    const handleClick = () => {
        props.openMenu()
        setIsOpen(!isOpen);
    };

    return (
        <StyledButton>
            <button className={`hamburger-button ${isOpen ? 'open' : ''}`} onClick={handleClick}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </button>
        </StyledButton>

    );
};

export default HamburgerButton;
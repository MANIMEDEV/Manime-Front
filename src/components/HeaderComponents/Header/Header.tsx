import React, { MouseEventHandler, useContext, useEffect, useState } from 'react';
import { SBg, SHeader } from './style';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import Avatar from '../Avatar/Avatar';
import logo from '../../../assets/Logo.png';
import addPostIcon from '../../../assets/HeaderAssets/Add.png'
import chatIcon from '../../../assets/HeaderAssets/ChatRoom.png'
import notifyIcon from '../../../assets/HeaderAssets/Notification.png'
import settingsIcon from '../../../assets/HeaderAssets/Settings.png'
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [screenSize, setScreenSize] = useState({ width: 0 });

    useEffect(() => {
        setScreenSize({ width: window.innerWidth });
        const handleResize = () => {
            setScreenSize({ width: window.innerWidth });
            if (window.innerWidth >= 760) {
                setMenuOpen(true)
            } else {
                setMenuOpen(false)
            }
        };


        if (window.innerWidth >= 760) {
            setMenuOpen(true)
        }else {
            setMenuOpen(false)
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (<SBg>
        <SHeader>
            {screenSize.width <= 760 ? <HamburgerButton isOpen={isMenuOpen} openMenu={toggleMenu} /> : null}
            <ul className={`menu ${isMenuOpen ? "show" : "hidden"} ${screenSize.width <= 760 ? "mobile" : "desktop"}`}>
                <li><input type="text" placeholder='Pesquisar' /></li>
                <li><span className='IconDescription'>nova Postagem</span> <img src={addPostIcon} alt="" /> </li>
                <li><Link to="/chats"><span className='IconDescription'>Chat</span> <img src={chatIcon} alt="" /></Link></li>
                <li><span className='IconDescription'>Notificações</span> <img src={notifyIcon} alt="" /></li>
                <li><span className='IconDescription'>Configurações</span> <img src={settingsIcon} alt="" /></li>
            </ul>
            <Link to="/"> <img src={logo} alt="Logo Manime" className='logo' /> </Link>
            <Avatar/>
        </SHeader>
    </SBg>
    );
}

export default Header;
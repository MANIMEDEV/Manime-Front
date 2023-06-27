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
import translations from "./translations.json"

interface IChatNotification {
    chatId: number | string;
}
interface IGenericNotification {
    chatId: number | string;
}
interface IHeaderProps {
    notifications: Array<IGenericNotification>;
    chatNotifications: Array<IChatNotification>;
}

const Header: React.FC<IHeaderProps> = ({notifications, chatNotifications}) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [screenSize, setScreenSize] = useState({ width: 0 });
    const [translation, setTranslation] = useState(translations['en-US']);
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
        } else {
            setMenuOpen(false)
        }
        window.addEventListener('resize', handleResize);

        const language: string = navigator.language;
        if (language == "en-US" || language == "pt-BR") {
            setTranslation(translations[language]);
        }


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
                <li><input type="text" placeholder={translation.search} /></li>
                <li><span className='IconDescription'>{translation.newPost}</span> <img src={addPostIcon} alt="" /> </li>
                <li>
                    <Link to="/chats">
                        <span className='IconDescription'>
                            {translation.chat}
                        </span>
                        <img src={chatIcon} alt="" />
                        {chatNotifications.length > 0 ?
                            <span className='notifications'>{chatNotifications.length}</span> : null}

                    </Link>
                </li>
                <li>
                    <span className='IconDescription'>
                        {translation.notifications} </span>
                    <img src={notifyIcon} alt="" />
                    {notifications.length > 0 ? <span className='notifications'>
                        {notifications.length}
                    </span> : null}

                </li>
                <li><span className='IconDescription'>{translation.settings}</span> <img src={settingsIcon} alt="" /></li>
            </ul>
            <Link to="/"> <img src={logo} alt="Logo Manime" className='logo' /> </Link>
            <Avatar />
        </SHeader>
    </SBg>
    );
}

export default Header;
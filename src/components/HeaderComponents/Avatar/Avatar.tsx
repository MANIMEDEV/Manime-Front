import { useState, useContext, useEffect } from 'react';
import { SAvatar, SAvatarMenuButton } from './styles';
import arrowImg from '../../../assets/HeaderAssets/icons8-arrow-48.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../providers/UserContext';
// import { Container } from './styles';
import translations from "./translations.json"
import { Translation } from "./interface"

const Avatar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => {
        setIsOpen(!isOpen)
    }
    const [translation, setTranslation] = useState<Translation>(translations['en-US']);

    useEffect(() => {
        const language: string = navigator.language;
        if (language == "en-US" || language == "pt-BR") {
            setTranslation(translations[language]);
        }
    }, []);


    const user = useContext(UserContext);
    return <>
        <SAvatar $avatarUrl={user.user!.profileImg}>
            <h1>{user.user!.nickname[0]}</h1>
            <SAvatarMenuButton className='menuButton' onClick={() => {
                openMenu()
            }}>
                <img src={arrowImg} alt="" className={isOpen ? "isOpen" : "isClosed"} />
            </SAvatarMenuButton>

            <ul className={`AvatarMMenu ${isOpen ? "show" : "hidden"}`}>
                <li>
                    <Link to="/myProfile">{translation.myProfile}</Link>
                </li>
                <li>
                    <button onClick={() => {
                        user.userLogout();
                    }}>{translation.exit}</button>
                </li>
            </ul>

        </SAvatar>
    </>

}

export default Avatar;
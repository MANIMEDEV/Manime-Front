import { useState, useContext } from 'react';
import { SAvatar } from './styles';
import arrowImg from '../../../assets/HeaderAssets/icons8-arrow-48.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../providers/UserContext';
// import { Container } from './styles';


const ChatAvatar: React.FC = () => {

    const user = useContext(UserContext);
    return <>
        <SAvatar $avatarUrl={user.user!.profileImg}>
            <h1>{user.user!.nickname[0]}</h1>
        </SAvatar>
    </>

}

export default ChatAvatar;
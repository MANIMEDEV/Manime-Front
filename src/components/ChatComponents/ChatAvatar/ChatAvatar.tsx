import { useState, useContext } from 'react';
import { SAvatar } from './styles';
import arrowImg from '../../../assets/HeaderAssets/icons8-arrow-48.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../providers/UserContext';
// import { Container } from './styles';

interface IChatAvatarProps{
    img: string
}
const ChatAvatar: React.FC<IChatAvatarProps> = ({img}) => {


    return <>
        <SAvatar $avatarUrl={img}>
            <h1></h1>
        </SAvatar>
    </>

}

export default ChatAvatar;
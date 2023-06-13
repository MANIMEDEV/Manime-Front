import { useState, useContext } from 'react';
import { SAvatar } from './styles';
import { UserContext } from '../../../providers/UserContext';
interface Iprops {
    profileImg:string;
}
const AvatarProfileUser: React.FC<Iprops> = ({profileImg}) => {

    return <>
        <SAvatar $avatarUrl={profileImg}>
        </SAvatar>
    </>

}

export default AvatarProfileUser;
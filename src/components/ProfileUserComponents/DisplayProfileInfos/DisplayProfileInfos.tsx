import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../providers/UserContext';
import { Banner } from './styles';
import AvatarProfileUser from '../AvatarProfileUser/Avatar';

// import { Container } from './styles';

const DisplayProfileInfos: React.FC = () => {
    const { user, getUserProfileInfos } = useContext(UserContext);
    useEffect(() => {
        getUserProfileInfos();

        
    }, []);
    return (<>
        <Banner $BannerUrl={user!.bannerImg}>
            <AvatarProfileUser profileImg={user!.profileImg}></AvatarProfileUser>
            <div className="accontInfos">
                <h1 className='UserNickName'>{user?.nickname}</h1>
                <h2 className='UserPostInfos'>Posts: {user!.profileInfos?.numberPosts}</h2>
                <div className='FollowsInfo'>
                    <h2 className=''>Seguidores {user!.profileInfos?.numberFollowers}</h2>
                    <h2 className=''>Seguindo {user!.profileInfos?.numberFollowing}</h2>
                </div>

            </div>
        </Banner>
    </>);
}

export default DisplayProfileInfos;
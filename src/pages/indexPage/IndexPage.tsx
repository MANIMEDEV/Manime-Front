
import React, { useEffect, useState } from 'react';
import { SContainer, SContent } from './style';
import logo from '../../assets/Logo.png'
import LoginForm from '../../components/LoginForm/Login.component';
import RegisterForm from '../../components/RegisterForm/Register.component';
import Header from '../../components/HeaderComponents/Header/Header';
import { io } from 'socket.io-client';
import Post from '../../components/PostComponents/Post/Post';
const IndexPage: React.FC = () => {
    const [screenSize, setScreenSize] = useState({ width: 0 });

    useEffect(() => {
        setScreenSize({ width: window.innerWidth });
        const handleResize = () => {
            setScreenSize({ width: window.innerWidth });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (<>
        <SContainer>
            <SContent>
                <Post description='um post qualquer'
                imgPost={["https://pm1.aminoapps.com/6377/40e07b8abe0a0f1c6db5d0e5ca501f712251ff13_hq.jpg"]}
                userName='Usuario Teste'
                userProfileImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWaM6tcij--OwFPQOkh0OyPetDvbFukS7Yi1QIiZ3JUg&s'
                >
                    <p>teste2</p>
                </Post>
                {/* <Post description='meu primeiro post'
                userProfileImg="https://pm1.aminoapps.com/6377/40e07b8abe0a0f1c6db5d0e5ca501f712251ff13_hq.jpg"
                userName='Usuario Teste'
                imgPost={['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWaM6tcij--OwFPQOkh0OyPetDvbFukS7Yi1QIiZ3JUg&s']}
                />
                <Post description='meu Segundo post'
                userProfileImg="https://pm1.aminoapps.com/6377/40e07b8abe0a0f1c6db5d0e5ca501f712251ff13_hq.jpg"
                userName='Usuario Teste'
                imgPost={[]}
                /> */}
            </SContent>
        </SContainer>



    </>);
}

export default IndexPage;
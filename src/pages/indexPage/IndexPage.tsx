
import React, { useEffect, useState } from 'react';
import { SContainer } from './style';
import logo from '../../assets/Logo.png'
import LoginForm from '../../components/LoginForm/Login.component';
import RegisterForm from '../../components/RegisterForm/Register.component';
import Header from '../../components/HeaderComponents/Header/Header';
import { io } from 'socket.io-client';
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

        </SContainer>



    </>);
}

export default IndexPage;
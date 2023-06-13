
import React, { useEffect, useState } from 'react';
import { SContainer, SContent, SHeader } from './style';
import logo from '../../assets/Logo.png'
import LoginForm from '../../components/LoginForm/Login.component';
import RegisterForm from '../../components/RegisterForm/Register.component';

const HomePage: React.FC = () => {
    const [openLogin, setOpenLogin] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);
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
        <SHeader>
            <div>
                <img src={logo} alt=""  className='logo'/>
                <button  color='success' onClick={() => { setOpenLogin(false), setOpenRegister(!openRegister) }}>
                    Registrar
                </button>
                <button className='btnLogin'  onClick={() => { setOpenLogin(!openLogin), setOpenRegister(false) }}>
                    Entrar
                </button>
            </div>
        </SHeader>
        <SContainer>
            <SContent>
                {openLogin && screenSize.width < 760 || openRegister && screenSize.width < 760 ? <></> :
                    <div>
                        <img src={logo} alt="" />
                        <p>
                            O Manime lhe ajuda a se conectar com sua comunidade
                        </p>
                    </div>
                }
                {openRegister ?
                    openRegister || screenSize.width > 760 ?
                        <RegisterForm />
                        : <></> :
                    openLogin || screenSize.width > 760 ?
                        <LoginForm /> :
                        <></>
                }

            </SContent>
        </SContainer>



    </>);
}

export default HomePage;
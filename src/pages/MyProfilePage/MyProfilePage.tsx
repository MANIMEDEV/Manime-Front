
import React, { useEffect, useState } from 'react';
import { MainContent, SContainer } from './style';
import DisplayProfileInfos from '../../components/ProfileUserComponents/DisplayProfileInfos/DisplayProfileInfos';


const MyProfilePage: React.FC = () => {
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
            <MainContent>
        <DisplayProfileInfos></DisplayProfileInfos>

            </MainContent>
        </SContainer>



    </>);
}

export default MyProfilePage;
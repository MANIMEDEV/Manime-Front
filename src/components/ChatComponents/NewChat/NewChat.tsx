import React from 'react';
import { SNewChat } from './style';

// import { Container } from './styles';

const NewChat: React.FC = () => {
    return <SNewChat>
        <input type="text" className='inputNewChat' placeholder='Pesquisar por nickname ou email' />
    </SNewChat>;
}

export default NewChat;
import React, { useContext, useEffect, useState } from 'react';
import { SContainer, SContent } from './style';
import ChatList from '../../components/ChatComponents/ChatList/ChatList';
import Chat from '../../components/ChatComponents/Chat/Chat';
import { UserContext } from '../../providers/UserContext';
import { api } from '../../services/api';

// import { Container } from './styles';


const ChatsPage: React.FC = () => {
    const [chatOpen, setChatOpen] = useState(null);
    const [listChat, setListChat] = useState<[]>([]);
    const {user} = useContext(UserContext);
    useEffect(() => {
        const getChats = async () => {
            const chats = await  (await api.get('/chats/'+user!.id)).data
            setListChat(chats)

        }
        const execGetChats = async () => {
            await getChats();
        } 

        execGetChats()
        return () => {

        };
    }, []);

    return <SContainer >
        <SContent>
            <ChatList userId={user!.id} setChat={setChatOpen} chatIsOpen={chatOpen} chats={listChat} />
            <Chat chat={chatOpen} setChat={setChatOpen} ></Chat>
        </SContent>
    </SContainer>;
}

export default ChatsPage;
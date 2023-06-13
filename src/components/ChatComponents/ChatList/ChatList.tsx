import React from 'react';
import ChatItem from '../ChatItem/ChattItem';
import { SChatList } from './styles';
import { SNewChat } from '../NewChat/style';
import NewChat from '../NewChat/NewChat';

// import { Container } from './styles';
interface IChatList {
    chats: {
        id: number,
        roomId: string
    }[]
    userId: string | number
    setChat: (data:any) => void
    chatIsOpen: any | null;
}
const ChatList: React.FC<IChatList> = ({chats,setChat,chatIsOpen,userId}) => {

    chats.forEach(chat => console.log(chat))
    
    return <SChatList  isOpen={chatIsOpen}>
        <NewChat/>
        {chats.map(chat =>  <ChatItem chat={chat} userId={userId} setChat={setChat}  /> )}
    </SChatList>;
}

export default ChatList;
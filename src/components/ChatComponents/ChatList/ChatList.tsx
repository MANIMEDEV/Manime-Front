import React from 'react';
import ChatItem from '../ChatItem/ChattItem';
import { SChatList } from './styles';
import { SNewChat } from '../NewChat/style';
import NewChat from '../NewChat/NewChat';
import { log } from 'console';

// import { Container } from './styles';
interface IChatList {
    chats: {
        id: number,
        roomId: string
        userInfos: {
            name: string,
            profileImg: string
        }
    }[]
    contacts: {
        id: number,
        nickname: string,
        profileImg: string
    }[]
    userId: string | number
    setChat: (data: any) => void
    chatIsOpen: any | null;
}
const ChatList: React.FC<IChatList> = ({ chats, setChat, chatIsOpen, userId, contacts }) => {

    return <SChatList isopen={chatIsOpen}>
        <NewChat contacts={contacts} userId={userId}  setChat={setChat} listChats={chats}/>
        {chats.map(chat => <ChatItem key={chat.roomId} chat={chat} userId={userId} setChat={setChat} />)}
    </SChatList>;
}

export default ChatList;
import React from 'react';
import { SChatItem } from './styles';
import ChatAvatar from '../ChatAvatar/ChatAvatar';

// import { Container } from './styles';
interface IChatItem {
    setChat: (data:any) => void
    chat: {
        id: number,
        roomId: string
    }
    userId: string | number
}



const ChatItem: React.FC<IChatItem> = ({setChat,userId,chat}) => {
    return <SChatItem onClick={()=>{
        
        console.log(userId + "<= user id");
        const ids = chat.roomId.split('_');
        console.log( ids[0]+ "<= users id");
        
        setChat({
            userReceived: userId == ids[0] ? ids[1] : ids[0],
            sender: userId == ids[0] ? ids[0] : ids[1],
            roomId: chat.roomId
        })
    }}>
        <ChatAvatar></ChatAvatar>
        <h1 className='UserName'>Nome do amiguinho</h1>
    </SChatItem>;
}

export default ChatItem;
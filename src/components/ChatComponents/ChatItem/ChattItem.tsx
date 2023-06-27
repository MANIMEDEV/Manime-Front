import React from 'react';
import { SChatItem } from './styles';
import ChatAvatar from '../ChatAvatar/ChatAvatar';

// import { Container } from './styles';
interface IChatItem {
    setChat: (data:any) => void
    chat: {
        id: number,
        roomId: string
        userInfos: {
            name: string,
            profileImg: string
        }
    }
    userId: string | number
}



const ChatItem: React.FC<IChatItem> = ({setChat,userId,chat}) => {
    return <SChatItem onClick={()=>{

        const ids = chat.roomId.split('_');
        
        
        setChat({
            userReceived: userId == ids[0] ? ids[1] : ids[0],
            sender: userId == ids[0] ? ids[0] : ids[1],
            roomId: chat.roomId,
            userInfos: {
                name: chat.userInfos.name,
                profileImg: chat.userInfos.profileImg
            }
        })
    }}>
        <ChatAvatar img={chat.userInfos.profileImg}></ChatAvatar>
        <h1 className='UserName'>{chat.userInfos.name}</h1>
    </SChatItem>;
}

export default ChatItem;
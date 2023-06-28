import React, { useContext, useEffect, useRef, useState } from "react";
import { SChat, SChatNone } from './style';
import ChatAvatar from '../ChatAvatar/ChatAvatar';
import ChatInput from '../ChatInput/ChatInput';
import { io } from "socket.io-client";
import socket from "../../../socket";
import { UserContext } from "../../../providers/UserContext";
import logo from '../../../assets/Logo.png'
import Message from "../ChatMessage/ChatMessage";
import { log } from "console";

// import { Container } from './styles';
interface IChat {
    chat: {
        userReceived: string | number;
        sender: string | number;
        roomId: string;
        userInfos: {
            name: string,
            profileImg: string
        }
    } | null;
    setChat: (data: any) => void
}
interface IMessage {
    id?: number;
    senderId: number;
    sent_at?: string;
    timestamp?: string;
    content: string;
    deletedAt?: null;

}
const Chat: React.FC<IChat> = ({ chat, setChat }) => {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const { user } = useContext(UserContext);
    const messagesRef = useRef<HTMLUListElement>(null);
    useEffect(() => {

        const handleNewMessage = (obj: any) => {
            setMessages((prevMessages) => [...prevMessages, obj]);
        };
        const handleHistoryMessage = (messages: []) => {

            if (messages == null) {
                messages = [];
            }

            setMessages(messages);
        };
        socket.emit("conectChat", chat?.roomId);
        socket.emit("getHistoryChat", { chatId: chat?.roomId });
        socket.on("setHistoryChat", handleHistoryMessage);
        socket.on("receiveMessage", handleNewMessage);

        return () => {
            socket.off("receiveMessage", handleNewMessage);
            socket.off("conectChat");
        };
    }, [, chat]);

    useEffect(() => {
        if (messagesRef.current) {
            const containerHeight = messagesRef.current.clientHeight;
            const contentHeight = messagesRef.current.scrollHeight;
            const maxScrollTop = contentHeight - containerHeight;
            messagesRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
        }
    }, [, messages]);



    const sendMessage = (newMessage: string) => {
        console.log(newMessage, "nova mensagem");



        const send = {
            senderId: user!.id,
            content: newMessage,
            userReceived: chat!.userReceived,
            roomId: chat!.roomId,
        };
        console.log("send obj", send);
        setMessages((prevMessages) => [...prevMessages, send]);
        socket.emit("sendMessage", send);
    };
    return <>
        {chat ? <SChat className='Chat isOpen'>
            <div className="headerChat">
                <ChatAvatar img={chat.userInfos.profileImg}></ChatAvatar>
                <h3>{chat.userInfos.name}</h3>

                <button className='CloseChat' onClick={() => {
                    setChat(null);
                }}>X</button>
            </div>
            <div className="messages">
                <ul className="messagesDiv" ref={messagesRef}>
                    {messages.map((message, index) => (
                        <li key={index + "message" + message.id} className={`message ${message.senderId === user!.id ? "userSend" : ""}`}>
                            <Message text={message.content} />
                        </li>
                    ))}
                </ul>
            </div>
            <ChatInput sendMessage={sendMessage} />
        </SChat> :
            <SChatNone className='Chat'>
                <img src={logo} alt="" />
            </SChatNone>
        }
    </>;
}

export default Chat;
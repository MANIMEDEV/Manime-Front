import React, { useContext, useEffect, useRef, useState } from "react";
import { SChat, SChatNone } from './style';
import ChatAvatar from '../ChatAvatar/ChatAvatar';
import ChatInput from '../ChatInput/ChatInput';
import { io } from "socket.io-client";
import socket from "../../../socket";
import { UserContext } from "../../../providers/UserContext";

// import { Container } from './styles';
interface IChat {
    chat: {
        userReceived: string | number;
        sender: string | number;
        roomId: string;
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

    useEffect(() => {

        console.log('this is chat =>', chat);

        // Manipulador para receber mensagens do servidor
        const handleNewMessage = (obj: any) => {
            setMessages((prevMessages) => [...prevMessages, obj]);
        };
        const handleHistoryMessage = (messages: []) => {
            console.log(messages);

            if (messages == null) {
                messages = [];
            }

            setMessages(messages);
        };
        // Defina os manipuladores de eventos do Socket.io dentro do useEffect

        socket.emit("conectChat", chat?.roomId);
        socket.emit("getHistoryChat", { chatId: chat?.roomId });

        socket.on("setHistoryChat", handleHistoryMessage);
        socket.on("receiveMessage", handleNewMessage);



        return () => {
            // Lembre-se de limpar os manipuladores de eventos ao desmontar o componente
            socket.off("receiveMessage", handleNewMessage);
            socket.off("conectChat");
        };
    }, [, chat]);


    const messagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scroll automático para baixo quando uma nova mensagem é recebida
        if (messagesRef.current) {
            messagesRef.current.scrollIntoView({ behavior: 'auto', block: 'end' });
        }
    }, [, messages]);


    const sendMessage = (newMessage: string) => {
        const send = {
            senderId: user!.id,
            content: newMessage,
            userReceived: chat!.userReceived,
            roomId: chat!.roomId,
        };
        setMessages((prevMessages) => [...prevMessages, send]);
        socket.emit("sendMessage", send);
    };
    return <>
        {chat ? <SChat className='Chat isOpen'>
            <div className="headerChat">
                <ChatAvatar></ChatAvatar>
                <h3>{'chatInfos.name'}</h3>

                <button className='CloseChat' onClick={() => {
                    setChat(null);
                }}>X</button>
            </div>
            <div className="messages" ref={messagesRef}>
                <ul className="messagesDiv">
                    {messages.map((message, index) => (
                        <li key={index} className={`message ${message.senderId === user!.id ? "userSend" : ""}`}>
                            {message.content}
                        </li>
                    ))}
                </ul>
            </div>

            <ChatInput sendMessage={sendMessage} />
        </SChat> :
            <SChatNone className='Chat'>
                <h1>TEM PORRA NENHUMA</h1>
            </SChatNone>
        }
    </>;
}

export default Chat;
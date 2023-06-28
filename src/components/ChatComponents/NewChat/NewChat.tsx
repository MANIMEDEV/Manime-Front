import React, { useState } from 'react';
import { SNewChat } from './style';
import { log } from 'console';

// import { Container } from './styles';

interface IContact {
        id: number,
        nickname: string,
        profileImg: string
}
interface Iprops {
    contacts: IContact[],
    setChat: (data: any) => void;
    listChats: {
        id: number;
        roomId: string;
        userInfos: {
            name: string;
            profileImg: string;
        };
    }[];
    userId: string | number;

}
const NewChat: React.FC<Iprops> = ({ contacts, userId, listChats, setChat }) => {
    if (!contacts) {
        contacts = []
    }
    const [searchValue, setSearchValue] = useState('');
    const [filteredContacts, setFilteredContacts] = useState(contacts);

    const handleSearchChange = event => {
        const value = event.target.value;
        setSearchValue(value);

        const filtered = contacts.filter(contact =>
            contact.nickname.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredContacts(filtered);
    };

    const verifyChatExist = (userId: number | string, contact: IContact) => {
        console.log(userId);
        console.log(contact);

        listChats.forEach(chat => {
            const ids = chat.roomId.split("_");
            console.log("contactID é igual");

            if (contact.id == Number(ids[0]) || contact.id == Number(ids[1])) {
                if (userId == ids[0] || userId == ids[1]) {

                    setChat({ ...chat });
                }
            } else {
                const newChat = {
                    id: userId + "_" + contact.id,
                    roomId:  userId + "_" + contact.id,
                    userInfos: {
                        name: contact.nickname,
                        profileImg: contact.profileImg
                    },
                    userReceived: contact.id
                }

                setChat({...newChat})

            }

        })
    }

    const goToChat = (userId: number | string, contact:IContact) => {
        verifyChatExist(userId, contact)
    }

    return <SNewChat>
        {/* <input type="text" className='inputNewChat' placeholder='Pesquisar por nickname ou email' /> */}
        <input
            className='inputNewChat'
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search contacts..."
        />
        {searchValue.length > 0 ?
            filteredContacts.map((contact, i) => (
                <div key={i + contact.nickname} className='SelecUser' onClick={() => {
                    goToChat(userId, contact)
                }}>
                    <img src={contact.profileImg} alt='' />
                    <p>{contact.nickname}</p>
                </div>
            ))
            : null
        }

    </SNewChat>;
}

export default NewChat;
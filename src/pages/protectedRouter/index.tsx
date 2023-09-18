import { useContext, useEffect, useState, useCallback } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { UserContext } from '../../providers/UserContext';
import Header from '../../components/HeaderComponents/Header/Header';
import socket from '../../socket';
import { toast } from 'react-toastify';
import React from 'react';

interface IChatNotification {
    chatId: number | string;
}
interface IGenericNotification {
    chatId: number | string;
}


const ProtectedRoutes = () => {
    const { user } = useContext(UserContext);

    const [notifications, setNotifications] = useState<Array<IGenericNotification>>([]);
    const [chatNotifications, setChatNotifications] = useState<Array<IChatNotification>>([]);

    useEffect(() => {
        socket.io.opts.query = { userId: user?.id };
        socket.connect();

        return () => {
            socket.disconnect();
        };
    }, [user]);

    const notifyCustom = useCallback((obj: any) => {
        const notify: IChatNotification = { chatId: obj.chatId };
        setChatNotifications(prevState => [...prevState, notify]);
    }, []);

    useEffect(() => {
        socket.on('newMessageNotify', notifyCustom);

        return () => {
            socket.off('newMessageNotify', notifyCustom);
        };
    }, [notifyCustom]);

    return user ? <div>
        <Header notifications={notifications} chatNotifications={chatNotifications} />
        <Outlet />
    </div> : <Navigate to='/home' />;
};

export default ProtectedRoutes;
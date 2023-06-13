import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { UserContext } from '../../providers/UserContext';
import Header from '../../components/HeaderComponents/Header/Header';

const ProtectedRoutes = () => {
    const { user } = useContext(UserContext);

    return user ? <div>
        <Header/>
        <Outlet />
                    </div> : <Navigate to='/home' />;
};

export default ProtectedRoutes;
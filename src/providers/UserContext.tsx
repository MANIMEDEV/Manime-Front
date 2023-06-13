import { createContext, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { io } from "socket.io-client";
import { api } from '../services/api';

export interface ILoginResp {
  token: string;
  user: IUser;

}

interface IProfileInfos{

  id: number,
  description: null,
  numberFollowers: number,
  numberFollowing: number,
  numberPosts: number,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date | null
}

interface IUser {
  id: number,
  fullName: string,
  nickname: string,
  email: string,
  password: string,
  phone: string,
  profileImg: string,
  bannerImg: string,
  banned: boolean,
  suspended: boolean,
  suspendedTime: string,
  admin: boolean,
  verified: boolean,
  confirmed: boolean,
  profileInfos: IProfileInfos,
  createdAt: string,
  updatedAt: string,
  deletedAt: string
}
interface ILoginData {
  login: string;
  password: string;
}
export interface IRegisterData {
  fullName: string,
  nickname: string,
  email: string,
  password: string,
  phone?: string,
}
export interface IRegisterResponse {
  message: string
}
type Props = {
  children: ReactNode;
};

export interface IUserContext {
  user: IUser | null;
  userLogin: (formData: ILoginData) => void;
  userLogout: () => void;
  userRegister: (formData: IRegisterData) => void;
  getUserProfileInfos: () => void;
  sendMessage: (message:string) => void;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);


  const userLogin = async (formData: ILoginData) => {
    try {
      const res = await api.post<ILoginResp>('/login', formData);

      setUser(res.data.user);
      const notify = () => {
        toast.success('Logado com Sucesso!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      };
      notify();
      localStorage.setItem('@MANIME:TOKEN', res.data.token);
      localStorage.setItem('@MANIME:USER', JSON.stringify(res.data.user));

      navigate('/');

      return null;
    } catch (e) {
      const notify = () => {
        toast.error('Email/Nickname ou Senha Errados', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      };
      notify();
      return false;
    }
  };

  const userRegister = async (formData: IRegisterData) => {
    try {
      const res = await api.post<IRegisterResponse>('/users', formData);

    
      if (res.status == 201) {
        const notify = () => {
          toast.success(res.data.message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        };
        notify();
        navigate('/');
      }
    } catch (e) {
      const notify = () => {
        toast.error('Falha ao Registrar!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      };
      notify();
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem('@MANIME:USER');
    localStorage.removeItem('@MANIME:TOKEN');
    navigate('/');
  };

  const getUserProfileInfos = async () => {
  
      const data = await api.get(`/users/profileInfos/${user!.id}`,{
        headers:{
          Authorization: "bear "+ localStorage.getItem('@MANIME:TOKEN')
        }
      });

      const newUser = {...user! }
      newUser.profileInfos =  data.data;

      setUser(newUser!);
      
  }  

  const sendMessage = (message:string) => {

  }

  //AUTOLOGIN
  useEffect(() => {
    const Localuser = localStorage.getItem('@MANIME:USER');
    if (Localuser) {
      const result = JSON.parse(Localuser || '');
      setUser(result);

      navigate('/');
    } else {
      navigate('/home');
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        userLogin,
        userLogout,
        userRegister,
        getUserProfileInfos,
        sendMessage
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

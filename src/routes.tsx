import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/homePage';
import IndexPage from './pages/indexPage/IndexPage';
import ProtectedRoutes from './pages/protectedRouter';
import MyProfilePage from './pages/MyProfilePage/MyProfilePage';
import ChatsPage from './pages/ChatsPage/ChatPages';
import React from 'react';


const Router = () => (
  <Routes>
    <Route path='/home' element={<HomePage />} />
    <Route path='/' element={<ProtectedRoutes />} >
      <Route index element={<IndexPage />} />
      <Route path='/myProfile' element={<MyProfilePage />} />
      <Route path='/chats' element={<ChatsPage />} />
    </Route>
  </Routes>
);

export default Router;

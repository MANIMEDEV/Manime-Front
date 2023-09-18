import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from './routes';
import {mainTheme} from "./styles/theme"
import { GlobalStyles } from './styles/global';
import React from 'react';

const App = () => (
  <>
    <GlobalStyles theme={mainTheme} />
    <Router />
    <ToastContainer
      position='top-right'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='light'
    />
  </>
);

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './styles/theme';
import Providers from './providers/Providers';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <Providers>
          <App />
        </Providers>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode >
)

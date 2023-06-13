import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
  }
  ::-webkit-scrollbar {
        width:5px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
    }
    ::-webkit-scrollbar-track {
        background-color: var(--secondary);
    }

  button{
    cursor: pointer;
  }

  dialog{
    display: unset;
    position: unset;
  }
`;

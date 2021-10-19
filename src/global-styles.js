import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #F2F2F2;
        color: #121215;
        font-size: 16px;
        margin: 0 auto;
        padding: 0
    }
`;
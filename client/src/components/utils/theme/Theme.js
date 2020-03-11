import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }
    body {
        background-color: #8C3AEE;
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }

`;

export default GlobalStyle;

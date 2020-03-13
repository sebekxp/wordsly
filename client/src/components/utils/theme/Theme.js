import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }
    body {
        // background-color: radial-gradient(circle, #bb86fc, #8d6fc5, #66588e, #454059, #282828);
        // background-image: radial-gradient(circle, #bb86fc, #8d6fc5, #66588e, #454059, #282828);
        background-color: #545454;
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }

`;

export default GlobalStyle;

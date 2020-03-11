import React from 'react';
import { Provider } from './ThemeContext';
import GlobalStyle from './Theme';

const GlobalStyleWrapper = ({ children }) => {
    return (
        <Provider>
            <GlobalStyle />
            {children}
        </Provider>
    );
};

export default GlobalStyleWrapper;

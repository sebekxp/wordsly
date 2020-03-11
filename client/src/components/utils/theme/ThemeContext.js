import { createContext } from 'react';

const ThemeContext = createContext(null);

export const { Provider, Consumer } = ThemeContext;
export default ThemeContext;

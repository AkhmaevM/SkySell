import React, { createContext, useState } from 'react';

const ThemeContext = createContext({
    theme: 'dark',
    setTheme: () => { },
});

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'white' : 'dark';
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };

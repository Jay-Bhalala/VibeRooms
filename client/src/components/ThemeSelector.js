import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeSelector = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <div>
            <button onClick={() => changeTheme('dark')}>Dark</button>
            <button onClick={() => changeTheme('light')}>Light</button>
            <p>Current theme is: {theme}</p>
        </div>
    );
};

export default ThemeSelector;
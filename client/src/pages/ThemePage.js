import React from 'react';
import Navbar from '../components/Navbar';
import ThemeSelector from '../components/ThemeSelector';
import { useTheme } from '../contexts/ThemeContext';

const ThemePage = () => {
    const { theme } = useTheme();

    return (
        <div style={{ backgroundColor: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
            <Navbar />
            <h1>Choose Your Theme</h1>
            <ThemeSelector />
        </div>
    );
};

export default ThemePage;
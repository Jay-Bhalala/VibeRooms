import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }) => {
    const [volume, setVolume] = useState(50); // Default volume level

    const adjustVolume = (level) => {
        setVolume(level);
    };

    return (
        <SettingsContext.Provider value={{ volume, adjustVolume }}>
            {children}
        </SettingsContext.Provider>
    );
};
import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            const serializedItem = JSON.stringify(value);
            window.localStorage.setItem(key, serializedItem);
        } catch (error) {
            console.log(error);
        }
    }, [key, value]);

    return [value, setValue];
};

export default useLocalStorage;
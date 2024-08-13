import React, { createContext, useContext, useState, useEffect } from 'react';

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);
    const [chatRoom, setChatRoom] = useState(null);

    useEffect(() => {
        const initialMessages = [
            { id: 1, text: "Hello!", user: "System" }
        ];
        setMessages(initialMessages);
        setChatRoom("General Room");
    }, []);

    const sendMessage = (message) => {
        // Add new message to messages array
        setMessages([...messages, message]);
    };

    return (
        <ChatContext.Provider value={{ messages, sendMessage, chatRoom }}>
            {children}
        </ChatContext.Provider>
    );
};
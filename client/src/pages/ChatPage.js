import React from 'react';
import Navbar from '../components/Navbar';
import ChatBox from '../components/ChatBox';
import { useChat } from '../contexts/ChatContext';

const ChatPage = () => {
    const { messages, sendMessage } = useChat();

    return (
        <div>
            <Navbar />
            <h1>Live Chat</h1>
            <ChatBox messages={messages} onSendMessage={sendMessage} />
        </div>
    );
};

export default ChatPage;
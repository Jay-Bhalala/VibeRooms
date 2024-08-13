import React, { useState, useEffect } from 'react';

const ChatBox = ({ socket }) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        socket.on('receive_message', (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });
    }, [socket]);

    const sendMessage = (e) => {
        e.preventDefault();
        if (message !== '') {
            socket.emit('send_message', message);
            setMessages([...messages, message]);
            setMessage('');
        }
    };

    return (
        <div>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatBox;

import API from './api';

export const fetchMessages = async (roomId) => {
    try {
        const { data } = await API.get(`/chats/${roomId}`);
        return data;
    } catch (error) {
        throw error.response.data;
    }
};

export const sendMessage = async (messageData) => {
    try {
        const { data } = await API.post('/chats/send', messageData);
        return data;
    } catch (error) {
        throw error.response.data;
    }
};
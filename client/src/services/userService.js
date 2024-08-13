import API from './api';

export const loginUser = async (userData) => {
    try {
        const { data } = await API.post('/users/login', userData);
        return data;
    } catch (error) {
        throw error.response.data;
    }
};

export const registerUser = async (userData) => {
    try {
        const { data } = await API.post('/users/register', userData);
        return data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getUserProfile = async (userId) => {
    try {
        const { data } = await API.get(`/users/${userId}`);
        return data;
    } catch (error) {
        throw error.response.data;
    }
};
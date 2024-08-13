import API from './api';

export const fetchThemes = async () => {
    try {
        const { data } = await API.get('/themes');
        return data;
    } catch (error) {
        throw error.response.data;
    }
};

export const updateTheme = async (themeId, userId) => {
    try {
        const { data } = await API.put(`/themes/${themeId}`, { userId });
        return data;
    } catch (error) {
        throw error.response.data;
    }
};
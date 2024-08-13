import API from './api';

export const getTasks = async () => {
    try {
        const { data } = await API.get('/tasks');
        return data;
    } catch (error) {
        throw error.response.data;
    }
};

export const createTask = async (taskData) => {
    try {
        const { data } = await API.post('/tasks', taskData);
        return data;
    } catch (error) {
        throw error.response.data;
    }
};

export const updateTask = async (taskId, taskData) => {
    try {
        const { data } = await API.put(`/tasks/${taskId}`, taskData);
        return data;
    } catch (error) {
        throw error.response.data;
    }
};

export const deleteTask = async (taskId) => {
    try {
        const { data } = await API.delete(`/tasks/${taskId}`);
        return data;
    } catch (error) {
        throw error.response.data;
    }
};
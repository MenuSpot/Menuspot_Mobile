import axios from 'axios';

const API_BASE_URL = 'https://localhost:7163/api/';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const handleErrors = (error) => {
    if (error.response) {
        console.error('Response Error:', error.response.status, error.response.data);
        return Promise.reject(error.response.data);
    } else if (error.request) {
        console.error('Request Error:', error.request);
        return Promise.reject('No response from the server');
    } else {
        console.error('Error:', error.message, error);
        return Promise.reject(error.message);
    }
};

const get = async (url, params) => {
    try {
        const response = await api.get(url, params);
        return response.data;
    } catch (error) {
        return handleErrors(error);
    }
};

const post = async (url, params) => {
    try {
        const response = await api.post(url, params);
        return response.data;
    } catch (error) {
        return handleErrors(error);
    }
};

export { get, post, handleErrors };
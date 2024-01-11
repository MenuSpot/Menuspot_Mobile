import axios from 'axios';

const API_BASE_URL = 'https://localhost:7163/api/'; // Replace with your actual API base URL

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Function to handle errors
const handleErrors = (error) => {
    if (error.response) {
        // The request was made, but the server responded with a status code that falls out of the range of 2xx
        console.error('Response Error:', error.response.status, error.response.data);
        return Promise.reject(error.response.data);
    } else if (error.request) {
        // The request was made, but no response was received
        console.error('Request Error:', error.request);
        return Promise.reject('No response from the server');
    } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error:', error.message, error);
        return Promise.reject(error.message);
    }
};

// GET method
const get = async (url, params = {}) => {
    try {
        const response = await api.get(url, { params });
        return response.data;
    } catch (error) {
        return handleErrors(error);
    }
};

// POST method
const post = async (url, params = {}) => {
    try {
        const response = await api.post(url, params);
        return response.data;
    } catch (error) {
        return handleErrors(error);
    }
};

export { get, post, handleErrors };
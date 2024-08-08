import axios from 'axios';
import { errorCodes } from '../constants/ErrorMessages';

const API_BASE_URL = "https://menuspot.com.tr/api"

let api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

const getErrorData = (errorCode) => {
    if (errorCode === 200) {
        return false
    } return errorCodes[errorCode]
}

const get = async (url, params) => {
    if (localStorage.getItem('token')) {
        api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    }
    try {
        const response = await api.get(url, params);
        if (!response.data.data) {
            const error = getErrorData(response.data.responseCode)
            if (error) {
                return { title: error.title, description: error.body, buttonText: "okay." }
            }
            return { title: "woops!", description: "theres been an error blabla...", buttonText: "okay." }
        }
        return response.data;
    } catch (error) {
        return console.error(error)
    }
};

const post = async (url, params) => {
    if (localStorage.getItem('token')) {
        api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    }
    try {
        const response = await api.post(url, params);
        if (!response.data.data) {
            const error = getErrorData(response.data.responseCode)
            if (error) {
                return { title: error.title, description: error.body, buttonText: "okay." }
            }
            return { title: "woops!", description: "theres been an error, please try again later...", buttonText: "okay." }
        }
        return response.data;
    } catch (error) {
        return console.error(error);
    }
};

export { get, post };
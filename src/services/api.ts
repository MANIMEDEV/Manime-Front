import axios, { Axios } from 'axios';

const api: Axios = axios.create({
    baseURL: 'http://192.168.0.235:3000',
    headers: {
        "Content-Type":" application/json"
    }
});

export { api };
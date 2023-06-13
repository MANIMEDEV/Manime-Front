import axios, { Axios } from 'axios';

const api: Axios = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        "Content-Type":" application/json"
    }
});

export { api };
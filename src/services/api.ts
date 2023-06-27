import axios, { Axios } from 'axios';

const hostUrl: string | undefined = import.meta.env.VITE_HOST_URL;
const api: Axios = axios.create({
    baseURL: `http://${hostUrl}:3000`,
    headers: {
        "Content-Type": "application/json"
    }
});

export { api };

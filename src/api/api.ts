import axios from "axios";

const apiLink = import.meta.env.VITE_API_LINK;

const api = axios.create({
    baseURL: apiLink,
    headers: {
        'Content-Type': 'application/json'
    }
});

export {api};
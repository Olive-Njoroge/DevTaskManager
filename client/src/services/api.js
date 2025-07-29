import axios from 'axios'

const backendUrl = import.meta.env.VITE_BACKEND_URI

const API = axios.create({
    baseURL: `${backendUrl}/api` 
});

//INTERCEPTOR... makes sure we attach JWT automatically
API.interceptors.request.use(cfg => {
    const token = localStorage.getItem("token");
    if(token) cfg.headers.Authorization = `Bearer ${token}`;
    return cfg;
});

export default API;
// Paquetes externos
import axios from "axios"
import { setupCache } from 'axios-cache-interceptor';

const service = axios.create({baseURL: "http://localhost:5005/api/"})
// https://query-backend.onrender.com/api



service.interceptors.request.use((config)=>{

    const token = localStorage.getItem("authToken")

    if(token){
        config.headers = {
            authorization: `Bearer ${token}`
        }
    }

    return config

})


export default service
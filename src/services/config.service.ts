// Paquetes externos
import axios from "axios"


const service = axios.create({baseURL: "https://query-backend.onrender.com/api"})

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
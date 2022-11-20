// Paquetes externos
import axios from "axios"


const service = axios.create({baseURL: "https://query-app-media.herokuapp.com/"})

service.interceptors.request.use((config)=>{

    const token: string | null = localStorage.getItem("authToken")

    if(token){
        config.headers = {
            authorization: `Bearer ${token}`
        }
    }

    return config

})

export default service
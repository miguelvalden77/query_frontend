// Paquetes externos
import { AxiosInstance } from "axios";

// Service
import service from "./config.service";


const createMessage = (userId: string | undefined, receiverId: string, message: string)=>{

    return service.post(`/chat/create`, {userId, receiverId, message})
}

const getMessages = (userId: string | undefined, receiverId: string)=>{

    return service.get(`/chat/getMessages/${userId}/${receiverId}`)
}

const getLastMessage = (userId: string | undefined, receiverId: string)=>{

    return service.get(`/chat/lastMessage/${userId}/${receiverId}`)
}

export {
    createMessage,
    getMessages,
    getLastMessage
}
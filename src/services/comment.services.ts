// Paquetes externos
import { AxiosInstance } from "axios";

// Service
import service from "./config.service";

// Interface
import { comment } from "./interfaces/services.interfaces";


const createComment = (comment: comment): Promise<AxiosInstance>=>{
    return service.post("/comment/create", comment)
}

const deleteComment = (id: string): Promise<AxiosInstance>=>{
    return service.post(`/comment/delete/${id}`)
}

const updateAComment = (id: string, description: any): Promise<AxiosInstance>=>{
    return service.post(`/comment/update/${id}`, description)
}


export {createComment, deleteComment, updateAComment}
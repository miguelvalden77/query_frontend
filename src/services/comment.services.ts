import { AxiosInstance } from "axios";
import service from "./config.service";
import { comment } from "./interfaces/services.interfaces";


const createComment = (comment: comment): Promise<AxiosInstance>=>{
    return service.post("/comment/create", comment)
}


export {createComment}
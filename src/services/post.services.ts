// Service
import service from "./config.service";

// Interfaces
import {postCreate} from "../interfaces/interfaces";
import { AxiosPromise } from "axios";


const showAllPosts = async ():Promise<any>=>{
    const bool = localStorage.getItem("all-posts")

    if(bool == null){
        const response: any = await service.get("/post/all-posts")
        localStorage.setItem("all-posts", JSON.stringify(response.data))
        const data = JSON.parse(localStorage.getItem("all-posts"))
        
        return data
    }
    
    const data: any = localStorage.getItem("all-posts")
    return JSON.parse(data)
}

const getUserPosts = (id: string | undefined):Promise<AxiosPromise>=>{
    return service.get(`/post/user/${id}`)
}

const createPost = (post: postCreate):Promise<AxiosPromise>=>{
    return service.post("/post/create", post)
}

const getPost = (id: string | undefined):Promise<AxiosPromise>=>{
    return service.get(`/post/${id}`)
}

const deletePost = (id: string | undefined):Promise<AxiosPromise>=>{
    return service.post(`/post/delete/${id}`)
}

export {showAllPosts, createPost, getPost, deletePost, getUserPosts}
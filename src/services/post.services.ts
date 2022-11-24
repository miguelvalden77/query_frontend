// Service
import service from "./config.service";

// Interfaces
import {postCreate} from "../interfaces/interfaces";
import { AxiosPromise } from "axios";


const showAllPosts = ():Promise<AxiosPromise>=>{
    return service.get("/post/all-posts")
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
// Service
import service from "./config.service";

// Interfaces
import {postCreate} from "../interfaces/interfaces";


const showAllPosts = ():Promise<any>=>{
    return service.get("/post/all-posts")
}

const getUserPosts = (id: string | undefined):Promise<any>=>{
    return service.get(`/post/user/${id}`)
}

const createPost = (post: postCreate)=>{
    return service.post("/post/create", post)
}

const getPost = (id: string | undefined)=>{
    return service.get(`/post/${id}`)
}

const deletePost = (id: string | undefined)=>{
    return service.post(`/post/delete/${id}`)
}

export {showAllPosts, createPost, getPost, deletePost, getUserPosts}
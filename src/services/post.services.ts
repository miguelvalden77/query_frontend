import service from "./config.service";

import {postCreate} from "./interfaces/services.interfaces";


const showAllPosts = ():Promise<any>=>{
    return service.get("/post/all-posts")
}


const createPost = (post: postCreate)=>{
    return service.post("/post/create", post)
}

const getPost = (id: string | undefined)=>{
    return service.get(`/post/${id}`)
}


export {showAllPosts, createPost, getPost}
import service from "./config.service";

import {postCreate} from "./interfaces/services.interfaces";


const showAllPosts = ():Promise<any>=>{
    return service.get("/post/all-posts")
}


const createPost = (post: postCreate)=>{
    return service.post("/post/create", post)
}


export {showAllPosts, createPost}
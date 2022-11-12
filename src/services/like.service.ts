import service from "./config.service";

const likePost = (id: string, info: string)=>{
    return service.post(`/post/likes/${id}/${info}`)
}

export {likePost}
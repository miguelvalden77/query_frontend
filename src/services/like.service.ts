import service from "./config.service";

const likePost = (id: string, userId: string | undefined)=>{
    return service.post(`/post/likes/${id}/${userId}`)
}

export {likePost}
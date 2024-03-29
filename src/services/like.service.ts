import service from "./config.service";

const likePost = (id: string, userId: string | undefined) => {
    return service.post(`/post/likes/${id}/${userId}`)
}

const likesArr = (id: string | undefined) => {
    return service.get(`/auth/likesArr/${id}`)
}

export { likePost, likesArr }
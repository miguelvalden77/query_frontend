import { post } from "./post.interfaces"

export default interface user {
    username?: string, //aqui
    email?: string,
    role?: string,
    id?: string,
    postsLike?: string[],
    profilePhoto?: string,
    _id?: string,
    personalDescription?: string,
    posts?: post[],
    friends?: string[],
    followers?: string[]
}

export default interface props {
    children?: JSX.Element | JSX.Element[]
}

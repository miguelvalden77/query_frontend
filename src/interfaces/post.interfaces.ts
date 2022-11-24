import user from "./context.interfaces"

interface author {
    _id: string,
    email: string,
    username: string
}

interface comment {
    description: string,
    author: string,
    post: string
}

export interface post {
    _id: string,
    title: string,
    photo: string,
    posts: post[],
    author: author
    comments: comment[],
    likes: number,
    createdAt: string
}

export interface propsLike {
    id: string,
    getData: Function,
    likesArray: {
        data: {
            postsLike: string[],
            _id: string
        }
    },
    usuario: user | undefined | null
}

export interface propDeletePost {
    postId: string | undefined
}

export interface propsLike {
    id: string,
    getData: Function,
    likesArray: {
        data: {
            postsLike: string[],
            _id: string
        }
    },
    usuario: user | undefined | null
}
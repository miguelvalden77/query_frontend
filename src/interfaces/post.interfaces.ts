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

export default interface post {
    _id: string,
    title: string,
    photo: string,
    author: author,
    comments: comment[],
    likes: number,
    createdAt: string
}

export default interface propsLike {
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
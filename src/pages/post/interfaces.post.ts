

interface author {
    _id: string,
    email: string,
    username: string
}

export default interface post {
    _id: string,
    title: string,
    photo: string,
    author: author,
    comments: string[],
    likes: number,
    createdAt: string
}


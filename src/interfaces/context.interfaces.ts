export default interface user {
    username: string, //aqui
    email?: string,
    role?: string,
    id?: string,
    postsLike?: string[]
}

export default interface props {
    children: JSX.Element | JSX.Element[]
}

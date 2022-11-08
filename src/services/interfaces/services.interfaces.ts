
export interface postCreate{
    title: string,
    photo: string,
    author: string | undefined
}

export default interface newUser {
    username: string,
    email?: string,
    password: string
}

export default interface userLogged{
    username: string,
    password: string
}


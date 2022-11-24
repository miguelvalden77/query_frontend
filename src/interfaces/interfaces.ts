export interface postCreate{
    title: string,
    photo: string,
    author: string | undefined
}

export default interface userLogged{
    username: string,
    password: string
}

export default interface newUser {
    username: string,
    email?: string,
    password: string
}


export interface comment {
    description: string,
    author: string,
    post: string
}

export interface propsPersonalInfo {
    userId: string | undefined,
    getData: ()=>{}
}

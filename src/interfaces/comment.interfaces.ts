export interface comment {
    description: string,
    author: {
        username: string,
        _id: string
    },
    _id: string
}

export interface commentAddProps {
    post: string | undefined,
    getData: Function
}
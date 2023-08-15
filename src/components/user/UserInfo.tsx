import { FC, useEffect, useState } from "react";
import { getPersonalInfo } from "../../services/user.services";

interface infoStateProps {
    friends: string[],
    followers: string[],
    posts: string[]
}

interface Props {
    id: string
}

const UserInfo: FC<Props> = ({ id }) => {

    const [info, setInfo] = useState<infoStateProps>()

    useEffect(() => {
        getInfo()
    }, [])

    const getInfo = async (): Promise<void> => {

        const { data: { followers, friends, posts } } = await getPersonalInfo(id)
        setInfo({ followers, friends, posts })

    }

    return (
        <section className="user_info_container">
            <p className="following">Siguiendo <span>{info?.friends.length}</span></p>
            <p className="following">Seguidores <span>{info?.followers.length}</span></p>
            <p className="following">Publicaciones <span>{info?.posts.length}</span></p>
        </section>
    )

}

export default UserInfo
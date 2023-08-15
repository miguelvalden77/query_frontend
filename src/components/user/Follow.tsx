// Hooks
import { useContext, useEffect, useState } from "react"

// Services
import { getFriends, verifyFriends } from "../../services/user.services"

// Paquetes externos
import { useNavigate } from "react-router-dom"

interface propsFollow {
    userId: string | undefined,
    username: string | undefined,
}

const Follow = ({ userId, username }: propsFollow): JSX.Element => {

    const [isFollowed, setIsFollowed] = useState<boolean>()
    const [loader, setLoader] = useState<boolean>(true)

    const navigate = useNavigate()

    useEffect(() => {
        gettingFriends()
    }, [])

    const gettingFriends = async () => {
        try {
            const { data: { result } } = await getFriends(username, userId!)
            console.log({ result })
            result == true ? setIsFollowed(true) : setIsFollowed(false)
            setLoader(false)

            return
        }
        catch (err) {
            navigate("/error")
        }
    }

    const handleFollow = async () => {
        try {

            // if (friendsArr!.indexOf(userId!) == -1) {
            //     setIsFollowed(true)
            //     await verifyFriends(userId, username)
            //     gettingFriends()
            //     return
            // }

            console.log("Ho")

            const { data: { result } } = await verifyFriends(userId, username)
            setIsFollowed(result == true ? true : false)
            console.log(result)

            return
        }
        catch (err) {
            navigate("/error")
        }
    }

    if (loader) return <button className="follow_button">Cargando ...</button>

    return <button className="follow_button" onClick={handleFollow}>{isFollowed == true ? "Dejar de seguir" : "Seguir"}</button>

}

export default Follow
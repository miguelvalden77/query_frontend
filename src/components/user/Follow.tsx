// Hooks
import { useContext, useEffect, useState } from "react"

// Services
import { getFriends, verifyFriends } from "../../services/user.services"

// Paquetes externos
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"

interface propsFollow {
    userId: string | undefined,
    username: string | undefined,
}

const Follow = ({ userId, username }: propsFollow): JSX.Element => {

    const [isFollowed, setIsFollowed] = useState<boolean>()
    const [friendsArr, setFriendsArr] = useState<string[]>([])

    const { setUsuario, usuario, authenticateUser } = useContext(AuthContext)

    const navigate = useNavigate()

    useEffect(() => {
        gettingFriends()
    }, [])

    const gettingFriends = async () => {
        try {
            const response = await getFriends(username)
            setFriendsArr(response.data)
        }
        catch (err) {
            navigate("/error")
        }
    }

    const handleFollow = async () => {
        try {

            if (friendsArr!.indexOf(userId!) == -1) {
                setIsFollowed(true)
                await verifyFriends(userId, username)
                gettingFriends()
                return
            }

            await verifyFriends(userId, username)
            gettingFriends()

            setIsFollowed(false)
            return

        }
        catch (err) {
            navigate("/error")
        }
    }

    return <button onClick={handleFollow}>{isFollowed == true ? "Dejar de seguir" : "Seguir"}</button>

}

export default Follow
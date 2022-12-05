// Hooks
import { useEffect, useState } from "react"

// Services
import { getFriends, verifyFriends } from "../../services/user.services"

// Paquetes externos
import {useNavigate} from "react-router-dom"

interface propsFollow {
    userId: string | undefined,
    username: string | undefined,
}

const Follow = ({userId, username}: propsFollow):JSX.Element =>{

    const [isFollowed, setIsFollowed] = useState<boolean>()
    const [friendsArr, setFriendsArr] = useState<any>()

    const navigate = useNavigate()

    useEffect(()=>{
        gettingFriends()
    }, [])

    const gettingFriends = async ()=>{
        try{
            const response = await getFriends(username)
            setFriendsArr(response)
        }
        catch(err){
            navigate("/error")
        }
    }

    const handleFollow = async ()=>{
        try{
        
            if(friendsArr?.data.indexOf(userId) == -1){
                setIsFollowed(true)
                await verifyFriends(userId, username)
                gettingFriends()
                return
            }

            await verifyFriends(userId, username)
            gettingFriends()

            setIsFollowed(false)

        }
        catch(err){
            navigate("/error")
        }
    }

    return <button onClick={handleFollow}>{isFollowed == true ? "unfollow" : "follow"}</button>
    
}

export default Follow
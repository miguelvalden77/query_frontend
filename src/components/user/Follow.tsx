import { useEffect, useState } from "react"
import { addUser, getFriends, substractUser, verifyFriends } from "../../services/user.services"

interface propsFollow {
    userId: string | undefined,
    username: string | undefined,
}

const Follow = ({userId, username}: propsFollow):JSX.Element =>{

    const [isFollowed, setIsFollowed] = useState<boolean>()
    const [friendsArr, setFriendsArr] = useState<any>()

    useEffect(()=>{
        gettingFriends()
    }, [])

    const gettingFriends = async ()=>{
        try{
            const response = await getFriends(username)
            setFriendsArr(response)
        }
        catch(err){
            console.log(err)
        }
    }

    const handleFollow = async ()=>{
        try{
        
            console.log(friendsArr.data, "array")
            console.log(userId, "user")
            if(friendsArr?.data.indexOf(userId) == -1){
                console.log("Lo sigues")
                setIsFollowed(true)
                const response = await verifyFriends(userId, username)
                console.log(response.data.message, "hola")
                gettingFriends()
                return
            }

            console.log("No lo sigues")
            const response = await verifyFriends(userId, username)
            gettingFriends()
            console.log(response.data, "hola")

            setIsFollowed(false)

        }
        catch(err){
            console.log(err)
        }
    }

    return <button onClick={handleFollow}>{isFollowed == true ? "unfollow" : "follow"}</button>
    
}

export default Follow
import { useContext, useEffect } from "react"
import { useState } from "react"
import { getFriendsInfo } from "../../services/user.services"
import { AuthContext } from "../../context/auth.context"
import user from "../../interfaces/context.interfaces"
import OneContact from "./OneContact"



const FriendsSidebar = ({setReceiver, receiver}: any): JSX.Element => {

    const {usuario} = useContext(AuthContext)
    const [friends, setFriends] = useState<user[]>([])

    useEffect(()=>{
        fetchFriends()
    }, [])

    const fetchFriends = async () =>{

        const {data} = await getFriendsInfo(usuario?.username)
        setFriends(data.friends)
    }

    return(
        <aside className="friends_aside">
            {
            friends.length > 0
            ? friends.map((friend, index)=> {
                return <OneContact receiver={receiver} friend={friend} setReceiver={setReceiver} key={index} username={friend.username} image={friend.profilePhoto}/>
            })
            : <p>No hay amigos</p>
            }
        </aside>
    )
}

export default FriendsSidebar
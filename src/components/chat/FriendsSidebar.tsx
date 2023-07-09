import { useContext, useEffect } from "react"
import { useState } from "react"
import { getFriendsInfo } from "../../services/user.services"
import { AuthContext } from "../../context/auth.context"
import user from "../../interfaces/context.interfaces"



const FriendsSidebar = ({setReceiver}: any): JSX.Element => {

    const {usuario} = useContext(AuthContext)
    const [friends, setFriends] = useState<user[]>([])

    useEffect(()=>{
        fetchFriends()
    }, [])

    const fetchFriends = async () =>{

        const {data} = await getFriendsInfo(usuario?.username)
        console.log({data})
        setFriends(data.friends)
    }

    const updateReceiver = (receiver: any)=> setReceiver(receiver)

    return(
        <aside>
            {
            friends.length > 0
            ? friends.map((friend, index)=> {
                return <p onClick={()=>updateReceiver(friend)} key={index}>{friend.username}</p>
            })
            : <p>No hay amigos</p>
            }
        </aside>
    )
}

export default FriendsSidebar
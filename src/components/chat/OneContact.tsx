import { useContext, useEffect, useState } from "react"
import defaultImg from "../../assets/avatar_foto.jpg"
import { getLastMessage } from "../../services/chat.services"
import { AuthContext } from "../../context/auth.context"


interface Props {
    image: string | undefined,
    username: string | undefined,
    setReceiver: (params: any)=>{} | undefined,
    friend: any,
    receiver: any
}

const OneContact = ({image, username, setReceiver, friend, receiver}: Props): JSX.Element =>{

    const {usuario} = useContext(AuthContext)

    const [lastMessage, setLastMessage] = useState<string>("")

    useEffect(()=>{
        getTheLastMessage()
    })

    const getTheLastMessage = async () => {
        const {data} = await getLastMessage(usuario?.id, friend._id)
        setLastMessage(data[0].message)
    }
    const updateReceiver = (receiver: any)=> setReceiver(receiver)

    return(
        <article onClick={()=>updateReceiver(friend)} className={`contact_card ${receiver?.username == username && "hover_card"}`}>
            <div className="img_chat_container">
                <img className="foto_chat" src={image ? image : defaultImg} alt="foto" />
            </div>
            <div className="info_contact_container">
                <h4>{username}</h4>
                <p>{lastMessage ? lastMessage : "Esperando ..."}</p>
            </div>
        </article>
    )

}

export default OneContact
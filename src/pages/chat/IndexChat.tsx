import { useContext, useEffect, useState } from "react"
import FriendsSidebar from "../../components/chat/FriendsSidebar"
import { createMessage, getMessages } from "../../services/chat.services"
import { AuthContext } from "../../context/auth.context"
import { timeHelper } from "../../utils/timeHelper"


import { io, Socket } from "socket.io-client";
// please note that the types are reversed


const IndexChat = (): JSX.Element =>{
    const socket: Socket<any, any> = io("http://localhost:5005/");

    const {usuario} = useContext(AuthContext)

    const [receiver, setReceiver] = useState<any>()
    const [message, setMessage] = useState<string>("")
    const [chat_messages, setChat_messages] = useState<any[]>([])


    useEffect(()=>{
        getAllMessages()
    }, [receiver])

    const changeInput = (evt: React.ChangeEvent<HTMLInputElement>):void =>{
        setMessage(evt.target.value)
    }

    const sendMessage = async ():Promise<void> =>{
        if(message.length == 0) return

        const {data} = await createMessage(usuario?.id, receiver._id, message)
        setChat_messages([...chat_messages, data])

        setMessage("")
    }

    const getAllMessages = async ()=>{
        if(!receiver) return
        const {data} = await getMessages(usuario?.id, receiver._id)
        setChat_messages(data)
    }

    const writing = () =>{
        socket.emit("writing:client", {chat: "escribiendo..."})
        socket.disconnect()
    } 

    return(
        <main className="main_chat">
            <FriendsSidebar setReceiver={setReceiver} receiver={receiver} socket={socket} />
            <section className="messages_container">
                <div className="chat_body">
                    {/* <h1>{receiver ? receiver.username : "No hay chat"}</h1> */}
                    <section className="messages_container" style={{paddingTop: "1rem"}}>
                    {
                        chat_messages.length > 0 && chat_messages.map((message, index)=>{
                            return(
                                <div key={index} className={(usuario?.id == message.author) ? "own_message" : "receiver_message"}>
                                    <p>{message.message}</p>
                                    <small className="time_message">{timeHelper(message.createdAt)}</small>
                                </div>
                                )
                            })
                        }
                    </section>
                </div>
                <div className="chat_input">
                    <input onChange={changeInput} onInput={writing} className="chat_text_input" type="text" value={message}/>
                    <button onClick={sendMessage} className="chat_button">Enviar</button>
                </div>
            </section>
        </main>
    )

}

export default IndexChat
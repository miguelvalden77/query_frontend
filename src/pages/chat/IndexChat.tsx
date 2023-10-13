import { useContext, useEffect, useState } from "react"
import FriendsSidebar from "../../components/chat/FriendsSidebar"
import { createMessage, getMessages } from "../../services/chat.services"
import { AuthContext } from "../../context/auth.context"
import { setDayIfDifferent, timeHelper } from "../../utils/timeHelper"


import { io, Socket } from "socket.io-client";
// please note that the types are reversed


const IndexChat = (): JSX.Element => {

    const { usuario } = useContext(AuthContext)

    const [receiver, setReceiver] = useState<any>()
    const [message, setMessage] = useState<string>("")
    const [chat_messages, setChat_messages] = useState<any[]>([])


    useEffect(() => {
        getAllMessages()
        setMessage("")
    }, [receiver])

    const changeInput = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        setMessage(evt.target.value)
    }

    const sendMessage = async (): Promise<void> => {
        if (message.length == 0) return

        const { data } = await createMessage(usuario?.id, receiver._id, message)
        setChat_messages([...chat_messages, data])

        setMessage("")
    }

    const getAllMessages = async () => {
        if (!receiver) return
        const { data } = await getMessages(usuario?.id, receiver._id)
        setChat_messages(data)
    }

    return (
        <main className="main_chat">
            <FriendsSidebar setReceiver={setReceiver} receiver={receiver} />
            <section className="messages_container">
                <div className="chat_body">
                    {/* <h1>{receiver ? receiver.username : "No hay chat"}</h1> */}
                    <section className="messages_container" style={{ paddingTop: "1rem", height: receiver == undefined || chat_messages.length == 0 ? "100%" : "" }}>
                        {
                            chat_messages.length > 0 ? chat_messages.map((message, index) => {
                                return (
                                    <div key={index} className={(usuario?.id == message.author) ? "own_message" : "receiver_message"}>
                                        <p>{message.message}</p>
                                        <small className="time_message">
                                            {timeHelper(message.createdAt)}
                                            {
                                                new Date(message.createdAt).getDate() != new Date().getDate() &&
                                                <span style={{ marginLeft: "0.5rem" }}>{setDayIfDifferent(message.createdAt)}</span>
                                            }
                                        </small>
                                    </div>
                                )
                            }) : <div className="no_message_container">
                                <h1>Comienza a chatear {receiver == undefined ? "" : `con ${receiver.username}`}</h1>
                            </div>
                        }
                    </section>
                </div>
                <div className="chat_input">
                    <input onChange={changeInput} className="chat_text_input" type="text" value={message} />
                    <button onClick={sendMessage} className="chat_button">Enviar</button>
                </div>
            </section>
        </main>
    )

}

export default IndexChat
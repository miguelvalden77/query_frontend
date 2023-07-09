import { useState } from "react"
import FriendsSidebar from "../../components/chat/FriendsSidebar"



const IndexChat = (): JSX.Element =>{

    const [receiver, setReceiver] = useState<any>()

    return(
        <main className="main_chat">
            <FriendsSidebar setReceiver={setReceiver} receiver={receiver} />
            <section className="messages_container">
                <div className="chat_body">
                    <h1>{receiver ? receiver.username : "No hay chat"}</h1>
                </div>
                <div className="chat_input">
                    <input className="chat_text_input" type="text" />
                    <button className="chat_button">Enviar</button>
                </div>
            </section>
        </main>
    )

}

export default IndexChat
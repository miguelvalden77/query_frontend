import { useState } from "react"
import FriendsSidebar from "../../components/chat/FriendsSidebar"



const IndexChat = (): JSX.Element =>{

    const [receiver, setReceiver] = useState<any>()

    return(
        <main>
            <FriendsSidebar setReceiver={setReceiver} />
            <section>
                <h1>{receiver ? receiver.username : "No hay chat"}</h1>
                <input type="text" />
                <button>Enviar</button>
            </section>
        </main>
    )

}

export default IndexChat
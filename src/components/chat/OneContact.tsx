import defaultImg from "../../assets/avatar_foto.jpg"


interface Props {
    image: string | undefined,
    username: string | undefined,
    setReceiver: (params: any)=>{} | undefined,
    friend: any,
    receiver: any
}

const OneContact = ({image, username, setReceiver, friend, receiver}: Props): JSX.Element =>{

    const updateReceiver = (receiver: any)=> setReceiver(receiver)

    return(
        <article onClick={()=>updateReceiver(friend)} className={`contact_card ${receiver.username == username && "hover_card"}`}>
            <div className="img_chat_container">
                <img className="foto_chat" src={image ? defaultImg : defaultImg} alt="foto" />
            </div>
            <div className="info_contact_container">
                <h4>{username}</h4>
                <p>Último mensaje</p>
            </div>
        </article>
    )

}

export default OneContact
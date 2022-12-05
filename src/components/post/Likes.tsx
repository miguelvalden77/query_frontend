// Hooks
import { useEffect, useState} from "react"

// Interfaces
import { propsLike } from "../../interfaces/post.interfaces"

// Services
import { likePost } from "../../services/like.service"

// Recursos
import Like from "../../assets/like.png"
import NotLike from "../../assets/not-like.png"

// Paquetes externos
import { useNavigate } from "react-router-dom"


const Likes = ({id, getData, likesArray, usuario}: propsLike):JSX.Element =>{

    const [info, setInfo] = useState<boolean>()

    const navigate = useNavigate()
    
    useEffect(()=>{
        verifyLike()
    }, [])
    
    const verifyLike = async ()=>{
        
        try{
        
            if(likesArray.data.postsLike.indexOf(id) == -1){
                setInfo(false)
            }
            else{
                setInfo(true)
            }

        }
        catch(err){
            navigate("/error")
        }
    }

    const handleLike = async ()=>{
    
        try{
            await likePost(id, usuario?.username)
            setInfo(!info)
            
            getData()
        }
        catch(err){
            navigate("/error")
        }
    }

    return <img className="like" onClick={handleLike} width={18} src={info == false ? NotLike : Like}/>

}

export default Likes
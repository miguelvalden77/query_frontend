// Hooks
import { useEffect, useState, useContext } from "react"

// Context
import { AuthContext } from "../../context/auth.context"

// Interfaces
import { propsLike } from "../../interfaces/post.interfaces"

// Services
import { likePost } from "../../services/like.service"

// Recursos
import Like from "../../assets/like.png"
import NotLike from "../../assets/not-like.png"


const Likes = ({id, getData, likesArray, usuario}: propsLike):JSX.Element =>{

    const [info, setInfo] = useState<boolean>()
    
    useEffect(()=>{
        verifyLike()
    }, [])
    
    const verifyLike = async ()=>{
        console.log(likesArray.data.postsLike)
        
        try{
        
            if(likesArray.data.postsLike.indexOf(id) == -1){
                setInfo(false)
            }
            else{
                setInfo(true)
            }

        }
        catch(err){
            console.log(err)
        }
    }

    const handleLike = async ()=>{
    
        try{
            await likePost(id, usuario?.username)
            setInfo(!info)
            
            getData()
        }
        catch(err){
            console.log(err)
        }
    }

    return <img className="like" onClick={handleLike} width={18} src={info == false ? NotLike : Like}/>

}

export default Likes
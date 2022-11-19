// Hooks
import { useEffect, useState, useContext } from "react"

// Context
import { AuthContext } from "../../context/auth.context"

// Interfaces
import user from "../../context/interfaces.context"

// Services
import { likePost } from "../../services/like.service"

// Recursos
import Like from "../../assets/like.png"
import NotLike from "../../assets/not-like.png"


interface props {
    likes: number,
    id: string,
    getData: Function,
    likesArray: {
        data: {
            postsLike: string[],
            _id: string
        }
    },
    usuario: user | undefined | null
}

const Likes = ({likes, id, getData, likesArray, usuario}: props):JSX.Element =>{

    const [info, setInfo] = useState<boolean>()
    
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
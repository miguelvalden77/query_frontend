import { useEffect, useState, useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import user from "../../context/interfaces.context"
import { verifyService } from "../../services/auth.services"
import { likePost } from "../../services/like.service"


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

    return <div onClick={handleLike}
    style={info == false ? {backgroundColor: "white", width: "30px", height: "30px", color: "black"}
    : {backgroundColor: "red", width: "30px", height: "30px", color: "white"}}
    >{likes}</div>

}

export default Likes
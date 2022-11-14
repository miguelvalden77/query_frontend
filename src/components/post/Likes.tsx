import { useEffect, useState } from "react"
import user from "../../context/interfaces.context"
import { likePost } from "../../services/like.service"


interface props {
    likes: number,
    id: string,
    getData: Function,
    usuario: user | undefined | null
}

const Likes = ({likes, id, getData, usuario}: props):JSX.Element =>{

    const [info, setInfo] = useState<boolean>()
    
    useEffect(()=>{
        verifyLike()
    }, [])

    const verifyLike = ()=>{

        
        if(usuario?.postsLike?.indexOf(id) == -1){
            console.log(usuario.postsLike)
            setInfo(false)
        }
        else{
            setInfo(true)
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
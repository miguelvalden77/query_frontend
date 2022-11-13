import { useState } from "react"
import { likePost } from "../../services/like.service"

interface props {
    likes: number,
    id: string,
    getData: Function,
    userId: string | undefined
}

const Likes = ({likes, id, getData, userId}: props):JSX.Element =>{

    const [info, setInfo] = useState<string>("plus")
    
    console.log(id)
    const handleLike = async ()=>{
    
        try{
            await likePost(id, userId)
            if(info == "plus") setInfo("less")
            if(info == "less") setInfo("plus")
            getData()
        }
        catch(err){
            console.log(err)
        }
    }

    return <div onClick={handleLike}
    style={info == "plus" ? {backgroundColor: "white", width: "30px", height: "30px", color: "black"}
    : {backgroundColor: "red", width: "30px", height: "30px", color: "white"}}
    >{likes}</div>

}

export default Likes
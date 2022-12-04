// Services
import {deletePost} from "../../services/post.services"

// Paquetes externos
import {useNavigate} from "react-router-dom"

// Interfaces
import {propDeletePost} from "../../interfaces/post.interfaces"


const DeletePost =({postId}: propDeletePost):JSX.Element=>{

    const navigate = useNavigate()

    const handleDeletePost = async ()=>{
        try{
            await deletePost(postId)
            navigate("/allPosts")
        }
        catch(err){
            console.log(err)
        }
    }

    return <button className="delete-post-button" onClick={handleDeletePost}>Delete post</button>

}

export default DeletePost
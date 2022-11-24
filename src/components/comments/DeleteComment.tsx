// Services
import { deleteComment } from "../../services/comment.services"



interface props {
    idComment: string,
    getData: ()=>{}
}

const DeleteComment = ({idComment, getData}: props):JSX.Element =>{

    const handleDelete = async ()=>{

        try{
            await deleteComment(idComment)  
            getData()        
        }
        catch(err){
            console.log(err)
        }
    }

    return <button className="delete" onClick={handleDelete}>delete</button>

}


export default DeleteComment
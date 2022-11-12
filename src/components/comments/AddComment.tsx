// Hooks
import React, { useContext, useState } from "react"

// Paquetes externos
import { useNavigate } from "react-router-dom"

// Context
import { AuthContext } from "../../context/auth.context"

// Services
import { createComment } from "../../services/comment.services"

interface children {
    post: string | undefined,
    getData: Function
}

const AddComment = ({post, getData}: children):JSX.Element=>{

    const {usuario} = useContext(AuthContext)

    const [description, setDescription] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>)=> setDescription(e.target.value)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{

        e.preventDefault()
        const comment: any = {author: usuario?.id, description, post}

        try{
            await createComment(comment)
            getData()
            setDescription("")
        }
        catch(err){
            console.log(err)
        }

    }

    return <form onSubmit={handleSubmit}>
        <textarea name="description" cols={30} rows={10} onChange={handleChange} value={description}></textarea>
        <button>Create Comment</button>
    </form>

}

export default AddComment
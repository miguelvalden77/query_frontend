import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createComment } from "../../services/comment.services"

interface children {
    author: string,
    post: string | undefined
}

const AddComment = ({author, post}: children):JSX.Element=>{

    const navigate = useNavigate()

    const [description, setDescription] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>)=> setDescription(e.target.value)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{

        e.preventDefault()
        const comment: any = {author, description, post}

        try{
            await createComment(comment)
            navigate("/profile")
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
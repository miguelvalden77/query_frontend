// Hooks
import React, { useContext, useState } from "react"

// Context
import { AuthContext } from "../../context/auth.context"

// Services
import { createComment } from "../../services/comment.services"

// Interfaces
import { comment } from "../../interfaces/interfaces"
import { commentAddProps } from "../../interfaces/comment.interfaces"


const AddComment = ({ post, getData }: commentAddProps): JSX.Element => {

    const { usuario } = useContext(AuthContext)

    const [description, setDescription] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (e.target.value.length > 50) return
        setDescription(e.target.value)

    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        const comment: comment = { author: usuario?.id, description, post }

        try {
            await createComment(comment)
            getData()
            setDescription("")
        }
        catch (err) {
            console.log(err)
        }

    }

    return <form onSubmit={handleSubmit}>
        <input className="add-comment-input" placeholder="deja un comentario ..." name="description" onChange={handleChange} value={description} />
        <span>{description.length}</span>
        <button className="create-comment-button">Comment</button>
    </form>

}

export default AddComment
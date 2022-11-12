import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { updateAComment } from "../../services/comment.services"

interface props {
    idComment: string,
    description: string
}

const UpdateComment = ({idComment, description}: props):JSX.Element=>{

    const navigate = useNavigate()

    const [click, setClick] = useState<boolean>(false)
    const [descComment, setDescComment] = useState<string>(description)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        setDescComment(e.target.value)
        console.log(e.target.value)
    }
    const handleClick = ()=> setClick(true)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{

        e.preventDefault()

        try{
            console.log(descComment)
            const comment = {description: descComment}
            await updateAComment(idComment, comment)
            navigate("/allPosts")
        }
        catch(err){
            console.log(err)
        }
    }

    if(click == true){
        return <div>
        <form onSubmit={handleSubmit}>
            <textarea onChange={handleChange} value={descComment} name="description" cols={20} rows={10}></textarea>
            <button>Update</button>
        </form>
    </div>
    }
    else{
        return <button onClick={handleClick}>Update comment</button>
    }
}

export default UpdateComment
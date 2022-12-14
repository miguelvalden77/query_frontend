import React, { useEffect, useState } from "react"
import { updateAComment } from "../../services/comment.services"

interface props {
    idComment: string,
    description: string,
    getData: Function
}

const UpdateComment = ({idComment, description, getData}: props):JSX.Element=>{


    const [click, setClick] = useState<boolean>(false)
    const [descComment, setDescComment] = useState<string>(description)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setDescComment(e.target.value)
    }
    const handleClick = ()=> setClick(true)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{

        e.preventDefault()

        try{
            const comment = {description: descComment}
            await updateAComment(idComment, comment)
            getData()
            setClick(false)
        }
        catch(err){
            console.log(err)
        }
    }

    if(click == true){
        return <div>
        <form className="update-comment-form" onSubmit={handleSubmit}>
            <button className="update">update</button>
            <input className="update-input" onChange={handleChange} value={descComment} name="description"></input>
        </form>
    </div>
    }
    else{
        return <button className="update" onClick={handleClick}>update</button>
    }
}

export default UpdateComment
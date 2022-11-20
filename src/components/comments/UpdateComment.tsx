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

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        setDescComment(e.target.value)
    }
    const handleClick = ()=> setClick(true)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{

        e.preventDefault()

        try{
            console.log(descComment)
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
        <form onSubmit={handleSubmit}>
            <textarea onChange={handleChange} value={descComment} name="description" cols={20} rows={10}></textarea>
            <button className="update">Update</button>
        </form>
    </div>
    }
    else{
        return <button className="update" onClick={handleClick}>update</button>
    }
}

export default UpdateComment
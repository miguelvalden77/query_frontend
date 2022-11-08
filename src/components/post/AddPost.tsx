import React, { useContext, useState } from "react"
import { AuthContext } from "../../context/auth.context"
import { useNavigate } from "react-router-dom"
import {postCreate} from "../../services/interfaces/services.interfaces"
import { createPost} from "../../services/post.services"

interface data {
    title: string,
    photo: string,
    author?: string | undefined | null
}

const AddPost = ():JSX.Element=>{

    const navigate = useNavigate()
    
    const {usuario} = useContext(AuthContext)
    const [data, setData] = useState<data>({title: "", photo: "", author: usuario?.username})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> setData({...data, [e.target.name]: e.target.value})

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{

        e.preventDefault()
        const post: postCreate = {author: usuario?.id, title: data.title, photo: data.photo}

        try{
            await createPost(post)
            navigate("/allPosts")
        }
        catch(err){
            console.log(err)
        }

    }

    return <form onSubmit={handleSubmit}>
        <p>Form</p>
        <div>
            <label htmlFor="title">Title</label>
            <input value={data.title} onChange={handleChange} type="text" name="title"/>
        </div>
        <div>
            <label htmlFor="photo">Foto</label>
            <input value={data.photo} onChange={handleChange} type="text" name="photo"/>
        </div>

        <button>Crear</button>
    </form>

}

export default AddPost
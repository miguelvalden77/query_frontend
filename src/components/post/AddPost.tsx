// Hooks
import React, { useContext, useState } from "react"

// Context
import { AuthContext } from "../../context/auth.context"

// Paquetes externos
import { useNavigate } from "react-router-dom"

// Interfaces
import {postCreate} from "../../services/interfaces/services.interfaces"

// Services
import { createPost} from "../../services/post.services"
import { upload } from "../../services/upload.service"

interface data {
    title: string,
    author: string | undefined | null
}



const AddPost = ():JSX.Element=>{

    const navigate = useNavigate()
    
    const {usuario} = useContext(AuthContext)
    const [data, setData] = useState<data>({title: "", author: usuario?.id})
    const [urlImage, setUrlImage] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> setData({...data, [e.target.name]: e.target.value})

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{

        e.preventDefault()
        const post: postCreate = {author: usuario?.id, title: data.title, photo: urlImage}
        console.log(post)

        try{
            await createPost(post)
            navigate("/allPosts")
        }
        catch(err){
            console.log(err)
        }

    }

    const uploadImage = async (e: React.ChangeEvent<any>): Promise<void>=>{

        console.log(e?.target.files[0])

        const form: any = new FormData()
        form.append("image", e?.target.files[0])
        console.log(form)
        

        try{

            const response = await upload(form)
            console.log(response)
            setUrlImage(response.data.imgUrl)

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
            <input onChange={uploadImage} type="file" name="photo"/>
        </div>

        <img src={urlImage} alt="foto" height={150} width={150}/>

        <button>Crear</button>
    </form>

}

export default AddPost
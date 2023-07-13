// Recursos
import avatar from "../../assets/avatar.png"

// Services
import { upload } from "../../services/upload.service"
import { setImgProfile } from "../../services/user.services"

// Hooks
import { useContext, useState } from "react"

// Contexto
import { AuthContext } from "../../context/auth.context"
import { useNavigate } from "react-router-dom"


interface propsPhoto{
    photo: string | undefined,
    userId: string | undefined,
    getData: ()=>{}
}


const ProfilePhoto = ({photo, userId, getData}:propsPhoto):JSX.Element=>{

    const {usuario} = useContext(AuthContext)
    const navigate = useNavigate()

    const [click, setClick] = useState<boolean>(false)
    const [urlImage, setUrlImage] = useState<any>(photo)

    const handleSubmit = async ()=>{
        try{
            if(click){
                const image = {url: urlImage}
                await setImgProfile(userId, image)
                setClick(false)
                getData()
                return
            }
            setClick(true)

        }
        catch(err){
            navigate("/error")
        }
    }

    const uploadImage = async (e: React.ChangeEvent<any>): Promise<void>=>{

        const form: any = new FormData()
        form.append("image", e?.target.files[0]) 

        try{

            const response = await upload(form)
            setUrlImage(response.data.imgUrl)

        }
        catch(err){
            navigate("/error")
        }

    }

    return <section className="photo-container">
        <div className="profile-photo-container">
            <img src={urlImage ? urlImage : avatar} alt="profile photo"/>
        </div>
        {click ? <input onChange={uploadImage} type="file"/> : null}
        {usuario?.id == userId && <button className="photo-button" onClick={handleSubmit}>Cambiar foto</button>}
    </section>
}

export default ProfilePhoto
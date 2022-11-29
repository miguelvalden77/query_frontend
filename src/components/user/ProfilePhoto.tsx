// Recursos
import { useState } from "react"
import avatar from "../../assets/avatar.png"
import { upload } from "../../services/upload.service"
import { setImgProfile } from "../../services/user.services"


interface propsPhoto{
    photo: string | undefined,
    userId: string | undefined,
    getData: ()=>{}
}


const ProfilePhoto = ({photo, userId, getData}:propsPhoto):JSX.Element=>{

    const [click, setClick] = useState<boolean>(false)
    const [urlImage, setUrlImage] = useState<any>(photo)

    const handleSubmit = async ()=>{
        try{
            if(click){
                const image = {url: urlImage}
                console.log(click)
                const response = await setImgProfile(userId, image)
                console.log(response.data)
                setClick(false)
                getData()
                return
            }
            console.log(click)
            setClick(true)

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
            setUrlImage(response.data.imgUrl)

        }
        catch(err){
            console.log(err)
        }

    }

    return <section className="photo-container">
        <div className="profile-photo-container">
            <img src={urlImage ? urlImage : avatar} alt="profile photo"/>
        </div>
        {click ? <input onChange={uploadImage} type="file"/> : null}
        <button className="photo-button" onClick={handleSubmit}>change photo</button>
    </section>
}

export default ProfilePhoto
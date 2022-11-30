// Hooks
import { useContext, useEffect, useState } from "react"

// Context
import {AuthContext} from "../../context/auth.context"
import {getUserPosts} from "../../services/post.services"

// Recursos
import avatar from "../../assets/avatar.png"

// Paquetes externos
import { Link } from "react-router-dom"

// Componentes
import Likes from "../../components/post/Likes"
import PersonalDescription from "../../components/user/PersonalDescription"

// Servicios
import { likesArr } from "../../services/like.service"
import { getPersonalDescription } from "../../services/user.services"

// Interfaces
import { post } from "../../interfaces/post.interfaces"
import ProfilePhoto from "../../components/user/ProfilePhoto"



const Profile = ():JSX.Element=>{

    const {usuario, isUserActive, authenticateUser} = useContext(AuthContext)

    const [likes, setLikes] = useState<any>()
    const [posts, setPosts] = useState<post>()
    const [loader, setLoader] = useState<boolean>(true)
    const [info, setInfo] = useState<string>()

    useEffect(()=>{
        getData()
    }, [])

    console.log("Renderizo")

    const getData = async ()=>{
        try{

            const likesArray = await likesArr(usuario?.id)
            setLikes(likesArray)

            const response = await getUserPosts(usuario?.id)
            setPosts(response.data)

            const personalInfo = await getPersonalDescription(usuario?.id)
            setInfo(personalInfo.data)
            authenticateUser()

            setLoader(false)
        }
        catch(err){
            console.log(err)
        }
    }

    if(loader){
        return <h2>Loading ...</h2>
    }

    if(isUserActive == true){
        return <main>

            <section className="info-container">
                <ProfilePhoto photo={usuario?.profilePhoto} getData={getData} userId={usuario?.id}/>
                <div className="description-container">
                    <PersonalDescription info={info} userId={usuario?.id} getData={getData}/>
                </div>
            </section>
            

            <div className="main-profile">


            {
                posts && posts.posts.map((e: post, index: number)=>{
                    return <article className="post-card profile-card" key={index}>

                    <section className="post-section author-post">
                        <div className="avatar-container">
                            <img src={usuario?.profilePhoto ? usuario.profilePhoto : avatar} alt="avatar usuario" />
                        </div>
                        <p>{e.author.username}</p>
                    </section>
                    <section className="post-section img-post">
                        <img src={e.photo} alt="foto"/>
                    </section>
                    <section className="last-post-section">
                        <div className="likes-container">
                            <Likes getData={getData} id={e._id} likesArray={likes} usuario={usuario}/>
                            { e.likes != 1 ? <p>{e.likes} <span>likes</span></p> : <p>{e.likes} like</p>}
                        </div>
                        <div className="post-title-section">
                            <Link to={`/post/${e._id}/single`}><h2 className="title-post text-center">{e.title}</h2></Link>
                        </div>
                    </section>
                    
                </article>
                })
            }
            </div>
        </main>
    } else {
        return <p>No</p>
    }


}


export default Profile
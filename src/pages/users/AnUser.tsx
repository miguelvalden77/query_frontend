// Hooks
import { useContext, useEffect, useState } from "react"

// Paquetes externos
import { Link, useParams } from "react-router-dom"

// Componentes
import Likes from "../../components/post/Likes"
import PersonalDescription from "../../components/user/PersonalDescription"
import ProfilePhoto from "../../components/user/ProfilePhoto"

// Interfaces
import { getAnUser } from "../../services/user.services"

// Servicios
import { post } from "../../interfaces/post.interfaces"
import user from "../../interfaces/context.interfaces"

// Recursos
import avatar from "../../assets/avatar.png"

// Service
import { likesArr } from "../../services/like.service"

// Components
import Follow from "../../components/user/Follow"
import { AuthContext } from "../../context/auth.context"



const AnUser = ():JSX.Element=>{

    const {id} = useParams()

    const {usuario} = useContext(AuthContext)

    const [user, setUser] = useState<user>()
    const [likes, setLikes] = useState<any>()

    useEffect(()=>{
        getTheUser()
    }, [])

    const getTheUser = async () =>{
        try{
            const response = await getAnUser(id)
            setUser(response.data)

            const likesArray = await likesArr(usuario?.id)
            console.log(likesArray)
            setLikes(likesArray)
        }
        catch(err){
            console.log(err)
        }
    }   

    return <main>
        {
            user && <div>
                <section className="info-container">
                    <ProfilePhoto photo={user.profilePhoto} userId={user._id} getData={getTheUser}/>
                    <div className="description-container">
                    <PersonalDescription info={user.personalDescription} userId={user._id} getData={getTheUser}/>
                    <Follow userId={id} id={usuario?._id} friendsArr={usuario?.friends}/>
                    </div>
                </section>
                <section className="main-profile">
                    {
                       user.posts ? user.posts?.map((e: post, index: number)=>{
                            return <article className="post-card profile-card" key={index}>

                            <section className="post-section author-post">
                                <div className="avatar-container">
                                    <img src={user?.profilePhoto ? user.profilePhoto : avatar} alt="avatar usuario" />
                                </div>
                                <p>{e.author.username}</p>
                            </section>
                            <section className="post-section img-post">
                                <img src={e.photo} alt="foto"/>
                            </section>
                            <section className="last-post-section">
                                <div className="likes-container">
                                    <Likes getData={getTheUser} id={e._id} likesArray={likes} usuario={user}/>
                                    { e.likes != 1 ? <p>{e.likes} <span>likes</span></p> : <p>{e.likes} like</p>}
                                </div>
                                <div className="post-title-section">
                                    <Link to={`/post/${e._id}/single`}><h2 className="title-post text-center">{e.title}</h2></Link>
                                </div>
                            </section>
                            
                        </article>
                       }) : <p>Hola</p>
                    }
                </section>
            </div>
        }
    </main>
}

export default AnUser
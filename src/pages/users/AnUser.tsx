// Hooks
import { useContext, useEffect, useState } from "react"

// Paquetes externos
import { Link, useNavigate, useParams } from "react-router-dom"

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
import Loader from "../../components/loader/Loader"
import UserInfo from "../../components/user/UserInfo"



const AnUser = (): JSX.Element => {

    const { id } = useParams()

    const { usuario } = useContext(AuthContext)
    const navigate = useNavigate()

    const [user, setUser] = useState<user>()
    const [likes, setLikes] = useState<any>()
    const [loader, setLoader] = useState<boolean>(true)

    useEffect(() => {
        getTheUser()
    }, [])

    const getTheUser = async () => {
        try {
            const response = await getAnUser(id)
            setUser(response.data)

            const likesArray = await likesArr(usuario?.id)
            setLikes(likesArray)

            setLoader(false)
        }
        catch (err) {
            navigate("/error")
        }
    }

    if (loader) {
        return <Loader />
    }

    return <main>
        {
            user && <div>
                <section className="info-container">
                    <ProfilePhoto photo={user.profilePhoto} userId={user._id} getData={getTheUser} />
                    <div className="description-container">
                        <UserInfo id={id!} />
                        {usuario?.id != user._id && <Follow userId={id} username={usuario?.username} />}
                        <PersonalDescription info={user.personalDescription} userId={user._id} getData={getTheUser} />
                    </div>
                </section>
                <section className="main-profile">
                    {
                        user.posts ? user.posts?.map((e: post, index: number) => {
                            return <article className="post-card profile-card" key={index}>

                                <section className="post-section author-post">
                                    <div className="avatar-container">
                                        <img src={user?.profilePhoto ? user.profilePhoto : avatar} alt="avatar usuario" />
                                    </div>
                                    <p>{e.author.username}</p>
                                </section>
                                <section className="post-section img-post">
                                    <img src={e.photo} alt="foto" />
                                </section>
                                <section className="last-post-section">
                                    <div className="likes-container">
                                        <Likes getData={getTheUser} id={e._id} likesArray={likes} usuario={user} />
                                        {e.likes != 1 ? <p>{e.likes} <span>likes</span></p> : <p>{e.likes} like</p>}
                                    </div>
                                    <div className="post-title-section">
                                        <Link to={`/post/${e._id}/single`}><h4 className="title-post text-center">{e.title}</h4></Link>
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
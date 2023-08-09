// Hooks
import { useEffect, useState, useContext } from "react"

// Paquetes externos
import { Link, useNavigate, useParams } from "react-router-dom"

// Context
import { AuthContext } from "../../context/auth.context"

// Component
import AddComment from "../../components/comments/AddComment"
import DeletePost from "../../components/post/DeletePost"
import UpdateComment from "../../components/comments/UpdateComment"
import Likes from "../../components/post/Likes"
import Loader from "../../components/loader/Loader"

// Services
import { getPost } from "../../services/post.services"
import { likesArr } from "../../services/like.service"

// Recursos
import avatar from "../../assets/avatar.png"
import DeleteComment from "../../components/comments/DeleteComment"

// Interfaces
import { comment } from "../../interfaces/comment.interfaces"
import { post } from "../../interfaces/post.interfaces"
import { getTimeAgo } from "../../utils/timeHelper"


const APost = (): JSX.Element => {

    const { usuario } = useContext(AuthContext)

    const navigate = useNavigate()

    const { id } = useParams()

    const [post, setPost] = useState<post>()
    const [comments, setComments] = useState<comment[]>()
    const [likes, setLikes] = useState<any>()
    const [loader, setLoader] = useState<boolean>(true)

    useEffect(() => {
        getData()
    }, [])

    const getAPost = async () => {
        const response = await getPost(id)
        setPost(response.data.post)
        setComments(response.data.comments)
    }

    const getData = async (): Promise<void> => {

        try {
            // Primero like para tener antes el dato
            const likesArray = await likesArr(usuario?.id)
            setLikes(likesArray)

            getAPost()
            setLoader(false)
        }
        catch (err) {
            navigate("/error")
        }

    }


    if (loader) {
        return <Loader />
    }

    return <main className="main-only-post" style={{ marginTop: "2.5rem" }}>
        {
            post && <article className="post-card">
                <section className="post-section author-post">
                    <div className="avatar-container">
                        <img src={post.author.profilePhoto ? post.author.profilePhoto : avatar} alt="avatar usuario" />
                    </div>
                    <Link to={`/user/${post.author._id}`}><p>{post.author.username}</p></Link>
                    <p style={{ marginLeft: "auto", paddingRight: "0.5rem" }}>Hace {getTimeAgo(post.createdAt)}</p>
                </section>
                <section className="post-section img-post">
                    <img src={post.photo} alt="foto" />
                </section>
                <section className="last-post-section">
                    <div className="likes-container">
                        <Likes getData={getData} id={post._id} likesArray={likes} usuario={usuario} />
                        {post.likes != 1 ? <p>{post.likes} <span>likes</span></p> : <p>{post.likes} <span>like</span></p>}
                    </div>
                    <div className="post-title-section">
                        <h4 className="title-post text-center">{post.title}</h4>
                    </div>
                </section>
                <section className="comment-section">
                    {
                        comments && comments.map((e: comment, index: number) => {
                            return <article key={index}>
                                <p className="comment"><b>{e.author.username}</b> {e.description} <small style={{ color: "grey", marginLeft: "0.75rem" }}>Hace {getTimeAgo(e.createdAt)}</small></p>
                                <section className="comment-container">
                                    {
                                        e.author._id == usuario?.id && <DeleteComment getData={getData} idComment={e._id} />
                                    }
                                    {
                                        e.author._id == usuario?.id && <UpdateComment getData={getData} idComment={e._id} description={e.description} />
                                    }
                                </section>
                            </article>
                        })
                    }
                </section>
                <section className="create-comment">
                    {post && <AddComment getData={getData} post={post._id} />}
                </section>
            </article>
        }
        {
            post?.author._id == usuario?.id && <DeletePost postId={post?._id} />
        }

    </main>
}

export default APost
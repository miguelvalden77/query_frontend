// Hooks
import { useEffect, useState, useContext } from "react"

// Paquetes externos
import { useNavigate, Link } from "react-router-dom"
import Likes from "../../components/post/Likes"

// Services
import { showAllPosts } from "../../services/post.services"

// Interfaces
import {post} from "../../interfaces/post.interfaces"

// Context
import { AuthContext } from "../../context/auth.context"
import { likesArr } from "../../services/like.service"

// Recursos
import avatar from "../../assets/avatar.png"
import Loader from "../../components/loader/Loader"


interface arrLikes {
    data: {
        _id: string,
        postsLike?: string[] | undefined
    }
}



const AllPosts = ():JSX.Element=>{

    const {usuario} = useContext(AuthContext)

    const navigate = useNavigate()

    const [posts, setPosts] = useState<post[] | null | undefined>(null)
    const [likes, setLikes] = useState<arrLikes | any>()
    const [loader, setLoader] = useState<boolean>(true)

    useEffect(()=>{
        getPosts()
    }, [])

    const getPosts = async ()=>{

        try{
            const likesArray = await likesArr(usuario?.id)
            setLikes(likesArray)

            const response = await showAllPosts()
            setPosts(response)
            console.log(response)
            setLoader(false)
        }
        catch(err){
            console.log(err)
            navigate("/error")
        }   
    }

    if(loader){
        return <Loader/>
    }

    return <main className="main-all-posts" style={{marginTop: "2rem"}}>

        {
            posts && posts.length > 0 ? posts.map((e: post, index: number)=>{
                return <article className="post-card" key={index}>
                    
                    <section className="post-section author-post">
                        <div className="avatar-container">
                            <img src={e.author.profilePhoto ? e.author.profilePhoto : avatar} alt="avatar usuario" />
                        </div>
                        <Link to={`/user/${e.author._id}`}><p>{e.author.username}</p></Link>
                    </section>
                    <section className="post-section img-post">
                        <img src={e.photo} alt="foto"/>
                    </section>
                    <section className="last-post-section">
                        <div className="likes-container">
                            <Likes getData={getPosts} id={e._id} likesArray={likes} usuario={usuario}/>
                            { e.likes != 1 ? <p>{e.likes} <span>likes</span></p> : <p>{e.likes} <span>like</span></p>}
                        </div>
                        <div className="post-title-section">
                            <Link to={`/post/${e._id}/single`}><h4 className="title-post text-center">{e.title}</h4></Link>
                        </div>
                        <div>
                            <small>{e.comments.length} comments</small>
                        </div>
                    </section>
                    
                </article>
            }): null
        }
    </main>

}

export default AllPosts
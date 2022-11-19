// Hooks
import { useEffect, useState, useContext } from "react"

// Paquetes externos
import { useNavigate, Link } from "react-router-dom"
import Likes from "../../components/post/Likes"

// Services
import { showAllPosts } from "../../services/post.services"

// Interfaces
import post from "./interfaces.post"

// Context
import { AuthContext } from "../../context/auth.context"
import user from "../../context/interfaces.context"
import { verifyService } from "../../services/auth.services"
import { likesArr } from "../../services/like.service"



const AllPosts = ():JSX.Element=>{

    const {usuario} = useContext(AuthContext)

    const navigate = useNavigate()

    const [posts, setPosts] = useState<post[] | null>(null)
    const [likes, setLikes] = useState<any>()

    useEffect(()=>{
        getPosts()
    }, [])

    const getPosts = async ()=>{

        try{
            const likesArray = await likesArr(usuario?.id)
            setLikes(likesArray)

            const response = await showAllPosts()
            setPosts(response.data)
        }
        catch(err){
            console.log(err)
            navigate("/error")
        }   
    }

    return <main className="main-all-posts">

        {
            posts && posts.map((e, index)=>{
                return <article className="post-card" key={index}>

                    <section className="post-section author-post">
                        <p>{e.author.username}</p>
                    </section>
                    <section className="post-section img-post">
                        <img src={e.photo} alt="foto"/>
                    </section>
                    <section className="last-post-section">
                        <div className="likes-container">
                            <Likes getData={getPosts} id={e._id} likes={e.likes} likesArray={likes} usuario={usuario}/>
                            <p>{e.likes}</p>
                        </div>
                        <div className="post-title-section">
                            <Link to={`/post/${e._id}/single`}><h2 className="title-post text-center">{e.title}</h2></Link>
                        </div>
                    </section>
                    
                </article>
            })
        }
    </main>

}

export default AllPosts
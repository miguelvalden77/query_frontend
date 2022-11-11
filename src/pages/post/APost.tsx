import { useEffect, useState, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import AddComment from "../../components/comments/AddComment"
import { AuthContext } from "../../context/auth.context"
import { deleteComment } from "../../services/comment.services"
import { deletePost, getPost } from "../../services/post.services"

interface comment {
    description: string,
    author: {
        username: string
    }
}


const APost = ():JSX.Element =>{

    const {usuario} = useContext(AuthContext)

    const navigate = useNavigate()
    
    const {id} = useParams()
    
    const [post, setPost] = useState<any>()
    const [comments, setComments] = useState<any>()
    
    useEffect(()=>{
        getData()
    },[])
    

    const getData = async ():Promise<void>=>{

        try{
            const response = await getPost(id)

            setPost(response.data.post)
            setComments(response.data.comments)
        }
        catch(err){
            console.log(err)
        }

    }

    const handleDelete = async (id: string)=>{

        try{
            await deleteComment(id)  
            getData()          
        }
        catch(err){
            console.log(err)
        }
    }

    const handleDeletePost = async (id: string)=>{
        try{
            await deletePost(id)
            navigate("/allPosts")
        }
        catch(err){
            console.log(err)
        }
    }

    return <main>
        {
            post && <article>
                <h2>{post.title}</h2>
                <img src={post.photo} alt="foto" width={200}/>
                <p>{post.author.username}</p>
            </article>
        }
        {
            post?.author._id == usuario?.id && <button onClick={()=>handleDeletePost(post._id)}>Delete post</button>
        }

        {
            comments?.length > 0 ?
            <section>
                {
                    comments && comments.map((e: any, index: any)=>{
                        return <article key={index}>
                            <p><span>{e.author.username}:</span> {e.description}</p>
                            {
                                e.author._id == usuario?.id && <button onClick={()=>handleDelete(e._id)}>Delete</button>
                            }
                        </article>
                    })
                }
            </section>
            :
            <p>No hay comentarios</p>
        }

        {
            post && <AddComment post={post._id}/>
        }
    </main>
}

export default APost
import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import AddComment from "../../components/comments/AddComment"
import { AuthContext } from "../../context/auth.context"
import { getPost } from "../../services/post.services"

interface comment {
    description: string,
    author: {
        username: string
    }
}


const Hola = ():JSX.Element =>{

    const {usuario} = useContext(AuthContext)
    
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

    return <main>
        {
            post && <article>
                <h2>{post.title}</h2>
                <img src={post.photo} alt="foto" width={200}/>
            </article>
        }
        {
            comments?.length > 0 ?
            <section>
                {
                    comments && comments.map((e: any, index: any)=>{
                        return <article key={index}>
                            <p><span>{e.author.username}: </span> {e.description}</p>
                            {
                                e.author._id == usuario?.id && <button>Delete</button>
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

export default Hola
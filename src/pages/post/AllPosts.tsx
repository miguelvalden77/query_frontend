import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import AddComment from "../../components/comments/AddComment"
import { showAllPosts } from "../../services/post.services"
import post from "./interfaces.post"



const AllPosts = ():JSX.Element=>{

    const navigate = useNavigate()

    const [posts, setPosts] = useState<post[] | null>(null)

    useEffect(()=>{
        getPosts()
    }, [])

    const getPosts = async ()=>{

        try{
            const response = await showAllPosts()
            setPosts(response.data)
        }
        catch(err){
            console.log(err)
            navigate("/error")
        }   
    }

    return <main>
        <p>All posts</p>
        {
            posts && posts.map((e, index)=>{
                return <div key={index}>
                    <article>
                    <h2>{e.title}</h2>
                    <img src={e.photo} alt="foto" width={200} height={200}/>
                    <p>{e.author.username}</p>
                    
                </article>
                    {
                        e.comments && e.comments.map((e, index)=>{
                            return <p key={index}>{e.description}</p>
                        })
                    }
                    <AddComment author={e.author._id} post={e._id}/>
                </div>
            })
        }
    </main>

}

export default AllPosts
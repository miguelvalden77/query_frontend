import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
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
                return <article key={index}>
                    <h2>{e.title}</h2>
                    <img src={e.photo} alt="foto" width={200} height={200}/>
                    <p>{e.author.username}</p>
                </article>
            })
        }
    </main>

}

export default AllPosts
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import AddComment from "../../components/comments/AddComment"
import { getPost } from "../../services/post.services"



const SinglePost = ():JSX.Element =>{

    const {id} = useParams()

    const [post, setPost] = useState<any>()

    useEffect(()=>{
        getData()
    },[])

    const getData = async ():Promise<void>=>{

        try{
            const post = await getPost(id)
            console.log(post)
            setPost(post)
        }
        catch(err){
            console.log(err)
        }

    }

    return <main>
        <p>Hola</p>
        
        <AddComment author={post._id} post={id}/>
        
    </main>
}

export default SinglePost
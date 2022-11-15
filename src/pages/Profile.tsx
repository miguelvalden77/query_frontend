// Hooks
import { useContext, useEffect, useState } from "react"

// Context
import { AuthContext } from "../context/auth.context"
import { getUserPosts, showAllPosts } from "../services/post.services"



const Profile = ():JSX.Element=>{

    const {usuario, isUserActive} = useContext(AuthContext)

    const [posts, setPosts] = useState<any>()

    useEffect(()=>{
        getData()
    }, [])

    const getData = async ()=>{
        try{
            const response = await getUserPosts(usuario?.id)
            console.log(response)
            setPosts(response.data)
        }
        catch(err){
            console.log(err)
        }
    }

    if(isUserActive == true){
        return <main>
            <p>Profile</p>
            {usuario && <p>{usuario?.username}</p>}
            {
                posts && posts.posts.map((e: any)=>{
                    return <article>
                        <img src={e.photo} width={200} alt="g" />
                        <p>{e.title}</p>
                    </article>
                })
            }
        </main>
    } else {
        return <p>No</p>
    }


}


export default Profile
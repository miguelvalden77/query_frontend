import { useState } from "react"

interface propsFollow {
    userId: string | undefined,
    id: string | undefined,
    friendsArr: string[] | undefined
}

const Follow = ({userId, id, friendsArr}: propsFollow):JSX.Element =>{

    const [isFollowed, setIsFollowed] = useState<boolean>()
    const [loader, setLoader] = useState<boolean>(true)

    const handleFollow = async ()=>{
        try{

            if(userId && friendsArr?.includes(userId)){
                console.log("Lo sigues")
                setIsFollowed(true)
                setLoader(false)
                return
            }

            console.log("No lo sigues")
            setIsFollowed(false)
            setLoader(false)

        }
        catch(err){
            console.log(err)
        }
    }

    if(loader == true){
        return <p>Hola</p>
    } else{

        return <button onClick={handleFollow}>{isFollowed == true ? "unfollow" : "follow"}</button>
    }
}

export default Follow
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/auth.context"
import user from "../context/interfaces.context"


const Profile = ():JSX.Element=>{

    const {usuario, isUserActive} = useContext(AuthContext)
    const [user, setUser] = useState<user | null |undefined>()

    useEffect(()=>{
        setUser(usuario)
    }, [])

    return <main>
        <p>Profile</p>
        {user && <p>{user.username}</p>}
    </main>

}


export default Profile
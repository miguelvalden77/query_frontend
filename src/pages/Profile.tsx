import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/auth.context"
import user from "../context/interfaces.context"


const Profile = ():JSX.Element=>{

    const {usuario, isUserActive} = useContext(AuthContext)


    if(isUserActive == true){
        return <main>
            <p>Profile</p>
            {usuario && <p>{usuario?.username}</p>}
        </main>
    } else {
        return <p>No</p>
    }


}


export default Profile
// Hooks
import { useContext, useEffect, useState } from "react"

// Context
import { AuthContext } from "../context/auth.context"



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
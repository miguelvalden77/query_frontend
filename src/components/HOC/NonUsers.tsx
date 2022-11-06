// Hooks
import { useContext } from "react"

// Context
import { AuthContext } from "../../context/auth.context"

// Paquetes externos
import { Navigate } from "react-router-dom"



const NonUsers = ({children}:any):JSX.Element=>{

    const {isUserActive} = useContext(AuthContext)

    if(isUserActive === false){
        return children
    } else{
        return <Navigate to={"/profile"}/>
    }

}

export default NonUsers
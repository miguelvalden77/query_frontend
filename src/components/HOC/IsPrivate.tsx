// Hooks
import { useContext, useEffect } from "react" 

// Context
import { AuthContext } from "../../context/auth.context"

// Paquetes externos
import { Navigate, useNavigate } from "react-router-dom"

// interface props {
//     children: JSX.Element | null | undefined
// }



const isPrivate =({children} :  any): JSX.Element | any =>{

    const {isUserActive} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(()=>{

        if(isUserActive !== true) navigate("/login")

    }, [])

    if(isUserActive === true){
        return children
    }


}

export default isPrivate
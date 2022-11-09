// Hooks
import {createContext, useEffect, useState} from "react"
import { verifyService } from "../services/auth.services"

// Interface
import user from "./interfaces.context"
import props from "./interfaces.context"

interface contexto {
    usuario: user | null | undefined,
    isUserActive: boolean | null | undefined,
    authenticateUser: ()=> Promise<void>
}

const AuthContext = createContext({} as contexto)


function AuthWrapper({children}: props){

    const [isUserActive, setIsUserActive] = useState<boolean>()
    const [usuario, setUsuario] = useState<user | null>()

    useEffect(()=>{
        authenticateUser()
    },[])

    const authenticateUser = async (): Promise<void>=>{

        try{
            
            const response = await verifyService()

            setIsUserActive(true)
            setUsuario(response.data)

        }
        catch(err){

            console.log(err)
            setIsUserActive(false)
            setUsuario(null)

        }

    }

    const passedContext = {usuario, isUserActive, authenticateUser, setIsUserActive, setUsuario}

    return <AuthContext.Provider value={passedContext}>
        {children}
    </AuthContext.Provider>

}


export {AuthContext, AuthWrapper}
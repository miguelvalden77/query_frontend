// Hooks
import { createContext, useEffect, useState } from "react"
import { verifyService } from "../services/auth.services"

// Interface
import user from "../interfaces/context.interfaces"
import props from "../interfaces/context.interfaces"

interface contexto {
    usuario: user | null | undefined,
    isUserActive: boolean | null | undefined,
    authenticateUser: () => Promise<void>,
    setUsuario: Function
}

const AuthContext = createContext({} as contexto)


function AuthWrapper({ children }: props) {

    const [isUserActive, setIsUserActive] = useState<boolean>()
    const [usuario, setUsuario] = useState<user | null>()

    useEffect(() => {
        authenticateUser()
    }, [])

    const authenticateUser = async (): Promise<void> => {

        try {

            const response = await verifyService()
            setIsUserActive(true)
            setUsuario(response.data)
            console.log("Ejectando¡¡¡")

        }
        catch (err) {

            console.log(err)
            setIsUserActive(false)
            setUsuario(null)

        }

    }

    const passedContext = { usuario, isUserActive, authenticateUser, setIsUserActive, setUsuario }

    return <AuthContext.Provider value={passedContext}>
        {children}
    </AuthContext.Provider>

}


export { AuthContext, AuthWrapper }
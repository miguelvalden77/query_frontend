// Hooks
import { ChangeEvent, useState } from "react"

// Paquetes externos
import {useNavigate} from "react-router-dom"

// Interfaces
import data from "./interfaces/auth.interfaces"
import userLogged from "../../services/interfaces/services.interfaces"


// Services
import {loginUser} from "../../services/auth.services"





const Login = ():JSX.Element =>{

    const navigate = useNavigate()

    const [data, setData] = useState<data>({username: "", password: ""})
    const [error, setError] = useState<string>()

    const handleChange = (e: ChangeEvent<HTMLInputElement>)=> setData({...data, [e.target.name]: e.target.value})
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        
        e.preventDefault()
        const usuario: userLogged = {username: data.username, password: data.password}

        try{

            await loginUser(usuario)
            navigate("/profile")

        }catch(err: any){

            if(err.response.status == 400){
                setError(err.response.data.errorMessage)
                console.log(err.response.data.errorMessage)
            } else{
                console.log(err)
                navigate("/error")
            }

        }

    }

    return <main>
        {
            error && <p>{error}</p>
        }
        <section>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input onChange={handleChange} value={data.username} name="username" type="text" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input onChange={handleChange} value={data.password} name="password" type="password" />
                </div>

                <button>Login</button>
            </form>
        </section>
    </main>

}

export default Login
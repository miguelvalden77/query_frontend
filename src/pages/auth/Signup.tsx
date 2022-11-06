// Hooks
import { useState } from "react"

// Paquetes externos
import { useNavigate } from "react-router-dom"

// Interfaces
import data from "./interfaces/auth.interfaces"
import newUser from "../../services/interfaces/services.interfaces"

// Services
import { registerUser } from "../../services/auth.services"


const Signup = ():JSX.Element =>{

    const navigate = useNavigate()

    const [data, setData] = useState<data>({username: "", password: "", email: ""})
    const [error, setError] = useState<string>()
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> setData({...data, [e.target.name]: e.target.value})

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{

        e.preventDefault()
        const user: newUser  = {username: data.username, email: data.email, password: data.password}

        try{

            await registerUser(user)
            navigate("/login")

        }
        catch(err: any){

            if(err.response.status == 400){
                setError(err.response.data.errorMessage)
            }else{
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
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChange} value={data.email} name="email" type="text" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input onChange={handleChange} value={data.password} name="password" type="password" />
                </div>

                <button>Sign up!</button>
            </form>
        </section>
    </main>

}

export default Signup
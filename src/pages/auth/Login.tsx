// Hooks
import { ChangeEvent, ChangeEventHandler, useState } from "react"

// Interfaces
interface data{
    username: string,
    password: string
}


const Login = ():JSX.Element =>{

    const [data, setData] = useState<data>({username: "", password: ""})


    const handleChange = (e: ChangeEvent<HTMLInputElement>)=> setData({...data, [e.target.name]: e.target.value})

    return <main>
        <section>
            <form action="#">
                <div>
                    <label htmlFor="username">Username</label>
                    <input onChange={handleChange} value={data.username} name="username" type="text" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input onChange={handleChange} value={data.password} name="password" type="password" />
                </div>
            </form>
        </section>
    </main>

}

export default Login
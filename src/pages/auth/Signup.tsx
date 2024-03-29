// Hooks
import { useState } from "react"

// Paquetes externos
import { NavLink, useNavigate } from "react-router-dom"

// Interfaces
import data from "../../interfaces/auth.interfaces"
import newUser from "../../interfaces/interfaces"

// Services
import { registerUser } from "../../services/auth.services"


const Signup = (): JSX.Element => {

    const navigate = useNavigate()

    const [data, setData] = useState<data>({ username: "", password: "", email: "" })
    const [error, setError] = useState<string>()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, [e.target.name]: e.target.value })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        const user: newUser = { username: data.username, email: data.email, password: data.password }

        try {

            await registerUser(user)
            navigate("/login")

        }
        catch (err: any) {

            if (err.response.status == 400) {
                setError(err.response.data.errorMessage)
            } else {
                navigate("/error")
            }

        }

    }

    return <main className="flex-center flex-column" style={{ marginTop: "2.5rem" }}>
        <section className="auth-card m-auto">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="t-center">Query</h2>
                <section className="inputs-auth">
                    <div>
                        <input className="input-auth" placeholder="username" onChange={handleChange} value={data.username} name="username" type="text" />
                    </div>

                    <div>
                        <input className="input-auth" placeholder="correo" onChange={handleChange} value={data.email} name="email" type="text" />
                    </div>

                    <div>
                        <input className="input-auth" placeholder="contraseña" onChange={handleChange} value={data.password} name="password" type="password" />
                    </div>

                    <button className="auth-button">Regístrate</button>
                </section>

                <small className="t-center">¿Ya tienes una cuenta? <NavLink to={"/login"}>Entra</NavLink></small>
            </form>
        </section>
        {
            error && <small className="errorMessage t-center">{error}</small>
        }
    </main>

}

export default Signup
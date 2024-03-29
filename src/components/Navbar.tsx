// Paquetes externos
import {NavLink, useNavigate} from "react-router-dom"
import { useMediaQuery } from "react-responsive"

// Hooks
import { useContext, useRef, useState } from "react"

// Context
import { AuthContext } from "../context/auth.context"

// Recursos
import Logo from "../assets/icon.png"
import Logout from "../assets/logout.png"


const Navbar = ():JSX.Element=>{

    const navigate = useNavigate()
    const isDesktop = useMediaQuery({query: "(min-width: 960px)"})
    const {isUserActive, authenticateUser} = useContext(AuthContext)

    const handleLogout = ()=>{

        localStorage.removeItem("authToken")
        authenticateUser()
        navigate("/")

    }


    if(isUserActive){ 
        return <section>
            <nav className="main-navbar">
                <NavLink to={"/profile"}><img width={30} src={Logo} alt="logo"/></NavLink>
                <section className="nav-container">
                    <NavLink to={"/chat"}>Chat</NavLink>
                    <NavLink to={"/users/search"}>Usuarios</NavLink>
                    <NavLink to={"/allPosts"}>Publicaciones</NavLink>
                    <NavLink to={"/post/create"}>Publicar</NavLink>
                    <img className="logout" onClick={handleLogout} src={Logout} alt="logout" width={17}/>
                </section>
            </nav>
        </section>

    } else{
    return <section className="navbar-section">
        <nav className="main-navbar">
            <NavLink to={"/"}><img width={30} src={Logo} alt="logo"/></NavLink>
            <section className="nav-container">
                <NavLink to={"/login"}>Entra</NavLink>
                <NavLink to={"/signup"}>Regístrate</NavLink>
            </section>
        </nav>
    </section>
    }


}


export default Navbar
// Paquetes externos
import {NavLink, useNavigate} from "react-router-dom"

// Hooks
import { useContext } from "react"

// Context
import { AuthContext } from "../context/auth.context"


const Navbar = ():JSX.Element=>{

    const navigate = useNavigate()

    const {isUserActive, authenticateUser} = useContext(AuthContext)

    const handleLogout = ()=>{

        localStorage.removeItem("authToken")
        authenticateUser()
        navigate("/")

    }


    if(isUserActive){
        return <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
        <NavLink to={"/allPosts"}>All posts</NavLink>
        <NavLink to={"/post/create"}>Create post</NavLink>
        <button onClick={handleLogout}>Logout</button>
    </nav>
    } else{
        return <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/signup"}>Signup</NavLink>
    </nav>
    }


}


export default Navbar
// Paquetes externos
import {NavLink} from "react-router-dom"


const Navbar = ():JSX.Element=>{

    return <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
        <NavLink to={"/allPosts"}>All posts</NavLink>
    </nav>

}


export default Navbar
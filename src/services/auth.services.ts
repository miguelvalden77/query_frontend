// Service
import service from "./config.service";

// Interfaces
import newUser from "../interfaces/interfaces";
import userLogged from "../interfaces/interfaces"


const registerUser = (newUser: newUser)=>{
    return service.post("/auth/signup", newUser)
}

const loginUser = (user: userLogged)=>{
    return service.post("/auth/login", user)
}

const verifyService = ()=>{
    return service.get("/auth/verify")
}

export {registerUser, loginUser, verifyService}
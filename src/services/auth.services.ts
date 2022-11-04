// Service
import service from "./config.service";

// Interfaces
import newUser from "./interfaces/services.interfaces";
import user from "./interfaces/services.interfaces"


const registerUser = (newUser: newUser)=>{
    return service.post("/auth/signup", newUser)
}

const loginUser = (user: user)=>{
    return service.post("/auth/login", user)
}

const verifyService = (token: any)=>{
    return service.get("/auth/verify", token)
}

export {registerUser, loginUser, verifyService}
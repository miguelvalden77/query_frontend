// Service
import service from "./config.service";

interface personalInfo {
    userDescription: string
}

const changePersonalDescription = (personalInfo: personalInfo, userId: string | undefined)=>{
    return service.post(`/user/userDescription/${userId}`, personalInfo)
}

const getPersonalDescription = (userId: string | undefined)=>{
    return service.get(`/user/personalDescription/${userId}`)
}

export {changePersonalDescription, getPersonalDescription}
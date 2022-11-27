// Service
import service from "./config.service";

interface personalInfo {
    userDescription: string
}

interface urlImg {
    url: string
}

const changePersonalDescription = (personalInfo: personalInfo, userId: string | undefined)=>{
    return service.post(`/user/userDescription/${userId}`, personalInfo)
}

const getPersonalDescription = (userId: string | undefined)=>{
    return service.get(`/user/personalDescription/${userId}`)
}

const setImgProfile = (userId: string | undefined, url: urlImg) =>{
    return service.post(`/user/${userId}/profilePhoto`, url)
}

export {changePersonalDescription, getPersonalDescription, setImgProfile}
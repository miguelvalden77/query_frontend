// Service
import { Axios } from "axios";
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

const getSearchUsers = (username: string | undefined): Promise<any> =>{
    return service.get(`/user/${username}/all`)
}

const getAnUser = (userId: string | undefined):Promise<any>=>{
    return service.get(`/user/${userId}`)
}

const addUser = (userId: string | undefined, id: string | undefined):Promise<any>=>{
    return service.post(`/user/add/${userId}`, id)
}

const substractUser = (userId: string | undefined, id: string | undefined):Promise<any>=>{
    return service.post(`/user/add/${userId}`, id)
}

export {
    changePersonalDescription, 
    getPersonalDescription, 
    setImgProfile, 
    getSearchUsers, 
    getAnUser,
    addUser,
    substractUser
}
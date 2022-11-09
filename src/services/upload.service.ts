import service from "./config.service"

const upload = (img:string)=>{
    return service.post("/uploader", img)
}

export {upload}
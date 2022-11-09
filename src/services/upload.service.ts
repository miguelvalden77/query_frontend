import service from "./config.service"

const upload = (img:any)=>{
    return service.post("/uploader", img)
}

export {upload}
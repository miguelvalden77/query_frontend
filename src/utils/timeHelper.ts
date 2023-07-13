

export const timeHelper = (time: string) =>{

    let fecha = new Date(time)
    return `${fecha.getHours()}:${(fecha.getMinutes() < 10 ) ? 0 : ""}${fecha.getMinutes()}`
}


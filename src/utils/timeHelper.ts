

export const timeHelper = (time: string): string => {

    let fecha = new Date(time)
    return `${fecha.getHours()}:${(fecha.getMinutes() < 10) ? 0 : ""}${fecha.getMinutes()}`
}

export const getTimeAgo = (time: string) => {

    const fecha = new Date(time).getTime()
    const ahora = Date.now();

    const diferencia = ahora - fecha

    if (diferencia < 60000) {
        return `${Math.floor(diferencia / 1000)} segundos`;
    } else if (diferencia < 3600000) {
        return `${Math.floor(diferencia / 60000)} minutos`;
    } else if (diferencia < 86400000) {
        return `${Math.floor(diferencia / 3600000)} horas`;
    } else if (diferencia < 2592000000) {
        return `${Math.floor(diferencia / 86400000)} días`;
    } else if (diferencia < 31536000000) {
        return `${Math.floor(diferencia / 2592000000)} meses`;
    } else {
        return `${Math.floor(diferencia / 31536000000)} años`;
    }

}

export const setDayIfDifferent = (messageDate: string): string => {

    const fecha = new Date(messageDate)

    return `${fecha.getDate()}/${fecha.getMonth() + 1}`
}

const getTheMonth = (number: number): string => {

    switch (number) {
        case 0:
            return "Enero"
        case 1:
            return "Febrero"
        case 2:
            return "Marzo"
        case 3:
            return "Abril"
        case 4:
            return "Mayo"
        case 5:
            return "Junio"
        case 6:
            return "Julio"
        case 7:
            return "Agosto"
        case 8:
            return "Septiembre"
        case 9:
            return "Octubre"
        case 10:
            return "Noviembre"
        case 11:
            return "Diciembre"

        default: return ""
    }

}
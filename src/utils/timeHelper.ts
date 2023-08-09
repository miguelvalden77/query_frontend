

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

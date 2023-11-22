export const convertTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    let seconds = (time % 60).toString()
    if (+seconds < 10) seconds = '0' + seconds

    return `${minutes}:${seconds}`
}

export const getFromLocalStorage = async (key: string) => {
    if (!key || typeof window === 'undefined') {
        return ''
    }
    return localStorage.getItem(key)
}

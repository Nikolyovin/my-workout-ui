export const convertTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    let seconds = (time % 60).toString()
    if (+seconds < 10) seconds = '0' + seconds

    return `${minutes}:${seconds}`
}

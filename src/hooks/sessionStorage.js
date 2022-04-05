export const getSessionStorage = () => {
    const loguedStorage = sessionStorage.getItem('loguin')
    if(loguedStorage === null){
        return undefined
    }
    return JSON.parse(loguedStorage)
}

export const saveSessionStorage = (state) => {
    const loguedState = JSON.stringify(state)
    sessionStorage.setItem('loguin', loguedState)
}
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { getSessionStorage, saveSessionStorage } from "../hooks/sessionStorage";

const configureStore = () => {
    const middlewares = [thunk]
    const composeEnhacers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
    const enhacers = composeEnhacers(applyMiddleware(...middlewares))

    const storageState = getSessionStorage()

    const store = createStore(
        rootReducer(), 
        storageState,
        enhacers)

    store.subscribe(() => {
        saveSessionStorage({
            login: store.getState().login
        })
    })

    return store
}

export default configureStore
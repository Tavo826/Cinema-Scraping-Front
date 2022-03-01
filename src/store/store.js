import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const configureStore = () => {
    const middlewares = [thunk]
    const composeEnhacers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
    const enhacers = composeEnhacers(applyMiddleware(...middlewares))

    const store = createStore(rootReducer(), enhacers)

    return store
}

export default configureStore
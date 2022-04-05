import { combineReducers } from "redux";
import cinemaReducer from "../reducers/cinemaReducer";
import authReducer from "../reducers/authReducer";
import registerReducer from "../reducers/registerReducer";

const rootReducer = () => {
    return combineReducers(
        {
            cinema: cinemaReducer,
            login: authReducer,
            register: registerReducer
        }
    )
}

export default rootReducer
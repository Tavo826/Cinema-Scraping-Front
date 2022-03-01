import { combineReducers } from "redux";
import CinemaReducer from "../reducers/CinemaReducer";

const rootReducer = () => {
    return combineReducers(
        {
            cinema: CinemaReducer
        }
    )
}

export default rootReducer
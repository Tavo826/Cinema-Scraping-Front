import registerTypes from "../types/registerTypes";

const registerReducer = (state = {}, action) => {

    switch (action.type) {
        
        case registerTypes.REGISTERED:
            return {
                uid: action.payload.name,
                email: action.payload.email,
                password: action.payload.password
            }

        default:
            return state;
    }
}

export default registerReducer
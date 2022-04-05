import authTypes from '../types/authTypes';

const authReducer = (state = {}, action) => {
    
    switch (action.type) {

        case authTypes.LOGIN:
            return {
                uid: action.payload.uid,
                displayName: action.payload.displayName,
                photoURL: action.payload.photoURL,
                email: action.payload.email,
                providerId: action.payload.providerId
            }

        case authTypes.LOGOUT:
            return {}

        default:
            return state;
    }
}

export default authReducer
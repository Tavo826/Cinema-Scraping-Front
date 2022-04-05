import { getAuth, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { googleAuth } from "../services/firebase";
import authTypes from "../types/authTypes";
import { LoadSuccess } from "./actions";

const authentication = getAuth()

export const loginGoogle = () => {
    
    return (dispatch) => {
        signInWithPopup (
            authentication,
            googleAuth
        )
        .then(({user}) => {
            const data = user.providerData[0]
            dispatch(loginSincrono(user.uid, data.displayName, data.photoURL, data.email, data.providerId))
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const loginEmailPassword = (email, password) => {
    
    return (dispatch) => {
        signInWithEmailAndPassword(
            authentication,
            email,
            password
        )
        .then(({user}) => {
            const data = user.providerData[0]
            dispatch(loginSincrono(user.uid, data.displayName, data.photoURL, data.email, data.providerId))
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const loginSincrono = (uid, displayName, photoURL, email, providerId) => {
    
    return {
        type: authTypes.LOGIN,
        payload: {
            uid,
            displayName,
            photoURL,
            email,
            providerId
        }
    }
}

export const logout = () => {
    
    return (dispatch) => {
        signOut(authentication)
        .then(user => {
            dispatch(logoutSincrono())
            dispatch(LoadSuccess({}))
            sessionStorage.clear()
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const logoutSincrono = () => {
    
    return {
        type: authTypes.LOGOUT,
    }
}
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import registerTypes from "../types/registerTypes";
import { loginSincrono } from "./authAction";

export const registerEmailPasswordName = (email, password, name) => {
    
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        .then( async({user}) => {
            await updateProfile(
                auth.currentUser,
                {
                    displayName: name
                }
            )
            dispatch(registerSincrono(user.uid, user.displayName, user.email))
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const registerSincrono = (name, email, password) => {

    return {
        type: registerTypes.REGISTERED,
        payload: {
            name,
            email,
            password
        }
    }
}

export const editName = (uid, displayName, photoURL, email, providerId) => {

    return (dispatch) => {
        const auth = getAuth()

        updateProfile(auth.currentUser, {
            displayName: displayName
        })
        .then(() => {
            dispatch(loginSincrono(uid, displayName, photoURL, email, providerId))
        })
        .catch(error => {
            console.log(error)
        })
    }
}
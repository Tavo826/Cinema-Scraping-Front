import actionTypes from "../types/types";
import axios from "axios";

export const getCinema = () => (dispatch) => {
    dispatch(Loading())

    const requestConfig = {
        method: 'GET',
        url: 'http://localhost:8080/api/cinema'
    }

    axios.request(requestConfig).then(function (response) {
        dispatch(LoadSuccess(response.data))
    }).catch(function (error) {
        dispatch(LoadError(error))
    })

}

export const scrapMovies = () => (dispatch) => {
    dispatch(Loading())

    const requestConfig = {
        method: 'POST',
        url: 'http://localhost:8080/api/cinema/scrapmovies',
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify({type: "sofka.cinema.create"})
    }

    axios.request(requestConfig).then(function (response) {
        setTimeout(() => {            
            dispatch(getCinema())
        }, 30000)
    }).catch(function (error) {
        dispatch(LoadError(error))
    })   

}


export const Loading = () => {
    return {
        type: actionTypes.LOADING_SUCCESS
    }
}

export const LoadSuccess = (cinema) => {
    return {
        type: actionTypes.LOAD_SUCCESS,
        payload: cinema
    }
}

export const LoadError = (error) => {
    return {
        type: actionTypes.LOAD_FAILURE,
        payload: error
    }
}
import actionTypes from "../types/types";
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/cinema";

export const createCinema = (cinema) => (dispatch) => {
    dispatch(Loading())

    const requestConfig = {
        method: "POST",
        url: `${BASE_URL}/create`,
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(cinema)
    }

    axios.request(requestConfig).then(response => {
        dispatch(LoadSuccess(response.data))
    }).catch(error => {
        dispatch(LoadError(error.message))
    })
}

export const getCinema = (id) => (dispatch) => {
    dispatch(Loading())

    const requestConfig = {
        method: 'GET',
        url: `${BASE_URL}/${id}`,
    }

    axios.request(requestConfig).then(function (response) {
        dispatch(LoadSuccess(response.data))
    }).catch(function (error) {
        dispatch(LoadError(error))
    })

}

export const scrapMovies = (scrap) => (dispatch) => {
    dispatch(Loading())

    const requestConfig = {
        method: 'POST',
        url: `${BASE_URL}/addMovies`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(scrap)
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
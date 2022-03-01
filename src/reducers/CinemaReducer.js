import actionTypes from "../types/types";

const initialState = {
    isLoading: false,
    movies: null,
    error: null,
  }
  
  const CinemaReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case actionTypes.LOADING_SUCCESS:
        return {
          ...state,
          isLoading: true
        }
      case actionTypes.LOAD_SUCCESS:
        return {
          ...state,
          isLoading: false,
          movies: payload
        }
      case actionTypes.LOAD_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: payload
        }
  
      default: return state
    }
  }
  
  export default CinemaReducer
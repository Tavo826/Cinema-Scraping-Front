import actionTypes from "../types/types";

const initialState = {
    isLoading: false,
    cinema: {},
    error: null,
  }
  
  const cinemaReducer = (state = initialState, { type, payload }) => {
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
          cinema: payload
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
  
  export default cinemaReducer
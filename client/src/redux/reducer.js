import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY,
  CLEAR_COUNTRY,
} from './actions.js';

const initialState = {
  countries: [],
  country: {}
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      }
    case GET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      }
    case CLEAR_COUNTRY:
      return {
        ...state,
        country: {},
      }
    default:
      return { ...state }
  };
};

export default rootReducer;
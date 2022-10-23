import {
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_BY_NAME,
  GET_COUNTRY,
  CLEAR_COUNTRY,
  SAVE_FILTERS,
} from './actions.js';

const initialState = {
  countries: [],
  country: {},
  filters: {},
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      }
    case GET_COUNTRIES_BY_NAME:
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
      case SAVE_FILTERS:
        return {
          ...state,
          filters: action.payload,
        }

    default:
      return { ...state }
  };
};

export default rootReducer;
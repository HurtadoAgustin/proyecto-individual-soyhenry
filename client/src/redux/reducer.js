import { initialState } from '../utils/initialObjects.js';
import {
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_BY_NAME,
  GET_COUNTRY,
  CLEAR_COUNTRY,
  SAVE_FILTERS,
} from './actions.js';

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload.map(el => { return {
          id: el.id,
          name: el.name,
        }}),
        countries: action.payload,
        continents: [...new Set(action.payload.map(el => el.continent))],
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
import { INITIAL_STATE } from '../utils/initialObjects.js';
import {
  GET_ALL_COUNTRIES,
  GET_COUNTRIES,
  GET_COUNTRY_DETAIL,
  CLEAR_COUNTRY_DETAIL,
  SAVE_FILTERS,
  POST_ACTIVITY,
  SAVE_ERROR,
  CLEAR_ERROR,
} from './actions.js';

const rootReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {

    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload.map(el => { return {
          id: el.id,
          name: el.name,
          flag: el.flag,
        }})
      }

    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        continents: [...new Set(action.payload.map(el => el.continent))],
      }

    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        countries: action.payload,
      }
      
    case CLEAR_COUNTRY_DETAIL:
      return {
        ...state,
        country: {},
      }

    case SAVE_FILTERS:
      return {
        ...state,
        filters: action.payload,
      }

    case POST_ACTIVITY:
      return {
        ...state,
        //status change
      }

    case SAVE_ERROR:
      return {
        ...state,
        error: action.payload,
      }

    case CLEAR_ERROR:
      return {
        ...state,
        error: '',
      }

    default:
      return { ...state }
  };
};

export default rootReducer;
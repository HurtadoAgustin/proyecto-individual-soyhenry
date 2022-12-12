import axios from 'axios';
import { API_PATH } from '../utils/constants.js';

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME';
export const GET_COUNTRY = 'GET_COUNTRY';
export const CLEAR_COUNTRY = 'CLEAR_COUNTRY';
export const SAVE_FILTERS = 'SAVE_FILTERS';
export const POST_ACTIVITY = 'POST_ACTIVITY';
export const SAVE_ERROR = 'SAVE_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export const getAllCountries = () =>
  dispatch =>
    axios(`${API_PATH}/countries`)
      .then(response => response.data)
      .then(data => dispatch({
        type: GET_ALL_COUNTRIES,
        payload: data,
      }))
      .catch(error => dispatch({
        type: SAVE_ERROR,
        payload: error.message,
      }))
;

export const getCountriesByName = ( text ) =>
  dispatch =>
    axios(`${API_PATH}/countries?name=${text}`)
      .then(response => response.data)
      .then(data => dispatch({
        type: GET_COUNTRIES_BY_NAME,
        payload: data,
      }))
      .catch(error => dispatch({
        type: SAVE_ERROR,
        payload: error.message,
      }))
;

export const getCountry = ( idCountry ) =>
  dispatch =>
    axios(`${API_PATH}/countries/${idCountry}`)
      .then(response => response.data)
      .then(data => dispatch({
        type: GET_COUNTRY,
        payload: data[0],
      }))
      .catch(error => dispatch({
        type: SAVE_ERROR,
        payload: error.message,
      }))
;

export const clearCountry = () => {
  return { type: CLEAR_COUNTRY }
};

export const saveFilters = ( filters ) => {
  return {
    type: SAVE_FILTERS,
    payload: filters,
  }
}

export const postActivity = ( activityData ) =>
  dispatch =>
    axios.post(`${API_PATH}/activities`, activityData)
      .then(response => response.data)
      .then(data => dispatch({
        type: POST_ACTIVITY,
        payload: data,
      }))
      .catch(error => dispatch({
        type: SAVE_ERROR,
        payload: error.message,
      }))
;

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  }
}
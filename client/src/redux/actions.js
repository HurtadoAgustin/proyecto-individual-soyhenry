import axios from 'axios';
import { API_PATH } from '../utils/constants.js';

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const CLEAR_COUNTRY_DETAIL = 'CLEAR_COUNTRY_DETAIL';
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

export const getCountries = ( filters ) =>
  dispatch =>
    axios(`${API_PATH}/countries?${filters}`)
      .then(response => response.data)
      .then(data => dispatch({
        type: GET_COUNTRIES,
        payload: data,
      }))
      .catch(error => dispatch({
        type: SAVE_ERROR,
        payload: error.message,
      }))
;

export const getCountryDetail = ( idCountry ) =>
  dispatch =>
    axios(`${API_PATH}/countries/${idCountry}`)
      .then(response => response.data)
      .then(data => dispatch({
        type: GET_COUNTRY_DETAIL,
        payload: data[0],
      }))
      .catch(error => dispatch({
        type: SAVE_ERROR,
        payload: error.message,
      }))
;

export const clearCountryDetail = () => {
  return { type: CLEAR_COUNTRY_DETAIL }
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
import axios from 'axios';
const API_PATH = 'http://localhost:3001';


export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME';
export const GET_COUNTRY = 'GET_COUNTRY';
export const CLEAR_COUNTRY = 'CLEAR_COUNTRY';
export const SAVE_FILTERS = 'SAVE_FILTERS';

export const getAllCountries = () =>
  dispatch =>
    axios(`${API_PATH}/countries`)
      .then(response => response.data)
      .then(data => dispatch({
        type: GET_ALL_COUNTRIES,
        payload: data,
      }))
      .catch(error => console.log(error))
;

export const getCountriesByName = ( text ) =>
  dispatch =>
    axios(`${API_PATH}/countries?name=${text}`)
      .then(response => response.data)
      .then(data => dispatch({
        type: GET_COUNTRIES_BY_NAME,
        payload: data,
      }))
      .catch(error => console.log(error))
;

export const getCountry = ( idCountry ) =>
  dispatch =>
    axios(`${API_PATH}/countries/${idCountry}`)
      .then(response => response.data)
      .then(data => dispatch({
        type: GET_COUNTRY,
        payload: data[0],
      }))
      .catch(error => console.log(error))
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
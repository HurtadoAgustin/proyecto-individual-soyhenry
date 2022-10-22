import axios from 'axios';
const API_PATH = 'http://localhost:3001';


export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';

export const getAllCountries = () =>
  dispatch =>
    axios(`${API_PATH}/countries`)
      .then(response => response.data)
      .then(data => dispatch({
        type: GET_ALL_COUNTRIES,
        payload: data
      }))
      .catch(error => console.log(error))
;

export const getCountry = ( idCountry ) =>
  dispatch =>
    axios(`${API_PATH}/countries/${idCountry}`)
      .then(response => response.data)
      .then(data => dispatch({
        type: GET_COUNTRY,
        payload: data[0]
      }))
      .catch(error => console.log(error))
;
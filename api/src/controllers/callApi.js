// this function calls the for a unique time an external API 
// that I'm going to use in the proyect, but then I'm going to
// use the Sequalize Models and my own PostgreSQL data base.

const axios = require('axios');
const API_PATH = 'https://restcountries.com/v3/all';

const countryModelParser = ( country ) => {
  return {
    id: country.cca3,
    name: country.name.official,
    flag: country.flags[0],
    continent: country.continents[0], 
    capital: country.capital ? country.capital[0] : 'N/A',
    subregion: country.subregion || 'N/A',
    area: country.area,
    population: country.population,
  };
}

const callApi = () =>
  axios(API_PATH)
  .then(res => res.data)
  .then(data => data.map(countryModelParser))
  .catch(err => {
    throw new Error(`Error at calling the external Api... ${err}`)
  });
;

module.exports = callApi;
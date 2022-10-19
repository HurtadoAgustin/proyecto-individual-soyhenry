// this function calls the for a unique time an external API 
// that I'm going to use in the proyect, but then I'm going to
// use the Sequalize Models and my own PostgreSQL data base.

const API_PATH = 'https://restcountries.com/v3/all';

const countryModelParser = country => {
  return {
    id: country.fifa,
    name: country.name.official,
    flag: country.flags[0],
    continent: country.continents[0],
    capital: country.capital[0],
    subregion: country.subregion,
    area: country.area,
    population: country.population,
  };
}

const callApi = () => 
  fetch(API_PATH)
  .then(data => data.json())
  .then(json => json.forEach(countryModelParser))
  .catch(err => console.log(err))
;

module.exports = callApi;
/*
  I have to use it because if database doesnt exists,
  I cant save all the data that api sends
*/
const countryDataReducer = el => { return {
  id: el.id,
  name: el.name,
  flag: el.flag,
  continent: el.continent,
  population: el.population,
}}

module.exports = {
  countryDataReducer
}
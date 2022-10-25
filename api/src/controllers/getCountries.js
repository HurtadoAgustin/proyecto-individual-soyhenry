const callApi = require('./callApi.js');
const { Country, Activity } = require('../db.js');
const { StatusCodes } = require('http-status-codes');

const getCountries = async ({ name, idCountry } = {}) => {
  try{
    const filters = ( arrayData ) => {
      const reduceData = el => { return {
        id: el.id,
        name: el.name,
        flag: el.flag,
        continent: el.continent,
        population: el.population,
      }}
      if(!name && !idCountry) return arrayData.map(reduceData); // dont filter (get all countries)
      if(!name) return arrayData.filter(country => country.id === idCountry.toUpperCase()); // filter by id
      return arrayData.filter(country => { // filter by name
        return country.name.toUpperCase().includes(name.toUpperCase());
      }).map(reduceData); 
    }

    const countries = await Country.findAll({include: Activity});
    if(countries.length) return filters(countries); // if database exists

    const data = await callApi();
    const newCountries = await Country.bulkCreate(data, {ignoreDuplicates: true});
    return filters(newCountries);

  } catch (error) {
    throw {
      message: error.message || error,
      status: error.status || StatusCodes.BAD_REQUEST,
    }
  }
};

module.exports = getCountries;
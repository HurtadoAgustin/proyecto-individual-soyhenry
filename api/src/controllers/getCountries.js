const callApi = require('./callApi.js');
const { Country } = require('../db.js');
const { StatusCodes } = require('http-status-codes');

const getCountries = async ({ name, idCountry } = {}) => {
  try{
    const filters = ( arrayData ) => {
      if(!name && !idCountry) return arrayData; // dont filter (get all countries)
      if(!name) return arrayData.filter(country => country.id === idCountry.toUpperCase()); // filter by id
      return arrayData.filter(country => country.name.toUpperCase() === name.toUpperCase()); // filter by name
    }

    const countries = await Country.findAll();
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
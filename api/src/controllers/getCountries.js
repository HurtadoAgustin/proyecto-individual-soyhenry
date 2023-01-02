const callApi = require('./callApi.js');
const { Country, Activity } = require('../db.js');
const { StatusCodes } = require('http-status-codes');
const { countryDataReducer } = require('../utils/parsers.js');

const getCountries = async ({
  text,
  sortAsc,
  typeAlpha,
  continent,
  activity,
  idCountry
}) => {
  try{
    let allCountries = await Country.findAll({include: Activity});
    if(!allCountries.length){ // if database doesnt exists
      const data = await callApi();
      allCountries = await Country.bulkCreate(data, {ignoreDuplicates: true});
    };
    let filteredCountries = [...allCountries];

    if (!!idCountry) {
      const foundCountry = allCountries.find((country) => country.id == idCountry);
      return [foundCountry];
    }

    if(!!text){
      filteredCountries = filteredCountries.filter(country => {
        return country.name.toUpperCase().includes(text.toUpperCase());
      })
    }

    if(!!continent){
      filteredCountries = filteredCountries.filter(country => {
        return country.continent.toUpperCase() === continent.toUpperCase();
      })
    }
    
    if(!!typeAlpha){ // alphabetical
      filteredCountries = filteredCountries.sort((a, b) =>
        a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
      );
    } else { // population
      filteredCountries = filteredCountries.sort((a, b) => a.population - b.population);
    }
    
    if(!sortAsc) filteredCountries.reverse();

    return filteredCountries.map(countryDataReducer);

  } catch (error) {
    throw {
      message: error.message || error,
      status: error.status || StatusCodes.BAD_REQUEST,
    }
  }
};

module.exports = getCountries;
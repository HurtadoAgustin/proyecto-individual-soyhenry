const callApi = require('./callApi.js');
const { Country } = require('../db.js');

const getCountries = async ({ name, idCountry } = {}) => {
  try{
    const filters = async (data) => {
      if(!name && !idCountry) return data; // dont filter (get all countries)
      if(!name) return await Country.findByPk(idCountry); // filter by id
      return await Country.findAll({where: {name}}); // filter by name
    }

    const countries = await Country.findAll();
    if(countries.length) return filters(countries); // if database exists
    
    const data = await callApi();
    const newCountries = await Country.bulkCreate(data, {ignoreDuplicates: true});
    return filters(newCountries);

  } catch (err) {
    console.log(`Not found country... ${err}`);
  }
};

module.exports = getCountries;
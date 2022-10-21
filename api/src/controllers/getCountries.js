const callApi = require('./callApi.js');
const { Country } = require('../db.js');

const getCountries = async ({ name, idCountry } = {}) => {
  try{
    // dont filter: get all countries
    if(!name && !idCountry){
      const countries = await Country.findAll();
      if(countries.length) return countries;
      const data = await callApi();
      await Country.bulkCreate(data, {ignoreDuplicates: true});
      return await Country.findAll();
    }
    // filter by id:
    if(!name) return await Country.findByPk(idCountry);
    // filter by name:
    return await Country.findAll({where: {name: name}});
  } catch (err) {
    console.log(`Not found country... ${err}`);
  }
};

module.exports = getCountries;
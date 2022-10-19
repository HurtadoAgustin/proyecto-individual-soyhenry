const callApi = require('./callApi.js');
const { Country } = require('../db.js');

const getCountries = async ({ name, idCountry }) => {
  try{
    // dont filter: get all countries
    if(!name && !idCountry){
      const countries = await Country.findAll();
      if(!countries.length) {
        const data = await callApi();
        if(!data.length) throw new Error('Error calling at the External Api');
        await Country.createBolk(data);
      }
      return countries;
    }
    // filter by id:
    if(!name) return await Country.findByPk(idCountry);
    //filter by name:
    return await Country.findAll({where: {name}});
  } catch (err) {
    console.log(`Not found country... ${err}`);
  }
};

module.exports = getCountries;
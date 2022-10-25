const router = require('express').Router();
const { StatusCodes } = require('http-status-codes');
const { Activity, Country } = require('../db.js');

router.post('/', async (req, res) => {
  const { name, duration, difficulty, season, countries } = req.body;
  try {
    if(!name || !duration || !difficulty || !season || countries.length <= 1) {
      throw {message: 'Required information is missing', status: StatusCodes.BAD_REQUEST};
    }
    const data = {...req.body};
    delete data.countries;
    const countriesArr = [...req.body.countries];
    
    const newActivity = await Activity.create(data);
    if(!newActivity) throw {message: 'Model creation error', status: StatusCodes.INTERNAL_SERVER_ERROR};
    
    const selectedCountries = await Country.findAll({where: {id: countriesArr}});
    if(selectedCountries.length !== countriesArr.length) throw {message: 'Country sended does not exist', status: StatusCodes.BAD_REQUEST};
    
    await newActivity.addCountries(selectedCountries);
    res.status(StatusCodes.CREATED).send(newActivity);

  } catch (error) {
    return res
      .status(error.status || StatusCodes.BAD_REQUEST)
      .send(error.message || error)
    ;
  }
});

module.exports = router;
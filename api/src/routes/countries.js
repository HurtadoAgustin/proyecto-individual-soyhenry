const router = require('express').Router();
const { StatusCodes } = require('http-status-codes');
const getCountries = require('../controllers/getCountries.js');

router.get('/', async (req, res) => {
  const { name } = req.query;

  try {
    const countries = (!name) ? await getCountries() : await getCountries({name});
    if(!countries.length) throw {message: 'Country not found', status: StatusCodes.NOT_FOUND};

    return res.status(StatusCodes.OK).send(countries);

  } catch (error) {
    return res
      .status(error.status || StatusCodes.BAD_REQUEST)
      .send(error.message || error)
    ;
  }
});

router.get('/:idCountry', async (req, res) => {
  const { idCountry } = req.params;

  try {
    const country = await getCountries({idCountry});
    if(!country) throw {message: 'Country not found', status: StatusCodes.NOT_FOUND};

    return res.status(StatusCodes.OK).send(country);

  } catch (error) {
    return res
      .status(error.status || StatusCodes.BAD_REQUEST)
      .send(error.message || error)
    ;
  }
});

module.exports = router;
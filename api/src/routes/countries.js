const router = require('express').Router();
const STATUS = require('../http-status.json');
const getCountries = require('../controllers/getCountries.js');

router.get('/', async (req, res) => {
  try {
    const { name } = req.query;
    const countries = (!name) ? await getCountries() : await getCountries({name: name});
    return res.status(STATUS.OK).send(countries);
  } catch (error) {
    return res.status(STATUS.BAD_REQUEST).send(error.message);
  }
});

router.get('/:idCountry', async (req, res) => {
  const { idCountry } = req.params;
  try {
    const country = await getCountries({idCountry});
    if(!country) return res.status(STATUS.NOT_FOUND).send('COUNTRY NOT FOUND');
    res.status(STATUS.OK).send(country);
  } catch (error) {
    res.status(STATUS.BAD_REQUEST).send(error.message);
  }
});

module.exports = router;
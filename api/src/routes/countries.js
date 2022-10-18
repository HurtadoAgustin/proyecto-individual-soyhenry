const router = require('express').Router();
const STATUS = require('../http-status.json');
const { Country } = require('../db.js');

router.get('/', async (req, res) => {
  const { name } = req.query;
  try {
    const countries =
      (!name)
        ? await Country.findAll()
        : await Country.findAll({where: {name}})
    ;
    if(!countries.length) return res.status(STATUS.NOT_FOUND).send('COUNTRY NOT FOUND');
    return res.status(STATUS.OK).send(countries);
  } catch (error) {
    return res.status(STATUS.BAD_REQUEST).send(error.message);
  }
});

router.get('/:idCountry', async (req, res) => {
  const { idCountry } = req.params;
  try {
    const country = await Country.findByPk(idCountry);
    if(!country) return res.status(STATUS.NOT_FOUND).send('COUNTRY NOT FOUND');
    res.status(STATUS.OK).send(country);
  } catch (error) {
    res.status(STATUS.BAD_REQUEST).send(error.message);
  }
});

module.exports = router;
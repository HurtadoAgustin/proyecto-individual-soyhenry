const router = require('express').Router();
const STATUS = require('../http-status.json');
const { Activity } = require('../db.js');

router.post('/', async (req, res) => {
  const { name, duration, difficulty, season } = req.body;
  try {
    if ( !name || !duration || !difficulty || !season ) {
      return res.status(STATUS.BAD_REQUEST).send('Falta info bro');
    }
    const newActivity = await Activity.create(req.body);
    res.status(STATUS.CREATED).send(newActivity);
  } catch (error) {
    res.status(STATUS.BAD_REQUEST).send(error.message);
  }
});

module.exports = router;
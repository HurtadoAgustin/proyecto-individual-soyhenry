const router = require('express').Router();
const { StatusCodes } = require('http-status-codes');
const { Activity } = require('../db.js');

router.post('/', async (req, res) => {
  const { name, duration, difficulty, season } = req.body;
  try {
    if(!name || !duration || !difficulty || !season) {
      throw {message: 'Required information is missing', status: StatusCodes.BAD_REQUEST};
    }
    const newActivity = await Activity.create(req.body);
    if(!newActivity) throw {message: 'Model creation error', status: StatusCodes.INTERNAL_SERVER_ERROR};
    
    res.status(StatusCodes.CREATED).send(newActivity);

  } catch (error) {
    return res
      .status(error.status || StatusCodes.BAD_REQUEST)
      .send(error.message || error)
    ;
  }
});

module.exports = router;
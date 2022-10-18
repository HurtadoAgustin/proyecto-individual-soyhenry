const router = require('express').Router();
const countries = require('./countries.js');
const activities = require('./activities.js');

router.use('/countries', countries);
router.use('/activities', activities);

module.exports = router;
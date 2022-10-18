const router = require('express').Router();
const countries = require('./countries.js');
const activities = require('./activities.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countries);

//router.use('/activities', activities);

module.exports = router;

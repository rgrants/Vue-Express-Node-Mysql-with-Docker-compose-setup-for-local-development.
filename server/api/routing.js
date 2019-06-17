
var express = require('express');
var router = express.Router();

cors = require('cors');

router.get('/', cors(), require('./listAll'));


module.exports = router;

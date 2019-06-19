
var express = require('express');
var router = express.Router();

cors = require('cors');

router.get('/', cors(), require('./listAll'));
router.post('/startTask', cors(), require('./startTask'));


module.exports = router;

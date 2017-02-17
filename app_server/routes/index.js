var express = require('express');
var router = express.Router();


var ctrlVista =  require('../controllers/index.js');

/* GET home page. */
router.get('/', ctrlVista.homelist);

module.exports = router;

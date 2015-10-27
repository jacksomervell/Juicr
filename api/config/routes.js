var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser');

var mainController = require('../controllers/mainController')

router.route('/juices/:nutrientNo')
  .get(mainController.getInfo)

module.exports = router;
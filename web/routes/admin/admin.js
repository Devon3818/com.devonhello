var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Admin');
  res.render('admin', { title: 'Express' });
});

module.exports = router;

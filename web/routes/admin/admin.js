var express = require('express');
var router = express.Router();

/* GET users listing. */
//后台登录页面
router.get('/', function(req, res, next) {
  //res.send('Admin');
  res.render('Admin/admin', { title: 'Express' });
});


//后台主页面
router.get('/index', function(req, res, next) {
  //res.send('Admin');
  res.render('Admin/index', { title: 'Express' });
});

router.get('/index/f1', function(req, res, next) {
  //res.send('Admin');
  res.render('Admin/frames/frame1', { title: 'Express' });
});

module.exports = router;

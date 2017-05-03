var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var server = require('../../my_modules/db');
var ObjectID = require('mongodb').ObjectID;

var db = new mongodb.Db('devon', server, {
	safe: true
});

/* GET users listing. */
//获取文章列表
router.get('/', function(req, res, next) {

	//打开数据表
	db.open(function(error, client) {
		if (error) {
			db.close();
			res.render('error');
		} else {

			db.collection('article', {
				safe: true
			}, function(err, collection) {

				collection.find().sort({
					_id: -1
				}).limit(20).toArray(function(err, docs) {
					db.close();
					res.render('admin', {
						data: docs
					});
				});

			});
		}
	})

});

//发表文章博客
router.post('/sendBlog', function(req, res, next) {

	//打开数据表
	db.open(function(error, client) {
		if (error) {
			db.close();
			res.render('error');
		} else {

			//插入到数据库
			db.collection('article', {
				safe: true
			}, function(err, collection) {
				var data = {
					title: req.body.title,
					dec: transImg(req.body.data).substring(0, 150),
					data: req.body.data,
					small: req.body.small,
					time: req.body.time,
					come: req.body.come,
				}
				collection.insert(data, {
					safe: true
				}, function(err, result) {
					if (err) {
						res.send('0');
					} else {
						res.send('1');
					}
					db.close();
				});

			});

		}
	})

});

//更新文章博客
router.post('/sendAlter', function(req, res, next) {

	//打开数据表
	db.open(function(error, client) {
		if (error) {
			db.close();
			res.render('error');
		} else {

			//插入到数据库
			db.collection('article', {
				safe: true
			}, function(err, collection) {
				var id = req.body.id;

				var data = {
					title: req.body.title,
					dec: transImg(req.body.data).substring(0, 150),
					data: req.body.data,
					small: req.body.small,
					time: req.body.time,
					come: req.body.come,

				};
				collection.update({
					"_id": ObjectID(id)
				}, {
					$set: data
				}, {
					safe: true
				}, function(err, result) {
					if (err) {
						res.send('0');
					} else {
						res.send('1');
					}
					db.close();
				});

			});

		}
	})

});

function transImg(imgMsg) {
	var transMsg;
	var reg = /<img\b[^>]*src\s*=\s*"[^>"]*\.(?:png|jpg|bmp|gif)"[^>]*>/g;
	transMsg = imgMsg.replace(reg, function(match) {

		return '';
	});
	return transMsg.replace(/<[^>]+>/g, "");
}

module.exports = router;
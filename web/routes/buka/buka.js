var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;
var db = require('../../my_modules/db.doc.buka');

router.post('/all', function(req, res, next) {

	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('ikmbooks', {
				safe: true
			}, function(err, collection) {

				collection.find({}, {
					limit: 30
				}).sort({
					_id: 1
				}).toArray(function(err, docs) {
					db.close();
					res.send(docs);
				});

			});

		}
	})

})

router.post('/seerecord', function(req, res, next) {

	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('mhrecord', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"uid": req.body.uid,
					"bookname": req.body.bookname,
				}).toArray(function(err, docs) {
					db.close();
					res.send(docs);
				});

			});

		}
	})

})

//添加收藏
router.post('/collect', function(req, res, next) {
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('mhcollect', {
				safe: true
			}, function(err, collection) {

				//插入数据
				var data = {
					isuptate: "1",
					uid: req.body.uid,
					name: req.body.name,
					bookname: req.body.bookname,
					bookbanner: req.body.bookbanner,
					bookpages: req.body.bookpages,
					booktime: req.body.booktime,
					url: req.body.url,
				}

				collection.insert(data, {
					safe: true
				}, function(err, result) {
					db.close();
					res.send(result);
				});

			});
		}
	})
});

//添加收藏
router.post('/uncollect', function(req, res, next) {
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('mhcollect', {
				safe: true
			}, function(err, collection) {

				collection.remove({
					"uid": req.body.uid,
					"bookname": req.body.bookname,
				}, function(err, result) {
					res.send(result);
					db.close();
				})

			});
		}
	})
});

//record 添加浏览记录
router.post('/addrecord', function(req, res, next) {
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('mhrecord', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"uid": req.body.uid,
					"bookname": req.body.bookname,
				}).toArray(function(err, docs) {

					if(docs.length != 0) {
						collection.update({
								"uid": req.body.uid,
								"bookname": req.body.bookname,
							}, {
								$set: {
									"url": req.body.url
								}
							}, {
								safe: true
							},
							function(err, result) {
								db.close();
								res.send(result);
							})

					} else {
						collection.insert({
							"uid": req.body.uid,
							"bookname": req.body.bookname,
							"url": req.body.url,
							"bookbanner": req.body.bookbanner,
							"bookpages": req.body.bookpages,
							"mhurl": req.body.mhurl,
						}, {
							safe: true
						}, function(err, result) {
							res.send(result);
							db.close();
						})

					}
				})
			});

		}
	})
});

//注册
router.post('/regist', function(req, res, next) {

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('user', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"name": req.body.name
				}).toArray(function(err, docs) {

					if(docs.length != 0) {
						db.close();
						res.send("0");
					} else {

						db.collection('user', {
							safe: true
						}, function(err, collection) {

							//插入数据
							var data = {
								name: req.body.name,
								nickname: req.body.nickname,
								userimg: "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
								pass: req.body.pass,
								time: Date.parse(new Date()),
							}

							collection.insert(data, {
								safe: true
							}, function(err, result) {
								collection.find({
									"name": req.body.name
								}).toArray(function(err, docs) {
									res.send(docs);
									db.close();

								});

							});

						});

					}

				});

			});

		}
	})

});

//登陆
router.post('/login', function(req, res, next) {

	var name = req.body.name;
	var pass = req.body.pass;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('user', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"name": name,
					"pass": pass
				}).toArray(function(err, docs) {
					db.close();
					res.send(docs);
					//jp("吃乎通知", "👏🍰欢迎登陆吃乎", docs[0]["_id"] + '');
				});

			});

		}
	})
});

//我de收藏
router.post('/getcollect', function(req, res, next) {

	var uid = req.body.uid;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('mhcollect', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"uid": uid
				}).toArray(function(err, docs) {
					db.close();
					res.send(docs);
				});

			});

		}
	})
});

//我de纪录
router.post('/getrecord', function(req, res, next) {

	var uid = req.body.uid;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('mhrecord', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"uid": uid
				}).toArray(function(err, docs) {
					db.close();
					res.send(docs);
				});

			});

		}
	})
});

//检查是否已经关注了对方
router.post('/checkcollect', function(req, res, next) {

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('mhcollect', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"uid": req.body.uid,
					"bookname": req.body.bookname
				}).toArray(function(err, docs) {
					db.close();
					res.send(docs);
				});

			});

		}
	})
})

//App版本
router.post('/appversion', function(req, res, next) {

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('appversion', {
				safe: true
			}, function(err, collection) {

				collection.find({}).toArray(function(err, docs) {
					db.close();
					res.send(docs);
				});

			});

		}
	})
});

module.exports = router;
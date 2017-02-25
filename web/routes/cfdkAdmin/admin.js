var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;
var db = require('../../my_modules/db.doc');

/* GET users listing. */
//后台登录页面
router.get('/', function(req, res, next) {
	//res.clearCookie('cfdkAdmin');
	//console.log(req.cookies.cfdkAdmin);
	//res.cookie('cfdkAdmin', '1', { maxAge: 900000, httpOnly: true })
	//console.log(req.cookies.cfdkAdmin);
	res.render('cfdkAdmin/admin');
});

//后台用户列表页面
router.get('/userlist', function(req, res, next) {
	res.render('cfdkAdmin/userlist');
});

//用户详细信息界面
router.get('/user/:id', function(req, res, next) {

	var uid = req.params.id;
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('user', {
				safe: true
			}, function(err, collection) {

				collection.find({ "_id": ObjectID(uid) }).toArray(function(err, docs) {
					db.close();
					console.log(docs);
					if(docs.length) {
						res.render('cfdkAdmin/user', { data: docs[0] });
					} else {
						res.render('error');
					}

				});

			});

		}
	})
});

//用户作品列表数据
router.post('/userwork', function(req, res, next) {
	//console.log(req.body.num);
	var len = req.body.num * 1,
		uid = req.body.uid;
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('work', {
				safe: true
			}, function(err, collection) {

				collection.find({ "uid": uid }, { limit: 20, skip: len }).sort({ _id: -1 }).toArray(function(err, docs) {
					db.close();
					//console.log(docs);
					if(docs.length) {
						res.send(docs);
					} else {
						res.send("0");
					}

				});

			});

		}
	})
});

//用户问答列表数据
router.post('/userquestion', function(req, res, next) {

	var len = req.body.num * 1,
		uid = req.body.uid;
	//console.log(uid);
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('question', {
				safe: true
			}, function(err, collection) {

				collection.find({ "uid": uid }, { limit: 20, skip: len }).sort({ _id: -1 }).toArray(function(err, docs) {
					db.close();
					if(docs.length) {
						res.send(docs);
					} else {
						res.send("0");
					}

				});

			});

		}
	})
});

//用户分享列表数据
router.post('/userchart', function(req, res, next) {

	var len = req.body.num * 1,
		uid = req.body.uid;
	//console.log(uid);
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('chart', {
				safe: true
			}, function(err, collection) {

				collection.find({ "uid": uid }, { limit: 20, skip: len }).sort({ _id: -1 }).toArray(function(err, docs) {
					db.close();
					if(docs.length) {
						res.send(docs);
					} else {
						res.send("0");
					}

				});

			});

		}
	})
});

//查看用户莫作品详情
router.get('/userwork/:id', function(req, res, next) {

	var uid = req.params.id;
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('work', {
				safe: true
			}, function(err, collection) {

				collection.find({ "_id": ObjectID(uid) }).toArray(function(err, docs) {
					db.close();
					console.log(docs);
					if(docs.length) {
						res.render('cfdkAdmin/userwork', { data: docs[0] });
					} else {
						res.render('error');
					}

				});

			});

		}
	})
});

//删除用户莫作品
router.post('/deleuserwork', function(req, res, next) {

	var uid = req.body.uid;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('work', {
				safe: true
			}, function(err, collection) {

				collection.remove({ _id: ObjectID.createFromHexString(req.body.uid) }, { safe: true }, function(err, result) {
					if(!err) {
						res.send("1");
					} else {
						res.send("0");
					}

				});

			});

		}
	})
});

//删除用户莫提问
router.post('/deleuserquestion', function(req, res, next) {

	var uid = req.body.uid;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('question', {
				safe: true
			}, function(err, collection) {

				collection.remove({ _id: ObjectID.createFromHexString(req.body.uid) }, { safe: true }, function(err, result) {
					if(!err) {
						res.send("1");
					} else {
						res.send("0");
					}

				});

			});

		}
	})
});

//删除用户莫分享
router.post('/deleuserch', function(req, res, next) {

	var uid = req.body.uid;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('chart', {
				safe: true
			}, function(err, collection) {

				collection.remove({ _id: ObjectID.createFromHexString(req.body.uid) }, { safe: true }, function(err, result) {
					if(!err) {
						res.send("1");
					} else {
						res.send("0");
					}

				});

			});

		}
	})
});

//后台用户列表数据
router.post('/userlist', function(req, res, next) {
	//console.log(req.body.num);
	var len = req.body.num * 1;
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('user', {
				safe: true
			}, function(err, collection) {

				collection.find({}, { limit: 20, skip: len }).sort({ _id: -1 }).toArray(function(err, docs) {
					db.close();
					//console.log(docs);
					if(docs.length) {
						res.send(docs);
					} else {
						res.send("0");
					}

				});

			});

		}
	})
});

//后台头条列表
router.get('/toutiao', function(req, res, next) {

	res.render('cfdkAdmin/toutiao');
});

router.get('/index', function(req, res, next) {

	if(req.cookies.cfdkAdmin) {
		res.render('cfdkAdmin/index');
	} else {
		res.render('cfdkAdmin/admin');
	}

});

//后台登录处理
router.post('/login', function(req, res, next) {

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('cfdkAdmin', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"uname": req.body.uname,
					"upass": req.body.upass
				}).toArray(function(err, docs) {
					//console.log(docs);
					//console.log(typeof req.params.id);
					//console.log(docs.length);
					db.close();
					if(docs.length) {
						res.cookie('cfdkAdmin', docs[0]["_id"], { maxAge: 900000, httpOnly: true })
						res.render('cfdkAdmin/index');
					} else {
						res.render('cfdkAdmin/admin');
					}

				});

			});

		}
	})

});

module.exports = router;
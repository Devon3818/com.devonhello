var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;
var db = require('../../my_modules/db.doc.chihuV3');
var JPush = require("jpush-sdk");

router.get('/home', function(req, res, next) {
	res.send('0');
});

//首页菜谱
router.post('/home_work', function(req, res, next) {
	home_work(req, res);
});

//首页发现
router.post('/home_share', function(req, res, next) {
	home_share(req, res);
});

//首页发现
router.post('/home_question', function(req, res, next) {
	home_question(req, res);
});

//菜谱详情
router.post('/open_work', function(req, res, next) {
	open_work(req, res);
});

//发现详情
router.post('/open_share', function(req, res, next) {
	open_share(req, res);
});

//文章详情
router.post('/open_question', function(req, res, next) {
	open_question(req, res);
});

//我的菜谱
router.post('/my_work', function(req, res, next) {
	my_work(req, res);
});

//我的发现
router.post('/my_share', function(req, res, next) {
	my_share(req, res);
});

//我的问题
router.post('/my_question', function(req, res, next) {
	my_question(req, res);
});

//登录
router.post('/login', function(req, res, next) {
	login(req, res);
});

//我的好友
router.post('/get_friend', function(req, res, next) {
	get_friend(req, res);
});

//我的好友
router.post('/get_friend_share', function(req, res, next) {
	get_friend_share(req, res);
});

function home_work(req, res) {
	var ilen = req.body.len;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.send('0');
		} else {

			db.collection('work', {
				safe: true
			}, function(err, collection) {

				if(!err) {
					collection.find({}, {
						limit: 20,
						skip: ilen * 1
					}).sort({
						_id: -1
					}).toArray(function(err, docs) {
						db.close();
						res.send(docs);
					});
				} else {
					db.close();
					res.send('1');
				}

			});

		}
	})
}

function home_share(req, res) {
	var ilen = req.body.len;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.send('0');
		} else {

			db.collection('share', {
				safe: true
			}, function(err, collection) {

				if(!err) {
					collection.find({}, {
						limit: 20,
						skip: ilen * 1
					}).sort({
						_id: -1
					}).toArray(function(err, docs) {
						db.close();
						res.send(docs);
					});
				} else {
					db.close();
					res.send('1');
				}

			});

		}
	})
}

function home_question(req, res) {
	var ilen = req.body.len;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.send('0');
		} else {

			db.collection('question', {
				safe: true
			}, function(err, collection) {

				if(!err) {
					collection.find({}, {
						limit: 20,
						skip: ilen * 1
					}).sort({
						_id: -1
					}).toArray(function(err, docs) {
						db.close();
						res.send(docs);
					});
				} else {
					db.close();
					res.send('1');
				}

			});

		}
	})
}

function open_work(req, res) {
	var id = req.body.id;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.send('0');
		} else {

			db.collection('work', {
				safe: true
			}, function(err, collection) {

				if(!err) {
					collection.find({
						"_id": ObjectID(id)
					}).toArray(function(err, docs) {
						db.close();
						res.send(docs);
					});
				} else {
					db.close();
					res.send('1');
				}

			});

		}
	})
}

function open_share(req, res) {
	var id = req.body.id;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.send('0');
		} else {

			db.collection('share', {
				safe: true
			}, function(err, collection) {

				if(!err) {
					collection.find({
						"_id": ObjectID(id)
					}).toArray(function(err, docs) {
						db.close();
						res.send(docs);
					});
				} else {
					db.close();
					res.send('1');
				}

			});

		}
	})
}

function open_question(req, res) {
	var id = req.body.id;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.send('0');
		} else {

			db.collection('question', {
				safe: true
			}, function(err, collection) {

				if(!err) {
					collection.find({
						"_id": ObjectID(id)
					}).toArray(function(err, docs) {
						db.close();
						res.send(docs);
					});
				} else {
					db.close();
					res.send('1');
				}

			});

		}
	})
}

function my_work(req, res) {
	
	var id = req.body.id;
	var ilen = req.body.len;
	
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.send('0');
		} else {

			db.collection('work', {
				safe: true
			}, function(err, collection) {

				if(!err) {
					collection.find({
						"uid": id,
					},{
						"limit": 20,
						"skip": ilen * 1
					}).toArray(function(err, docs) {
						db.close();
						res.send(docs);
					});
				} else {
					db.close();
					res.send('1');
				}

			});

		}
	})
}

function my_share(req, res) {
	var id = req.body.id;
	var ilen = req.body.len;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.send('0');
		} else {

			db.collection('share', {
				safe: true
			}, function(err, collection) {

				if(!err) {
					collection.find({
						"uid": id
					},{
						"limit": 20,
						"skip": ilen * 1
					}).toArray(function(err, docs) {
						db.close();
						res.send(docs);
					});
				} else {
					db.close();
					res.send('1');
				}

			});

		}
	})
}

function my_question(req, res) {
	var id = req.body.id;
	var ilen = req.body.len;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.send('0');
		} else {

			db.collection('question', {
				safe: true
			}, function(err, collection) {

				if(!err) {
					collection.find({
						"uid": id
					},{
						"limit": 20,
						"skip": ilen * 1
					}).toArray(function(err, docs) {
						db.close();
						res.send(docs);
					});
				} else {
					db.close();
					res.send('1');
				}

			});

		}
	})
}

function login(req, res) {
	var name = req.body.name;
	var pass = req.body.pass;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('0');
		} else {

			db.collection('user', {
				safe: true
			}, function(err, collection) {

				if(!err) {
					collection.find({
						"name": name,
						"pass": pass
					}).toArray(function(err, docs) {
						db.close();
						res.send(docs);
					});
				} else {
					db.close();
					res.render('1');
				}

			});

		}
	})
}

function get_friend(req, res){
	var id = req.body.id;
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('0');
		} else {

			db.collection('follwers', {
				safe: true
			}, function(err, collection) {

				if(!err){
					collection.find({
					"uid": id + ''
				}, {
					limit: 15
				}).sort({
					_id: -1
				}).toArray(function(err, docs) {
					db.close();
					res.send(docs);
				});
				}else{
					db.close();
					res.send('1');
				}

			});

		}
	})
}

function get_friend_share(req, res) {
	
	var usersArr = JSON.parse(req.body.users);
	var ilen = req.body.len;
	
	var frends = [];
	for (var i=0;i <usersArr.length; i++) {
		frends.push( usersArr[i] );
	}
	
	frends.push(req.body.id);
	
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('0');
		} else {

			db.collection('share', {
				safe: true
			}, function(err, collection) {

				if(!err) {
					collection.find({
						"uid": {
							"$in": frends
						}
					}, {
						limit: 10,
						skip: ilen * 1
					}).sort({
						_id: -1
					}).toArray(function(err, docs) {
						db.close();
						
						if(docs.length==0){
							res.send('2');
						}else{
							res.send(docs);
						}
					});
				} else {
					db.close();
					res.send('1');
				}

			});

		}
	})
}

module.exports = router;
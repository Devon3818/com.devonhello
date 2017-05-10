var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;
var db = require('../../my_modules/db.doc.chihu');
var JPush = require("jpush-sdk");
var client = JPush.buildClient('634af50eb57e7339d2dc370b', 'f6f0e2c6a40d16beb455e57c');

function jp(title,conttext) {
	client.push().setPlatform('ios', 'android')
		.setAudience(JPush.alias('1'))
		.setNotification('吃乎通知',
			JPush.android(conttext, title, 1, {
				'key': 'value'
			}),
			JPush.ios(conttext, 'sound', 1)
		)
		.setMessage('msg content')
		.send(function(err, res) {
			if(err) {
				if(err instanceof JPush.APIConnectionError) {
					console.log("APIConnectionError:" + err.message);

				} else if(err instanceof JPush.APIRequestError) {
					console.log(err.message);
				}
			} else {

				console.log('Msg_id: ' + res.msg_id);
			}
		});
}

var data = [{
	_id: '1',
	name: "Devon",
	userimg: "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
	forkqus: '1',
	forkuser: '0',
	fork: '0',
	dec: '吃乎，开启美食之旅...每天分享新事物，新食物...',
	work: '200',
	share: '200',
	sex: '0',
	city: '中国',
	job: 'IT',
	integral: '200',
	title: '吃乎达人',
	report: '0',
	form: 'register',
	time: '1493802411111',
	pass: '123456'
}];

function removecoll(name) {
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection(name, {
				safe: true
			}, function(err, collection) {

				collection.remove({});

			});

		}
	})
}

router.get('/dele', function(req, res, next) {
	removecoll("user");
	res.send('0');
})

router.get('/update', function(req, res, next) {
	db.open(function(error, client) {
		if(error) {
			db.close();
		} else {

			db.collection('article', {
				safe: true
			}, function(err, collection) {

				collection.update({
					'uid': 1
				}, {
					$set: {
						'uid': '1'
					}
				}, {
					multi: true
				}, function(err, result) {
					res.send(result);
					db.close();
				});

			});
		}
	})
})

//app home首页数据
router.get('/home_data', function(req, res, next) {

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('user', {
				safe: true
			}, function(err, collection) {

				var len = data.length;
				//console.log(collection.insert);
				for(var i = 0; i < len; i++) {
					//插入数据
					var datas = data[i];
					//console.log(datas);
					collection.insert(datas, {
						safe: true
					}, function(err, result) {
						res.send(result);
					});
				}

			});

		}
	})

	//res.send("home");
});

//home
router.post('/home', function(req, res, next) {

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('article', {
				safe: true
			}, function(err, collection) {

				collection.find({}, {
					limit: 15
				}).sort({
					_id: -1
				}).toArray(function(err, docs) {
					db.close();
					res.send(docs);
				});

			});

		}
	})
});

//查看菜谱
router.post('/article_dec', function(req, res, next) {

	var id = req.body.id;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('article', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"_id": ObjectID(id),
					"type": "1"
				}).toArray(function(err, docs) {
					db.close();
					res.send(docs);
				});

			});

		}
	})
});

//获取发现分享
router.post('/share', function(req, res, next) {

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('share', {
				safe: true
			}, function(err, collection) {

				collection.find({}, {
					limit: 15
				}).sort({
					_id: -1
				}).toArray(function(err, docs) {
					db.close();
					res.send(docs);
				});

			});

		}
	})
});

//查看分享
router.post('/share_dec', function(req, res, next) {

	var id = req.body.id;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('share', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"_id": ObjectID(id)
				}).toArray(function(err, docs) {
					db.close();
					res.send(docs);
				});

			});

		}
	})
});

//查看提问问题
router.post('/answer_dec', function(req, res, next) {

	var id = req.body.id;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('article', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"_id": ObjectID(id),
					"type": "0"
				}).toArray(function(err, docs) {
					db.close();
					res.send(docs);
				});

			});

		}
	})
});

//查看问题回答列表
router.post('/answer_list', function(req, res, next) {

	var id = req.body.id;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('article', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"answerid": id,
				}).toArray(function(err, docs) {
					db.close();
					res.send(docs);
				});

			});

		}
	})
});

//查看提问问题
router.post('/question', function(req, res, next) {

	var id = req.body.id;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('answer', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"_id": ObjectID(id),
				}).toArray(function(err, docs) {
					db.close();
					res.send(docs);
				});

			});

		}
	})
});

//我的作品
router.post('/my_work', function(req, res, next) {

	var id = req.body.id;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('article', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"uid": id + '',
					"type": "1"
				}, {
					limit: 15
				}).sort({
					_id: -1
				}).toArray(function(err, docs) {
					db.close();
					res.send(docs);
				});

			});

		}
	})
});

//我的分享
router.post('/my_share', function(req, res, next) {

	var id = req.body.id;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('share', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"uid": id + '',
				}, {
					limit: 15
				}).sort({
					_id: -1
				}).toArray(function(err, docs) {
					db.close();
					res.send(docs);
				});

			});

		}
	})
});

//我的提问
router.post('/my_question', function(req, res, next) {

	var id = req.body.id;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('answer', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"uid": id + '',
				}, {
					limit: 15
				}).sort({
					_id: -1
				}).toArray(function(err, docs) {
					db.close();
					res.send(docs);
				});

			});

		}
	})
});

//我收藏的回答
router.post('/my_collect_question', function(req, res, next) {

	var id = req.body.id;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('article', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"type": "0",
					"uid": id
				}, {
					limit: 15
				}).sort({
					_id: -1
				}).toArray(function(err, docs) {
					db.close();
					res.send(docs);
				});

			});

		}
	})
});

//我收藏的作品
router.post('/my_collect_work', function(req, res, next) {

	var id = req.body.id;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('article', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"type": "1",
					"uid": id
				}, {
					limit: 15
				}).sort({
					_id: -1
				}).toArray(function(err, docs) {
					db.close();
					res.send(docs);
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
					jp("吃乎通知","欢迎👏登陆吃乎");
					res.send(docs);
				});

			});

		}
	})
});

//注册
router.post('/register', function(req, res, next) {

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

					if(docs.length) {
						db.close();
						res.send("0");
					} else {

						db.collection('user', {
							safe: true
						}, function(err, collection) {

							//插入数据
							var data = {
								name: req.body.name,
								userimg: "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
								forkqus: '0',
								forkuser: '0',
								fork: '0',
								dec: '吃乎，开启美食之旅...',
								work: '0',
								share: '0',
								sex: '0',
								city: '',
								job: '',
								integral: '0',
								title: '吃乎学者',
								report: '0',
								form: 'register',
								time: Date.parse(new Date()),
								pass: req.body.pass
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

module.exports = router;
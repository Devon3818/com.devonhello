var express = require('express');
var router = express.Router();

var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;
var db = require('../../my_modules/db.doc');

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
					"uname": req.body.uname
				}).toArray(function(err, docs) {
					//console.log(docs);
					//console.log(typeof req.params.id);
					//console.log(docs.length);
					
					if(docs.length) {
						db.close();
						res.send("0");
					} else {

						db.collection('user', {
							safe: true
						}, function(err, collection) {

							//插入数据
							var data = {
								uname: req.body.uname,
								usex: req.body.usex,
								upas: req.body.upas,
								utime: Date.parse(new Date()),
							}

							collection.insert(data, {
								safe: true
							}, function(err, result) {
								collection.find({
									"uname": req.body.uname
								}).toArray(function(err, docs) {
									db.close();
									res.send(docs);
								});
							});

						});

					}

				});
				
			});

		}
	})

});

//用户登录
router.post('/login', function(req, res, next) {
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
					"uname": req.body.uname,
					"upas" : req.body.upas
				}).toArray(function(err, docs) {
					//console.log(docs);
					//console.log(typeof req.params.id);
					//console.log(docs.length);
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


/* GET users listing. */
router.get('/', function(req, res, next) {

	var test_obj = [{
		"banner": ["http://www.devonhello.com/images/cfdk/card-amsterdam.png",
			"http://www.devonhello.com/images/cfdk/card-madison.png",
			"http://www.devonhello.com/images/cfdk/card-saopaolo.png",
			"http://www.devonhello.com/images/cfdk/card-sf.png",
		],
		"art": [{
			"img": "http://www.devonhello.com/images/cfdk/thumbnail-totoro.png",
			"title": "title",
			"cont": "contents..."
		}, {
			"img": "http://www.devonhello.com/images/cfdk/thumbnail-totoro.png",
			"title": "title",
			"cont": "contents..."
		}, {
			"img": "http://www.devonhello.com/images/cfdk/thumbnail-totoro.png",
			"title": "title",
			"cont": "contents..."
		}, ],
		"question": [{
			"img": "http://www.devonhello.com/images/cfdk/avatar-ts-woody.png",
			"name": "Woody1",
			"qus": "This town ain't big enough for the two of us!"
		}, {
			"img": "http://www.devonhello.com/images/cfdk/avatar-ts-woody.png",
			"name": "Woody1",
			"qus": "This town ain't big enough for the two of us!"
		}, {
			"img": "http://www.devonhello.com/images/cfdk/avatar-ts-woody.png",
			"name": "Woody1",
			"qus": "This town ain't big enough for the two of us!"
		}, ],
		"work": [{
			"img": "http://www.devonhello.com/images/cfdk/marty-avatar.png",
			"name": "Marty McFly",
			"dec": "November 5, 1955",
			"cont": "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
			"ban": "http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
			"like": "12",
			"comment": "13",
			"time": "3"
		}, {
			"img": "http://www.devonhello.com/images/cfdk/marty-avatar.png",
			"name": "Marty McFly",
			"dec": "November 5, 1955",
			"cont": "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
			"ban": "http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
			"like": "12",
			"comment": "13",
			"time": "3"
		}, {
			"img": "http://www.devonhello.com/images/cfdk/marty-avatar.png",
			"name": "Marty McFly",
			"dec": "November 5, 1955",
			"cont": "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
			"ban": "http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
			"like": "12",
			"comment": "13",
			"time": "3"
		}, ],
	}];

	//打开数据表
	db.open(function(error, client) {
		if(error) {
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

					res.send(JSON.stringify(test_obj));
				});

			});
		}
	})

});

//获取分享数据
router.get('/qus', function(req, res, next) {

	var test_obj = [{
			"qid": 1,
			"img": "http://www.devonhello.com/images/cfdk/avatar-ts-barbie.png",
			"name": "Finn",
			"qus": "Listen, I've had a pretty messed up day...",
			"comment": "24",
			"time": "2016-10-03"
		}, {
			"qid": 2,
			"img": "http://www.devonhello.com/images/cfdk/avatar-ts-barbie.png",
			"name": "Finn",
			"qus": "Listen, I've had a pretty messed up day...",
			"comment": "24",
			"time": "2016-10-03"
		}, {
			"qid": 3,
			"img": "http://www.devonhello.com/images/cfdk/avatar-ts-barbie.png",
			"name": "Finn",
			"qus": "Listen, I've had a pretty messed up day...",
			"comment": "24",
			"time": "2016-10-03"
		}, {
			"qid": 4,
			"img": "http://www.devonhello.com/images/cfdk/avatar-ts-barbie.png",
			"name": "Finn",
			"qus": "Listen, I've had a pretty messed up day...",
			"comment": "24",
			"time": "2016-10-03"
		}, {
			"qid": 5,
			"img": "http://www.devonhello.com/images/cfdk/avatar-ts-barbie.png",
			"name": "Finn",
			"qus": "Listen, I've had a pretty messed up day...",
			"comment": "24",
			"time": "2016-10-03"
		},

	];

	res.send(JSON.stringify(test_obj));
});

//获取分享数据
router.get('/tips', function(req, res, next) {

	var test_obj = [{
			"head": "http://www.devonhello.com/images/cfdk/marty-avatar.png",
			"name": "Marty McFly",
			"say": "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
			"comment": "24",
			"like": "12",
			"time": "2016-10-03",
			"imgs": [
				"http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
				"http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
				"http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
				"http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
			],
		}, {
			"head": "http://www.devonhello.com/images/cfdk/marty-avatar.png",
			"name": "Marty McFly",
			"say": "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
			"comment": "24",
			"like": "12",
			"time": "2016-10-03",
			"imgs": [
				"http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
				"http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
				"http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
				"http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
			],
		}, {
			"head": "http://www.devonhello.com/images/cfdk/marty-avatar.png",
			"name": "Marty McFly",
			"say": "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
			"comment": "24",
			"like": "12",
			"time": "2016-10-03",
			"imgs": [
				"http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
				"http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
				"http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
				"http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
			],
		}, {
			"head": "http://www.devonhello.com/images/cfdk/marty-avatar.png",
			"name": "Marty McFly",
			"say": "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
			"comment": "24",
			"like": "12",
			"time": "2016-10-03",
			"imgs": [
				"http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
				"http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
				"http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
				"http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
			],
		}, {
			"head": "http://www.devonhello.com/images/cfdk/marty-avatar.png",
			"name": "Marty McFly",
			"say": "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
			"comment": "24",
			"like": "12",
			"time": "2016-10-03",
			"imgs": [
				"http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
				"http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
				"http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
				"http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
			],
		},

	];

	res.send(JSON.stringify(test_obj));
});

//获取分享数据
router.get('/works', function(req, res, next) {

	var test_obj = [{
			"head": "http://www.devonhello.com/images/cfdk/marty-avatar.png",
			"dec": "November 5, 1955",
			"name": "Marty McFly",
			"say": "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
			"comment": "24",
			"like": "12",
			"time": "2016-10-03",
			"img": "http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
		}, {
			"head": "http://www.devonhello.com/images/cfdk/marty-avatar.png",
			"dec": "November 5, 1955",
			"name": "Marty McFly",
			"say": "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
			"comment": "24",
			"like": "12",
			"time": "2016-10-03",
			"img": "http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
		}, {
			"head": "http://www.devonhello.com/images/cfdk/marty-avatar.png",
			"dec": "November 5, 1955",
			"name": "Marty McFly",
			"say": "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
			"comment": "24",
			"like": "12",
			"time": "2016-10-03",
			"img": "http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
		}, {
			"head": "http://www.devonhello.com/images/cfdk/marty-avatar.png",
			"dec": "November 5, 1955",
			"name": "Marty McFly",
			"say": "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
			"comment": "24",
			"like": "12",
			"time": "2016-10-03",
			"img": "http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
		}, {
			"head": "http://www.devonhello.com/images/cfdk/marty-avatar.png",
			"dec": "November 5, 1955",
			"name": "Marty McFly",
			"say": "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
			"comment": "24",
			"like": "12",
			"time": "2016-10-03",
			"img": "http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
		},

	];

	res.send(JSON.stringify(test_obj));
});

//获取问题详情
router.get('/qus_all/:id', function(req, res, next) {

	var qid = req.params.id;

	var test_obj = [{
		"head": "http://www.devonhello.com/images/cfdk/avatar-ts-barbie.png",
		"qus": "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
		"comment": "24",
		"time": "2016-10-03",
		"name": "Mary McFly",
		"uid": "1",
		"qid": qid,
	}];

	res.send(JSON.stringify(test_obj));
});

//获取问题详情评论
router.get('/qus_pl/:id', function(req, res, next) {

	var qid = req.params.id;

	var test_obj = [{
		"head": "http://www.devonhello.com/images/cfdk/avatar-ts-barbie.png",
		"cont": "This town ain't big enough for the two of us!",
		"time": "2016-10-03",
		"name": "Woody",
		"uid": "1",
		"qid": qid,
	}, {
		"head": "http://www.devonhello.com/images/cfdk/avatar-ts-barbie.png",
		"cont": "This town ain't big enough for the two of us!",
		"time": "2016-10-03",
		"name": "Woody",
		"uid": "1",
		"qid": qid,
	}, {
		"head": "http://www.devonhello.com/images/cfdk/avatar-ts-barbie.png",
		"cont": "This town ain't big enough for the two of us!",
		"time": "2016-10-03",
		"name": "Woody",
		"uid": "1",
		"qid": qid,
	}];

	res.send(JSON.stringify(test_obj));
});

//发表提问
router.post('/post_question', function(req, res, next) {
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('question', {
				safe: true
			}, function(err, collection) {

				//插入数据
				var data = {
					uid: req.body.uid,
					uhead: req.body.uhead,
					uname: req.body.uname,
					uquestion: req.body.uquestion,
					ucomment: 0,
					utime: req.body.utime,
				}

				collection.insert(data, {
					safe: true
				}, function(err, result) {
					res.send(result);
				});

			});
		}
	})
});

module.exports = router;
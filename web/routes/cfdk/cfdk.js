var express = require('express');
var router = express.Router();

var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;
var db = require('../../my_modules/db.doc');

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
			"img": "http://www.devonhello.com/images/cfdk/avatar-ts-barbie.png",
			"name": "Finn",
			"qus": "Listen, I've had a pretty messed up day...",
			"comment": "24",
			"time": "2016-10-03"
		}, {
			"img": "http://www.devonhello.com/images/cfdk/avatar-ts-barbie.png",
			"name": "Finn",
			"qus": "Listen, I've had a pretty messed up day...",
			"comment": "24",
			"time": "2016-10-03"
		}, {
			"img": "http://www.devonhello.com/images/cfdk/avatar-ts-barbie.png",
			"name": "Finn",
			"qus": "Listen, I've had a pretty messed up day...",
			"comment": "24",
			"time": "2016-10-03"
		}, {
			"img": "http://www.devonhello.com/images/cfdk/avatar-ts-barbie.png",
			"name": "Finn",
			"qus": "Listen, I've had a pretty messed up day...",
			"comment": "24",
			"time": "2016-10-03"
		}, {
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

module.exports = router;
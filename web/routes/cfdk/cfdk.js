var express = require('express');
var router = express.Router();

var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;
var db = require('../../my_modules/db.doc');

/* GET users listing. */
router.get('/', function(req, res, next) {
	
	var test_obj = [
		{
			"banner":[ 	"http://www.devonhello.com/images/cfdk/card-amsterdam.png",
						"http://www.devonhello.com/images/cfdk/card-madison.png",
						"http://www.devonhello.com/images/cfdk/card-saopaolo.png",
						"http://www.devonhello.com/images/cfdk/card-sf.png",],
			"art":[
						{"img":"http://www.devonhello.com/images/cfdk/thumbnail-totoro.png","title":"title","cont":"contents..."},
						{"img":"http://www.devonhello.com/images/cfdk/thumbnail-totoro.png","title":"title","cont":"contents..."},
						{"img":"http://www.devonhello.com/images/cfdk/thumbnail-totoro.png","title":"title","cont":"contents..."},
				  ],
			"question":[
							{"img":"http://www.devonhello.com/images/cfdk/avatar-ts-woody.png","name":"Woody1","qus":"This town ain't big enough for the two of us!"},
							{"img":"http://www.devonhello.com/images/cfdk/avatar-ts-woody.png","name":"Woody1","qus":"This town ain't big enough for the two of us!"},
							{"img":"http://www.devonhello.com/images/cfdk/avatar-ts-woody.png","name":"Woody1","qus":"This town ain't big enough for the two of us!"},
					   ],
			"work":[
						{
							"img":"http://www.devonhello.com/images/cfdk/marty-avatar.png",
							"name":"Marty McFly",
							"dec":"November 5, 1955",
							"cont":"Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
							"ban":"http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
							"like":"12",
							"comment":"13",
							"time":"3"
						},
						{
							"img":"http://www.devonhello.com/images/cfdk/marty-avatar.png",
							"name":"Marty McFly",
							"dec":"November 5, 1955",
							"cont":"Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
							"ban":"http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
							"like":"12",
							"comment":"13",
							"time":"3"
						},
						{
							"img":"http://www.devonhello.com/images/cfdk/marty-avatar.png",
							"name":"Marty McFly",
							"dec":"November 5, 1955",
							"cont":"Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
							"ban":"http://www.devonhello.com/images/cfdk/advance-card-bttf.png",
							"like":"12",
							"comment":"13",
							"time":"3"
						},
				   ],
		}
	];
	
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
					
					res.send( JSON.stringify(test_obj) );
				});

			});
		}
	})

});

module.exports = router;
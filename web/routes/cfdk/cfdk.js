var express = require('express');
var router = express.Router();
var qiniu = require("qiniu");

var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;
var db = require('../../my_modules/db.doc');

//图片上传
var formidable = require('formidable');
var fs = require('fs');
var AVATAR_UPLOAD_FOLDER = '/upload/cfdk/';

//需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = 'y77OZ1PgayCWMwh5lBtaUSwi27LFTXwp-69sg7TT';
qiniu.conf.SECRET_KEY = 'Kt7uhWBp3EsLKN72QNiTcdJg4yj4kV4VdHghVA9i';

//要上传的空间
bucket = 'foodapp';

//上传到七牛后保存的文件名
//key = 'my-nodejs-logo.png';
//构建上传策略函数
function uptoken(bucket, key) {
  var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
  return putPolicy.token();
}



//console.log(token);
//console.log(__dirname);

//要上传文件的本地路径
filePath = 'http://www.whaleoffshore.com/templets/default/images/logo.png'

//构造上传函数
function uploadFile(uptoken, key, localFile) {
  var extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
      if(!err) {
        // 上传成功， 处理返回值
        console.log(ret.hash, ret.key, ret.persistentId);  
        var rootFile = '../赚钱啦';//要删除的文件夹 url
	    
      } else {
        // 上传失败， 处理返回代码
        console.log(err);
      }
  });
}

//调用uploadFile上传
//uploadFile(token, key, filePath);


	//删除所有的文件(将所有文件夹置空)
	    var emptyDir = function(fileUrl){
	        var files = fs.readdirSync(fileUrl);//读取该文件夹
	        files.forEach(function(file){
	            var stats = fs.statSync(fileUrl+'/'+file);
	            if(stats.isDirectory()){
	                emptyDir(fileUrl+'/'+file);
	            }else{
	                fs.unlinkSync(fileUrl+'/'+file);
	                console.log("删除文件"+fileUrl+'/'+file+"成功");
	            }
	        });
	    }


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


//图片上传
router.post('/upload', function(req, res, next) {
	
	//console.log(req.body.file);
	
	var form = new formidable.IncomingForm(); //创建上传表单
	form.encoding = 'utf-8'; //设置编辑
	form.uploadDir = 'public' + AVATAR_UPLOAD_FOLDER; //设置上传目录
	form.keepExtensions = true; //保留后缀
	form.maxFieldsSize = 2 * 1024 * 1024; //文件大小
	form.parse(req, function(err, fields, files) {
		//console.log(files.file);
		if (err) {
			res.locals.error = err;
			res.send('0');
			return;
		}
		
		var extName = ''; //后缀名
		switch (files.file.type) {
			case 'image/pjpeg':
				extName = 'jpg';
				break;
			case 'image/jpeg':
				extName = 'jpg';
				break;
			case 'image/png':
				extName = 'png';
				break;
			case 'image/x-png':
				extName = 'png';
				break;
		}

		if (extName.length == 0) {
			res.locals.error = '只支持png和jpg格式图片';
			res.send('1');
			return;
		}

		var avatarName = Math.random() + '.' + extName;
		var newPath = form.uploadDir + avatarName;
//		console.log(form.uploadDir);
//		console.log(avatarName);
//		console.log('url:'+newPath);
//		console.log(files.file.path);
		fs.renameSync(files.file.path, newPath); //重命名
		//生成上传 Token
		token = uptoken(bucket, avatarName);
		//调用uploadFile上传
		uploadFile(token, avatarName, newPath);
		emptyDir('public' + AVATAR_UPLOAD_FOLDER);
		res.send(avatarName);
	});

	
});

//发表心情
router.post('/post_chart', function(req, res, next) {
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('chart', {
				safe: true
			}, function(err, collection) {

				//插入数据
				var data = {
					uid: req.body.uid,
					uhead: req.body.uhead,
					uname: req.body.uname,
					utext: req.body.utext,
					uimg: req.body.uimg,
					ucomment: 0,
					utime: Date.parse(new Date()),
				}

				collection.insert(data, {
					safe: true
				}, function(err, result) {
					console.log(result);
					res.send(result);
				});

			});
		}
	})
});

//===========================================================

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
					utitle: req.body.utitle,
					uquestion: req.body.uquestion,
					ucomment: 0,
					utime: Date.parse(new Date()),
				}

				collection.insert(data, {
					safe: true
				}, function(err, result) {
					console.log(result);
					res.send(result);
				});

			});
		}
	})
});

module.exports = router;
var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;
var db = require('../../my_modules/db.doc');

var qiniu = require("qiniu");

//图片上传
var formidable = require('formidable');
var fs = require('fs');
var AVATAR_UPLOAD_FOLDER = '/upload/cfdk/';

//需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = 'y77OZ1PgayCWMwh5lBtaUSwi27LFTXwp-69sg7TT';
qiniu.conf.SECRET_KEY = 'Kt7uhWBp3EsLKN72QNiTcdJg4yj4kV4VdHghVA9i';

//要上传的空间
bucket = 'foodapp';

//构建上传策略函数
function uptoken(bucket, key) {
	var putPolicy = new qiniu.rs.PutPolicy(bucket + ":" + key);
	return putPolicy.token();
}

//构造上传函数
function uploadFile(uptoken, key, localFile, res) {
	var extra = new qiniu.io.PutExtra();
	qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
		if(!err) {
			// 上传成功， 处理返回值
			//console.log(ret.hash, ret.key, ret.persistentId);
			//emptyDir('public' + AVATAR_UPLOAD_FOLDER);
			res.send(key);

		} else {
			// 上传失败， 处理返回代码
			//console.log(err);
			res.send('3');
		}
	});
}

//养生头条上传图片构造上传函数
function uploadFile2(uptoken, key, localFile, res, fields) {
	var extra = new qiniu.io.PutExtra();
	qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
		if(!err) {
			// 上传成功， 处理返回值

			//打开数据表
			db.open(function(error, client) {
				if(error) {
					db.close();
					res.render('error');
				} else {

					db.collection('article', {
						safe: true
					}, function(err, collection) {

						//插入数据
						var data = {
							uimg: key,
							utitle: fields.title,
							utext: fields.text,
							ucollect: 0,
							usee: parseInt(Math.random()*1000),
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

			//res.send(key);

		} else {
			// 上传失败， 处理返回代码
			//console.log(err);
			res.send('0');
		}
	});
}

/* GET users listing. */
//后台登录页面
router.get('/', function(req, res, next) {
	//res.clearCookie('cfdkAdmin');
	//console.log(req.cookies.cfdkAdmin);
	//res.cookie('cfdkAdmin', '1', { maxAge: 900000, httpOnly: true })
	//console.log(req.cookies.cfdkAdmin);
	res.render('cfdkAdmin/admin');
});

//图片上传
router.post('/uploadimg', function(req, res, next) {

	console.log(req.body.file);

	var form = new formidable.IncomingForm(); //创建上传表单
	form.encoding = 'utf-8'; //设置编辑
	form.uploadDir = 'public' + AVATAR_UPLOAD_FOLDER; //设置上传目录
	form.keepExtensions = true; //保留后缀
	form.maxFieldsSize = 2 * 1024 * 1024; //文件大小
	form.parse(req, function(err, fields, files) {
		//console.log(files.file);
		if(err) {
			res.locals.error = err;
			res.send('0');
			return;
		}

		var extName = ''; //后缀名
		switch(files.file.type) {
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

		if(extName.length == 0) {
			res.locals.error = '只支持png和jpg格式图片';
			res.send('1');
			return;
		}

		var avatarName = Math.random() + '.' + extName;
		var newPath = form.uploadDir + avatarName;
		fs.renameSync(files.file.path, newPath); //重命名
		//生成上传 Token
		token = uptoken(bucket, avatarName);
		//调用uploadFile上传
		uploadFile(token, avatarName, newPath, res);
	});

});

//发布养生头条
router.get('/sendart', function(req, res, next) {

	res.render('cfdkAdmin/sendART');
});

//养生头条发布
router.post('/sendart', function(req, res, next) {

	var form = new formidable.IncomingForm(); //创建上传表单
	form.encoding = 'utf-8'; //设置编辑
	form.uploadDir = 'public' + AVATAR_UPLOAD_FOLDER; //设置上传目录
	form.keepExtensions = true; //保留后缀
	form.maxFieldsSize = 2 * 1024 * 1024; //文件大小
	form.parse(req, function(err, fields, files) {
		//console.log(fields.title);
		if(err) {
			res.locals.error = err;
			res.send('0');
			return;
		}

		var extName = ''; //后缀名
		switch(files.file.type) {
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

		if(extName.length == 0) {
			res.locals.error = '只支持png和jpg格式图片';
			res.send('1');
			return;
		}

		var avatarName = Math.random() + '.' + extName;
		var newPath = form.uploadDir + avatarName;
		fs.renameSync(files.file.path, newPath); //重命名
		//生成上传 Token
		token = uptoken(bucket, avatarName);
		//调用uploadFile上传
		uploadFile2(token, avatarName, newPath, res, fields);
	});

});

//养生头条列表数据
router.post('/articlelist', function(req, res, next) {
	//console.log(req.body.num);
	var len = req.body.num * 1,
		uid = req.body.uid;
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('article', {
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

//查看文章
router.get('/article/:id', function(req, res, next) {

	var uid = req.params.id;
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('article', {
				safe: true
			}, function(err, collection) {

				collection.find({ "_id": ObjectID(uid) }).toArray(function(err, docs) {
					db.close();
					console.log(docs);
					if(docs.length) {
						res.render('cfdkAdmin/article', { data: docs[0] });
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

//删除养生头条
router.post('/deleart', function(req, res, next) {

	var uid = req.body.uid;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('article', {
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
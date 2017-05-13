var express = require('express');
var router = express.Router();
var qiniu = require("qiniu");
var rongcloudSDK = require('rongcloud-sdk');
rongcloudSDK.init('sfci50a7c59yi', '7yPJfy1ssm');

require('events').EventEmitter.defaultMaxListeners = Infinity;

//console.log(express().setMaxListeners);

//容云发送信息格式测试
textMessageObject = {
	"content": "hello",
	"extra": "helloExtra"
};

var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;
var db = require('../../my_modules/db.doc');

//更新评论数量
function updatacom(coll, id) {
	var colls;
	switch(coll) {
		case '1':
			colls = "question";
			break;
		case '2':
			colls = "work";
			break;
		case '3':
			colls = "chart";
			break;
		default:
			break;
	}
	console.log(colls);
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
		} else {

			db.collection(colls, {
				safe: true
			}, function(err, collection) {

				collection.update({
					"_id": ObjectID(id)
				}, {
					"$inc": {
						"ucomment": 1
					}
				}, {
					safe: true
				}, function(err, result) {
					console.log("评论条数更新成功");
					db.close();
				});

			});
		}
	})

}

//更新用户积分／声望
function updatacuser(coll, id) {
	var colls;
	var opt;
	switch(coll) {
		case '1':
			colls = "uqus";
			opt = {
				"uqus": 1,
				"uhot": 5
			};
			break;
		case '2':
			colls = "uwork";
			opt = {
				"uwork": 1,
				"uhot": 5
			};
			break;
		case '3':
			colls = "ushare";
			opt = {
				"ushare": 1,
				"uhot": 5
			};
			break;
		default:
			break;
	}
	console.log(colls);
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
		} else {

			db.collection("user", {
				safe: true
			}, function(err, collection) {

				collection.update({
					"_id": ObjectID(id)
				}, {
					"$inc": opt
				}, {
					safe: true
				}, function(err, result) {
					console.log("用户更新成功");
					db.close();
				});

			});
		}
	})

}

//更新用户资料
router.post('/alertuser', function(req, res, next) {

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
		} else {

			db.collection("user", {
				safe: true
			}, function(err, collection) {

				collection.update({
					"_id": ObjectID(req.body.id)
				}, {
					$set: {
						"uname": req.body.name,
						"usex": req.body.sex,
						"uheader": req.body.header
					}
				}, {
					safe: true
				}, function(err, result) {
					console.log("用户资料更新成功");
					db.close();
				});

			});
		}
	});

});

//举报
router.post('/jubao', function(req, res, next) {
	//console.log(req.body.num);
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
		} else {

			db.collection(req.body.coll, {
				safe: true
			}, function(err, collection) {

				collection.update({
					"_id": ObjectID(req.body.id)
				}, {
					"$inc": {
						uno: 1
					}
				}, {
					safe: true
				}, function(err, result) {
					console.log("举报成功");
					res.send(result);
					db.close();
				});

			});
		}
	})

});

//举报评论
router.post('/jubaopl', function(req, res, next) {
	//console.log(req.body.num);
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
		} else {

			db.collection("comment_chart", {
				safe: true
			}, function(err, collection) {

				collection.update({
					"_id": ObjectID(req.body.id)
				}, {
					"$inc": {
						uno: 1
					}
				}, {
					safe: true
				}, function(err, result) {
					console.log("举报评论成功");

					res.send(result);
					db.close();
				});

			});
		}
	})

});

function rongSendMessage() {
	//发送人id，接受人id，发送信息类型，发送的内容
	rongcloudSDK.message.publish("11", "58ad9be21246a1442151bd91", 'RC:TxtMsg', JSON.stringify(textMessageObject), function(err, resultText) {
		console.log(resultText); //200为成功
	});
}

var JPush = require("jpush-sdk");
var client = JPush.buildClient('520865321813385a601043b3', '7782c6294d585d16dadfd662');

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

//推送评论
function sendcommentJP(name, maudience, _id, artid, type) {
	//console.log(name);
	console.log(maudience);
	//console.log(_id);

	client.push().setPlatform('ios', 'android')
		.setAudience(JPush.alias(maudience))
		.setNotification('Hi, JPush', JPush.ios(name, '', 1, null, {
			'_id': _id,
			'artid': artid,
			'type': type
		}), JPush.android(name, null, 1, {
			'_id': _id,
			'artid': artid,
			'type': type
		}))
		.setMessage('msg content')
		.send(function(err, res) {
			if(err) {
				if(err instanceof JPush.APIConnectionError) {
					console.log("APIConnectionError:" + err.message);
				} else if(err instanceof JPush.APIRequestError) {
					console.log(err.message);
				}
			} else {
				//console.log('Sendno: ' + res.sendno);
				console.log('Msg_id: ' + res.msg_id);
			}
		});
}

//图片上传
var formidable = require('formidable');
var fs = require('fs');
var AVATAR_UPLOAD_FOLDER = '/upload/cfdk/';

var sizeOf = require('image-size');

//插入函数
function insert(req, res, next, coll, data) {
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection(coll, {
				safe: true
			}, function(err, collection) {

				collection.insert(data, {
					safe: true
				}, function(err, result) {
					//console.log(result);
					res.send(result);
					db.close();
				});

			});
		}
	})
}

//初始化app  home主页数据
router.get('/indexbanner', function(req, res, next) {

	var data = {
		banner: [],
		user: [],
		ad: [],
		hotart: [],
		work: []
	}

	insert(req, res, next, 'home', data);

});

//home获取人气推荐列表
router.post('/indexuserlist', function(req, res, next) {
	//console.log(req.body.num);

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('user', {
				safe: true
			}, function(err, collection) {

				collection.find({}, {
					limit: 8
				}).sort({
					uhot: -1
				}).toArray(function(err, docs) {
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

//home获取养生头条列表
router.post('/indexarticlelist', function(req, res, next) {
	//console.log(req.body.num);

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
					limit: 5
				}).sort({
					usee: -1
				}).toArray(function(err, docs) {
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

//用户声望／热度排名
router.post('/usersort', function(req, res, next) {
	//console.log(req.body.num);
	var len = req.body.len * 1;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('user', {
				safe: true
			}, function(err, collection) {

				collection.find({}, {
					limit: 10,
					skip: len
				}).sort({
					uhot: -1
				}).toArray(function(err, docs) {
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

//菜谱搜索
router.post('/search', function(req, res, next) {
	//console.log(req.body.name);
	var name = req.body.name,
		len = req.body.len * 1;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('work', {
				safe: true
			}, function(err, collection) {

				collection.find({
					utitle: {
						$regex: name,
						$options: "$i"
					}
				}, {
					limit: 30,
					skip: len
				}).sort({
					_id: -1
				}).toArray(function(err, docs) {
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

//home获取人气作品列表
router.post('/indexworklist', function(req, res, next) {
	//console.log(req.body.num);
	var len = req.body.len * 1;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('work', {
				safe: true
			}, function(err, collection) {

				collection.find({}, {
					limit: 10,
					skip: len
				}).sort({
					uhot: -1
				}).toArray(function(err, docs) {
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

//console.log(dimensions.width, dimensions.height);

//需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = 'y77OZ1PgayCWMwh5lBtaUSwi27LFTXwp-69sg7TT';
qiniu.conf.SECRET_KEY = 'Kt7uhWBp3EsLKN72QNiTcdJg4yj4kV4VdHghVA9i';

//要上传的空间
bucket = 'foodapp';

//获取图片的宽度和高度
function getImgHW(avatarName, newPath, res) {
	sizeOf('public' + AVATAR_UPLOAD_FOLDER + avatarName, function(err, dimensions) {
		//console.log(dimensions.width);
		var imgdata = {};
		imgdata["width"] = dimensions.width;
		imgdata["height"] = dimensions.height;
		token = uptoken(bucket, avatarName);
		//调用uploadFile上传
		uploadFile(token, avatarName, newPath, res, imgdata);

	});
}

//上传到七牛后保存的文件名
//key = 'my-nodejs-logo.png';
//构建上传策略函数
function uptoken(bucket, key) {
	var putPolicy = new qiniu.rs.PutPolicy(bucket + ":" + key);
	return putPolicy.token();
}

//console.log(token);
//console.log(__dirname);

//要上传文件的本地路径
filePath = 'http://www.whaleoffshore.com/templets/default/images/logo.png'

//构造上传函数
function uploadFile(uptoken, key, localFile, res, imgdata) {
	var extra = new qiniu.io.PutExtra();
	qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
		if(!err) {
			// 上传成功， 处理返回值
			//console.log(ret.hash, ret.key, ret.persistentId);
			//emptyDir('public' + AVATAR_UPLOAD_FOLDER);
			imgdata["img"] = key;
			//console.log(imgdata);
			res.send(imgdata);

		} else {
			// 上传失败， 处理返回代码
			//console.log(err);
			res.send('3');
		}
	});
}

//调用uploadFile上传
//uploadFile(token, key, filePath);

//删除所有的文件(将所有文件夹置空)
var emptyDir = function(fileUrl) {
	var files = fs.readdirSync(fileUrl); //读取该文件夹
	files.forEach(function(file) {
		var stats = fs.statSync(fileUrl + '/' + file);
		if(stats.isDirectory()) {
			emptyDir(fileUrl + '/' + file);
		} else {
			fs.unlinkSync(fileUrl + '/' + file);
			//console.log("删除文件" + fileUrl + '/' + file + "成功");
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
								ufrom: req.body.ufrom,
								uwork: 0,
								uqus: 0,
								ushare: 0,
								uhot: 0,
								uheader: req.body.uheader,
								qqtoken: req.body.qqtoken,
								utime: Date.parse(new Date()),
							}

							collection.insert(data, {
								safe: true
							}, function(err, result) {
								collection.find({
									"uname": req.body.uname
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

//用户登录
router.post('/applogins', function(req, res, next) {
	//console.log(typeof req.params.id);
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
					"upas": req.body.upas
				}).toArray(function(err, docs) {
					//console.log(docs);
					//console.log(typeof req.params.id);
					//console.log(docs.length);
					db.close();
					if(docs.length) {
						//console.log(docs);
						res.send(docs);

					} else {

						res.send("0");
					}

				});

			});

		}
	})
});

//qq检测，用户是否已经注册过
router.post('/qqapplogins', function(req, res, next) {
	//console.log(typeof req.params.id);
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
					"qqtoken": req.body.qqtoken,
				}).toArray(function(err, docs) {
					//console.log(docs);
					//console.log(typeof req.params.id);
					//console.log(docs.length);
					db.close();
					if(docs.length) {
						//console.log(docs);
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
		//		console.log(form.uploadDir);
		//		console.log(avatarName);
		//		console.log('url:'+newPath);
		//		console.log(files.file.path);
		fs.renameSync(files.file.path, newPath); //重命名

		getImgHW(avatarName, newPath, res);

		//生成上传 Token
		//token = uptoken(bucket, avatarName);
		//调用uploadFile上传
		//uploadFile(token, avatarName, newPath, res);

		//res.send(avatarName);
	});

});

//removecoll("comment_chart");

//评论问答
router.post('/comment_chart', function(req, res, next) {

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('comment_chart', {
				safe: true
			}, function(err, collection) {

				//插入数据
				var data = {
					uid: req.body.uid, //评论人id
					uhead: req.body.uhead, //评论人头像
					uname: req.body.uname, //评论人昵称
					utext: req.body.utext, //评论人内容
					type: req.body.type,
					uno: 0,
					fid: req.body.fid, //作者id
					fhead: req.body.fhead, //作者头像
					fname: req.body.fname, //作者昵称
					ftext: req.body.ftext, //作者文章题目／内容
					utime: Date.parse(new Date()),
					uartid: req.body.uartid, //文章id
					utid: req.body.utid, //接受人id
					nid: req.body.nid, //评论他人评论的评论的_id
				}

				collection.insert(data, {
					safe: true
				}, function(err, result) {
					//console.log("提交评论："+JSON.stringify(result));
					sendcommentJP(req.body.uname + ':评论了你', req.body.utid, result['ops'][0]["_id"], result['ops'][0]["uartid"], result['ops'][0]["type"]);
					res.send(result);
					var coll = result['ops'][0]["type"],
						aid = result['ops'][0]["uartid"];
					updatacom(coll, aid);
				});

			});
		}
	})
});

//获取我的全部评论
router.post('/my_comment_list', function(req, res, next) {
	//console.log(req.body.num);
	var id = req.body.id,
		len = req.body.len * 1;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('comment_chart', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"utid": id,
					"nid": "0"
				}, {
					limit: 10,
					skip: len
				}).sort({
					_id: -1
				}).toArray(function(err, docs) {
					db.close();
					//console.log(id);
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

//获取评论会话列表
router.post('/comment_chart_list', function(req, res, next) {
	//console.log(req.body.num);
	var id = req.body.id,
		type = req.body.type,
		len = req.body.len * 1;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('comment_chart', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"uid": id,
					"utid": id,
					"nid": {
						$ne: 0
					},
					"type": type
				}, {
					limit: 10,
					skip: len
				}).toArray(function(err, docs) {
					db.close();
					//console.log(id);
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

//查看问答评论
router.post('/see_comment_chart', function(req, res, next) {
	//console.log(req.body.num);
	var id = req.body.id;
	var type = req.body.type;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('comment_chart', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"uartid": id,
					"type": type
				}).sort({
					_id: -1
				}).toArray(function(err, docs) {
					db.close();
					//console.log(id);
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
					uimg: JSON.parse(req.body.uimg),
					ucomment: 0,
					uno: 0,
					ucollect: 0,
					utime: Date.parse(new Date()),
				}

				collection.insert(data, {
					safe: true
				}, function(err, result) {
					//console.log(result);
					db.close();
					updatacuser('3', req.body.uid);
					res.send(result);
				});

			});
		}
	})
});

//发表作品
router.post('/post_work', function(req, res, next) {
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('work', {
				safe: true
			}, function(err, collection) {

				//插入数据
				var data = {
					uid: req.body.uid,
					uhead: req.body.uhead,
					uname: req.body.uname,
					utitle: req.body.utitle,
					ubanner: JSON.parse(req.body.ubanner),
					ueat: JSON.parse(req.body.ueat),
					utext: req.body.utext,
					uimg: JSON.parse(req.body.uimg),
					utip: req.body.utip,
					ucomment: 0,
					collect: 0,
					uhot: 0,
					uno: 0,
					utime: Date.parse(new Date()),
				}

				collection.insert(data, {
					safe: true
				}, function(err, result) {
					//console.log(result);
					db.close();
					updatacuser('2', req.body.uid);
					res.send(result);
				});

			});
		}
	})
});

//查看养生头条
router.post('/article', function(req, res, next) {
	//console.log(req.body.num);
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
					"_id": ObjectID(id)
				}).toArray(function(err, docs) {
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

//返回用户信息
router.post('/getuserdata', function(req, res, next) {
	//console.log(req.body.num);
	var id = req.body.id;

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
					"_id": ObjectID(id)
				}).toArray(function(err, docs) {
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

//获取热门养生头条列表
router.post('/hotarticlelist', function(req, res, next) {
	//console.log(req.body.num);
	var len = req.body.len * 1;
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
					limit: 6,
					skip: len
				}).sort({
					usee: -1
				}).toArray(function(err, docs) {
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

//获取养生头条列表
router.post('/articlelist', function(req, res, next) {
	//console.log(req.body.num);
	var len = req.body.len * 1;

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
					limit: 6,
					skip: len
				}).sort({
					_id: -1
				}).toArray(function(err, docs) {
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

//获取作品列表
router.post('/workdata', function(req, res, next) {
	//console.log(req.body.num);
	var len = req.body.len * 1;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('work', {
				safe: true
			}, function(err, collection) {

				collection.find({}, {
					limit: 10,
					skip: len
				}).sort({
					_id: -1
				}).toArray(function(err, docs) {
					db.close();
					//console.log(docs);
					if(docs) {
						res.send(docs);
					} else {
						res.send("0");
					}

				});

			});

		}
	})
});

//获取问答列表
router.post('/quedata', function(req, res, next) {
	//console.log(req.body.num);
	var len = req.body.len * 1;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('question', {
				safe: true
			}, function(err, collection) {

				collection.find({}, {
					limit: 10,
					skip: len
				}).sort({
					_id: -1
				}).toArray(function(err, docs) {
					db.close();
					//console.log(docs);
					if(docs) {
						res.send(docs);
					} else {
						res.send("0");
					}

				});

			});

		}
	})
});

//查看问答
router.post('/seequedata', function(req, res, next) {
	//console.log(req.body.num);
	var id = req.body.id;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('question', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"_id": ObjectID(id)
				}).toArray(function(err, docs) {
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

//查看问答
router.post('/seeworkdata', function(req, res, next) {
	//console.log(req.body.num);
	var id = req.body.id;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('work', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"_id": ObjectID(id)
				}).toArray(function(err, docs) {
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

//获取我的作品
router.post('/getmywork', function(req, res, next) {
	//console.log(req.body.num);
	var id = req.body.uid,
		len = req.body.len * 1;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('work', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"uid": id
				}, {
					limit: 10,
					skip: len
				}).sort({
					_id: -1
				}).toArray(function(err, docs) {
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

//获取我的作品极光推送评论
router.post('/getmywork_jpush', function(req, res, next) {
	//console.log(req.body.num);
	var uid = req.body.uid,
		artid = req.body.artid,
		id = req.body.id,
		type = req.body.type,
		len = req.body.len * 1;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('comment_chart', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"type": type,
					"uartid": artid,
					$or: [{
						"uid": uid
					}, {
						"fid": uid
					}]
				}, {
					limit: 10,
					skip: len
				}).sort({
					_id: -1
				}).toArray(function(err, docs) {
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

//获取我的分享极光推送评论
router.post('/getmychart_jpush', function(req, res, next) {
	//console.log(req.body.artid);
	var uid = req.body.uid,
		artid = req.body.artid,
		id = req.body.id,
		type = req.body.type,
		len = req.body.len * 1;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('comment_chart', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"type": type,
					"uartid": artid,
					$or: [{
						"uid": uid
					}, {
						"fid": uid
					}]
				}, {
					limit: 10,
					skip: len
				}).sort({
					_id: -1
				}).toArray(function(err, docs) {
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

//获取我的问答极光推送评论
router.post('/getmyque_jpush', function(req, res, next) {
	//console.log(req.body.num);
	var uid = req.body.uid,
		artid = req.body.artid,
		id = req.body.id,
		type = req.body.type,
		len = req.body.len * 1;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('comment_chart', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"type": type,
					"uartid": artid,
					$or: [{
						"uid": uid
					}, {
						"fid": uid
					}]
				}, {
					limit: 10,
					skip: len
				}).sort({
					_id: -1
				}).toArray(function(err, docs) {
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

//获取我的分享
router.post('/getmychart', function(req, res, next) {
	//console.log(req.body.num);
	var id = req.body.uid,
		len = req.body.len * 1;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('chart', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"uid": id
				}, {
					limit: 10,
					skip: len
				}).sort({
					_id: -1
				}).toArray(function(err, docs) {
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

//获取我的提问
router.post('/getmyquestion', function(req, res, next) {
	//console.log(req.body.num);
	var id = req.body.uid,
		len = req.body.len * 1;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('question', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"uid": id
				}, {
					limit: 10,
					skip: len
				}).sort({
					_id: -1
				}).toArray(function(err, docs) {
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

//查看分享
router.post('/seechartdata', function(req, res, next) {
	//console.log(req.body.num);
	var id = req.body.id;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('chart', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"_id": ObjectID(id)
				}).toArray(function(err, docs) {
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

//获取分享列表
router.post('/chartdata', function(req, res, next) {
	//console.log(req.body.num);
	var len = req.body.len * 1;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('chart', {
				safe: true
			}, function(err, collection) {

				collection.find({}, {
					limit: 10,
					skip: len
				}).sort({
					_id: -1
				}).toArray(function(err, docs) {
					db.close();
					//console.log(docs);
					if(docs) {
						res.send(docs);
					} else {
						res.send("0");
					}

				});

			});

		}
	})
});

//删除用户发表
router.post('/dele', function(req, res, next) {
	//console.log(req.body.num);
	var coll = req.body.coll,
		id = req.body.id,
		uid = req.body.uid;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection(coll, {
				safe: true
			}, function(err, collection) {

				collection.remove({
					"_id": ObjectID(id),
					"uid": uid
				}, function(err, result) {
					db.close();
					if(!err) {
						//console.log(result)
						res.send(result);
					} else {
						//console.log(err)
						res.send("0");
					}
				});

			});

		}
	})
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
					ufor: 0,
					uno: 0,
					utime: Date.parse(new Date()),
				}

				collection.insert(data, {
					safe: true
				}, function(err, result) {
					//console.log(result);
					db.close();
					updatacuser('1', req.body.uid);
					res.send(result);
				});

			});
		}
	})
});

//收藏
router.post('/tocollect', function(req, res, next) {

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('colltion', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"uartid": req.body.uartid,
					"uid": req.body.uid
				}).toArray(function(err, docs) {

					if(docs.length) {
						db.close();
						console.log("已经收藏过了");
						res.send(docs);
					} else {
						//插入数据
						var data = {
							uid: req.body.uid,
							uartid: req.body.uartid,
							utitle: req.body.utitle,
							utime: Date.parse(new Date()),
						}

						collection.insert(data, {
							safe: true
						}, function(err, result) {
							//console.log(result);
							db.close();

							res.send(result);
						});
					}

				});

			});

		}
	})

});

//我的收藏
router.post('/mytocollect', function(req, res, next) {
	//console.log(req.body.num);
	var id = req.body.id;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('colltion', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"uid": id
				}).toArray(function(err, docs) {
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

//关注
router.post('/fork', function(req, res, next) {

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('fork', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"uid": req.body.uid,
					"fid": req.body.fid
				}).toArray(function(err, docs) {

					if(docs.length) {
						db.close();
						//console.log("已经关注过了");
						res.send(docs);
					} else {
						//插入数据
						var data = {
							uid: req.body.uid,
							fid: req.body.fid,
							fname: req.body.fname,
							fhead: req.body.fhead,
						}

						collection.insert(data, {
							safe: true
						}, function(err, result) {
							//console.log(result);
							db.close();

							res.send(result);
						});
					}

				});

			});

		}
	})

});

//我的关注
router.post('/myfork', function(req, res, next) {
	//console.log(req.body.num);
	var id = req.body.id;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('fork', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"uid": id
				}).toArray(function(err, docs) {
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

//App版本
router.get('/appversion', function(req, res, next) {

	res.send("0.0.6");
});

module.exports = router;
var express = require('express');
var router = express.Router();
var qiniu = require("qiniu");
var rongcloudSDK = require('rongcloud-sdk');
rongcloudSDK.init( 'sfci50a7c59yi', '7yPJfy1ssm' );

//容云发送信息格式测试
textMessageObject = {"content":"hello","extra":"helloExtra"};

function rongSendMessage(){
	//发送人id，接受人id，发送信息类型，发送的内容
	rongcloudSDK.message.publish("11", "58ad9be21246a1442151bd91", 'RC:TxtMsg', JSON.stringify( textMessageObject ), function( err, resultText ){
		console.log(resultText);  //200为成功
	});
}


var JPush = require("jpush-sdk");
var client = JPush.buildClient('520865321813385a601043b3', '2ed0ebd2b677de91f12e57fa');



//推送评论
function sendcommentJP(name,Audience,_id){
	console.log(name);
	console.log(Audience);
	console.log(_id);
	
	client.push().setPlatform('ios', 'android')
    .setAudience(JPush.alias(Audience))
    .setNotification('Hi, JPush', JPush.ios(name,'',1,null, {'_id':_id}), JPush.android(name, null, 1, {'_id':_id}))
    .setMessage('msg content')
    .send(function(err, res) {
        if (err) {
            if (err instanceof JPush.APIConnectionError) {
                console.log(err.message);
                //Response Timeout means your request to the server may have already received, please check whether or not to push
                console.log(err.isResponseTimeout);
            } else if (err instanceof  JPush.APIRequestError) {
                console.log(err.message);
            }
        } else {
            console.log('Sendno: ' + res.sendno);
            console.log('Msg_id: ' + res.msg_id);
        }
    });
}





var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;
var db = require('../../my_modules/db.doc');

//图片上传
var formidable = require('formidable');
var fs = require('fs');
var AVATAR_UPLOAD_FOLDER = '/upload/cfdk/';

var sizeOf = require('image-size');

//初始化app  home主页数据
router.get('/indexbanner', function(req, res, next) {

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('home', {
				safe: true
			}, function(err, collection) {

				//插入数据
				var data = {
					banner: [],
					user: [],
					ad: [],
					hotart: [],
					work: []
				}

				collection.insert(data, {
					safe: true
				}, function(err, result) {
					//console.log(result);
					res.send(result);
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
		console.log(dimensions.width);
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
			console.log(imgdata);
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
			console.log("删除文件" + fileUrl + '/' + file + "成功");
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
								uheader: '',
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
router.post('/logins', function(req, res, next) {
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
						console.log(docs.length);
						res.send(docs);
						console.log("send");
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
					uid: req.body.uid,
					uhead: req.body.uhead,
					uname: req.body.uname,
					utext: req.body.utext,
					type: req.body.utype,
					uno: 0,
					utime: Date.parse(new Date()),
					utitle:req.body.utitle,
					uartid:req.body.uartid,
					utid: req.body.utid,
					nid: req.body.nid,
				}

				collection.insert(data, {
					safe: true
				}, function(err, result) {
					console.log(result['ops'][0]["_id"]);
					sendcommentJP(req.body.uname+':评论了你', req.body.utid, result['ops'][0]["_id"]);
					res.send(result);
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

				collection.find({ "uartid": id,"type": type }).sort({ _id: -1 }).toArray(function(err, docs) {
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
					console.log(result);
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
					console.log(result);
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

				collection.find({ "_id": ObjectID(id) }).toArray(function(err, docs) {
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

				collection.find({}, { limit: 10, skip: len }).sort({ _id: -1 }).toArray(function(err, docs) {
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

				collection.find({}, { limit: 10, skip: len }).sort({ _id: -1 }).toArray(function(err, docs) {
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

				collection.find({}, { limit: 10, skip: len }).sort({ _id: -1 }).toArray(function(err, docs) {
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

				collection.find({ "_id": ObjectID(id) }).toArray(function(err, docs) {
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

				collection.find({ "_id": ObjectID(id) }).toArray(function(err, docs) {
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

				collection.find({ "_id": ObjectID(id) }).toArray(function(err, docs) {
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

				collection.find({}, { limit: 10, skip: len }).sort({ _id: -1 }).toArray(function(err, docs) {
					db.close();
					console.log(docs);
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
					console.log(result);
					res.send(result);
				});

			});
		}
	})
});

module.exports = router;
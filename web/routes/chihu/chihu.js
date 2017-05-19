var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;
var db = require('../../my_modules/db.doc.chihu');
var JPush = require("jpush-sdk");
var client = JPush.buildClient('634af50eb57e7339d2dc370b', 'f6f0e2c6a40d16beb455e57c');
var qiniu = require("qiniu");
//需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = 'y77OZ1PgayCWMwh5lBtaUSwi27LFTXwp-69sg7TT';
qiniu.conf.SECRET_KEY = 'Kt7uhWBp3EsLKN72QNiTcdJg4yj4kV4VdHghVA9i';

//图片上传
var formidable = require('formidable');
var fs = require('fs');
var AVATAR_UPLOAD_FOLDER = '/upload/chihu/';

var sizeOf = require('image-size');

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

//构建上传策略函数
function uptoken(bucket, key) {
	var putPolicy = new qiniu.rs.PutPolicy(bucket + ":" + key);
	return putPolicy.token();
}

//要上传文件的本地路径
filePath = 'http://www.whaleoffshore.com/templets/default/images/logo.png'

//构造上传函数
function uploadFile(uptoken, key, localFile, res, imgdata) {
	var extra = new qiniu.io.PutExtra();
	qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
		if(!err) {
			// 上传成功， 处理返回值
			imgdata["src"] = "http://7xp2ia.com1.z0.glb.clouddn.com/" + key;
			res.send(imgdata);
		} else {
			// 上传失败， 处理返回代码
			res.send('0');
		}
	});
}

//图片上传
router.post('/upload', function(req, res, next) {

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
		getImgHW(avatarName, newPath, res);
	});

});

function jp(title, conttext, alias) {
	client.push().setPlatform('ios', 'android')
		.setAudience(JPush.alias(alias))
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

//var data = [{
//	_id: 'kongdewen666',
//	name: "Devon",
//	userimg: "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
//	forkqus: '1',
//	forkuser: '0',
//	fork: '0',
//	dec: '吃乎，开启美食之旅...每天分享新事物，新食物...',
//	work: '200',
//	share: '200',
//	sex: '0',
//	city: '中国',
//	job: 'IT',
//	integral: '200',
//	title: '吃乎达人',
//	report: '0',
//	form: 'register',
//	time: '1493802411111',
//	pass: '123456'
//}];

//var data = [{
//	isshow: "0",
//	uid: "5919860d65fe31bd2abc4834",
//	answerid: "590b2e8cd65af8b34dd02f31",
//	name: "JOMM",
//	userimg: "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
//	title: "蒸米饭到底该加什么水",
//	dec: "我邻居就是东北人，一直吃米饭，他们说如果用电饭煲蒸米饭，最好用凉水，这样米容易熟，用热水可能会有点生，需要多加水。",
//	text: "我邻居就是东北人，一直吃米饭，他们说如果用电饭煲蒸米饭，最好用凉水，这样米容易熟，用热水可能会有点生，需要多加水。但如果从营养角度来说，还是用热水比较好，这样蒸的时间短，营养不容易流失。",
//	time: 1493802420000,
//	mark: {
//		think: 0,
//		collect: 0,
//		cont: 0,
//		report: 0
//	},
//	type: "0"
//}];

//var data = [{
//	"_id": "591a731fec28e9f92d671d87",
//	"isshow": "0",
//	"uid": "5919860d65fe31bd2abc4834",
//	"answerid": "590b2e8cd65af8b34dd02f31",
//	"name": "JOMM",
//	"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
//	"title": "蒸米饭到底该加什么水",
//	"dec": "我邻居就是东北人，一直吃米饭，他们说如果用电饭煲蒸米饭，最好用凉水，这样米容易熟，用热水可能会有点生，需要多加水。",
//	"text": "我邻居就是东北人，一直吃米饭，他们说如果用电饭煲蒸米饭，最好用凉水，这样米容易熟，用热水可能会有点生，需要多加水。但如果从营养角度来说，还是用热水比较好，这样蒸的时间短，营养不容易流失。",
//	"time": 1493802420000,
//	"mark": {
//		"think": 0,
//		"collect": 0,
//		"cont": 0,
//		"report": 0
//	},
//	"type": "0"
//}]

//var data = {
//	"_id": "5909f06761ee44f946ade439",
//	"isshow": "5909ef0063a02f025fcf862e",
//	"work": [{
//		"width": 600,
//		"src": "http://s1.cdn.xiachufang.com/13aa38b68c8e11e6a9a10242ac110002_199w_172h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
//		"text": "将肉洗净，切分成粗条",
//		"height": 400
//	}, {
//		"width": 600,
//		"src": "http://s2.cdn.xiachufang.com/13d32c448c8e11e6b87c0242ac110003_202w_175h.jpg?imageView2/2/w/300/interlace/1/q/90",
//		"text": "将肉条放入容器中，放入叉烧酱",
//		"height": 400
//	}, {
//		"width": 600,
//		"src": "http://s2.cdn.xiachufang.com/142600048c8e11e6a9a10242ac110002_201w_174h.jpg?imageView2/2/w/300/interlace/1/q/90",
//		"text": "放入葱白",
//		"height": 400
//	}, {
//		"width": 600,
//		"src": "http://s2.cdn.xiachufang.com/144d71ac8c8e11e6a9a10242ac110002_201w_175h.jpg?imageView2/2/w/300/interlace/1/q/90",
//		"text": "蒜用刀背拍扁，姜切片",
//		"height": 400
//	}, {
//		"width": 600,
//		"src": "http://s1.cdn.xiachufang.com/146b9a2e8c8e11e6b87c0242ac110003_200w_175h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
//		"text": "将姜和蒜放入，放入白酒",
//		"height": 400
//	}, {
//		"width": 600,
//		"src": "http://s2.cdn.xiachufang.com/14e142928c8e11e6a9a10242ac110002_198w_173h.jpg?imageView2/2/w/300/interlace/1/q/90",
//		"text": "放入1大勺蜂蜜",
//		"height": 400
//	}, {
//		"width": 600,
//		"src": "http://s2.cdn.xiachufang.com/150f1e068c8e11e6b87c0242ac110003_201w_173h.jpg?imageView2/2/w/300/interlace/1/q/90",
//		"text": "用手抓拌，让肉均匀地沾到酱汁，盖上盖子放置于凉处静置2小时左右",
//		"height": 400
//	}, {
//		"width": 600,
//		"src": "http://s2.cdn.xiachufang.com/155da1168c8e11e6a9a10242ac110002_200w_175h.jpg?imageView2/2/w/300/interlace/1/q/90",
//		"text": "捡出葱白、姜、蒜不要，继续腌制18个小时",
//		"height": 400
//	}, {
//		"width": 600,
//		"src": "http://s2.cdn.xiachufang.com/1593bea48c8e11e6a9a10242ac110002_201w_176h.jpg?imageView2/2/w/300/interlace/1/q/90",
//		"text": "预热烤箱至200度，在烤盘中铺上锡纸，整理锡纸形成方盘状",
//		"height": 400
//	}, {
//		"width": 600,
//		"src": "http://s2.cdn.xiachufang.com/15f846588c8e11e6b87c0242ac110003_201w_175h.jpg?imageView2/2/w/300/interlace/1/q/90",
//		"text": "将腌好的肉放到烤网上，两面都刷上适量蜂蜜",
//		"height": 400
//	}, {
//		"width": 600,
//		"src": "http://s1.cdn.xiachufang.com/16995b568c8e11e6a9a10242ac110002_200w_175h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
//		"text": "将烤盘放于烤箱底层，烤网放于中层，烤20分钟。取出后将肉两面都刷一遍剩余的酱汁，再刷一遍蜂蜜",
//		"height": 400
//	}, {
//		"width": 600,
//		"src": "http://s2.cdn.xiachufang.com/16f2a0f88c8e11e6b87c0242ac110003_201w_177h.jpg?imageView2/2/w/300/interlace/1/q/90",
//		"text": "继续烤20分钟左右至肉熟透，取出后再刷一遍蜂蜜，晾至微凉即可切片食用",
//		"height": 400
//	}],
//	"uid": "kongdewen666",
//	"title": "叉烧肉",
//	"food": [{
//		"name": "梅花肉",
//		"len": "600克"
//	}, {
//		"name": "叉烧酱",
//		"len": "3大勺"
//	}, {
//		"name": "葱白",
//		"len": "15克"
//	}, {
//		"name": "姜",
//		"len": "1克"
//	}, {
//		"name": "蒜",
//		"len": "3克"
//	}, {
//		"name": "白酒",
//		"len": "1大勺"
//	}, {
//		"name": "蜂蜜",
//		"len": "适量"
//	}],
//	"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
//	"workbanner": "http://s2.cdn.xiachufang.com/3c201be8873511e6a9a10242ac110002_455w_677h.jpg?imageView2/2/w/660/interlace/1/q/90",
//	"tip": "1、在腌肉时用手给肉做做按摩，可以使其吸收酱汁更快。\r2、葱、姜、蒜味道太重，不要放置时间过长，捡出后只用酱汁腌即可。总体腌制时间约20个小时，比较入味和上色，也可适当缩短或延长时间。\r3、烤盘上放锡纸置于烤箱内底层，用来接烤肉时掉下的油，这种油黑黑的不好清洗，不要直接用烤盘接。",
//	"mark": {
//		"report": 0,
//		"collect": 324,
//		"cont": 56,
//		"think": 127
//	},
//	"time": 1493802420000,
//	"text": "粤菜的叉烧肉，近年来亦成为身为东北人的我家里年三十晚上的年菜，每每有客来到，总会吃得惊喜。它的甜蜜滋味，给浓浓的年味又增加了甜味，无论是佐饭还是配酒，堪称百搭滴年菜。",
//	"type": "1",
//	"name": "Devon"
//}

var data = [{
	v: "1.0.1",
	url: "https://github.com/kongdewen1994/chihu/raw/master/android-debug.apk"
}]

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
	removecoll("appversion");
	res.send('0');
})

router.get('/update', function(req, res, next) {
	db.open(function(error, client) {
		if(error) {
			db.close();
		} else {

			db.collection('share', {
				safe: true
			}, function(err, collection) {

				collection.update({
					'time': 1495175420000
				}, {
					$set: {
						img: [{
							"width": 400,
							"height": 400,
							"src": "http://7xp2ia.com1.z0.glb.clouddn.com/0.6631792476141922.jpg"
						}, {
							"width": 448,
							"height": 448,
							"src": "http://7xp2ia.com1.z0.glb.clouddn.com/0.32343853384337673.jpg"
						}]
					}
				}, {
					multi: true
				}, function(err, result) {
					if(!err) {
						res.send(result);
					}

					db.close();
				});

			});
		}
	})
})

//print data
router.get('/print', function(req, res, next) {

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
					limit: 1
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

//app home首页数据
router.get('/home_data', function(req, res, next) {

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('appversion', {
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

//提问列表
router.post('/queslist', function(req, res, next) {

	var len = req.body.len;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('answer', {
				safe: true
			}, function(err, collection) {

				collection.find({}, {
					limit: 20
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

//感谢分享作品或回答
router.post('/thank', function(req, res, next) {
	var id = req.body.id;
	var name = req.body.name;
	var uid = req.body.uid + '';
	var type = req.body.type;
	var userimg = req.body.userimg;
	var artid = req.body.artid;
	var title = req.body.title;
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
		} else {
			var col = 'article';
			var updata = {
				"mark.think": 1
			};
			if(type == '2') {
				col = 'share';
				updata = {
					"mark.like": 1
				};
			}

			db.collection(col, {
				safe: true
			}, function(err, collection) {

				collection.update({
						"_id": ObjectID(id)
					}, {
						"$inc": updata
					}, {
						safe: true
					},
					function(err, result) {
						var conttext = "";

						switch(type) {
							case '0':
								conttext = name + "  ❤️️感谢了你的回答";
								break;
							case '1':
								conttext = name + "  ❤️感谢了你的作品分享";
								break;
							case '2':
								conttext = name + "  👍点赞了你的分享";
								break;
							default:
								break;
						}

						db.collection('thank', {
							safe: true
						}, function(err, collection) {

							//插入数据
							var datas = {
								uid: uid, //感谢的目标用户id
								id: id, //自己的id
								userimg: userimg, //自己的头像
								artid: artid, //文章的id
								isread: 0, //0为未读，1为已读
								title: title, //感谢的文档标题
								type: type, //0为文章，1为分享
								conttext: conttext, //	标示
							};
							//console.log(datas);
							collection.insert(datas, {
								safe: true
							}, function(err, result) {
								jp("吃乎通知", conttext, uid);
								res.send(result);
								db.close();
							});

						});

					});

			});
		}
	})

});

//关注某人
router.post('/forkuser', function(req, res, next) {
	var uid = req.body.uid;
	var id = req.body.id;
	var name = req.body.name;
	var userimg = req.body.userimg;
	var uname = req.body.uname;
	var uuserimg = req.body.uuserimg;
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('user', {
				safe: true
			}, function(err, collection) {

				collection.update({
						"_id": uid == "kongdewen666" ? uid : ObjectID(uid)
					}, {
						"$inc": {
							fork: 1
						}
					}, {
						safe: true
					},
					function(err, result) {

						collection.update({
								"_id": id == "kongdewen666" ? id : ObjectID(id)
							}, {
								"$inc": {
									forkuser: 1
								}
							}, {
								safe: true
							},
							function(err, result) {
								db.collection('forkme', {
									safe: true
								}, function(err, collection) {
									//插入数据
									var datas = {
										uid: uid, //关注我的目标用户id
										id: id, //自己的id
										uname: uname, //关注我的目标用户昵称
										name: name, //关注我的昵称
										uuserimg: uuserimg, //关注我的目标用户头像
										userimg: userimg, //关注我的头像
										isread: 0, //0为未读，1为已读
										time: Date.parse(new Date())
									};

									collection.insert(datas, {
										safe: true
									}, function(err, result) {
										var conttext = name + " ➕关注了我";
										jp("吃乎通知", conttext, uid);
										res.send(result);
										db.close();
									})

								})
							})

					})

			});

		}
	})
});

//查看我的关注通知
router.post('/getfork', function(req, res, next) {
	var uid = req.body.uid;
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('forkme', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"uid": uid + ''
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
})

//检查是否已经关注了对方
router.post('/checkfork', function(req, res, next) {
	var uid = req.body.uid;
	var id = req.body.id;
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('forkme', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"uid": uid + '',
					"id": id + ''
				}).toArray(function(err, docs) {
					db.close();
					res.send(docs);
				});

			});

		}
	})
})

//查看我的关注列表
router.post('/myfork', function(req, res, next) {
	var id = req.body.id;
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('forkme', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"id": id + ''
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
})

//查看我的赞和感谢
router.post('/getthank', function(req, res, next) {

	var uid = req.body.uid;
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('thank', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"uid": uid
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
					jp("吃乎通知", "👏🍰欢迎登陆吃乎", docs[0]["_id"] + '');
					res.send(docs);
				});

			});

		}
	})
});

//获取用户信息
router.post('/getuserdata', function(req, res, next) {

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
				var _id = id == "kongdewen666" ? id : ObjectID(id);
				collection.find({
					"_id": _id
				}).toArray(function(err, docs) {
					db.close();
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
								forkqus: 0,
								forkuser: 0,
								fork: 0,
								dec: '吃乎，开启美食之旅...',
								work: 0,
								share: 0,
								sex: '0',
								city: '',
								job: '',
								integral: 0,
								title: '吃乎学者',
								report: 0,
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
									jp("吃乎通知", "👏🍰注册成功，欢迎登陆吃乎", docs[0]["_id"] + '');
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

//关注问题
router.post('/forkquestion', function(req, res, next) {
	var uid = req.body.uid;
	var id = req.body.id;
	var name = req.body.name;
	var userimg = req.body.userimg;
	var title = req.body.title;
	var artid = req.body.artid;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('user', {
				safe: true
			}, function(err, collection) {

				collection.update({
						"_id": id == "kongdewen666" ? id : ObjectID(id)
					}, {
						"$inc": {
							forkqus: 1
						}
					}, {
						safe: true
					},
					function(err, result) {
						db.collection('answer', {
							safe: true
						}, function(err, collection) {

							collection.update({
									"_id": ObjectID(artid)
								}, {
									"$inc": {
										fork: 1
									}
								}, {
									safe: true
								},
								function(err, result) {
									db.collection('forkquestion', {
										safe: true
									}, function(err, collection) {
										//插入数据
										var datas = {
											uid: uid, //关注的问题发布用户id
											id: id, //自己的id
											name: name, //关注我的昵称
											title: title, //问题的标题
											userimg: userimg, //关注我的头像
											isread: 0, //0为未读，1为已读
											artid: artid, //问题id
											time: Date.parse(new Date())
										};

										collection.insert(datas, {
											safe: true
										}, function(err, result) {
											var conttext = name + " 关注了提问<" + title + ">❓";
											jp("吃乎通知", conttext, uid);
											res.send(result);
											db.close();
										})

									})
								})

						});
					})

			});

		}
	})
});

//查看我的关注的提问列表
router.post('/getforkquestion', function(req, res, next) {
	var id = req.body.id;
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('forkquestion', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"id": id + ''
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
})

//检查是否已经关注了对方
router.post('/checkforkquestion', function(req, res, next) {
	var artid = req.body.artid;
	var id = req.body.id;
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('forkquestion', {
				safe: true
			}, function(err, collection) {

				collection.find({
					"artid": artid + '',
					"id": id + ''
				}).toArray(function(err, docs) {
					db.close();
					res.send(docs);
				});

			});

		}
	})
})

//删除用户发表
router.post('/disfork_user', function(req, res, next) {
	//console.log(req.body.num);
	var id = req.body.id,
		uid = req.body.uid;

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection("forkme", {
				safe: true
			}, function(err, collection) {

				collection.remove({
					"id": id,
					"uid": uid
				}, function(err, result) {

					if(!err) {
						db.collection('user', {
							safe: true
						}, function(err, collection) {

							collection.update({
									"_id": uid == "kongdewen666" ? uid : ObjectID(uid)
								}, {
									"$inc": {
										fork: -1
									}
								}, {
									safe: true
								},
								function(err, result) {

									collection.update({
											"_id": id == "kongdewen666" ? id : ObjectID(id)
										}, {
											"$inc": {
												forkuser: -1
											}
										}, {
											safe: true
										},
										function(err, result) {
											db.close();
											if(!err) {
												res.send(result);
											} else {
												res.send("0");
											}
										})
								})
						})
					} else {
						db.close();
						res.send("0");
					}
				});

			});

		}
	})
});

//App版本
router.post('/appversion', function(req, res, next) {

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('appversion', {
				safe: true
			}, function(err, collection) {

				collection.find({}).toArray(function(err, docs) {
					db.close();
					res.send(docs);
				});

			});

		}
	})
});

//发表提问
router.post('/send_question', function(req, res, next) {
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('answer', {
				safe: true
			}, function(err, collection) {

				//插入数据
				var data = {
					isshow: "1",
					uid: req.body.uid,
					name: req.body.name,
					userimg: req.body.userimg,
					title: req.body.title,
					text: req.body.text,
					time: Date.parse(new Date()),
					fork: 0,
					answer: 0,
					report: 0
				}

				collection.insert(data, {
					safe: true
				}, function(err, result) {
					db.close();
					res.send(result);
				});

			});
		}
	})
});

//发表分享
router.post('/send_share', function(req, res, next) {
	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('share', {
				safe: true
			}, function(err, collection) {

				//插入数据
				var data = {
					isshow: "1",
					uid: req.body.uid,
					img: JSON.parse(req.body.img),
					userimg: req.body.userimg,
					time: Date.parse(new Date()),
					mark: {
						cont: 0,
						like: 0,
						report: 0
					},
					text: req.body.text,
					name: req.body.name
				}

				collection.insert(data, {
					safe: true
				}, function(err, result) {
					db.close();
					res.send(result);
				});

			});
		}
	})
});

module.exports = router;
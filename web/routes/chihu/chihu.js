var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;
var db = require('../../my_modules/db.doc.chihu');
var JPush = require("jpush-sdk");
var client = JPush.buildClient('634af50eb57e7339d2dc370b', 'f6f0e2c6a40d16beb455e57c');

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

var data = [{
	isshow: "0",
	uid: "5919860d65fe31bd2abc4834",
	answerid: "590b2e8cd65af8b34dd02f31",
	name: "JOMM",
	userimg: "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
	title: "蒸米饭到底该加什么水",
	dec: "我邻居就是东北人，一直吃米饭，他们说如果用电饭煲蒸米饭，最好用凉水，这样米容易熟，用热水可能会有点生，需要多加水。",
	text: "我邻居就是东北人，一直吃米饭，他们说如果用电饭煲蒸米饭，最好用凉水，这样米容易熟，用热水可能会有点生，需要多加水。但如果从营养角度来说，还是用热水比较好，这样蒸的时间短，营养不容易流失。",
	time: 1493802420000,
	mark: {
		think: 0,
		collect: 0,
		cont: 0,
		report: 0
	},
	type: "0"
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

			db.collection('answer', {
				safe: true
			}, function(err, collection) {

				collection.update({
					'_id': '590b2e8cd65af8b34dd02f31'
				}, {
					$set: {
						answer: 2
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

//app home首页数据
router.get('/home_data', function(req, res, next) {

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('error');
		} else {

			db.collection('article', {
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

module.exports = router;
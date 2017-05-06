var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;
var db = require('../../my_modules/db.doc.chihu');

var data = [{
	isshow: "0",
	uid: "1",
	answerid: "590b2e8cd65af8b34dd02f31",
	name: "Devon",
	userimg: "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
	title: "蒸米饭到底该加什么水",
	dec: "之所以会出现不建议用生水直接煮米饭的说法，其原因主要是因为自来水中含有的氯气。自来水中的氯来源于哪里?自来水中的氯主要是来自漂白剂，水中会含有余氯。自来水厂在水中添加漂白剂的作用主要是用来消毒，氯气消毒法是生产自来水的最后一个环节。",
	text: "之所以会出现不建议用生水直接煮米饭的说法，其原因主要是因为自来水中含有的氯气。自来水中的氯来源于哪里?自来水中的氯主要是来自漂白剂，水中会含有余氯。自来水厂在水中添加漂白剂的作用主要是用来消毒，氯气消毒法是生产自来水的最后一个环节。往水里加氯气经反应后即可把水输送到市民家庭使用。氯气本身有一股刺鼻的气味， 如果烧水做饭的时候闻到这股味道， 说明水质本身有问题。 按照国家标准《 生活饮用水卫生标准》， 从自来水厂出来的水中余氯的含量要低于4mg / L， 而我们家中自来水余氯的含量一般是0 .33 mg / L。 自来水在经过加热沸腾以后， 氯气就会挥发， 烧开的水中氯的含量仅为0 .03 mg / L， 这个量是非常低的。 即使我们在蒸锅热饭的时候盖上锅盖， 但并不是完全密封， 加热以后， 氯气还是会挥发掉的， 完全不用担心自来水中含氯的问题。热水煮饭不仅可以缩短蒸煮的时间， 还可以防止大米中B族维生素因长时间高温加热而受到破坏， 从而可以保留更多的营养物质。要想蒸出好吃的米饭， 还可以在米饭中加点料， 比如果蔬汁在蒸米饭的时候加入果蔬汁， 做出来的米饭不仅看起来就更加有食欲， 还增加了营养;用茶叶水煮出来的米饭含有淡淡的茶香， 茶叶中的茶多酚有较强的抗氧化、 抑制细菌等作用， 有助于抑制心脑血管疾病…… ",
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

//removecoll("article");

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

module.exports = router;
var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;
var db = require('../../my_modules/db.doc.chihu');

var data = [{
		"py_id": "5909af7563a02f0da4bb21f7",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/98d2278699c411e69ce70242ac110002_650w_650h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "把蒜姜切成末，在鸡翅里面加入姜蒜末，黑胡椒，酱油盐糖料酒抓匀腌制一晚直至入味。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/988267c899c411e6b2400242ac110002_650w_650h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "把鸡蛋搅匀，把腌制好的鸡翅先放在鸡蛋液里裹上蛋液以后然后再放到面包糠里面",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/984ca34a99c411e69ce70242ac110002_650w_650h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "准备一个盘子，把筷子架在盘子上，把裹好面包糠的鸡翅摆在筷子上。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/98170f3c99c411e69ce70242ac110002_650w_650h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "那么重点来了！怎样让鸡翅变成炸鸡口感！首先你要有一个微波炉！把裹好面包糠的并且架在筷子上的鸡翅放进微波炉里面。中高火5-6分钟。检验鸡翅是不是熟了就拿筷子在鸡翅上戳，如果能轻松戳透就说明鸡翅熟了。每家的微波炉都不一样，根据自家的微波炉时间进行调整。没用一滴油，鸡翅里面的油反而出来了（不一定非要6分钟！可以缩短时间！）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/97ca9e9a99c411e69ce70242ac110002_650w_650h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "熟了！开吃吧！",
				"height": 400
			}
		],
		"uid": 1,
		"title": "不用油炸不用空气炸锅不用一滴油的炸鸡翅",
		"food": [{
				"name": "鸡翅",
				"len": "鸡翅"
			},
			{
				"name": "蒜瓣",
				"len": "蒜瓣"
			},
			{
				"name": "姜片",
				"len": "姜片"
			},
			{
				"name": "现磨黑胡椒",
				"len": "现磨黑胡椒"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "面包糠",
				"len": "面包糠"
			},
			{
				"name": "几根筷子",
				"len": "几根筷子"
			},
			{
				"name": "糖",
				"len": "糖"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/1b074f7c88dd11e6a9a10242ac110002_650w_650h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "关于调料的多少根据个人喜好程度来，咸淡自己进行适量调节。鸡翅有大小，所以每个人加盐量肯定也不同个人觉得加了姜末以后味道更香，当狼啦，不喜欢姜味的可以不加。这个口感肯定没有油炸的那么到位啦！不过我觉得还不错，主要是低油，不会产生油烟味，节约油等有点。喜欢油炸口感的请绕行具体可以参考节目《是真的吗》15年一月份具体哪一期我忘记了。只是分享方法，不喜勿喷。有盆友反应会把微波炉搞得蛮脏的，做之前在微波炉转盘上铺一层不怕高温的纸或者别的东西，做完了把纸连着脏东西一起拿出来应该会好很多",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "之前在央视的一档节目《是真的吗》看到的，看到了这个方法，然后一直长草，但是因为我的拖延症一直都没有做！呵呵哒，可恶的拖延症。想吃炸鸡翅？热量太高！太油腻！看这里！帮你解馋！因为鸡翅大小不一，用的面包糠具体多少没有记录，为了防止浪费一点一点的倒进空盘子看小贴士！跟油炸不一样的就是面包糠没有那么脆！整体会偏干，而且一定要注意微波炉的时间！很多朋友反映不好吃！可以试试把面包糠先放在锅里用油稍微炒一下！或者用烤箱180度30分钟上下火！不一定非要用烤箱。不是油炸物，肯定也没有用油炸出来那么好吃。主要是低热量！只是分享一种方法哦！不喜勿喷！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7563a02f0da4bb21f8",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e3e9c9688bf011e6b87c0242ac110003_200w_150h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "就连在四川的饭馆吃个鱼香肉丝都容易踩雷 边吃边骂还不如自己做 这次特意把平时照着感觉来的配方量化了一下方便你们操作 原料 猪腿肉180g 泡椒 8g 姜蒜各10g 葱少许 水发木耳和胡萝卜少许(胡萝卜可用笋丝或者莴笋代替)。谁告诉你鱼香肉丝要加豆瓣的",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e40b8e4a8bf011e6a9a10242ac110002_200w_150h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "猪腿肉 木耳和胡萝卜切丝，泡椒和姜蒜切末 重点在于滋汁: 白糖10g 香醋(保宁醋/镇江香醋)10g 老抽2g 生抽3g 盐1g 清汤10g 淀粉一勺调匀。如果有德阳红酱油更好，直接用5g德阳红酱油代替老抽和生抽",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/e42a26488bf011e6a9a10242ac110002_200w_150h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "肉用水淀粉和1-2g盐拌匀，拌好后加入生清油调匀，这个办法可以锁住水份保持嫩度，也可以适当减少肉丝翻炒的时候粘连的程度。淀粉最好选择红薯淀粉",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e44a4cde8bf011e6b87c0242ac110003_200w_150h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "热锅凉油(菜籽油)，炒到断生，烹入少许料酒。料酒做法自己查酒曲相册，我懒得找了－ －",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e46841628bf011e6b87c0242ac110003_200w_150h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "把肉丝拨到一边，中小火爆香姜蒜泡椒末，直到油色红亮为止",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e483c34c8bf011e6a9a10242ac110002_200w_150h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "然后保持肉丝在旁边的状态，下胡萝卜和木耳丝炒至断生，在蔬菜里下约1g盐。然后烹入之前的滋汁，合匀，起锅前加入葱花",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/e4a46b7e8bf011e6a9a10242ac110002_200w_150h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "精确到g不容易好么！！不给好评么！！！做了好歹汇报一下好吗！！［打滚",
				"height": 400
			}
		],
		"uid": 1,
		"title": "鱼香肉丝",
		"food": [{
				"name": "猪腿肉",
				"len": "猪腿肉"
			},
			{
				"name": "泡椒",
				"len": "泡椒"
			},
			{
				"name": "姜",
				"len": "姜"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "水发木耳",
				"len": "水发木耳"
			},
			{
				"name": "胡萝卜",
				"len": "胡萝卜"
			},
			{
				"name": "白糖",
				"len": "白糖"
			},
			{
				"name": "香醋(保宁醋/镇江香醋)",
				"len": "香醋(保宁醋/镇江香醋)"
			},
			{
				"name": "老抽",
				"len": "老抽"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "清汤",
				"len": "清汤"
			},
			{
				"name": "淀粉",
				"len": "淀粉"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/1a974eba874911e6a9a10242ac110002_600w_450h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7663a02f0da4bb21f9",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/8c17cc4a940511e6a9a10242ac110002_3264w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "香葱、胡萝卜、杏鲍菇切小丁，西红柿去蒂去皮切碎块；用一只碗盛好以上材料备用。油麦菜洗好去根揪成段备用。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/8acca9f0940511e6b87c0242ac110003_3264w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅中放油，放十三香或花椒粉",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/89cf27c6940511e6b87c0242ac110003_3264w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "油热后下材料碗翻炒，微出红油为宜。加水、加酱油调汤色，加盖煮沸。面粉与汤水比例约为1:4。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/8857cace940511e6a9a10242ac110002_3264w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "等水开的过程来和疙瘩。面盆分次淋入少许冷水(1饭碗面粉共加1/3碗水为宜)，筷子中速转圈和。慢则不成形，快则结大块。盆中看不到明显干粉时就可以了。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/87602706940511e6b87c0242ac110003_3264w_2448h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "水开后下入面疙瘩、加盐（此时加易入味）、加油麦菜、加盖煮熟。煮开后可以换小火再稍闷一会。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/858e97c8940511e6a9a10242ac110002_3264w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "打散一个鸡蛋，淋成蛋花。锅再次开起来时即可关火。此时加入味精，黑胡椒粉、白胡椒粉各0.5g（1小捏），淋入适量花椒油、香油，勺子搅匀即可出锅。喷香四溢，保你胃口大开~",
				"height": 400
			}
		],
		"uid": 1,
		"title": "疙瘩汤（猫家开胃版）",
		"food": [{
				"name": "西红柿",
				"len": "西红柿"
			},
			{
				"name": "青菜（油麦菜佳）",
				"len": "青菜（油麦菜佳）"
			},
			{
				"name": "面粉",
				"len": "面粉"
			},
			{
				"name": "胡萝卜、杏鲍菇、香葱等配菜",
				"len": "胡萝卜、杏鲍菇、香葱等配菜"
			},
			{
				"name": "王守义十三香、酱油、黑胡椒粉、白胡椒粉、花椒油、香油",
				"len": "王守义十三香、酱油、黑胡椒粉、白胡椒粉、花椒油、香油"
			},
			{
				"name": "盐、味精",
				"len": "盐、味精"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/47d55ab0889e11e6b87c0242ac110003_3264w_2448h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "1. 1饭碗面粉的话加4饭碗水，浓淡会比较合适，汤水较充足，又食之有物。2. 切丁的材料，以及调味粉、调味油，可视爱好增减替换。此例方案是相对而言比较开胃的搭配。3. 重点难点是和疙瘩：首先，加水时宜一点点分次加入；其次，筷子盆底打圈时最好一块地方、一块地方的小范围打圈。每和完一块地方颠一颠面盆，以使余下的干粉能够均匀分布，和完的地方能够再沾一些干粉而不易粘结成坨。其次，往锅里下疙瘩的时候，可以像打蛋花一样，边倒边用筷子在锅里搅，防止疙瘩入水粘团。最后，如果还是有个别粘团现象，用勺子捞起，拿筷子夹碎。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "【原创】猫家私房菜之开胃疙瘩汤，家常风味快手菜，专治没食欲。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7663a02f0da4bb21fa",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/5c0bbe828cf611e6b87c0242ac110003_6905w_1884h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "1. 大白菜洗净，切小段，面筋浸泡在水中，沥出油份，切小段；",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/5d7108908cf611e6a9a10242ac110002_3428w_2301h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "2. 切蒜末，热油锅，爆香蒜末后，放入大白菜，快炒2-3分钟；\r3. 待大白菜变软后，放入面筋，搅拌均匀，盖上锅盖烧3-4分钟；\r4. 最后加入调味料，大火收汁，即可出锅。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "只要5元10分钟，马上学会懒人快手菜",
		"food": [{
				"name": "大白菜",
				"len": "大白菜"
			},
			{
				"name": "油面筋",
				"len": "油面筋"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "蚝油",
				"len": "蚝油"
			},
			{
				"name": "陈醋",
				"len": "陈醋"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/1fe94e7687c711e6b87c0242ac110003_2534w_1759h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1. 烹饪过程中不用放入一滴水，因为大白菜会有水分；\r2. 陈醋只需要加一小匙，目的是防止面筋过于油腻，所以完全吃不出陈醋的味道；\r3. 挑选包心的大白菜以直到顶部包心紧、分量重、底部突出、根的切口大的不为好。\r4. 切大白菜时，宜顺丝切，这样大白菜易熟。\r5. 油面筋不宜多食，因其油量过高，会影响健康，自制的除外。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "住在城中村里，总是会有很多的便宜货可以“捡”。\r        比如买菜，虽然市场有许多不起眼的商贩和有残缺的菜，但有很多都是当地农民自种的菜，尽管是为了养家糊口而挣钱，可却能感觉到，那来自家庭的一丝温暖和亲情。\r        今天我又在淘东西，淘的是小菜，大大颗的小菜，1元1斤的大白菜，一共4元。4片白菜算它3毛，加1.5元的面筋，外加调味料水电和人工，即使凑个整数，一碟可口的菜肴也不到5元。如此之好事，何乐而不为之。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7763a02f0da4bb21fb",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e48e05228e0811e6a9a10242ac110002_700w_525h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将两只鸡蛋打入蒸碗中。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e4cb96a88e0811e6b87c0242ac110003_700w_525h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将鸡蛋打散。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e56545968e0811e6a9a10242ac110002_700w_525h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加入1/2茶匙盐、少许酱油、油打发均匀。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e598374e8e0811e6b87c0242ac110003_700w_525h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加入约280毫升温水，一边加水一边顺时针搅拌均匀。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e5ce8ef28e0811e6a9a10242ac110002_700w_525h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "用勺子把浮在表面的泡泡舀走。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e60f47a88e0811e6b87c0242ac110003_700w_525h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "蒸锅中放入适量水，烧开。水开后把蛋放入。大火蒸约10分钟。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e654b4828e0811e6a9a10242ac110002_700w_525h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "开盖撒上少许葱花再盖上盖子利用余温焗一焗。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/e68714408e0811e6b87c0242ac110003_700w_525h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "取出，用勺子在表面淋上少许酱油。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "蒸水蛋",
		"food": [{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "油",
				"len": "油"
			},
			{
				"name": "温水",
				"len": "温水"
			},
			{
				"name": "葱花",
				"len": "葱花"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/cf575a7a876211e6a9a10242ac110002_700w_525h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "不同材质的不同深浅的容器传热程度不一，需根据所用容器的材质和深浅调整蒸蛋的时间。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "蒸水蛋，很家常的一道菜。看是简单，但是要蒸出水嫩嫩的水蛋却非常考功夫。健康营养，超级水嫩的蒸水蛋，适合3-4人的份量哦。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7763a02f0da4bb21fc",
		"work": [{
				"src": "",
				"text": "把鸡翅洗净，如果有血的话需要用水焯一下，没有血的话用清水洗洗即可！"
			},
			{
				"src": "",
				"text": "葱花和姜片爆香，然后放入鸡翅翻炒。"
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/a8b02f3e8db411e6a9a10242ac110002_640w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "鸡翅翻炒变色后加入酱油和可乐，中火直至汤少即可出锅！",
				"height": 400
			}
		],
		"uid": 1,
		"title": "可乐鸡翅 非常容易做的快手菜！",
		"food": [{
				"name": "鸡翅",
				"len": "鸡翅"
			},
			{
				"name": "可乐",
				"len": "可乐"
			},
			{
				"name": "葱花、姜片",
				"len": "葱花、姜片"
			},
			{
				"name": "味极鲜酱油",
				"len": "味极鲜酱油"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/e64110d0882c11e6b87c0242ac110003_640w_640h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "如果时间充足的话可以提前把鸡翅腌一下，放料酒和生抽研制20分钟。腌制过的鸡翅在做的时候也需要放3勺酱油，不能省略。因为酱油是咸的，可乐里面又含糖，所以盐和糖都不用放。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "这样做的鸡翅非常适合小朋友的口味 大人吃也是不错的 不适合糖尿病人！因为可乐里面含糖很高",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7863a02f0da4bb21fd",
		"work": [{
				"src": "",
				"text": "金针菇切掉老根洗干净，淋干水份后直接摆放在盘子中~"
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0b3c6b98ed9811e6947d0242ac110002_2160w_1620h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "蒜蓉酱:剥蒜，多剥点，一头吧，我这是一包金针菇配一头蒜~剥好后切成蒜末，别太碎，粗着点，有口感~更香炒锅加入同等蒜末的油，烧热后关火，下入蒜末，炒均匀，用是锅子的余温爆香蒜末，避免过度加热~然后直接在锅里调味，加盐和糖，以咸为主，糖只加一点点提鲜~蒜蓉酱就完成了~将蒜蓉酱直接淋在洗好的金针菇上蒸6-8分钟后取出，金针菇会自然蒸出水份，蒸出的汁水很甜，不要浪费~将汁水倒出，在汁水中加入鲜味生抽和糖，麻油，调好味道，不必太咸，再倒回金针菇盘子里面，最后撒上葱花，就完成了~",
				"height": 400
			}
		],
		"uid": 1,
		"title": "蒜蓉蒸金针菇",
		"food": [{
				"name": "金针菇",
				"len": "金针菇"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "色拉油",
				"len": "色拉油"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "鲜味生抽",
				"len": "鲜味生抽"
			},
			{
				"name": "麻油",
				"len": "麻油"
			},
			{
				"name": "葱花",
				"len": "葱花"
			},
			{
				"name": "糖",
				"len": "糖"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/e9faf88ced9711e6bc9d0242ac110002_1440w_1080h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "此菜没有难度，成功率高，且非常好吃~蒜蓉酱的制作如果有疑问，请参考我的另一个菜谱“蒜蓉蒸虾”，里面有图解，更直观一些~http://www.xiachufang.com/recipe/100439513/蒜蓉蒸金针菇用来做拌面浇头也很有特色~不妨一试",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "金针菇的口感是独特的，韧中带脆，配合我独家的蒜蓉酱一起蒸来吃，马上变成简单的美味!",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7863a02f0da4bb21fe",
		"work": [{
				"src": "",
				"text": "土豆丝去皮切丝。一边切一边泡到水里，土豆丝不会变色~"
			},
			{
				"src": "",
				"text": "青红椒切丝，蒜，葱切片。"
			},
			{
				"src": "",
				"text": "烧油，油温到7 8分热的时候 下蒜葱 爆香。"
			},
			{
				"src": "",
				"text": "然后下土豆丝，爆炒2分钟，然后放一点醋， 然后放老干妈。火调到中温，翻炒一会 下青红椒。"
			},
			{
				"src": "",
				"text": "最后放盐，鸡精，孜然粉，出锅~\r这次抱歉，没有拍过程图，以后会记得拍。"
			}
		],
		"uid": 1,
		"title": "老干妈青椒土豆丝",
		"food": [{
				"name": "土豆",
				"len": "土豆"
			},
			{
				"name": "青椒",
				"len": "青椒"
			},
			{
				"name": "红椒",
				"len": "红椒"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "大葱",
				"len": "大葱"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "醋",
				"len": "醋"
			},
			{
				"name": "老干妈",
				"len": "老干妈"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/bfcccc08881011e6a9a10242ac110002_1136w_852h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1.土豆丝一定要一边切一边放水里，切好之后淘一次再泡水，土豆丝不会变颜色。\r2.土豆丝下锅之后要加醋，白醋，陈醋都可以。\r3.出锅之后可以加点香菜跟小葱。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "男朋友很喜欢吃这道菜，所以这道菜在我们家的餐桌上出镜率特别高~主要是做法比较简单~我做的是两人份的。大家可以参考下。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7863a02f0da4bb21ff",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/599b7d3a8d1011e6a9a10242ac110002_3264w_2448h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "猪肝洗净，改刀切成2mm厚的小三角片，用两勺料酒和少许盐腌制一会儿，头下锅时再加适量淀粉拌匀",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/5a8df8948d1011e6a9a10242ac110002_3264w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "杭椒和小米辣切成8mm的小段，姜蒜切成片备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/5bdc45528d1011e6b87c0242ac110003_3264w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅烧热后倒入食用油（比平时炒菜的量稍多一点），趁油未烧热的时候下入猪肝，快速划散至全部断生发白，再滤油盛出",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/5cdc2d148d1011e6b87c0242ac110003_3264w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "利用锅中剩下的底油，下入姜蒜片，煸出香味，再下入杭椒和小米辣丁，翻炒均匀，感觉配菜均匀裹上油色时，下入猪肝，继续翻炒1-2分钟",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/5e341aa08d1011e6a9a10242ac110002_2448w_3264h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "感觉配菜均匀裹上油色时，下入猪肝，淋入少许料酒，继续翻炒1-2分钟",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/5fc1815a8d1011e6b87c0242ac110003_3264w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "最后加入适量生抽、剁椒和鸡粉，翻炒均匀后关火装盘",
				"height": 400
			}
		],
		"uid": 1,
		"title": "快手菜之小炒猪肝",
		"food": [{
				"name": "盒装猪肝",
				"len": "盒装猪肝"
			},
			{
				"name": "杭椒小米辣",
				"len": "杭椒小米辣"
			},
			{
				"name": "姜蒜",
				"len": "姜蒜"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "淀粉",
				"len": "淀粉"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "剁椒",
				"len": "剁椒"
			},
			{
				"name": "鸡粉",
				"len": "鸡粉"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/48f9eae887cf11e6a9a10242ac110002_640w_480h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "1、下锅前再给猪肝抓淀粉，猪肝腌制时的汁水不会太黏，下锅时不易巴锅\r2、滑猪肝时油适量多加一些，待滑好盛出时，可以利用底油接着炒配菜",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "又一道简单美味的快手菜来啦~~\r猪肝的营养价值\r1、猪肝中铁质丰富，是补血食品中最常用的食物，食用猪肝可调节和改善贫血病人造血系统的生理功能； \r2、猪肝中含有丰富的维生素A，具有维持正常生长和生殖机能的作用；能保护眼睛，维持正常视力，防止眼睛干涩、疲劳，维持健康的肤色，对皮肤的健美具有重要意义； \r3、经常食用动物肝还能补充维生素B2，这对补充机体重要的辅酶，完成机体对一些有毒成分的去毒有重要作用； \r4、猪肝中还具有一般肉类食品不含的维生素C和微量元素硒，能增强人体的免疫反应，抗氧化，防衰老，并能抑制肿瘤细胞的产生，也可治急性传染性肝炎。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7963a02f0da4bb2200",
		"work": [{
				"src": "",
				"text": "金针菇去蒂洗净，装盘。"
			},
			{
				"src": "",
				"text": "蒸锅烧开水，放入金针菇，中火蒸5分钟。"
			},
			{
				"src": "",
				"text": "取出后倒入酱油。"
			},
			{
				"src": "",
				"text": "小葱切成葱花，摆到金针菇的上面。"
			},
			{
				"src": "",
				"text": "炒锅倒花生油，油热后浇到葱花和金针菇上，可以放凉后食用，更美味~"
			}
		],
		"uid": 1,
		"title": "葱油金针菇——10分钟快手菜，你绝对不能错过的美味~",
		"food": [{
				"name": "金针菇",
				"len": "金针菇"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "小葱",
				"len": "小葱"
			},
			{
				"name": "花生油",
				"len": "花生油"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/795104bc887711e6b87c0242ac110003_800w_800h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "跟葱油面的做法是一样的，但是比葱油面好吃多了，金针菇健康营养，可以多吃~",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "特别简单的一道菜，分分钟搞定，但是我一定要介绍一下，快手菜这么好吃的也不多。过程图没拍，下次补上。记得一定要用小香葱，热油倒在葱花上，出来“嗞嗞”的声音就对了",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7963a02f0da4bb2201",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/c11461f0903711e6a9a10242ac110002_640w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "准备工作，蟹柳切丁～",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/c16e38f6903711e6b87c0242ac110003_640w_618h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "鸡蛋分离，把蛋清和到蛋黄分开",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/c1b8f486903711e6b87c0242ac110003_640w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "在倒入100ml牛奶的碗里加入胡椒粉，盐，糖，搅拌一下（尝一尝咸淡），再加入淀粉拌匀",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/c2008d50903711e6a9a10242ac110002_640w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "步骤3拌匀的牛奶加入所有蛋清，开始打蛋，直至蛋液打成小泡沫",
				"height": 400
			},
			{
				"src": "",
				"text": "加入处理过的蟹肉棒～搅拌一下就行"
			},
			{
				"src": "",
				"text": "一锅煮沸的水，加盐，把切成块的西兰花放进去焯三至四分钟，取出装盘"
			},
			{
				"src": "",
				"text": "炒锅多倒油，油少了容易不嫩，就无法做出螃蟹的口感了，把油烧热，倒入步骤5已经混入蟹肉棒的牛奶，大火炒30秒，装盘！"
			},
			{
				"src": "",
				"text": "放一个蛋黄在顶端，依个人喜好加醋的量，吃的时候拌匀～好啦～特别简单！"
			}
		],
		"uid": 1,
		"title": "赛螃蟹，四分钟！零失败快手菜！",
		"food": [{
				"name": "纯牛奶",
				"len": "纯牛奶"
			},
			{
				"name": "胡椒粉",
				"len": "胡椒粉"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "淀粉",
				"len": "淀粉"
			},
			{
				"name": "蛋清",
				"len": "蛋清"
			},
			{
				"name": "蟹柳棒",
				"len": "蟹柳棒"
			},
			{
				"name": "色拉油",
				"len": "色拉油"
			},
			{
				"name": "西兰花",
				"len": "西兰花"
			},
			{
				"name": "生蛋黄",
				"len": "生蛋黄"
			},
			{
				"name": "粗",
				"len": "粗"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/9e23a6a088d611e6a9a10242ac110002_640w_640h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "因为我做菜特别怕麻烦宗旨就是简单快快快我要亲自做菜的时候基本上是我饿的不行了ꈍ .̮ ꈍ哈哈哈…尴尬…这道赛螃蟹是给一群生活不能自理的朋友做的被他们一分钟不到吃完了，还没来得及加上一颗蛋黄拌匀已经神马都木有啦！！！小伙伴们哭着喊着求我再做一缸…我要挥舞手中紧握的菜刀了！我可是千年做一菜的汉子！！！ᵋ(๑‾᷄ ⁻̫ ‾᷅๑)ᵌ想吃自己做吧～把菜谱贴一下，这也是超级快手菜了～四分钟啊！加上摆盘才四分钟！！么哒～这道菜一定会让你吃出螃蟹味儿～感谢人类的智慧啊～",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7963a02f0da4bb2202",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/a76acfcc908311e6b87c0242ac110003_4272w_2848h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "早市新鲜口蘑一斤",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/a9865182908311e6b87c0242ac110003_4272w_2848h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "用刷子轻刷去顶部的细泥土，剪去蒂部泥土，清洗干净。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ab1029b0908311e6a9a10242ac110002_4272w_2848h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "切成片，小的可以对切两片",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ad69a786908311e6a9a10242ac110002_4272w_2848h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "葱姜，香菜少许",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/afd809fe908311e6a9a10242ac110002_4272w_2848h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "油锅烧热，下葱姜略煸",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/b1fd5c16908311e6b87c0242ac110003_4272w_2848h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "放口蘑略煸几下。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b43cc2e6908311e6a9a10242ac110002_4272w_2848h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "放一小勺糖。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b65b2220908311e6a9a10242ac110002_4272w_2848h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "放少许酱油。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b7d8dc1e908311e6a9a10242ac110002_4272w_2848h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "煸至酱油上色。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b96e327c908311e6b87c0242ac110003_4272w_2848h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "会有水分出来，煸到口蘑变软，收汁，放盐，淋一些水淀粉，放香菜，稍拌下，OK！出锅！",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bb10ab5a908311e6a9a10242ac110002_4272w_2848h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "非常简单，简单到作料只有葱姜，糖，盐，酱油，水淀粉！",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/be31c3aa908311e6a9a10242ac110002_4272w_2848h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "太鲜美了，用勺子舀着吃过瘾！",
				"height": 400
			},
			{
				"src": "",
				"text": "更多过程图请戳http://blog.sina.com.cn/s/blog_4d48df8d0102v6ly.html"
			}
		],
		"uid": 1,
		"title": "“鲜”美的简单快手菜——素炒鲜口蘑",
		"food": [{
				"name": "新鲜口蘑",
				"len": "新鲜口蘑"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "姜",
				"len": "姜"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "水淀粉",
				"len": "水淀粉"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/58424cd4888d11e6b87c0242ac110003_4272w_2848h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "不放味精，不放鸡精，不放任何多余调料，简单作料，激发出食材最原生态的“鲜”美口感：",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7a63a02f0da4bb2203",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/54fc929891be11e6b87c0242ac110003_650w_650h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "腌制了一晚的鸡中翅~按个人口味调制腌料~不会调腌料的请买现成的腌鸡粉~（没时间的可以只腌半至一小时左右，腌之前先用牙签在鸡翅上扎一扎，制造些小孔有助快速入味。）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/54b92ae491be11e6b87c0242ac110003_650w_650h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "准备好的面包糠（我用的百利牌子～金黄酥脆）~",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/54692be891be11e6a9a10242ac110002_650w_650h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "盘子里摆放好筷子~(注意不要用有胶花色的木竹筷~胶色会溶解~)",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/542a3de891be11e6b87c0242ac110003_650w_650h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "把裹好面包糠的鸡翅架空排放在筷子上~若觉得粘度不够可以在裹面包糠之前再裹层蛋液~（其实个人觉得有无蛋液都一样～😏)",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/53ce071291be11e6b87c0242ac110003_650w_650h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "无需加盖放入微波炉转到中高火叮6分钟~这步很关键~如果你的微波炉不是这种老式机械版没有中高火~请从三分钟开始实验~检查不够再加时间~不然鸡翅都烤焦了荷包会心疼的…🙅",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/537eb8c491be11e6a9a10242ac110002_650w_650h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "出炉~！o(≧﹃≦)o",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/532521e291be11e6b87c0242ac110003_650w_650h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "外酥里嫩味道杠杠滴~！再也不用去“啃得起”了~！🙆✌",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/52e7bbe091be11e6b87c0242ac110003_650w_650h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "光盘行动~😍",
				"height": 400
			}
		],
		"uid": 1,
		"title": "无油无烟微波炉版炸鸡翅（无难度超快手菜）",
		"food": [{
				"name": "腌制好的鸡中翅",
				"len": "腌制好的鸡中翅"
			},
			{
				"name": "面包糠",
				"len": "面包糠"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/8078ec0488d211e6b87c0242ac110003_650w_650h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "①此菜无需放油~因为在微波的途中鸡翅本身的油会渗出来~②视鸡翅大小和微波炉功率差异可适当灵活增减微波的时间～",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "这回连“啃得起”都不用去了~！！从央视2套《是真的吗》学来的微波炉无油炸鸡翅~！！无油又健康~好吃得渣都不剩~！！😘＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ 针对厨友关注的问题解答:关于面包糠:可以在烘焙材料店（网店or实体）买到半斤分装的~约5元左右~也可以去大型超市买到一公斤装的~关于不够脆:微波途中加盖、出炉后为了保温加盖、没有架空鸡翅进行微波、出炉后放置较长时间等因素都会影响面包糠脆度~PS:这个菜谱很多玩在一起的同小区宝妈都做过了~大家反应都挺良好的~不会做菜的人做都没问题~如果您做不好~请自己总结总结~找出原因哈~😜",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7a63a02f0da4bb2204",
		"work": [{
				"src": "",
				"text": "准备好所有的食材，根据鸡肉的分量，其余配料适量"
			},
			{
				"src": "",
				"text": "鸡肉切块，大葱、青椒、小米辣切节。老姜，蒜切片。"
			},
			{
				"src": "",
				"text": "土豆切大拇指节那么大的块。（鸡肉下锅以后要干水份，缩水，所以土豆块就和缩水后的鸡块差不多大）"
			},
			{
				"src": "",
				"text": "鸡肉下锅煮掉血水，捞起沥水。"
			},
			{
				"src": "",
				"text": "锅内下油，油温烧到一定程度，不要太过高，放糖，小火熬化白糖。"
			},
			{
				"src": "",
				"text": "油锅里加入花椒，把花椒煎香，然后鸡肉下锅翻炒上色，上色后，加入老姜和蒜片翻炒，再加入小米辣呛香。最后加入适量豆瓣酱、加入适量醋和盐。"
			},
			{
				"src": "",
				"text": "翻炒一会儿，倒入啤酒，加八角大料，干辣椒，下土豆。啤酒要淹过鸡肉和土豆。"
			},
			{
				"src": "",
				"text": "用盖子盖上用中小火焖10分钟左右，过程中不要翻炒。切记火不要太大，不然容易糊锅。"
			},
			{
				"src": "",
				"text": "揭开盖子，见水收得差不多以后，翻炒一下，注意不要大力翻炒，这里土豆煮融了，大力翻炒容易把土豆翻烂。"
			},
			{
				"src": "",
				"text": "加入青椒和大葱，翻炒下，千万不要让大葱和青椒炒太融、"
			},
			{
				"src": "",
				"text": "最后关火后放适量味精或鸡精。起锅，一盘美味的大盘鸡呈现眼前。"
			}
		],
		"uid": 1,
		"title": "大盘鸡",
		"food": [{
				"name": "鸡",
				"len": "鸡"
			},
			{
				"name": "大葱",
				"len": "大葱"
			},
			{
				"name": "青椒",
				"len": "青椒"
			},
			{
				"name": "干辣椒",
				"len": "干辣椒"
			},
			{
				"name": "八角、大料",
				"len": "八角、大料"
			},
			{
				"name": "小米辣",
				"len": "小米辣"
			},
			{
				"name": "土豆",
				"len": "土豆"
			},
			{
				"name": "醋、盐、味精、白糖、食用油、花椒",
				"len": "醋、盐、味精、白糖、食用油、花椒"
			},
			{
				"name": "老姜",
				"len": "老姜"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "啤酒",
				"len": "啤酒"
			},
			{
				"name": "豆瓣酱",
				"len": "豆瓣酱"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/5d02701e882411e6a9a10242ac110002_931w_1248h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "最重要的就是注意土豆下过以后 容易糊锅，翻炒的过程一定要注意，糊锅了不管是面向还是口感上都要大打折扣。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "色香味俱全，非常好吃。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7a63a02f0da4bb2205",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/4051fed28e2111e6a9a10242ac110002_640w_424h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "就这么切切就行了，原来看还要把番茄去皮再煮才能有番茄汁什么的，麻烦死了。我这直接切片。。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/4083ab8a8e2111e6a9a10242ac110002_640w_424h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "鸡蛋打散，锅烧热，把油温度烧的稍微高一些后下鸡蛋，不要忙着去把鸡蛋打散，把鸡蛋稍微煎的金黄一点了再去弄散它，鸡蛋会是一块一块的。盛出备用。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/40c9b3008e2111e6a9a10242ac110002_640w_424h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "再把锅里加一点点油烧热，下蒜和生姜爆香。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/41048d048e2111e6b87c0242ac110003_640w_424h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加入番茄翻炒，加入盐继续翻炒两下。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/413af7fe8e2111e6a9a10242ac110002_640w_424h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "在锅里到小半碗水，让番茄煮一分钟（这个很关键，必须要加水）然后加入鸡蛋和葱花一起炒，这个时候锅子里汤汁还是有的，让番茄和鸡蛋继续煮一分钟左右，盛出即可。番茄的味道超级浓的！",
				"height": 400
			}
		],
		"uid": 1,
		"title": "最好吃的番茄炒蛋",
		"food": [{
				"name": "番茄",
				"len": "番茄"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "生姜",
				"len": "生姜"
			},
			{
				"name": "油",
				"len": "油"
			},
			{
				"name": "水",
				"len": "水"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/ac74b036884b11e6a9a10242ac110002_640w_424h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "随随便便能吃两碗，这可是爸爸的独门秘诀！又造我泄露了！！！你们偷着乐吧~",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "手艺来自爸爸，之前一直炒不出小时候爸爸一直给我炒的那个番茄鸡蛋的味道，后面问了老爸，然后自己在做，发现真的好好吃！！！就算材料一样，方法不一样也不行啊！独门秘诀好吗！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7b63a02f0da4bb2206",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/cc86a0fc8f3811e6b87c0242ac110003_600w_398h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "生菜洗净掰开一片片，蒜洗净拍成蒜蓉。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ccc1e82e8f3811e6a9a10242ac110002_600w_398h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅里热油炒香蒜蓉。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/cd031c0e8f3811e6a9a10242ac110002_600w_398h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "倒入酱油、蚝油、及砂糖，炒匀煮开。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/cd3c60368f3811e6b87c0242ac110003_600w_398h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "煮好的蒜蓉酱盛起备用。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/cd72f0068f3811e6b87c0242ac110003_600w_398h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅里热水煮开，倒入少许油，接着放入生菜白灼半分钟。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/cdb83b5c8f3811e6a9a10242ac110002_600w_398h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "盛起灼好的生菜。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/cdfff9068f3811e6b87c0242ac110003_600w_398h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "浇上蒜蓉酱即可。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "蒜蓉油淋生菜",
		"food": [{
				"name": "生菜",
				"len": "生菜"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "蚝油",
				"len": "蚝油"
			},
			{
				"name": "砂糖",
				"len": "砂糖"
			},
			{
				"name": "油",
				"len": "油"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/23d8987288a111e6b87c0242ac110003_600w_398h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "生菜易熟，水开后，放入白灼半分钟即可，这样口感会清脆好吃。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "生菜的清脆是时常让人爱的。简单地用开水白灼，再浇上蒜蓉酱汁，这样的快手菜真的方便又好吃。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7b63a02f0da4bb2207",
		"work": [{
				"src": "",
				"text": "金针菇洗净沥干水备用（去除根部弄散）日本豆腐打开包装横切3刀，切块"
			},
			{
				"src": "",
				"text": "大葱，蒜切碎，葱花备用"
			},
			{
				"src": "",
				"text": "锅中倒油烧热，加入日本豆腐煎至表皮焦黄，沥干捞起。剩下的油再加入蒜以及大葱爆香，加入金针菇"
			},
			{
				"src": "",
				"text": "翻炒至金针菇软身，加入一勺酱油，一勺耗油翻炒均匀后加入日本豆腐在金针菇上面，此时再加入一勺酱油及耗油覆盖豆腐上面，盖上盖焖几分钟（2分钟左右）"
			},
			{
				"src": "",
				"text": "在这期间，勾芡备用"
			},
			{
				"src": "",
				"text": "打开锅盖，倒入芡汁，略微翻均匀，再盖上焖一小会儿，待汁收得差不多"
			},
			{
				"src": "",
				"text": "关火，上碟，装饭开吃"
			}
		],
		"uid": 1,
		"title": "超级下饭菜--金针菇日本豆腐",
		"food": [{
				"name": "日本豆腐",
				"len": "日本豆腐"
			},
			{
				"name": "金针菇",
				"len": "金针菇"
			},
			{
				"name": "大葱",
				"len": "大葱"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "耗油",
				"len": "耗油"
			},
			{
				"name": "酱油",
				"len": "酱油"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/7f294b1c881b11e6a9a10242ac110002_368w_402h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "很简单，不用什么技巧",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "男友最爱，每次煮这个总会加饭，满满的幸福感",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7c63a02f0da4bb2208",
		"work": [{
				"src": "",
				"text": "贝壳类的东西还是要首先放清水里养一养，一个个检查，有臭的坏的有泥沙的，一个个挑出来，否则真是毁了一盘啊，血淋淋的教训。洗净后沥干待用。"
			},
			{
				"src": "",
				"text": "开火锅里入3小汤匙油，烧微热。蒜末可以多放，切记要切碎。和少量姜片（自己放3片）一同如锅爆香。"
			},
			{
				"src": "",
				"text": "香味出来了后，倒入贝壳大火快炒。"
			},
			{
				"src": "",
				"text": "等到壳开始爆开，快速放入料酒2汤匙，味淋1汤匙，下一小勺生抽，炒匀加盖闷10-15秒。（喜欢加一些味淋，增加甜味儿，同时增香，这味淋一步也可省略加少许糖增鲜。）"
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/97fe5d708e3e11e6b87c0242ac110003_2448w_3264h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "开盖看到贝壳全开了，尝下味道，觉得淡可以再加少量盐和鸡精（自己不加盐，贝壳微咸）。将大把葱末撒入，少许黑胡椒最后翻炒一下出锅！",
				"height": 400
			}
		],
		"uid": 1,
		"title": "3分钟快手菜——葱炒蛤蜊",
		"food": [{
				"name": "蛤蜊或其他贝类",
				"len": "蛤蜊或其他贝类"
			},
			{
				"name": "蒜末、姜片、葱",
				"len": "蒜末、姜片、葱"
			},
			{
				"name": "料酒、生抽",
				"len": "料酒、生抽"
			},
			{
				"name": "日式味淋",
				"len": "日式味淋"
			},
			{
				"name": "黑胡椒粉",
				"len": "黑胡椒粉"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/5c7fe9d8885511e6a9a10242ac110002_2448w_3264h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "贝壳一定要洗干净！",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "夏天懒的时候爱做这个快手菜，配小碗白米饭和味增汤就可以，或单独配个冰镇啤酒当零嘴也很棒！整个过程很快，2-3分钟搞定，味道杠杠滴!~~和大家分享一下。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7c63a02f0da4bb2209",
		"work": [{
				"src": "",
				"text": "土豆洗干净！！！脱衣服！！！ （不要想色情了 摔！ 给土豆脱衣服 削皮啦 哈哈哈哈哈）切片！！！（其实是切片切丝切块切丁都可以，随乃们高兴！！！因为等下要蒸 所以无非在时间上延长或缩短）Ps；如果怕胖淀粉摄入量过多的姑凉 可以尽情的在水里把土豆的淀粉揉搓掉〜 我用的是在微波炉叮10分钟（用微波炉的一定要放点水 不然会干）各位可以煮可以蒸 随意  只要可以捣成泥 就好 "
			},
			{
				"src": "",
				"text": "鸡蛋打散 放点水 如果喜欢吃肉的可以用猪绞肉但是太麻烦了况且我们家也木有肉了 -_-# "
			},
			{
				"src": "",
				"text": "海天黄豆酱还是葱伴侣 还是什么的 总是是酱 两勺 口味重的可以多放点 用水澥开 酱已经很咸了 就不用放盐了 "
			},
			{
				"src": "",
				"text": "适量油 油温不用很热 不然鸡蛋会炒老不好吃 鸡蛋炒散 倒入澥开的酱 炒出香味 关火 如果不吃鸡蛋 直接把酱倒进油里炒一下 很香 有肉的话 肉炒熟放酱 一起炒 "
			},
			{
				"src": "",
				"text": "土豆泥摆盘 浇鸡蛋酱 有葱放点葱（摆盘会好看 +_+ 心机好重）"
			},
			{
				"src": "",
				"text": "拍照！！！"
			},
			{
				"src": "",
				"text": "吃！！！！！！"
			}
		],
		"uid": 1,
		"title": "我只有一颗土豆（快手菜）",
		"food": [{
				"name": "鸡蛋（可有可无）",
				"len": "鸡蛋（可有可无）"
			},
			{
				"name": "土豆（！！！很重要 必须有）",
				"len": "土豆（！！！很重要 必须有）"
			},
			{
				"name": "随便什么酱 （海天黄豆酱 葱伴侣 等等等等等）",
				"len": "随便什么酱 （海天黄豆酱 葱伴侣 等等等等等）"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/4b398fae882c11e6a9a10242ac110002_640w_640h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "这么简单的菜谱啰嗦了一大堆还有脸来写小贴士 我真是够了 蒸土豆的时候可以放十三香或者胡椒粉什么的 如果有人尝试豆腐乳版的土豆泥一定要告诉我！！！ 还想更好吃的话 可以放点炸花生米或者辣椒酥！！！ 一定会好吃到舔盘底。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "一个人难免会懒到飞起  所以一颗土豆解救了我  ˊ_>ˋ做人要像土豆 怎么整都不难吃 哈哈哈哈哈 太对了这句话",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7c63a02f0da4bb220a",
		"work": [{
				"src": "",
				"text": "温水加盐溶解后分次倒入面粉中，边倒边用筷子搅拌后，用手揉成光滑不沾手的柔软的面团"
			},
			{
				"src": "",
				"text": "用保鲜膜包住，室温放置30分钟醒面"
			},
			{
				"src": "",
				"text": "醒好的面分开几份，每份鸡蛋般大就行"
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f3f8cc3c8ede11e6a9a10242ac110002_3840w_2160h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将小剂子擀成中间厚，周边薄的面片",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f50c42028ede11e6a9a10242ac110002_2160w_2608h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "在面片的中间刷上薄薄一层油，周边留出大概1.5CM不抹油",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/f5e382448ede11e6b87c0242ac110003_3105w_2090h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "像做包子一样的，把没抹油的边一点一点拽在一起",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f6c8a8428ede11e6a9a10242ac110002_2160w_2080h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "拽在一起后，中间有个小剂子",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f794c2388ede11e6b87c0242ac110003_2160w_1960h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "小剂子掰走不要",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f824556a8ede11e6b87c0242ac110003_2160w_2040h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "直接把这个包子一样的面皮再次擀平，里面有空气神马的不管，直接擀过去",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f98f8b188ede11e6b87c0242ac110003_3840w_2160h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "擀平擀薄后的面片，厚薄均匀，直径大概18CM吧",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f9ec43a88ede11e6b87c0242ac110003_911w_1095h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "不粘锅刷上薄薄一层油，慢火煎面饼，等到饼大面积的鼓起来后，用筷子戳破，掀开上层，把酱油和鸡蛋的混合物倒进去",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/fadfc9ce8ede11e6a9a10242ac110002_2160w_2551h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "翻面煎另一面，两面金黄时可盛出",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/fbdabe428ede11e6b87c0242ac110003_911w_1185h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "刷上薄薄一层老干妈和香肠，可以放点生菜和黄瓜",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/fc8ff8c08ede11e6a9a10242ac110002_911w_1251h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "希望大家成功，吃的开心",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/fd7e09ca8ede11e6a9a10242ac110002_2160w_2488h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "吃不完的面片用刷了薄油的保鲜膜一层隔一层的放冰箱保存起来，三天内吃完，不然会发酸",
				"height": 400
			}
		],
		"uid": 1,
		"title": "一定能灌进鸡蛋的鸡蛋灌饼",
		"food": [{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "普通面粉",
				"len": "普通面粉"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "40度左右温水",
				"len": "40度左右温水"
			},
			{
				"name": "香肠",
				"len": "香肠"
			},
			{
				"name": "老干妈",
				"len": "老干妈"
			},
			{
				"name": "酱油",
				"len": "酱油"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/e4527166888a11e6b87c0242ac110003_3840w_2160h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1.如何揉成光滑不沾手的面团：沾手了放点粉，太干了放点水2.我这个量的面粉大概做了8个饼，一个饼配一条香肠和一个鸡蛋3.普通面粉，我在小卖店随意买的，应该是中筋的吧4.有疑问随时帮你们解答哦！",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "突然一天超想念大学时候在门口吃到的鸡蛋灌饼，这里没得卖，只能自己上网学了，看了下厨房其他厨友们贡献出来的鸡蛋灌饼教程，就是把面片擀长后后抹油再卷起再按扁的那个，普遍留言都是说烙饼的时候没有分层的，所以也就没能把鸡蛋灌进去成功的。我一直在下厨房就是寄生虫的存在，只吸收，没贡献...看见友们跟我一样这么喜欢这个灌饼的，但又不成功的焦急，突然激起了我一种强烈想分享我这个一定成功灌进鸡蛋的方子，希望能帮到友们。1.方子写得很简单，重点是突出擀面的方法,有些图片也没拍。希望厨友们不要嫌弃我做的马虎。2.普通人一枚，照片是手机拍的，请包涵.",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7d63a02f0da4bb220b",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/6055c95e90c711e6b87c0242ac110003_3264w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "龙口粉丝剪断，防止太长，温水浸泡20分钟，这里粉丝也可以用红薯粉，根据个人口味。浸泡要求泡透，用手可以掐断，没有硬芯即可，泡透即可将粉丝捞出备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/618e870290c711e6b87c0242ac110003_3264w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "葱姜蒜切沫，肉末，粉丝，郫县豆瓣酱备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/628a1ab890c711e6a9a10242ac110002_3264w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "热锅凉油，下入底油，然后加入葱姜蒜沫炒香",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/63e57e6690c711e6b87c0242ac110003_3264w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加入豆瓣酱炒香，炒出红油，加入肉末翻炒至变色，加入老抽调一下色",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/65055dac90c711e6b87c0242ac110003_3264w_2448h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "加入高汤或者清水",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/6670488290c711e6a9a10242ac110002_3264w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "下入粉丝，用筷子拨散均匀",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/67d1c8f490c711e6a9a10242ac110002_3264w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "开火后中火煮5-10分钟，大火收汁即可。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/687cff4e90c711e6b87c0242ac110003_1763w_1672h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "装盘，撒上香葱花点缀",
				"height": 400
			}
		],
		"uid": 1,
		"title": "老丁的私房菜－蚂蚁上树",
		"food": [{
				"name": "粉丝",
				"len": "粉丝"
			},
			{
				"name": "肉末",
				"len": "肉末"
			},
			{
				"name": "四川郫县豆瓣酱",
				"len": "四川郫县豆瓣酱"
			},
			{
				"name": "葱姜蒜，盐，香葱",
				"len": "葱姜蒜，盐，香葱"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/69dcc0d8889111e6a9a10242ac110002_1763w_1672h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、粉丝浸泡20分钟以上，但不要泡太久，泡太久就烂了，没有硬芯即可。2、下入粉丝后，用筷子摇散，均匀煮一会，然后大火收汁。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "蚂蚁上树是典型的汉族家常菜肴，味道可口，方便易做。可以关注微信公众号：老丁的厨房，或者在微信公众号搜索 brookding ，对老丁私人公众号进行关注，谢谢。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7e63a02f0da4bb220c",
		"work": [{
				"src": "",
				"text": "准备超市买现成的或者是煮熟放凉剥好的玉米粒。"
			},
			{
				"src": "",
				"text": "胡萝卜和黄瓜切丁。"
			},
			{
				"src": "",
				"text": "油锅加热到五分熟放胡萝卜和玉米粒。翻炒一会放盐。"
			},
			{
				"src": "",
				"text": "然后把准备好的黄瓜放入翻炒。再倒入两勺牛奶。"
			},
			{
				"src": "",
				"text": "等牛奶翻炒干后香甜玉米粒就可以出锅啦。"
			}
		],
		"uid": 1,
		"title": "香甜玉米粒(快手菜)",
		"food": [{
				"name": "玉米粒",
				"len": "玉米粒"
			},
			{
				"name": "胡萝卜",
				"len": "胡萝卜"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "牛奶",
				"len": "牛奶"
			},
			{
				"name": "黄瓜",
				"len": "黄瓜"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/0299b576881311e6b87c0242ac110003_650w_650h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "牛奶千万不能多，不然就成浓汤啦～",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "简单的菜谱，但是很好吃。食材可以按自己口味添加，胡萝卜，黄瓜也是不错的选择。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7e63a02f0da4bb220d",
		"work": [{
				"src": "",
				"text": "茄子切成条，下锅炸（如果怕油吸收太多，用微波炉高火4分钟）"
			},
			{
				"src": "",
				"text": "葱姜蒜（蒜分两次放），调碗汁，酱油1汤匙，醋1汤匙，糖2勺，盐少许，胡椒粉少许，少许生抽，水淀粉"
			},
			{
				"src": "",
				"text": "锅中放油，葱姜蒜，炒香，下茄子，倒入碗汁，撒上剩下的蒜末，出锅"
			}
		],
		"uid": 1,
		"title": "酱烧茄子",
		"food": [{
				"name": "茄子",
				"len": "茄子"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "姜",
				"len": "姜"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "醋",
				"len": "醋"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "胡椒粉",
				"len": "胡椒粉"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "水淀粉",
				"len": "水淀粉"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/23f08be4873911e6a9a10242ac110002_600w_405h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7e63a02f0da4bb220e",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bb761098949411e6a9a10242ac110002_4608w_3072h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将方子里的面饼材料混合均匀揉成面团，到出膜阶段即可。室温发酵至两倍大。下面等待发酵的时间可以准备披萨的其他材料。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bbbd846e949411e6b87c0242ac110003_602w_490h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "【红酱做法】准备200克猪肉糜，肥瘦2:8左右即可。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bbf1ceb8949411e6a9a10242ac110002_569w_465h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "洋葱一个，切末备用。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bc22d2a6949411e6a9a10242ac110002_588w_498h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "蒜一头，切末备用。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bc5468de949411e6b87c0242ac110003_607w_522h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "西红柿2个，先放滚水中20秒，然后去皮做成番茄泥。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/bc8dec76949411e6a9a10242ac110002_581w_378h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "锅中放油，油热后放入洋葱末、蒜末炒香。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bcc2c8a6949411e6b87c0242ac110003_644w_394h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "洋葱末、蒜末炒香以后，放入肉糜，迅速划散。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bd0ae4d8949411e6b87c0242ac110003_594w_326h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "等肉糜泛白以后倒入番茄泥、适量番茄酱、黑胡椒粉等翻拌均匀。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/bd5363ac949411e6b87c0242ac110003_645w_384h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "加入月桂叶继续煮至汤汁浓稠，成酱的状态，加入盐、糖等调味出锅备用。【方子中的量做出的酱料做一个披萨用不完，可以放冰箱冷冻，以后可以拌肉酱意面，但是披萨的红酱相对于意大利肉i将要更稠，所以用来拌面的时候可以少加一点点水把酱煮开再拌】",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bd979126949411e6a9a10242ac110002_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "【准备披萨材料】准备肉片（加黑胡椒炒制的鸡肉片、牛肉片、超市的冷冻火腿反正自己喜欢的各种肉类都可以，切薄片，大小适中），青椒红椒切丝，玉米粒豌豆粒准备好，适量口蘑，8个熟的虾仁。！！！！！！！注意，披萨上的蔬菜总量不要太多，不然做好以后会很水，我习惯在制作之前把蔬菜材料们放在烤盘上，烤箱预热100度，稍微烘干15分钟，这样出的水少，才也能多放些。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bf3cb95c949411e6a9a10242ac110002_4608w_3072h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "面团排气后擀成适当大小，周边稍厚的面饼，【我用三能28*28的金色不沾烤盘，一般擀成差不多放下的原型】，用叉子在面饼上扎一些小孔，然后静置20分钟。在静置好的面饼上刷一层做好的红酱，撒一层马苏里拉芝士碎。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/c1e8f558949411e6a9a10242ac110002_4608w_3072h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "放一层肉片，撒一层芝士碎，撒上青椒红椒口蘑，撒上一层芝士碎，再均匀摆上熟虾仁，撒上玉米粒、豌豆粒，撒上一层芝士碎。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/c25190fe949411e6a9a10242ac110002_800w_693h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "烤箱预热210度，烤制15分钟，出炉趁热食用喔⊙ω⊙",
				"height": 400
			}
		],
		"uid": 1,
		"title": "比必胜客好吃太多的【海陆至尊披萨】",
		"food": [{
				"name": "高筋面粉【面饼】",
				"len": "高筋面粉【面饼】"
			},
			{
				"name": "低筋面粉【面饼】",
				"len": "低筋面粉【面饼】"
			},
			{
				"name": "水【面饼】",
				"len": "水【面饼】"
			},
			{
				"name": "橄榄油【面饼】",
				"len": "橄榄油【面饼】"
			},
			{
				"name": "细砂糖【面饼】",
				"len": "细砂糖【面饼】"
			},
			{
				"name": "耐高糖酵母【面饼】",
				"len": "耐高糖酵母【面饼】"
			},
			{
				"name": "盐【面饼】",
				"len": "盐【面饼】"
			},
			{
				"name": "番茄【红酱】",
				"len": "番茄【红酱】"
			},
			{
				"name": "洋葱【红酱】",
				"len": "洋葱【红酱】"
			},
			{
				"name": "大蒜【红酱】",
				"len": "大蒜【红酱】"
			},
			{
				"name": "月桂叶【红酱】",
				"len": "月桂叶【红酱】"
			},
			{
				"name": "黑胡椒粉【红酱】",
				"len": "黑胡椒粉【红酱】"
			},
			{
				"name": "盐【红酱】",
				"len": "盐【红酱】"
			},
			{
				"name": "糖【红酱】",
				"len": "糖【红酱】"
			},
			{
				"name": "肉糜【红酱】",
				"len": "肉糜【红酱】"
			},
			{
				"name": "熟虾仁",
				"len": "熟虾仁"
			},
			{
				"name": "青椒丝",
				"len": "青椒丝"
			},
			{
				"name": "红椒丝",
				"len": "红椒丝"
			},
			{
				"name": "口蘑片",
				"len": "口蘑片"
			},
			{
				"name": "玉米粒、豌豆粒",
				"len": "玉米粒、豌豆粒"
			},
			{
				"name": "肉片【种类按自己喜好】",
				"len": "肉片【种类按自己喜好】"
			},
			{
				"name": "马苏里拉芝士碎",
				"len": "马苏里拉芝士碎"
			},
			{
				"name": "番茄酱【红酱】",
				"len": "番茄酱【红酱】"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/97d6b2d488b211e6a9a10242ac110002_800w_693h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "方子里的都比较大【因为家里人都太喜欢吃了(づ｡◕‿◕｡)づ】大家也可以减分量来做~",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "喜欢吃披萨啊，可是自从自己做了披萨以后，鲜香的肉片，新鲜清爽的蔬菜以及浓郁足量的芝士让自己和家人明显对必胜客什么的失望啦~ 虽说正统的意大利披萨薄薄轻轻的，但是既然在家，能合自己的口味做喜欢的吃的多好啊！料一定要足足足！~~【注意】1.这里说的料很足不是使劲放菜能放多上就放多少的意思，放的过多那么再怎么提前烤还是会有很大的水量出来的，大家一定要注意。        2.这个方子已经强调啦，不是8寸的标准量，PO主用的是三能不沾烤盘，把面饼弄成刚好放下的大小，所以用8寸模具搭配这个方子的量做出来再说什么面饼厚啦就来不及了！        3.用不沾模具没有顾虑，如果自身模具没有防粘效果，则要用涂油、撒干粉的措施来防粘。        4.家用烤箱温度偏差不小，每个人的烤箱温度都有比较大的差异，本菜谱提供的仅供参考，最终还是根据自己烤箱的脾气及时转换。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7f63a02f0da4bb220f",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f775f37c8bbd11e6a9a10242ac110002_158w_204h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "榨菜切成碎。豆腐切小块，排入蒸碗中。撒上榨菜碎",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f7be9faa8bbd11e6b87c0242ac110003_161w_207h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "榨菜可以多放一些，口味比较好。若怕咸，可以把榨菜多冲洗几片，挤干水份。）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f7ea1c5c8bbd11e6a9a10242ac110002_158w_206h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅里热油，放入葱姜爆香，倒入肉末，迅速划散，倒入生抽翻炒几分钟加盐即可",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f80cea168bbd11e6b87c0242ac110003_160w_207h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "把炒好的肉末连汤一起倒在豆腐上。上锅蒸，水开后10分钟。取出撒香葱。搭配香菜更好",
				"height": 400
			}
		],
		"uid": 1,
		"title": "肉末蒸豆腐",
		"food": [{
				"name": "绢豆腐",
				"len": "绢豆腐"
			},
			{
				"name": "肉泥",
				"len": "肉泥"
			},
			{
				"name": "榨菜",
				"len": "榨菜"
			},
			{
				"name": "油",
				"len": "油"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "姜",
				"len": "姜"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/4bc3f81086f611e6b87c0242ac110003_500w_750h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1，此菜选择绢豆腐最好，超市可以买到盒装的。太硬的豆腐不入味，太软又不成形。\r2，肉泥可选用颈背肉，也可加少许五花肉泥。可根据自己的口味儿来炒，加辣椒，或者别的都好吃。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "豆腐是我大爱，卤水豆腐，石膏豆腐，绢豆腐，内酯豆腐，豆腐脑，没有哪个我不喜欢。其中软质的豆腐最爱，豆腐脑更是上学时每天早上必吃的美味儿。\r豆腐营养丰富，含有铁、钙、磷、镁等人体必需的多种微量元素，还含有糖类、植物油和丰富的优质蛋白，素有“植物肉”之美称。豆腐的消化吸收率达95％以上。两小块豆腐，即可满足一个人一天钙的需要量。\r蒸豆腐是最能保持豆腐原汁原味的做法，肉末与榨菜不可少。豆腐可吸收肉末的香味，榨菜又可消除肉末的腻味。两两相辅。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7f63a02f0da4bb2210",
		"work": [{
				"src": "",
				"text": "烧开水煮面，煮熟了之后捞出来过冷水让面口感更劲道"
			},
			{
				"src": "",
				"text": "煮面的时候顺手把香葱洗了，切成葱花备用"
			},
			{
				"src": "",
				"text": "过冷水后的面放进碗里，倒入适量生抽、白糖，放入切好的葱花"
			},
			{
				"src": "",
				"text": "烧热锅，放入少量的油加热"
			},
			{
				"src": "",
				"text": "将热油倒入面中，从葱花上淋下"
			},
			{
				"src": "",
				"text": "拌面啦"
			}
		],
		"uid": 1,
		"title": "快手葱油面",
		"food": [{
				"name": "油",
				"len": "油"
			},
			{
				"name": "香葱",
				"len": "香葱"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "白糖",
				"len": "白糖"
			},
			{
				"name": "挂面",
				"len": "挂面"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/3d687596886511e6a9a10242ac110002_2448w_2448h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "tip1：不知道面什么时候熟就捞几根出来尝尝，觉得熟了就行了tip2：煮面的时候注意搅锅不要粘锅底了tip3：什么面都行，喜欢吃什么煮什么，为了方便就直接用挂面tip4：生抽也可以用味极鲜等调味酱油代替，白糖是为了提鲜用的，不可缺~tip5：喜欢吃辣神马的随意加咯",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "看了天天向上里汪涵现场演示的葱油面，立马尝试了一下，快手面味道也不错",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af7f63a02f0da4bb2211",
		"work": [{
				"src": "",
				"text": "青椒洗净去蒂备用。"
			},
			{
				"src": "",
				"text": "锅内不放油，青椒放入其中，锅铲不断的压青椒，这样青椒才会出褶皱，形成虎皮。大约青椒熟到6成起锅。"
			},
			{
				"src": "",
				"text": "锅内倒油，放大蒜+生姜，将青椒倒入其中烹制1分钟左右，倒入豆瓣酱；一点点水，让调料的味道沁入青椒里。"
			},
			{
				"src": "",
				"text": "最后起锅前糖+胡椒+鸡精+醋"
			}
		],
		"uid": 1,
		"title": "豆瓣虎皮青椒   快手菜",
		"food": [{
				"name": "豆瓣酱",
				"len": "豆瓣酱"
			},
			{
				"name": "薄皮青椒",
				"len": "薄皮青椒"
			},
			{
				"name": "糖+胡椒+鸡精+醋",
				"len": "糖+胡椒+鸡精+醋"
			},
			{
				"name": "大蒜+生姜",
				"len": "大蒜+生姜"
			},
			{
				"name": "水",
				"len": "水"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/955e9bea87b111e6b87c0242ac110003_4608w_3072h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "阁楼上的那个夏天826最喜欢，我还一直记得，当年的那个夏天，当年的小花。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8063a02f0da4bb2212",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/1c8851148f4711e6a9a10242ac110002_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "番茄切丁，洋葱切丝备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/1ced6f868f4711e6b87c0242ac110003_533w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "土豆、胡萝卜切丁，青椒红椒切丝备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/1d352c7c8f4711e6b87c0242ac110003_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "鸡肉切块，加一勺淀粉、适量黑胡椒粉拌匀，腌制15分钟以上",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/1d7778ca8f4711e6a9a10242ac110002_800w_533h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "锅中放适量黄油或者任何食用油都可以",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/1ddf5b2a8f4711e6a9a10242ac110002_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "待油烧热后放入洋葱翻炒",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/1e304ba28f4711e6b87c0242ac110003_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "等洋葱香味出来以后，放入腌制好的鸡肉迅速划散",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/1e7c02868f4711e6b87c0242ac110003_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "鸡肉颜色泛白以后加入土豆胡萝卜丁翻炒",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/1eb226b88f4711e6b87c0242ac110003_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "等胡萝卜和土豆断生以后放入番茄丁",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/1efdc0d28f4711e6b87c0242ac110003_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "待番茄变软，加入适量水、番茄酱、一勺酱油，盖上锅盖焖煮，直到土豆胡萝卜软烂、汤汁浓稠，加盐、鸡精调味关火。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/1f46950a8f4711e6a9a10242ac110002_800w_533h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "在烤碗中加入两小碗米饭，稍微铺平，不要压太实",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/1f8dce708f4711e6b87c0242ac110003_533w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "在米饭上铺上刚才煮好的番茄鸡肉，把汤汁也一起浇上",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/1fd4800e8f4711e6a9a10242ac110002_533w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "先铺一层芝士，再铺上切好丝的青椒红椒，再铺上一层芝士",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/201b38c88f4711e6a9a10242ac110002_533w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "烤箱预热200度，烤制15分钟左右，到芝士软化即可取出。趁热尝尝，超美味哦！",
				"height": 400
			}
		],
		"uid": 1,
		"title": "番茄鸡肉浓情焗饭【两人份】",
		"food": [{
				"name": "鸡胸肉",
				"len": "鸡胸肉"
			},
			{
				"name": "胡萝卜",
				"len": "胡萝卜"
			},
			{
				"name": "土豆",
				"len": "土豆"
			},
			{
				"name": "番茄",
				"len": "番茄"
			},
			{
				"name": "青椒",
				"len": "青椒"
			},
			{
				"name": "红椒",
				"len": "红椒"
			},
			{
				"name": "黑胡椒粉",
				"len": "黑胡椒粉"
			},
			{
				"name": "生粉",
				"len": "生粉"
			},
			{
				"name": "番茄酱",
				"len": "番茄酱"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "洋葱",
				"len": "洋葱"
			},
			{
				"name": "马苏里拉芝士碎",
				"len": "马苏里拉芝士碎"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/691355a488a511e6b87c0242ac110003_800w_533h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "如果觉得炒菜的时候番茄酱不够酸，也可以稍微加一小勺陈醋调味，一样美味哦！",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "烤箱天天烤甜品换换口味来个烤箱菜怎么样？秋天了，一份热乎乎的焗饭摆在面前，里面有热情的番茄，嫩滑的鸡肉，浓郁的芝士土豆，在深秋的午后趁着阳光正好，配一杯香甜的热可可，是怎样的享受？",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8063a02f0da4bb2213",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/70d891328ce211e6a9a10242ac110002_690w_460h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "泡发好的黑木耳洗干净后，用手撕成大小适中的块",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/710971b28ce211e6b87c0242ac110003_690w_460h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "菜椒清洗干净后，随意切块备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/7128b3568ce211e6b87c0242ac110003_690w_460h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅中加入油，烧至6成热时，倒入打撒的鸡蛋液，快速翻炒，炒到两面金黄时，出锅备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/715240d68ce211e6a9a10242ac110002_690w_460h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅中加少许油，将黑木耳下锅，中火翻炒，待听到黑木耳发出噼里啪啦的响声时，加入菜椒一起翻炒",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/718102b88ce211e6a9a10242ac110002_690w_460h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "待菜椒稍稍变色时，加入盐和炒好的鸡蛋，翻炒均匀即可出锅",
				"height": 400
			}
		],
		"uid": 1,
		"title": "3分钟快手菜之黑木耳炒鸡蛋",
		"food": [{
				"name": "鸡蛋3个",
				"len": "鸡蛋3个"
			},
			{
				"name": "泡发黑木耳1把",
				"len": "泡发黑木耳1把"
			},
			{
				"name": "菜椒1个",
				"len": "菜椒1个"
			},
			{
				"name": "油和盐适量",
				"len": "油和盐适量"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/21059f6887bc11e6b87c0242ac110003_460w_690h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8063a02f0da4bb2214",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e5313dfcf0ee11e6bc9d0242ac110002_1280w_960h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将土豆洗净去皮，沿纵向一剖为二，切成3毫米厚的薄片（为了食用方便我直接切断了，如果不切断，土豆两边夹筷切片即可）。准备蒸盘，将土豆片切口朝下码入盘中，再将香肠或咸肉切片（如果土豆不切断要尽量切薄）分别夹入土豆片中。如果喜重口味的可撒些盐巴或淋点生抽。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ea4d1c66f0ee11e6bc9d0242ac110002_1280w_960h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "上笼大火蒸12～15分钟至土豆熟透。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/fa4b3f26f0ee11e6bc9d0242ac110002_1280w_960h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "撒上葱花再闷5～10分钟出锅，这样才更入味哟！",
				"height": 400
			}
		],
		"uid": 1,
		"title": "风琴蒸土豆（快手菜）",
		"food": [{
				"name": "香肠或咸肉",
				"len": "香肠或咸肉"
			},
			{
				"name": "大土豆",
				"len": "大土豆"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/c663f60ef0f211e6947d0242ac110002_1280w_960h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1．土豆片不要切太薄，否则过于熟烂不易搛起，太厚了不易入味。2．出锅前在蒸锅内闷一会儿土豆会更入味。3．香肠和咸肉最好偏肥，这样出油多土豆更香",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "这是一道由西式菜点演变而来的中式料理。大多数中国人家中不会备有培根和烤箱，但一定会有香肠、咸肉和蒸锅。在宴席上通常将这些腌肉蒸熟后直接上桌，虽然很香，但作为下酒菜就感觉有点咸腻，那么换一种吃法也许更适合，况且制作过程是如此的简单。这是一道无需技巧，省时省力的快手菜，土豆与咸肉相辅相成回味无穷！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8163a02f0da4bb2215",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0100ab9894fc11e6a9a10242ac110002_877w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "西兰花洗净后，用淡盐水浸泡30分钟，去除残留的农药，注意头朝下浸泡。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/015aef0e94fc11e6a9a10242ac110002_1025w_1024h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "虾仁解冻后洗干净，去掉背部肠线备用。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/01cfee6294fc11e6b87c0242ac110003_960w_641h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "洗净的虾仁加适量酱油、生粉（或淀粉），腌制10分钟左右。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/02304e9c94fc11e6a9a10242ac110002_960w_641h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "西兰花去掉粗茎，切成小朵，锅内加少许盐，待水沸后下锅焯至八成熟后捞出。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/02b3f7ba94fc11e6a9a10242ac110002_960w_641h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "蒜拍碎备用。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/032924fe94fc11e6b87c0242ac110003_1536w_1024h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅中倒入少许油，下蒜末。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/047fc60a94fc11e6b87c0242ac110003_3888w_2592h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "下虾仁翻炒至变色。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0635d70094fc11e6b87c0242ac110003_3888w_2592h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "放入西兰花翻炒均匀，加少许鸡精即可出锅。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/07bb62e894fc11e6a9a10242ac110002_3888w_2592h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "摆盘时可加小番茄点缀。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/091fc49e94fc11e6b87c0242ac110003_3888w_2592h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "成品图。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0a8144a294fc11e6a9a10242ac110002_3888w_2592h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "喜欢重口味的，可以蘸取海南辣椒酱，有木有食欲大增呢？",
				"height": 400
			}
		],
		"uid": 1,
		"title": "虾仁炒西兰花",
		"food": [{
				"name": "速冻虾仁",
				"len": "速冻虾仁"
			},
			{
				"name": "西兰花",
				"len": "西兰花"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "生粉",
				"len": "生粉"
			},
			{
				"name": "鸡精",
				"len": "鸡精"
			},
			{
				"name": "盐",
				"len": "盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/1033458a896711e6b87c0242ac110003_1280w_1280h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "1.盐的量要控制好，做这道菜时除了用淡盐水去除西兰花残存农药外，没有放盐已经很鲜美了。2.家里有小朋友的话食材尽量选用鲜虾，保证新鲜度。3.选虾的时候，表面红色颜色越深说明虾青素含量越高。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "这是一道极富营养价值快手菜，虾仁营养丰富，含蛋白质是鱼、蛋、奶的几倍到几十倍，虾青素是目前发现的最强的一种抗氧化剂。西兰花最显著的功效就是防癌抗癌，阻止癌前病变细胞形成，抑制癌肿生长。除了抗癌以外，西兰花还含有丰富的抗坏血酸，能增强肝脏的解毒能力，提高机体免疫力。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8163a02f0da4bb2216",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b1e967008daa11e6a9a10242ac110002_409w_322h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "虾先去虾线，沿虾背剪开，挑出来即可",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b2123dc48daa11e6b87c0242ac110003_436w_324h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅中倒入植物油，量略多，烧8成热，然后将虾倒进油锅煎至虾变色",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b23eacce8daa11e6b87c0242ac110003_421w_311h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "虾取出，然后留底油，放入蒜末，番茄酱，白糖翻炒出香味",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b26a92ee8daa11e6a9a10242ac110002_400w_300h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "然后将虾倒进锅中，淋料酒，耗油，食盐适量，放入葱段，盖锅盖闷1—2分钟即可",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b2948ee68daa11e6a9a10242ac110002_1200w_900h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "然后摆盘就可以吃啦~~o(*≧▽≦)ツ",
				"height": 400
			}
		],
		"uid": 1,
		"title": "油焖大虾",
		"food": [{
				"name": "虾",
				"len": "虾"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "番茄酱",
				"len": "番茄酱"
			},
			{
				"name": "白糖",
				"len": "白糖"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "食盐",
				"len": "食盐"
			},
			{
				"name": "耗油",
				"len": "耗油"
			},
			{
				"name": "蒜末",
				"len": "蒜末"
			},
			{
				"name": "植物油",
				"len": "植物油"
			},
			{
				"name": "香菜",
				"len": "香菜"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/878625ba882911e6a9a10242ac110002_1200w_900h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "orz依旧是虾控最爱的一道快手菜，这次用的虾个头比较大，满满的都是肉~好星湖哈哈~~用自己种的香菜做点缀成就感好大，o(*￣▽￣*)ゞ",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8263a02f0da4bb2217",
		"work": [{
				"src": "",
				"text": "鸡胸肉或鸡腿都可以，切丁。上浆，放料酒腌制下"
			},
			{
				"src": "",
				"text": "葱姜蒜，葱要切成小段"
			},
			{
				"src": "",
				"text": "黄瓜或青椒切丁"
			},
			{
				"src": "",
				"text": "小火炒郫县豆瓣，炒出红油后，放葱姜蒜，干辣椒。花椒，炒香，放入鸡肉，放1汤匙料酒，炒到鸡肉变色"
			},
			{
				"src": "",
				"text": "放作料，醋2汤匙，糖2勺，盐"
			},
			{
				"src": "",
				"text": "放入花生和黄瓜丁"
			},
			{
				"src": "",
				"text": "调入水淀粉，勾芡，即可"
			}
		],
		"uid": 1,
		"title": "宫保鸡丁",
		"food": [{
				"name": "鸡肉",
				"len": "鸡肉"
			},
			{
				"name": "黄瓜",
				"len": "黄瓜"
			},
			{
				"name": "青椒",
				"len": "青椒"
			},
			{
				"name": "花生",
				"len": "花生"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "姜",
				"len": "姜"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "郫县豆瓣酱",
				"len": "郫县豆瓣酱"
			},
			{
				"name": "干辣椒",
				"len": "干辣椒"
			},
			{
				"name": "花椒",
				"len": "花椒"
			},
			{
				"name": "醋",
				"len": "醋"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "水淀粉",
				"len": "水淀粉"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/214256f2873911e6a9a10242ac110002_600w_400h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1汤匙的料酒的目的是去腥，经过高温味道已经挥发了，基本没有什么味道。 \r鸡肉不用小火，上浆就是，把鸡肉丁和淀粉和水拌匀。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8263a02f0da4bb2218",
		"work": [{
				"src": "",
				"text": "鸡胸肉片成薄片，大概3毫米～半厘米这样厚吧（好像不算太薄哦？），一块鸡胸肉大概能片出6、7片吧。"
			},
			{
				"src": "",
				"text": "生抽老抽白砂糖料酒倒入大碗，调匀，放入鸡片抓匀，腌2小时会比较入味。（如果时间紧，腌十分钟也是可以的，这时候就要往鸡肉上扎洞，更好的吸收酱汁味道，还有，煎好后可以用剩下的调料汁略炒一下，收汁即可。）"
			},
			{
				"src": "",
				"text": "平底锅放少量油（我用的橄榄油），中小火两面煎熟，不用煎太久的哦，不然再嫩也会变老的"
			}
		],
		"uid": 1,
		"title": "酱汁鸡排（快手菜）",
		"food": [{
				"name": "鸡胸肉",
				"len": "鸡胸肉"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "老抽",
				"len": "老抽"
			},
			{
				"name": "白砂糖",
				"len": "白砂糖"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "橄榄油",
				"len": "橄榄油"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/3d13e0d6891311e6a9a10242ac110002_440w_784h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "这种做法不会把鸡胸肉做柴，很嫩很入味很好吃很下饭。如果除掉腌制的时间，也算是快手菜了。可以早上出门前腌好放冰箱，晚上下班十分钟搞定，这样更入味。如果时间紧，腌十分钟也是可以的，这时候就要往鸡肉上扎洞，更好的吸收酱汁味道，还有，煎好后可以用剩下的调料汁略炒一下，收汁即可。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8263a02f0da4bb2219",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0d9af8308bc011e6b87c0242ac110003_128w_195h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "豆角洗干净，去两头的丝，掰成6、7厘米的段",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0ddd40f08bc011e6a9a10242ac110002_128w_195h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅里倒入水，加一勺盐，烧开后，放入豆角焯一下，颜色变深绿后，捞出来沥干水分待用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/0dfea9348bc011e6a9a10242ac110002_261w_194h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "炒菜锅里放略多的油，平时炒菜的2倍，少放一些豆角慢慢小火煎成虎皮后，捞出，再放入豆角依次煎好沥干油待用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/0e2bb2d08bc011e6b87c0242ac110003_130w_193h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "肉馅里放入淀粉、料酒，盐拌匀，腌20分钟待用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0e508c0e8bc011e6b87c0242ac110003_128w_194h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅里留底油，滑入肉馅翻炒均匀变色后捞出来",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0e75276c8bc011e6a9a10242ac110002_392w_194h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅里放油，放入麻椒，花椒小火慢慢地烧出味道后，放入干红辣椒，慢煸，放入葱、蒜、姜碎，翻炒出香味后，放入肉馅和豆角，翻炒一下，加入生抽一勺，老抽半勺，料酒半勺，糖若干，翻炒干汁后，加入盐出锅即可",
				"height": 400
			}
		],
		"uid": 1,
		"title": "干煸豆角",
		"food": [{
				"name": "豆角",
				"len": "豆角"
			},
			{
				"name": "花椒",
				"len": "花椒"
			},
			{
				"name": "麻椒",
				"len": "麻椒"
			},
			{
				"name": "干辣椒段",
				"len": "干辣椒段"
			},
			{
				"name": "蒜碎",
				"len": "蒜碎"
			},
			{
				"name": "姜碎",
				"len": "姜碎"
			},
			{
				"name": "葱碎",
				"len": "葱碎"
			},
			{
				"name": "肉馅",
				"len": "肉馅"
			},
			{
				"name": "淀粉",
				"len": "淀粉"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "老抽",
				"len": "老抽"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "盐",
				"len": "盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/9c80c2f886fe11e6b87c0242ac110003_402w_600h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "【啰嗦几句】\r1、豆角煮一下可以缩短煎的时间，而且不干，还有水分充足的感觉。个人喜欢这种做法的干煸豆角；\r2、这个菜不能放水，要快炒，干煸才可以。\r3、这个菜里的调味料多，基本上肉馅就算是废了，爷没有耐心挑调味料，所以肉馅可以少点，就个味而已。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8363a02f0da4bb221a",
		"work": [{
				"src": "",
				"text": "土豆洗净，去皮，切成小丁，放清水中。"
			},
			{
				"src": "",
				"text": "切葱花，泡好的土豆丁取出。"
			},
			{
				"src": "",
				"text": "锅内放油，烧油同时撒一点点盐（家里老辈的说法了，这样可以防癌哟！）放入土豆丁，翻炒几下。"
			},
			{
				"src": "",
				"text": "放入老干妈豆豉，我放了一勺的样子。然后再放蚝油，生抽，大火翻炒。锅干可稍微加一点点水~"
			},
			{
				"src": "",
				"text": "按个人喜好来定土豆的生熟度，我一般喜欢咬下去带一点软软的口感但是不是全熟成粉的那种感觉，喜欢生的可以时间少一点，喜欢熟的可以时间长一点，锅干了就选择加点油或者水，我吃的不算很油腻，一般锅干了菜没熟我就加水。"
			},
			{
				"src": "",
				"text": "快出锅转小火，加入孜然粉，这个时候就真的感觉吃烧烤摊儿的土豆了差不多，孜然粉适量，不要太多不要太少，按照自己胃口来，撒入葱花，出锅。"
			}
		],
		"uid": 1,
		"title": "超级快手菜老干妈孜然土豆丁",
		"food": [{
				"name": "土豆",
				"len": "土豆"
			},
			{
				"name": "老干妈",
				"len": "老干妈"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "蚝油",
				"len": "蚝油"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "孜然粉",
				"len": "孜然粉"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/b8e81f3e884f11e6b87c0242ac110003_683w_891h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "土豆丁务必放入清水中洗净一下，有利于清除土豆上的淀粉，口感会更好一点~",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "自己那天随手做出来的饿到不行随手抓着家里剩下的两个小土豆给做的，当时也不知道咋了就特想做丁丁的~看到锅旁边有什么材料就随意都加了！老干妈也是突发奇想的想着炒菜肯定好吃！加上新买了一罐孜然粉哎妈呀炒出来的味道跟外面烧烤摊子差不多、而且自己做肯定健康很多啊。炒菜，没那么上火，油也很干净对吧！快手家常菜！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8363a02f0da4bb221b",
		"work": [{
				"src": "",
				"text": "将青豆仁、胡萝卜粒和玉米粒分别焯水备用；如果用刚煮好的米饭，先盛出来摊凉；鸡蛋打散，加入少许料酒和盐，入油锅炒到凝结盛出；"
			},
			{
				"src": "",
				"text": "炒锅不用再加油，将米饭倒入炒散，调入适量盐，倒入所有配菜翻炒均匀即可；这样炒出来的蛋炒饭不会吸收很多油份，口感柔软入味，且更容易消化。"
			}
		],
		"uid": 1,
		"title": "家常蛋炒饭",
		"food": [{
				"name": "米饭（冷饭）",
				"len": "米饭（冷饭）"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "午餐肉",
				"len": "午餐肉"
			},
			{
				"name": "青豆仁",
				"len": "青豆仁"
			},
			{
				"name": "胡萝卜粒",
				"len": "胡萝卜粒"
			},
			{
				"name": "玉米粒",
				"len": "玉米粒"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "鸡粉",
				"len": "鸡粉"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/5a84d4ee8f9f11e6a9a10242ac110002_620w_413h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "请看清楚并准确理解菜谱，不是简单的炒饭不加油，而是「利用炒蛋后的锅炒饭不用再加油」！！！有烹饪常识的人都知道，蛋吃油，滑炒时油要够多，蛋炒出来才够嫩；炒完蛋的锅很油润，用来炒饭完全足够；炒饭的功夫在于把饭炒散、炒热，米饭粒粒分开不是靠油氽出来的，而是将米粒里的水分适度炒干以降低黏度的效果；米饭软硬适中的口感取决于饭粒所含水份的恰到好处，那才是真正好吃的炒饭。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "都说蛋炒饭是检验厨艺的标准，有些不以为然，因为不太喜欢干硬口感的炒饭。我喜欢用新鲜的米饭来炒饭，不用加很多油，不用反复地炒，只要将蛋和其他材料煸炒好，与米饭混合炒匀即可。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8363a02f0da4bb221c",
		"work": [{
				"src": "",
				"text": "将排骨洗净，放在冷水里烧开，去除排骨的污垢"
			},
			{
				"src": "",
				"text": "按照一勺料酒，两勺醋，三勺砂糖，四勺酱油，五勺水的比例调制糖醋排骨的汁（不要纠结勺子要多大的勺子，这只是让你能够按比例调汁，肉多就用大勺子，肉少就用小勺子。）"
			},
			{
				"src": "",
				"text": "往锅里倒适量的油，小火将冰糖熬化，将排骨倒进去，开大火翻炒至金黄色"
			},
			{
				"src": "",
				"text": "倒入我们的特调酱汁～"
			},
			{
				"src": "",
				"text": "放适量的干辣椒"
			},
			{
				"src": "",
				"text": "煮啊煮啊煮到排骨将汁液收干"
			},
			{
				"src": "",
				"text": "大功告成！"
			}
		],
		"uid": 1,
		"title": "人人都能做好的糖醋排骨",
		"food": [{
				"name": "肋排",
				"len": "肋排"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "醋（黑的那种）",
				"len": "醋（黑的那种）"
			},
			{
				"name": "冰糖",
				"len": "冰糖"
			},
			{
				"name": "砂糖",
				"len": "砂糖"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "干辣椒",
				"len": "干辣椒"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/6cb1a03e874311e6a9a10242ac110002_490w_327h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "tips 1：干辣椒可以让排骨甜中带微辣，变得更好吃\r tips 2：熬冰糖的时候一定要小火啊亲！",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8463a02f0da4bb221d",
		"work": [{
				"src": "",
				"text": "锅里放水，煮到微微沸腾后放入挂面，煮至软身。"
			},
			{
				"src": "",
				"text": "喜欢吃软面的可以关火后盖上锅盖稍微闷一会儿，喜欢有韧劲儿的可以直接捞出，过凉水后沥干。"
			},
			{
				"src": "",
				"text": "将沥干水的挂面放入碗中，加入适量鲜酱油、糖、顶端放切好的小葱花，不要搅拌哦！"
			},
			{
				"src": "",
				"text": "起锅热油，把油烧到稍稍冒烟后关火，迅速将油倒入面碗中，浇到葱花上面哦！这时候会听到滋滋声哦~注意不要烫伤！！"
			},
			{
				"src": "",
				"text": "完成！搅匀之后就可以开动啦~~超级快手好味道哦~"
			}
		],
		"uid": 1,
		"title": "葱爆面—就是汪涵在天天向上里面做的那个啦",
		"food": [{
				"name": "挂面",
				"len": "挂面"
			},
			{
				"name": "小香葱（没有就用大葱凑合吧）",
				"len": "小香葱（没有就用大葱凑合吧）"
			},
			{
				"name": "油",
				"len": "油"
			},
			{
				"name": "鲜酱油",
				"len": "鲜酱油"
			},
			{
				"name": "白糖",
				"len": "白糖"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/70150112886511e6a9a10242ac110002_800w_533h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、煮挂面的时候要注意不要等到水全部沸腾了再煮哦~那样子反倒不容易熟哦~2、葱，很重要！小葱最好啦~大葱肯定会差一点啦~3、之前可能没写清楚大家注意一下啦！面煮完了要过一下水就不会糊成一碗啦～觉得太基础就忘记写了，谢谢提醒的各位～",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "昨天晚上看天天向上~除了觉得羊羊羊好呆萌以外最在意的就是这道汪涵涵提到的葱爆面啦！据说是乐乐姐教的呢！快手又好味~今天早上就做了早餐来吃！嗯，果然不错~整理成菜谱放在这里~有小伙伴做了也欢迎上传作品大家一起分享啦！~\\(≧▽≦)/~",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8463a02f0da4bb221e",
		"work": [{
				"src": "",
				"text": "木耳发好以后洗干净，撕成大小合适小片"
			},
			{
				"src": "",
				"text": "山药切片，没入水中"
			},
			{
				"src": "",
				"text": "葱切成葱花"
			},
			{
				"src": "",
				"text": "锅子烧热后倒入油，把山药迅速滤水，倒入锅里大火快速翻炒，紧接着倒入木耳炒两下"
			},
			{
				"src": "",
				"text": "关火，加入葱花和盐，借用余温再炒两下就可以盛盘了"
			}
		],
		"uid": 1,
		"title": "清炒山药木耳",
		"food": [{
				"name": "山药",
				"len": "山药"
			},
			{
				"name": "木耳（发好）",
				"len": "木耳（发好）"
			},
			{
				"name": "小葱",
				"len": "小葱"
			},
			{
				"name": "盐",
				"len": "盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/439ac99487e011e6b87c0242ac110003_3216w_2136h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1）山药一边切一边放入冷水里，不然非常容易表面氧化成黑色\r2）山药容易糊锅，翻炒一定要快",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "山药跟木耳就是绝配，口感脆脆还很清爽。撒上一点小葱花，分明就是一副黑山白雪露青翠的早春图啊。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8563a02f0da4bb221f",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/960272e4902411e6b87c0242ac110003_942w_735h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "五花肉切片，花菜洗净切开小朵，然后焯水捞出备用，辣椒切长段，大蒜切片。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9649507e902411e6b87c0242ac110003_960w_720h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "热锅凉油，油三成热，放入五花肉，慢慢焙出油。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9689430a902411e6a9a10242ac110002_960w_720h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "肉炒好后，加入红干辣椒和大蒜片翻炒。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/96d2bc60902411e6b87c0242ac110003_960w_720h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "加入花菜，青辣椒翻炒，由于花菜焯过水，所以炒的时间不易过长。待花菜边缘略微有一点点焦加入一点老抽调色，一点糖和适量盐和味精，出锅即可。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "老丁的私房菜-干锅花菜",
		"food": [{
				"name": "花菜",
				"len": "花菜"
			},
			{
				"name": "五花肉",
				"len": "五花肉"
			},
			{
				"name": "干辣椒",
				"len": "干辣椒"
			},
			{
				"name": "大蒜",
				"len": "大蒜"
			},
			{
				"name": "青辣椒",
				"len": "青辣椒"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/196489be88ce11e6a9a10242ac110002_960w_939h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "下饭一流可以关注微信公众号：老丁的厨房，或者在微信公众号搜索 brookding ，对老丁私人公众号进行关注，谢谢。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8563a02f0da4bb2220",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/343ac2f290e011e6b87c0242ac110003_852w_1136h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将鸡翅斜割几刀，背面用牙签扎几下，提前腌制更加入味",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/33c0b87290e011e6a9a10242ac110002_1341w_1600h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加入料酒和酱油，放几片姜与蒜片腌制鸡翅三个小时",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/3345f1b490e011e6b87c0242ac110003_1350w_1351h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "小火，放入少量油，将鸡翅煎至两面金黄",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/32c7200090e011e6b87c0242ac110003_1350w_1351h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将之前腌制的料倒入，加水没过鸡翅，中火十五分钟，加入少量蜂蜜水，大火将汤汁收干，摆盘ok",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/3254e0e490e011e6b87c0242ac110003_628w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "大功告成",
				"height": 400
			}
		],
		"uid": 1,
		"title": "蜜汁鸡翅",
		"food": [{
				"name": "鸡翅",
				"len": "鸡翅"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "姜",
				"len": "姜"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "蜂蜜",
				"len": "蜂蜜"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/f6bb3d5e885511e6b87c0242ac110003_638w_640h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、料酒与酱油 1:2，蜂蜜两勺，按着口味进行添减。2、一般情况下是不需要放盐，如果喜欢口味重一些，可放少许盐，一定要少。3、蜂蜜要用温开水融开。4、关于上色，一般腌料倒入，收汁过程中就会慢慢上色，大火到最后彻底收干之后，颜色就会很漂亮了。5、很多人反应收汁收不干，其实只是时间与耐心问题，刚开始用小火微煎，再用中火是为了煮熟以及入味，最后等到汁渐渐浓稠之后，再用大火收干，是为了上色，多一些等待与耐心，美食其实很简单。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "这款无论大人小孩必点菜之一啦，味微甜，可提前腌制更入味。可关注微博 DORCAS0303   !!!",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8663a02f0da4bb2221",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/31e1d94e92a411e6b87c0242ac110003_640w_474h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "杏鲍菇切条，蒜切末，葱切小段。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/336dc62e92a411e6b87c0242ac110003_3264w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "炒之前先将杏鲍菇汆水，这样炒的时候就不会出水了。不要煮的太熟，烫个几十秒软身就行了，否则炒出来太熟就失去杏鲍菇独特的口感了。沥干备用。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/33c8c92a92a411e6a9a10242ac110002_640w_480h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "烘熟芝麻，取出备用。如果你家有熟芝麻当然最方便。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/34070a8c92a411e6a9a10242ac110002_640w_480h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "起油锅，爆香葱和蒜。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/3545389292a411e6a9a10242ac110002_3264w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加入杏鲍菇，翻炒。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/365836b292a411e6b87c0242ac110003_3264w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加入酱油，楼主加了三种酱油，每种一点点就可以，老抽也加一点上色漂亮。全程大火快炒，麻利加糖加盐，继续炒。炒到汁水收干就基本好了，尝一下味，缺啥补啥哈。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/369e47ba92a411e6b87c0242ac110003_640w_480h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "撒上芝麻和黑胡椒碎，手边正好有包腰果零食，挺搭的，最后放哈，否则会软掉。哎。。。味道太赞，又要狗狗舔盘子了！",
				"height": 400
			}
		],
		"uid": 1,
		"title": "超简单快手菜--蒜香杏鲍菇",
		"food": [{
				"name": "杏鲍菇",
				"len": "杏鲍菇"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "黑胡椒碎",
				"len": "黑胡椒碎"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "腰果",
				"len": "腰果"
			},
			{
				"name": "芝麻",
				"len": "芝麻"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/a92bad38888e11e6a9a10242ac110002_750w_728h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、楼主的炒菜小秘诀：有几种酱油就放几种，有几种醋就放几种，有几种辣酱就放几种，适用于所有菜！2、不汆水直接炒会出水，不利于收汁，小份的话还可以。但仍建议先汆水。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "最近超爱吃的一道菜，几乎是一周吃三回的节奏，有一次杏鲍菇买少了，只炒了一点点，最后不要脸的舔了盘子。。。。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8663a02f0da4bb2222",
		"work": [{
				"src": "",
				"text": "把鸡腿洗干净，用厨房纸吸走水份，在鸡腿上拿刀划几下方便入味儿"
			},
			{
				"src": "",
				"text": "锅中到油，小火，把鸡腿放入锅中煎，两面金黄就OK啦，土豆胡萝卜切块倒入锅中，翻炒一下，火开到正常大小"
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/6887672e8fa811e6a9a10242ac110002_638w_638h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "倒入料酒，生抽，老抽，五香粉胡椒粉，糖，翻炒，这个量全凭自己喜好和经验，中餐这方面还是比较随意，不像烘培类要求精确，然后加入热水和所有食材齐平，大火烧开转中火炖25分钟左右，出锅前根据口味选择是否在加点盐。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "鸡腿炖土豆超级快手菜",
		"food": [{
				"name": "鸡腿",
				"len": "鸡腿"
			},
			{
				"name": "土豆",
				"len": "土豆"
			},
			{
				"name": "胡萝卜",
				"len": "胡萝卜"
			},
			{
				"name": "料酒，生抽，老抽，五香粉，胡椒粉，糖，盐",
				"len": "料酒，生抽，老抽，五香粉，胡椒粉，糖，盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/e063772688bc11e6b87c0242ac110003_638w_638h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "配上大米饭真是无与伦比！",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "非常简单，下饭，我家那位最爱之一",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8763a02f0da4bb2223",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9d21bd588d2911e6a9a10242ac110002_200w_132h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "蛋放锅里，冷水放锅里。【补充一条：水一定要没过鸡蛋！！！这样成功率高！！】中火煮至沸腾。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9d48a92c8d2911e6b87c0242ac110003_200w_132h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "沸腾后，再煮30秒左右。（根据蛋的大小而定。）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9d66fb208d2911e6b87c0242ac110003_200w_132h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "盖上锅盖。转大火。倒数，5，4，3，2，1，关火",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9d878f2a8d2911e6a9a10242ac110002_200w_132h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "闷1~2分钟。（注意不要移开炉子，移开炉子的时间再加长。）然后，移开炉子",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9da76c1e8d2911e6a9a10242ac110002_200w_132h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "倒掉热水，冲入冷水。再倒掉冷水，倒入冷白开水（冰的更好）。在冷白开水中剥蛋壳。可以吃了",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9dc55d008d2911e6a9a10242ac110002_200w_132h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "鸡蛋的蛋白都是熟的哟~加点酱。我喜欢泰式甜辣酱",
				"height": 400
			}
		],
		"uid": 1,
		"title": "98%成功的溏心水煮蛋攻略",
		"food": [{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "白开水",
				"len": "白开水"
			},
			{
				"name": "各种配鸡蛋吃的酱。",
				"len": "各种配鸡蛋吃的酱。"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/0ad8733a875011e6a9a10242ac110002_526w_349h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "剥鸡蛋壳在水里剥很方便很完整。\r 因为这个攻略要涉及蛋大小的变量，所以，要根据手边鸡蛋大小来定...其实试个一两次就能掌握好了。\r 要领其实在步骤五...不能泡太久的冷水...说是泡冷水可以阻止再加热使鸡蛋变老...其实就算泡冷水这种效果也不好...所以干脆就是泡一小会儿冷水，使表面温度不烫手可以在凉白开水里剥了就行了...趁热吃...\r 【溏心蛋卫不卫生的看这里...】\r因为毕竟是没有断生的关系...食品卫生还是需要担心的...所以溏心蛋还是现吃的好...做溏心卤蛋反而加大了食品卫生的风险...(未成熟的鸡蛋黄中的细菌在温度下降后会复苏[注意了!是降温!也就是冷了以后!!]...泡溏心卤蛋就等于给时间给细菌繁衍壮大...所以米娜桑还是趁热吃吧~让细菌死在强酸里！)\r 【鸡蛋冷热水下锅问题的看这里...】\r经过试验...冷水下锅的蛋的蛋白部分比开水下锅的蛋的蛋白部分成熟的更充分...而且更易剥壳...原因是根据煮鸡蛋的原理...鸡蛋对于鸡来说的重要部分是蛋黄...所以千万年来进化出了蛋白比蛋黄容易熟的特点...[冷水下锅的蛋]...蛋白的外层与水同受热...慢慢的热传导会使蛋白受热更均匀也就是蛋白熟的更均匀...等到水烧开时应该会出现的样子是蛋黄及蛋黄周边的小部分组织(包括系带...)还是生的...下来的泡热水时间主要是通过热传导将那小部分蛋白和蛋黄周边组织做熟...[开水下锅的蛋]...开水下锅的蛋一般是煮一会儿然后就闷很长时间...所以说蛋的成熟原理应该是热传导...而且热水下锅...最外层蛋白很快就熟了...降低热传导效率...本来热传导原理煮蛋就不会把蛋白煮得均匀...这样一来很容易出现不好剥鸡蛋的事... ...而且两者相比...热水下锅的蛋...由于蛋黄周边组织不熟...蛋腥味较重...\r 【电磁炉党请看这里...】\r其实呢...燃气炉最后转大火那里主要是给锅和锅盖加热而非给水加热...所以电磁炉党人只要用中档左右(及以下)煮蛋就可以了...然后最后时候转到最大档就可以了...\r 【北美电热炉派请看这里...】\r请直接把炉子开到6~7档...煮到水沸腾之后关火...闷的时间60~80秒...(请根据手边的蛋来掌握...各种Size请调整...)\r 【火锅炉版的攻略...】\r正在撸...",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "《朱莉与朱莉娅》一片中，朱莉说：“我从来没有想过，蛋黄液的滋味是如此美妙。”\r 于是，煮溏心鸡蛋便是一大乐趣...\r 预感我会变成“水煮蛋少年”了...\r 【纠结糖心蛋卫不卫生的各位请看小贴士...】\r【纠结鸡蛋是冷水下锅好还是开水下锅好的请看小贴士...】\r【纠结电磁炉怎么做的请看小贴士...】\r【纠结北美地区电热炉怎么煮的请看小贴士...】\r【此攻略标榜快手... ...用时短... ...效果好... ...】\r 【写在开始使用本攻略前的话：此攻略考虑的变量很多...各位勇士请多多尝试以熟悉自家炉灶及鸡蛋的脾气...不懂如何在失败后改进的请留言...】\r 进击的水煮蛋！——温泉蛋！：http://www.xiachufang.com/recipe/100030108/",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8763a02f0da4bb2224",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/a9a6a6868bff11e6b87c0242ac110003_220w_166h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "金针菇剪掉根部洗净",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/a9c0681e8bff11e6b87c0242ac110003_206w_157h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "培根中间一刀切2半",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/a9e5156a8bff11e6a9a10242ac110002_208w_157h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "取适量金针菇用培根卷住",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/aa18d2ce8bff11e6a9a10242ac110002_218w_166h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "用牙签固定住",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/aa3e96a88bff11e6b87c0242ac110003_210w_160h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅中放少许油，烧5成热时，放入培根卷煎熟，撒黑胡椒碎和白芝麻装饰一下即可",
				"height": 400
			}
		],
		"uid": 1,
		"title": "香煎培根金针菇卷",
		"food": [{
				"name": "培根",
				"len": "培根"
			},
			{
				"name": "金针菇",
				"len": "金针菇"
			},
			{
				"name": "黑胡椒碎",
				"len": "黑胡椒碎"
			},
			{
				"name": "熟白芝麻",
				"len": "熟白芝麻"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/142625de872a11e6a9a10242ac110002_600w_800h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、由于培根已经是咸的，不用再放盐了。\r2、培根在煎制的过程中会本身会出油，所以放少许油就可以了。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "喜欢培根和金针菇的朋友不妨一试哦，做法简单，味道绝对不会让你失望的。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8763a02f0da4bb2225",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2ad643748dd611e6a9a10242ac110002_1728w_1152h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "西葫芦洗净不用去皮，用擦子擦成细丝。（注意：不要擦成细末，没有口感）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2b467c708dd611e6b87c0242ac110003_1728w_1152h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "放入一小勺食用盐，用筷子搅拌均匀。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/2ba37ae28dd611e6a9a10242ac110002_1728w_1152h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "静置15分钟左右，西葫芦丝杀出了很多水分即可，水不要倒掉。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2c333aa68dd611e6b87c0242ac110003_1728w_1152h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "打入两个鸡蛋，搅拌均匀。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2c8875a28dd611e6a9a10242ac110002_1728w_1152h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "倒入面粉，搅拌均匀后静置20分钟直至面糊无面粉的小颗粒。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2d1ad0328dd611e6b87c0242ac110003_1728w_1152h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "入锅前淋入少许香油，搅拌均匀。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2d8ec0788dd611e6b87c0242ac110003_1728w_1152h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "平底锅放少许底油，抹匀，油温烧热后倒入面糊，摊平，小火。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2e16a4ca8dd611e6b87c0242ac110003_1728w_1152h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "轻轻晃动平底锅，底面金黄后翻面，待两面金黄后即可出锅。小碗中倒入醋和蒜末，作为沾汁儿。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "老北京糊塌子",
		"food": [{
				"name": "西葫芦",
				"len": "西葫芦"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "面粉",
				"len": "面粉"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "香油",
				"len": "香油"
			},
			{
				"name": "蒜末",
				"len": "蒜末"
			},
			{
				"name": "醋",
				"len": "醋"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/5c88ae56883711e6b87c0242ac110003_1728w_1152h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、西葫芦一定要擦成细丝，不要弄得太碎，口感不好。2、鸡蛋和面粉的量完全可以根据个人喜好和西葫芦的多少适当增减。3、醋和蒜末的搭配是比较传统的，你可以添加红油、老干妈或者其他沾汁。4、煎面糊时保持小火，不要煎老，嫩嫩的才好吃。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "#舌尖上的家乡#——北京的特色美食其实不少，可只有身在这个城市，才能完整的感受到特色小吃的美味。烤鸭要吃热乎乎新出炉的吧，豆汁儿焦圈儿要去胡同串子里吧，豌豆黄、牛舌饼、芸豆糕这些小吃总是要吃地道的吧，那些真空包装的烤鸭和各色小吃，真儿真儿的逊色很多。今儿咱还就在家吃了，不出门儿，不排队，不用大老远为了一道吃食费尽周折。老北京的糊塌子，不用葱姜炝锅儿，最简单的几样家常食材品尝老北京风味儿美食，说到做到！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8863a02f0da4bb2226",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/d72d6df28d7a11e6b87c0242ac110003_300w_225h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "土豆去皮，切厚片装大碗里\r（补图的时候不赶时间就整个扔水里煮了）",
				"height": 400
			},
			{
				"src": "",
				"text": "加大约土豆分量1/3的水，放进微波炉高火叮5分钟，拿出来翻翻再叮5分钟，直到熟烂。（或者蒸熟、煮熟、用各种你顺手的方式搞熟它就是啦啦啦；煮的话大约40分钟到1小时）"
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/d755b6ea8d7a11e6a9a10242ac110002_300w_225h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "熟土豆用各种你顺手的方式压成泥。\r（推荐下右边这个捣土豆泥的东东）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/d78581f48d7a11e6b87c0242ac110003_300w_225h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "加点牛奶，继续压压压搅搅搅，牛奶的量加到你自己觉得土豆泥够柔软就行了。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/d7a0c1448d7a11e6a9a10242ac110002_300w_225h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "耗油、黄油、胡椒粉、淀粉、水 统统加到一起",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/d7c0b0808d7a11e6a9a10242ac110002_300w_225h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "搅一搅；\r黄油固体的没关系到时一加热就化了，主要是把淀粉搅化开。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/d7ec09388d7a11e6b87c0242ac110003_200w_150h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "煮成一个糊糊。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/d81051ee8d7a11e6a9a10242ac110002_526w_394h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "浇上去。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/d82d73e68d7a11e6b87c0242ac110003_300w_225h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "备了个注&道一下歉：因为汁都是每次看土豆的大小随手倒的=_=真没算过比例，这次也是倒完了才想到……\r右图中分别是黄油、耗油、淀粉、一个1tsp的勺。用量表的量就是这么目测来的|||\r肯定不精确啦，就是大约摸那么一参考，做菜么 就是要根据自己口味这个多加一点那个少加一点的么~ （别信",
				"height": 400
			}
		],
		"uid": 1,
		"title": "鸡汁土豆泥",
		"food": [{
				"name": "土豆",
				"len": "土豆"
			},
			{
				"name": "牛奶",
				"len": "牛奶"
			},
			{
				"name": "耗油",
				"len": "耗油"
			},
			{
				"name": "黄油",
				"len": "黄油"
			},
			{
				"name": "黑胡椒粉",
				"len": "黑胡椒粉"
			},
			{
				"name": "淀粉",
				"len": "淀粉"
			},
			{
				"name": "水",
				"len": "水"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/0743ca8f7d6911e58a382145e1fb18e9.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "我没另加盐了，蚝油就够咸够鲜，如果用的是含盐黄油就更够啦=x=大家自己调整啦\r 调汁的时候每样都少加一点 火开小一点，边煮边尝尝嘛，觉得哪边少了再加就是嘛\r 感谢大勺熬焦糖的妹子给我启示，以往为了这么点东西洗锅真是件纠结的事",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "伪KFC的鸡汁土豆泥！ \r这边是完全的懒人做法=x=\r木有鸡汤…木有搅拌机…木有奶油木有酱…木有锅……（你够",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8863a02f0da4bb2227",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f64f84408c8a11e6a9a10242ac110002_215w_165h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "先将猪肉切成丝后放进碗内",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/f65e61368c8a11e6b87c0242ac110003_177w_129h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "加入适量的淀粉和料酒拌匀腌制10分钟",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f686605a8c8a11e6b87c0242ac110003_177w_128h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "豆皮切成适中的大小块，葱白切丝备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f6d603948c8a11e6a9a10242ac110002_177w_130h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "把白糖、面酱、生抽放入一起搅拌均匀备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/f71796568c8a11e6a9a10242ac110002_179w_129h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "锅加内放入适量油同时加热，把腌制好的肉丝倒进去",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f73767248c8a11e6b87c0242ac110003_179w_130h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "炒至变色后盛出来备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f7654b768c8a11e6a9a10242ac110002_180w_128h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅内倒出多余的油，留一点底油即可，将葱花姜末放进去爆香，放入肉丝炒匀，加入调好的酱汁，等到酱汁变浓稠后关火即可",
				"height": 400
			}
		],
		"uid": 1,
		"title": "京酱肉丝",
		"food": [{
				"name": "猪肉",
				"len": "猪肉"
			},
			{
				"name": "大葱",
				"len": "大葱"
			},
			{
				"name": "豆腐皮",
				"len": "豆腐皮"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "白糖",
				"len": "白糖"
			},
			{
				"name": "淀粉",
				"len": "淀粉"
			},
			{
				"name": "面酱",
				"len": "面酱"
			},
			{
				"name": "生抽",
				"len": "生抽"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/176c3cf0873511e6a9a10242ac110002_333w_500h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "1.这款才属于零失败的蔡，提前把酱汁在碗里调好即可，这样就不会手忙脚乱忘了那样。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8963a02f0da4bb2228",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/be7aa8d08bbb11e6a9a10242ac110002_394w_145h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "荷兰豆洗净择去两端的丝儿，腊肠切薄片",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/be9c7d208bbb11e6a9a10242ac110002_192w_146h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅中放入适量热水，水开后放入荷兰豆汆烫变色，马上捞起浸入冷水中2分钟沥水备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/bed4ef2a8bbb11e6b87c0242ac110003_593w_148h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "锅置火上，放入腊肠小火煎至透明，投入荷兰豆大火翻炒几下，加入盐、味精继续翻炒均匀，出锅盛盘即成",
				"height": 400
			}
		],
		"uid": 1,
		"title": "腊肠炒荷兰豆",
		"food": [{
				"name": "腊肠",
				"len": "腊肠"
			},
			{
				"name": "荷兰豆",
				"len": "荷兰豆"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "味精",
				"len": "味精"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/818b215486f511e6b87c0242ac110003_600w_800h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、荷兰豆汆烫变色即可，千万不要过火，时间也就是几秒钟。\r2、我用的腊肠肥肉较多，所以炒这道菜根本不用油。\r3、喜欢荷兰豆的本味儿，就没放葱、姜、花椒，可加少许蒜片提香。\r4、荷兰豆炒的时候也不要过火，荷兰豆才会脆嫩。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "快手小炒",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8963a02f0da4bb2229",
		"work": [{
				"src": "",
				"text": "猪肉切丝。加入料酒、生抽和淀粉，拌匀备用。"
			},
			{
				"src": "",
				"text": "青椒切丝，姜切丝，蒜切末，金针菇撕开，拦腰斩断在中间位置切一刀。"
			},
			{
				"src": "",
				"text": "锅中油热之后倒入肉丝，迅速划开，待肉丝变色之后出锅备用。"
			},
			{
				"src": "",
				"text": "锅再次烧热加入少量食用油，倒入金针菇翻炒半分钟左右，加入青椒丝、姜和蒜，加入适量盐，继续翻炒半分钟左右。"
			},
			{
				"src": "",
				"text": "最后倒入炒好的肉丝，翻炒几下即可出锅。"
			}
		],
		"uid": 1,
		"title": "金针菇青椒肉丝",
		"food": [{
				"name": "金针菇",
				"len": "金针菇"
			},
			{
				"name": "青椒",
				"len": "青椒"
			},
			{
				"name": "猪肉",
				"len": "猪肉"
			},
			{
				"name": "姜",
				"len": "姜"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "淀粉",
				"len": "淀粉"
			},
			{
				"name": "料酒",
				"len": "料酒"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/c7d79c3488c411e6a9a10242ac110002_800w_531h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、猪肉切丝，切之前放在冰箱里冻硬的话很容易切出细丝的。2、青椒易熟，炒久了容易软，影响口感。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "致力于清空冰箱的快手菜二十年。。。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8963a02f0da4bb222a",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/42c833348bc911e6a9a10242ac110002_447w_165h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "包菜用手撕成小片，干辣椒剪成小段、蒜切片",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/42f45c3e8bc911e6b87c0242ac110003_221w_164h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅中油热后，关小火，放入蒜片爆香，再放入花椒、干辣椒",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/4325208a8bc911e6a9a10242ac110002_219w_163h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "炒出香味后，放入卷心菜，炒至稍稍变色，放入陈醋、老抽翻炒均匀,放少许糖提鲜，加少许盐、鸡精调味即可",
				"height": 400
			}
		],
		"uid": 1,
		"title": "手撕包菜",
		"food": [{
				"name": "卷心菜",
				"len": "卷心菜"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "干辣椒",
				"len": "干辣椒"
			},
			{
				"name": "花椒",
				"len": "花椒"
			},
			{
				"name": "陈醋",
				"len": "陈醋"
			},
			{
				"name": "老抽",
				"len": "老抽"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "鸡精",
				"len": "鸡精"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/4fa8c78086f111e6b87c0242ac110003_450w_675h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "营养分析：\r1.日本科学家认为，圆白菜的防衰老、抗氧化的效果与芦笋、菜花同样处在较高的水平。\r2.圆白菜的营养价值与大白菜相差无几，其中维生素C的含量丰富。\r3.此外，圆白菜富含叶酸，这是甘蓝类蔬菜的一个优点。所以，怀孕的妇女、贫血患者应当多吃些圆白菜，它也是妇女的重要美容品。经常食用卷心菜能防止皮肤色素沉淀，减少青年人的雀斑，延缓老年斑的出现等。\r4.它能提高人体免疫力，预防感冒，保护癌症患者的生活指标，在抗癌蔬菜中，圆白菜排在第5位，相当显赫。\r5.圆白菜也是糖尿病和肥胖患者的理想食物。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8a63a02f0da4bb222b",
		"work": [{
				"src": "",
				"text": "将四季豆摘去两头抽去豆筋，掰成段洗净沥干；入油锅炸至外皮略皱，捞出控干油备用；"
			},
			{
				"src": "",
				"text": "锅中留适量余油，将猪肉末炒散，加入姜、蒜末和料酒、生抽炒至干酥；倒入四季豆，调少许盐、白糖和鸡精炒匀，撒入葱花即可。"
			}
		],
		"uid": 1,
		"title": "干煸四季豆",
		"food": [{
				"name": "四季豆",
				"len": "四季豆"
			},
			{
				"name": "猪肉末",
				"len": "猪肉末"
			},
			{
				"name": "姜末",
				"len": "姜末"
			},
			{
				"name": "蒜末",
				"len": "蒜末"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "白糖",
				"len": "白糖"
			},
			{
				"name": "鸡精",
				"len": "鸡精"
			},
			{
				"name": "葱花",
				"len": "葱花"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/8f2fd19c874011e6b87c0242ac110003_400w_614h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "干煸是川菜中运用很普遍的烹饪方法，是将食材用油慢慢煸干而衍生出一种特别的焦香爽脆口感。炸四季豆时不能用急火，要让水分慢慢蒸发，既能确保炸透，同时也能保持色泽鲜嫩。干煸菜按地域特色，会加入芽菜、辣椒等调味；本菜谱按自家口味习惯烹制，因为不擅食辣，只是在起锅前加了一点剁椒碎以增色，所以没有列入用料表，请根据需要自行调整。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "做四季豆的关键就是要煮熟煮透，未煮熟的四季豆中含有皂苷和胰蛋白酶抑制物，会刺激人体的肠胃，造成食物中毒，出现胃肠炎症状...",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8a63a02f0da4bb222c",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/53f90778922711e6b87c0242ac110003_402w_302h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "虾仁用少许盐混合均匀放置5分钟,然后将盐洗去（用盐先抓洗一下就可以洗去表面的黏液,这样炒出来的虾仁才会清脆好吃)；用厨房纸将水份吸干虾仁，如果没有吸干水份，腌制的时候不容易附着腌料",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/53c279ec922711e6a9a10242ac110002_402w_302h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "擦干的虾仁加盐、料酒、蛋白搅拌均匀后，再下玉米淀粉拌匀腌制片刻",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/539db6e8922711e6a9a10242ac110002_402w_302h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "鸡蛋打散加入调味料（盐1/2小勺、白胡椒粉少许）混合均匀，香葱切成葱花，水淀粉搅拌均匀准备好；烧一锅滚水，将腌拌好的虾仁入锅，略为汆烫至七分熟（约30秒），备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/53604326922711e6b87c0242ac110003_402w_302h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将烫过的虾仁放入蛋液中，加入葱花、水淀粉混合均匀",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/52fd8fec922711e6a9a10242ac110002_402w_302h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "起油锅，放入2大勺油，油烧热后，将混合虾仁的蛋汁倒入，一开始不要翻动，感觉蛋液周围开始凝固就用锅铲迅速划圈圈将蛋炒散，等大部份的蛋液一凝固马上关火盛盘，避免蛋炒的太熟不够滑嫩",
				"height": 400
			}
		],
		"uid": 1,
		"title": "滑蛋虾仁",
		"food": [{
				"name": "虾仁",
				"len": "虾仁"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "香葱",
				"len": "香葱"
			},
			{
				"name": "水淀粉",
				"len": "水淀粉"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "蛋清",
				"len": "蛋清"
			},
			{
				"name": "玉米淀粉",
				"len": "玉米淀粉"
			},
			{
				"name": "白胡椒粉",
				"len": "白胡椒粉"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/f096588a86f411e6a9a10242ac110002_400w_467h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、虾仁洗过之后要吸干水分，如果没有吸干水份，腌制的时候它不会附着腌料2、虾仁一定要加蛋白、玉米淀粉腌制才会在虾仁外表形成保护膜，炒时不会过老3、虾仁要先烫过再炒，如果直接和蛋一起炒，因为蛋比较容易熟，虾子炒熟了，蛋也老掉了4、蛋液中加入水淀粉会让鸡蛋的口感更滑嫩5、所有食材预先调味好再一起倒入锅中拌炒，可以保有虾与蛋的鲜嫩与滑口",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "今天的这盘滑蛋虾仁，用料很简单，是一般家庭都常备的\r软嫩的炒蛋配上清脆的虾仁，非常美味\r不过这道快手小炒看似简单，可是要想把鸡蛋做成滑蛋而不是煎蛋，还是需要一点小窍门",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8b63a02f0da4bb222d",
		"work": [{
				"src": "",
				"text": "牛肉切厚片，用刀背拍松，制成牛柳，加入料酒、油及水淀粉，拌匀后腌15分钟"
			},
			{
				"src": "",
				"text": "洋葱剥净，青椒洗净去蒂及子，均切大小相仿的片"
			},
			{
				"src": "",
				"text": "烧热3勺油，放入牛柳炒至七成熟，放入黑胡椒粉、蚝油及白糖、盐、味精炒匀，放入洋葱和青椒翻炒至牛肉熟。大功告成~"
			}
		],
		"uid": 1,
		"title": "黑椒牛柳",
		"food": [{
				"name": "牛肉",
				"len": "牛肉"
			},
			{
				"name": "蚝油",
				"len": "蚝油"
			},
			{
				"name": "白糖",
				"len": "白糖"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "洋葱",
				"len": "洋葱"
			},
			{
				"name": "青椒",
				"len": "青椒"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/79f9cb6a88d611e6a9a10242ac110002_605w_406h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "快手菜就是简单方便，但辅料还是略多一点点~",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8b63a02f0da4bb222e",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/b145b256999711e6b2400242ac110002_800w_533h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "龙利鱼解冻后用厨房纸擦干水分，切成1.5厘米见方的块，加入适量橄榄油、少量黑胡椒、姜丝腌制15分钟。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b1a5d7f8999711e6b2400242ac110002_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "番茄顶上用刀划十字，放在滚水中烫一下，这样很容易去皮哦！",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b1eb608e999711e69ce70242ac110002_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "去皮的番茄切成小块备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b22c77d6999711e6b2400242ac110002_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "腌制好的鱼肉放在滚水中烫熟然后捞出备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b26d2ccc999711e69ce70242ac110002_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅烧热后倒入适量油，放入切好的番茄，中火不断翻炒",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b2d5730e999711e69ce70242ac110002_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "番茄炒出汁以后加入两勺番茄酱继续翻炒",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/b328ff7e999711e6b2400242ac110002_800w_533h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "加入小半碗水",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/b3848402999711e69ce70242ac110002_800w_533h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "水开后放入煮熟的龙利鱼块，煮2分钟左右",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b3c5fa54999711e6b2400242ac110002_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "小半碗水和玉米淀粉混合成水淀粉，然后倒入锅中大货煮开，收汁浓稠，然后加一小勺盐、一小撮糖调味出锅就好啦",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b63ccb96999711e6b2400242ac110002_4608w_3072h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "酸甜浓厚的汤汁和嫩滑的鱼肉，美味挡不住~",
				"height": 400
			}
		],
		"uid": 1,
		"title": "番茄龙利鱼",
		"food": [{
				"name": "龙利鱼",
				"len": "龙利鱼"
			},
			{
				"name": "番茄",
				"len": "番茄"
			},
			{
				"name": "番茄酱",
				"len": "番茄酱"
			},
			{
				"name": "小葱",
				"len": "小葱"
			},
			{
				"name": "橄榄油",
				"len": "橄榄油"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "玉米淀粉",
				"len": "玉米淀粉"
			},
			{
				"name": "现磨黑胡椒",
				"len": "现磨黑胡椒"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "姜丝",
				"len": "姜丝"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/e5913e2e89eb11e6a9a10242ac110002_800w_533h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "龙利鱼肉质鲜美，含有丰富的蛋白质，买来冷冻的龙利鱼片没有刺哦！这样不会吐刺的宝宝们也可以放心地吃~简单快手、无需过多的调料，最后用水淀粉勾出浓稠的欠汁，裹在鱼块的外面，很诱人哟！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8b63a02f0da4bb222f",
		"work": [{
				"src": "",
				"text": "鸡蛋打散，放小半汤匙的盐"
			},
			{
				"src": "",
				"text": "番茄（要够熟）切好待用"
			},
			{
				"src": "",
				"text": "热锅，放油（要比平时炒菜放多一倍油），看到油冒白烟时倒鸡蛋下去，边倒"
			},
			{
				"src": "",
				"text": "边用锅铲打圈搅拌（油热够的话，你会看到倒下去的蛋液冒泡似的翻起来），鸡蛋都凝固了，基本OK，盛起"
			},
			{
				"src": "",
				"text": "再放点油，切好的番茄倒进去，翻炒一下，小火上盖 7分钟"
			},
			{
				"src": "",
				"text": "看到已经有些番茄汁出来了，放糖，放鸡蛋翻炒，糖的量自己估计，试下甜度"
			},
			{
				"src": "",
				"text": "开大火，汁收的差不多了，上碟（基本完成）"
			},
			{
				"src": "",
				"text": "加分的一步，锅里还有不少番茄汁吧，大火把他熬粘稠了，铲起淋在菜上完成~ （这汁最好吃了，我把锅铲的都添了 - -...）"
			}
		],
		"uid": 1,
		"title": "番茄炒蛋",
		"food": [{
				"name": "番茄",
				"len": "番茄"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "糖",
				"len": "糖"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/101403a8873911e6a9a10242ac110002_600w_450h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "我的番茄炒蛋是天下第二 — —...",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8c63a02f0da4bb2230",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/81c9deb08c8311e6b87c0242ac110003_296w_201h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将炒锅烧热放入2大勺色拉油（平时炒菜的量）、然后将切成末的大蒜放入小火煸炒到大蒜微黄",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/81e4fd6c8c8311e6b87c0242ac110003_296w_195h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "然后放入剁椒炒出香味",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/820cc66c8c8311e6a9a10242ac110002_295w_195h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "再放入生抽和蒸鱼豉油和半碗高汤（我用的是鸡汤，没有可以直接放清水）大火烧开后关火",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/8238503e8c8311e6b87c0242ac110003_297w_197h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "将炒好的调料汁倒入小碗中备用，可以用手指蘸一下汤汁，如果感觉味道淡可以在放少许盐",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/8260a58e8c8311e6b87c0242ac110003_300w_197h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将用凉水泡软的粉丝捞出放入盘子中铺平，切娃娃菜是掉下来的碎菜可以放到粉丝底下",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/828088368c8311e6a9a10242ac110002_298w_200h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将娃娃菜洗干净先竖着切成两半，再将切面朝下放在菜板上，用刀依然是竖着分成三份，这样一个娃娃菜就被分成了六条",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/82af86728c8311e6b87c0242ac110003_301w_199h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "将娃娃菜条切面冲上摆到粉丝上",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/82e16a528c8311e6b87c0242ac110003_300w_199h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将炒好的汁用小勺均匀地浇在娃娃菜和粉丝上上蒸锅，大火开锅后，再中火蒸15~20分钟即可。因为粉丝比较吸汤，所以调料汁要稍微多一些，蒸15分钟后娃娃菜吃起来还有一点点的脆，喜欢绵软的要蒸20分钟",
				"height": 400
			}
		],
		"uid": 1,
		"title": "蒜蓉粉丝娃娃菜",
		"food": [{
				"name": "娃娃菜",
				"len": "娃娃菜"
			},
			{
				"name": "粉丝",
				"len": "粉丝"
			},
			{
				"name": "大蒜",
				"len": "大蒜"
			},
			{
				"name": "剁椒",
				"len": "剁椒"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "蒸鱼豉油",
				"len": "蒸鱼豉油"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/bc3658e8873411e6a9a10242ac110002_480w_678h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "今天做一道蒜蓉粉丝娃娃菜，很简单的一道蒸菜，和粉丝做搭档，以蒜香调味，我又添加了一些剁椒，出国后又撒了撒了星星点点的香葱粒，这样整道菜红黄绿三原色齐了，光一看这卖相就包你喜欢~~",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8c63a02f0da4bb2231",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/acd3287c8e1e11e6a9a10242ac110002_1000w_702h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "把豆腐沥干水后，用手在大碗里捏碎成末",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ae2955348e1e11e6b87c0242ac110003_1000w_680h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "胡萝卜切小丁，葱切成葱花，大蒜剁成蒜蓉，和肉糜一起，倒进1里，加盐和胡椒搅拌均匀",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/aee67cfe8e1e11e6b87c0242ac110003_1000w_664h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "把2揉捏成一口大小的豆腐饼，沾上面粉",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/af495a188e1e11e6a9a10242ac110002_1000w_661h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "鸡蛋搅好，把3均匀的沾上蛋液",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/afc7bba68e1e11e6b87c0242ac110003_1000w_671h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "平底锅倒多一些油，中火烧，把饼两面都均匀煎好",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b05e5be28e1e11e6a9a10242ac110002_600w_903h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "完成~",
				"height": 400
			}
		],
		"uid": 1,
		"title": "韩国料理——豆腐饼(동그랑땡)",
		"food": [{
				"name": "木棉豆腐（北豆腐）",
				"len": "木棉豆腐（北豆腐）"
			},
			{
				"name": "肉糜",
				"len": "肉糜"
			},
			{
				"name": "胡萝卜",
				"len": "胡萝卜"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "大蒜",
				"len": "大蒜"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "面粉",
				"len": "面粉"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "胡椒",
				"len": "胡椒"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/fe28de62884a11e6b87c0242ac110003_600w_431h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "在日本的韩国主妇教的在韩国很普及的家庭料理韓国料理ードングランテン转自：http://cookpad.com/recipe/2038514步骤翻译有稍许改动以便理解",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8c63a02f0da4bb2232",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/59688d488c9911e6b87c0242ac110003_233w_182h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将莴笋根部，用小刀反方向切割，把外表的粗皮割掉",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/59f393d48c9911e6a9a10242ac110002_226w_190h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "再将尾部细嫩的皮削干净，只留下内部青绿色的茎",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/5a3e1af88c9911e6a9a10242ac110002_224w_194h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "先斜切成大薄片",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/5a6217148c9911e6b87c0242ac110003_220w_189h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "再切细丝",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/5a83ed768c9911e6a9a10242ac110002_223w_180h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "炒锅里烧热油，加入莴笋丝，盐，鸡精，用大火快速翻炒",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/5b502f088c9911e6b87c0242ac110003_220w_188h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "直至莴笋丝变软了，即可盛盘",
				"height": 400
			}
		],
		"uid": 1,
		"title": "清炒莴笋丝",
		"food": [{
				"name": "莴笋",
				"len": "莴笋"
			},
			{
				"name": "新鲜红椒",
				"len": "新鲜红椒"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "鸡精",
				"len": "鸡精"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/a938c2fc873511e6b87c0242ac110003_450w_678h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、莴笋切的粗细和火柴棍差不多即可，切的太细口感不那么爽脆了\r2、莴笋的表皮很厚，割的时侯要反方向割，很容易割到手，最好扶持的手戴上保护手套\r3、炒的时侯油可以多放点，这样吃起来比较顺滑。盐要少放，这才能吃到食材的自然清甜味。\r4、炒的时间不易太久，大火快炒，炒至软身就要出锅了。\r5、莴笋中的某种物质对视神经有刺激作用，古书记载莴苣多食使人目糊，停食数天，则能自行恢复， 故视力弱者不宜多食，有眼疾特别是夜盲症的人也应少食。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "同一种食材，用不同的刀法做出来的口感都有区别的，切丝快炒比我以往用的烹调手法来的更爽脆。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8d63a02f0da4bb2233",
		"work": [{
				"src": "",
				"text": "原料切配：豆腐切正方形块状，大小看个人喜好。青葱切葱花，蒜头切成末。肉碎不用腌制，但一定要完全化冻。正宗麻婆豆腐是放牛肉碎。家庭制作可以改为“猪肉碎”也没有问题。郫县豆瓣酱看个人喜好放，我的建议可放多一点点。可以提出问道，也可以让油炒到更红。豆瓣酱也要斩几刀，确保里面的豆瓣不会那么大颗粒影响味道发挥。"
			},
			{
				"src": "",
				"text": "煮豆腐：为什么要煮豆腐？1.豆腐里水分含量高煮后会流失一些口感更好。2.水煮豆腐可以使豆腐更加Q弹好吃。3.水煮豆腐一定要放一些盐，稍微多一点，一块豆腐煮的时候可放2g左右盐一起煮，这样盐的渗透压会更快逼出豆腐里的水分，而且会让豆腐有一点点的咸味，记得这个程序一定要做，想做出好的麻婆豆腐这是关键步骤。4.豆腐要煮差不多2-3分钟（小火，大火容易滚碎豆腐），差不多豆腐微微有些膨胀了就好了，但别捞出来，泡着先~避免豆腐捞上来后黏在一起。"
			},
			{
				"src": "",
				"text": "炒：另外取一口锅，放底油（可以多一点点）油温热后先炒肉碎。此时注意油温不要太高，慢慢炒，炒到肉碎开始微黄，有点发干时加入豆瓣酱炒出红油。出红油后下蒜末炒出香味就可以加水或汤，差不多一块豆腐一小碗汤，煮开汤后加入米酒或花雕酒一小勺，生抽一点点（只是提个味道，因郫县豆瓣已经很咸了，所以别放太多），糖一点点，煮开后试试味道，此时不能味道正合适，要稍微淡一点点，不然烧出来水分挥发后就会很咸。味道调好后加入煮好的豆腐，直接捞出来放进汤汁里，稍微烧一个2-3分钟，待汤汁变少后加入花椒面（自己掌握），我用的是自己炒的花椒碾碎的自制花椒面，所以很香很麻，放的不多提出味道就好了。（花椒面不要早放，会黑，会使整锅豆腐变黑掉）最后用水淀粉勾一个薄芡，再淋入麻油和几滴醋，就完成了炒的部分~（几滴醋也是关键哦，不放和放的会有差别哦，但几滴而已哦，最好不要吃出酸味，只是提味，这就是传说中的”锅边醋“）"
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/5dd48ec8e9b311e6bc9d0242ac110002_2160w_1620h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "点缀：可点缀葱花，香菜，芝麻等等，随个人喜好。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "麻婆豆腐",
		"food": [{
				"name": "豆腐",
				"len": "豆腐"
			},
			{
				"name": "青葱",
				"len": "青葱"
			},
			{
				"name": "蒜蓉",
				"len": "蒜蓉"
			},
			{
				"name": "肉碎（牛肉碎最佳）",
				"len": "肉碎（牛肉碎最佳）"
			},
			{
				"name": "郫县豆瓣酱",
				"len": "郫县豆瓣酱"
			},
			{
				"name": "酱油（生抽）",
				"len": "酱油（生抽）"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "醋",
				"len": "醋"
			},
			{
				"name": "花椒面",
				"len": "花椒面"
			},
			{
				"name": "麻油",
				"len": "麻油"
			},
			{
				"name": "花雕酒/米酒",
				"len": "花雕酒/米酒"
			},
			{
				"name": "淀粉水",
				"len": "淀粉水"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/ac70082ee9b211e6947d0242ac110002_1221w_915h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "豆腐选购：1，不要选购太老的豆腐如北豆腐。2，可选用“水豆腐”“或”内酯豆腐“较为适合制作此菜肴。3，同法可制作”麻婆茄子“”麻婆面筋“等等菜色。4，此菜，传说是一位”陈姓的老婆婆“所创，所以也叫”陈麻婆“豆腐。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "经典传统川菜，川菜代表菜之一。本菜谱采用适合家庭烹煮方式制作，简单易学。想在家里做出餐馆里的卖相和味道吗?快快准备材料吧!",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8d63a02f0da4bb2234",
		"work": [{
				"src": "",
				"text": "将丝瓜刨皮，然后切成一段段的（要切多长可以看你用的碟子有多大），然后一块块地码在碟子上。将大蒜掰开蒜皮，剁成蒜蓉。"
			},
			{
				"src": "",
				"text": "起一个蒸锅，把放着丝瓜的碟子放进蒸锅里面，大概蒸3-5分钟就可以了。千万别蒸久了，丝瓜很容易蒸锅的，只要蒸得颜色碧绿就可以了，再蒸丝瓜就要缩水了。把蒸好的丝瓜碟子拿出来，先放到一边。"
			},
			{
				"src": "",
				"text": "热锅，放一勺花生油下去，等到油热，有点冒烟之后，把蒜蓉放进去，用小火慢慢地爆，等蒜蓉变黄以后把准备好的生抽王倒下去（友情提示，离远一点）~。"
			},
			{
				"src": "",
				"text": "把蒜蓉生抽王淋在丝瓜上就大功告成了！很简单吧，简单得不能再简单了。炎热的夏天，只要五分钟就有色香味俱全的一道菜可以吃了~"
			}
		],
		"uid": 1,
		"title": "只需要五分钟就可以的美味蒜蓉蒸丝瓜",
		"food": [{
				"name": "丝瓜",
				"len": "丝瓜"
			},
			{
				"name": "大蒜",
				"len": "大蒜"
			},
			{
				"name": "花生油",
				"len": "花生油"
			},
			{
				"name": "生抽王",
				"len": "生抽王"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/4346b5c2885611e6a9a10242ac110002_853w_640h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、丝瓜的数量是不定的，因为有的丝瓜大，有的丝瓜小，要看吃多少来做~2、丝瓜不要蒸过了，不然口感和外貌都会受影响3、酱油的量也是不一定的，因为有的重口味，有的不是重口味。怎么我的tips全是废话？哈哈哈哈~",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "蒜蓉丝瓜是广东这边常见的一道菜式，尤其是顺德地区。这道菜好吃又营养，在炎热的夏天蒸个丝瓜吃，又清甜又简单。这个菜几乎不用怎么大动干戈，所需要的东西简单到不行，但是味道，也好到不行，我保证。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8e63a02f0da4bb2235",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b45e6918925f11e6b87c0242ac110003_800w_600h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "步骤01：把茄子切成你想要的任何形状，我比较喜欢条状，所以切条啦。你也可以切块，切滚刀，都随意哈！",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b49b2786925f11e6a9a10242ac110002_800w_600h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "步骤02：将茄子入油锅中炸。因为自家油炸食品不像外面那样反复用油，所以建议准备小而深的锅子（奶锅比较合适）专门用来炸东西，健康，省油，而且使用起来很方便。我的小锅在大创店随便选的，觉得有必要的童鞋可以购买一个高端点的小奶锅，蛮实用的！",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b4e9cabc925f11e6b87c0242ac110003_800w_600h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "步骤03：将炸好的茄子控油，茄子是十分吃油食物。建议可以用厨房用纸吸吸油，这样吃起来更健康！",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b530db0a925f11e6a9a10242ac110002_600w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "步骤04：准备调料。这里科普一下：所谓鱼香，不是有鱼的香味。鱼香是四川菜肴主要传统味型之一，具有咸、酸、甜、辣、香、鲜和浓郁的葱、姜、蒜味的特色。此法源出于四川民间独具特色的烹鱼调味方法，所以取名为【鱼香】 \r既然是川菜，必然少不了豆瓣酱，鱼香主要是咸酸鲜，所以少不了生抽和醋。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b5688ca8925f11e6a9a10242ac110002_360w_270h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "步骤05：准备调料汁和辅料。 \r如图所示： \r左上：豆瓣酱备好； \r右上：鱼香汁，主要由生抽，米醋，盐，糖组成，至于味道，可以自己先尝尝，酸咸鲜口味符合您的口味即可，没有绝对的比例！ \r左下：蒜末； \r右下：葱花。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b598fa14925f11e6b87c0242ac110003_360w_270h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "步骤06：葱花，豆瓣酱爆锅。这步注意火候，千万别把豆瓣酱炒焦掉，会严重影响口感。这里还要特别注意：爆锅不要放过多的油，因为茄子本身油炸过，食用过量的油会对身体造成负担哦！",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b5ec1258925f11e6b87c0242ac110003_800w_600h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "步骤07：放入控好油的茄子，大火快炒。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b646952a925f11e6a9a10242ac110002_800w_600h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "步骤08：倒入准备好的鱼香汁，继续翻炒。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b6a83186925f11e6b87c0242ac110003_800w_600h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "步骤09：炒均匀后，撒上蒜末，翻炒几下准备出锅。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/b6fc115c925f11e6b87c0242ac110003_800w_600h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "嗯！o(￣︶￣)n ，香喷喷的鱼香茄子出锅咯！绝对下饭，一盘菜两个人吃，每人吃掉两碗饭，哇咔咔！",
				"height": 400
			}
		],
		"uid": 1,
		"title": "鱼香茄子",
		"food": [{
				"name": "茄子",
				"len": "茄子"
			},
			{
				"name": "郫县豆瓣酱",
				"len": "郫县豆瓣酱"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "香醋",
				"len": "香醋"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "糖",
				"len": "糖"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/ba90059e882811e6a9a10242ac110002_800w_600h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "超级下饭菜。不过略油腻，偶尔吃下，解解馋即可！看了大家做的鱼香茄子，反馈都挺不错的啊……为啥米菜谱评分还那么低，觉得好心塞……嘤嘤嘤！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8e63a02f0da4bb2236",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f6aa43688dc911e6a9a10242ac110002_1600w_1066h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅内放冷水，加入葱段姜片料酒，将鸡胸肉放入锅中，大火煮至沸腾转小火焖5～10分钟",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/f708d43c8dc911e6b87c0242ac110003_1600w_1066h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "用筷子戳开来看下，熟了便捞起放入盘中，盖上保鲜膜，让它自然凉",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/f77cbabe8dc911e6b87c0242ac110003_1600w_1066h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "胡萝卜刨丝",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f7ec270a8dc911e6a9a10242ac110002_1600w_1066h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "木耳提前泡发好，洗净，用滚水焯烫一下，时间不要久。切丝。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f844de368dc911e6a9a10242ac110002_1600w_1066h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "鸡胸肉不烫手后用肉锤轻锤几下，手撕成丝。",
				"height": 400
			},
			{
				"src": "",
				"text": "蒜头剥好挤成蒜泥，加入混合好的三丝里，再依此加入调味汁，醋60ml，鲜酱油30ml，白糖5g，搅拌入味。"
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f8a6bf0c8dc911e6b87c0242ac110003_1600w_1066h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "麻油版：淋上麻油，撒一撮白芝麻，点缀香菜末，小葱。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f99d95e88dc911e6b87c0242ac110003_1600w_1066h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "香辣版：在，麻油版基础上，淋上适量油泼辣子拌匀即可。油泼辣子（一瓶量）：50g辣椒碎，5g花椒碎，20g白芝麻，1g盐，混合好，浇上热至冒烟的菜油200～250g。拌菜必备！",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/fa2f3e6c8dc911e6b87c0242ac110003_1066w_1600h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "端上桌儿开吃。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "凉拌手撕鸡丝（香辣版&麻油版）",
		"food": [{
				"name": "＃主料＃",
				"len": "＃主料＃"
			},
			{
				"name": "鸡胸肉",
				"len": "鸡胸肉"
			},
			{
				"name": "黑木耳",
				"len": "黑木耳"
			},
			{
				"name": "胡萝卜",
				"len": "胡萝卜"
			},
			{
				"name": "＃煮鸡胸肉料＃",
				"len": "＃煮鸡胸肉料＃"
			},
			{
				"name": "葱白",
				"len": "葱白"
			},
			{
				"name": "姜",
				"len": "姜"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "＃调味汁＃",
				"len": "＃调味汁＃"
			},
			{
				"name": "蒜头",
				"len": "蒜头"
			},
			{
				"name": "醋",
				"len": "醋"
			},
			{
				"name": "鲜酱油或生抽",
				"len": "鲜酱油或生抽"
			},
			{
				"name": "白糖",
				"len": "白糖"
			},
			{
				"name": "麻油",
				"len": "麻油"
			},
			{
				"name": "油泼辣子",
				"len": "油泼辣子"
			},
			{
				"name": "＃点缀＃",
				"len": "＃点缀＃"
			},
			{
				"name": "白芝麻",
				"len": "白芝麻"
			},
			{
				"name": "香菜碎",
				"len": "香菜碎"
			},
			{
				"name": "小葱",
				"len": "小葱"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/d64290a2882f11e6a9a10242ac110002_1600w_1066h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "调味汁儿的醋，酱油比例，请自己掌握。方子里给的量，是我觉得正合适的，╰(*°▽°*)╯超爱酸辣，所以此剂量仅供参考",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "这道手撕鸡丝非常简单，分量大可以做两吃，麻油版和香辣（麻辣）版。这是咱家招牌菜，每次做了一大盆都可以被瞬间消灭。作为下酒小菜，或配热乎的白米粥，或拌上面条！简直百搭嘛～～～鸡腿和鸡胸肉都是可以拿来做菜的，但是鸡胸热量更低 ，所以减肥的亲们，不用担心卡路里啊开怀吃吧！ヽ( ^∀^)ﾉ当然，鸡腿肉口感略胜一筹，因为脂肪含量高于鸡胸啊╮(╯_╰)╭（看上去超长的配料表，是因为有两个版本嘛！）",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8f63a02f0da4bb2237",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/0299f19c8dba11e6b87c0242ac110003_638w_640h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "料备齐",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/02d3ca528dba11e6b87c0242ac110003_638w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "切碎",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/0305ae648dba11e6a9a10242ac110002_638w_640h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "肉末入锅翻炒，加少许酱油着色。然后加入木耳翻炒几分钟。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/034d723a8dba11e6a9a10242ac110002_638w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加入芹菜和辣椒",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/03971e9e8dba11e6b87c0242ac110003_638w_640h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "出锅啦！",
				"height": 400
			}
		],
		"uid": 1,
		"title": "木耳芹菜炒肉末（快手菜）",
		"food": [{
				"name": "木耳",
				"len": "木耳"
			},
			{
				"name": "猪肉",
				"len": "猪肉"
			},
			{
				"name": "芹菜",
				"len": "芹菜"
			},
			{
				"name": "辣椒",
				"len": "辣椒"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/e04c5926882e11e6b87c0242ac110003_638w_640h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "下饭菜！好吃！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8f63a02f0da4bb2238",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e50eb9669a0511e69ce70242ac110002_620w_380h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "准备了鸡胸、土豆、辣椒",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/e55208c49a0511e69ce70242ac110002_620w_380h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "先掩鸡胸肉。切好鸡胸肉块。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e57ddeea9a0511e6b2400242ac110002_620w_380h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "倒料酒、玉米淀粉、盐、咖喱粉（不放也可以），搅拌匀均。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e5d2b9889a0511e69ce70242ac110002_620w_380h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "再放葱，搅拌均匀。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e61c22f89a0511e69ce70242ac110002_620w_380h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "搅拌好了，放边。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e65c704c9a0511e69ce70242ac110002_620w_380h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "切好土豆块",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e69797089a0511e6b2400242ac110002_620w_380h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "倒油，多点，大火，炒土豆，放点盐。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e6daf3409a0511e69ce70242ac110002_620w_380h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "炒土豆过程中，顺便切辣椒，省时间。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/e712f7d69a0511e6b2400242ac110002_620w_380h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "拿来老干妈和豆瓣（没有可不放，或换方法，去看下面小贴士）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/e74acfb29a0511e6b2400242ac110002_620w_380h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "老干妈1~2勺+豆瓣1~2勺，酱油2~4勺（我的全是2勺，挺辣哈~）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e7867bfc9a0511e6b2400242ac110002_620w_380h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "再放点白糖，根据你的口感。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e7dbf60e9a0511e6b2400242ac110002_620w_380h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "搅拌匀均好了。【如果你们承受不了辣度的话，可以减少放量~】（2014.9.4，老干妈一勺、豆瓣一勺、酱油三勺，白糖还是一勺，颜色很漂亮，吃了不怎么辣，味道挺不错~不过我最喜欢特辣，还是多放。嘿嘿~）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e83e1c1c9a0511e6b2400242ac110002_620w_380h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "土豆炒好之前，调小火一分钟，降降温。然后放进盘子。不需要倒油，直接放辣椒炒，不一会儿出锅。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/e88a75d09a0511e6b2400242ac110002_620w_380h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "掩好了鸡胸肉。倒点油，鸡胸块放进锅里，要小火，因为生鸡肉里有水，容易油溅了。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e8f77c7a9a0511e6b2400242ac110002_620w_380h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "炒到不再溅了，调中火，直到炒熟了。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e979c3749a0511e69ce70242ac110002_620w_380h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "中间分开，搅拌好的辣椒倒下来。【注意 油溅】。搅拌后，鸡肉也混合。【有的容易黏锅，】",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/e9cfd1069a0511e69ce70242ac110002_620w_380h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "土豆和辣椒全倒下来",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ea10a82a9a0511e69ce70242ac110002_620w_380h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "炒一炒，直到混合。先尝尝，咸不，糖适量不。如果咸的话散少许糖，炒均匀。然后关火。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ea4cfec49a0511e6b2400242ac110002_620w_380h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "出锅喽~~挺辣~~微微甜~~",
				"height": 400
			}
		],
		"uid": 1,
		"title": "宫爆鸡丁（土豆控）",
		"food": [{
				"name": "鸡胸肉",
				"len": "鸡胸肉"
			},
			{
				"name": "土豆",
				"len": "土豆"
			},
			{
				"name": "青椒",
				"len": "青椒"
			},
			{
				"name": "红制辣椒（老干妈）",
				"len": "红制辣椒（老干妈）"
			},
			{
				"name": "豆瓣（辣椒）【没有可以不放】",
				"len": "豆瓣（辣椒）【没有可以不放】"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "白糖",
				"len": "白糖"
			},
			{
				"name": "……掩鸡胸↓",
				"len": "……掩鸡胸↓"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "玉米淀粉",
				"len": "玉米淀粉"
			},
			{
				"name": "咖喱粉（不喜欢的可以不放）",
				"len": "咖喱粉（不喜欢的可以不放）"
			},
			{
				"name": "葱",
				"len": "葱"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/947f1180885d11e6b87c0242ac110003_620w_380h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "第九步，老干妈和豆瓣，家里没有的话。可以换方法。1.弄来0~4个干辣椒，切啥样都随意，只要里面辣椒籽在就行，切好了，放进碗里。2.酱油五到七勺，根据你的口味。3.放点白糖，一勺就行。尽量别放太多，否则会太甜。搅拌好了，在第十六步倒入。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "【重视名字而看到盘菜就呵呵请边。我说过多次，以前炒的是宫爆鸡丁，自己学会做饭，就把爱吃的放，不爱吃的不放，所以名字不变。再说花生味太重，口感影响土豆味。所以不放了。你们喜欢放啥就放。觉得不对，那不做了就行了吧，有几个直接嚷嚷不对不对。行了，我不对。你也不对，没看清楚。】注意，不合适早餐，对空腹来说不好，影响胃。午餐晚餐合适。2015.11.15  今晚我突然想起，回来提醒大家，想要减肥或正在减肥的最好别吃。。。否则会吃不停，而且会浪费米饭。控住不了自己就别怪我哈。我也控制不了。嘿嘿注意：和主题无关的图片，我会清理。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af8f63a02f0da4bb2239",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/2de8a1308c6711e6b87c0242ac110003_800w_533h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "黄瓜切片",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2e0ff0148c6711e6b87c0242ac110003_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "提前2个小时，在黄瓜片上撒盐和糖腌制",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2e40e23c8c6711e6a9a10242ac110002_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "待黄瓜片流出很多水的时候，用手将水分挤干，黄瓜片备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2e6ad7a48c6711e6b87c0242ac110003_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅内放适量的油，待油5成热，放入干辣椒碎爆香",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/2ea321868c6711e6b87c0242ac110003_800w_533h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "闻到浓烈的椒香味的时候，向锅内倒入挤干水分的黄瓜片",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2edbfee88c6711e6b87c0242ac110003_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "撒一点盐调味，将黄瓜片翻炒均匀即可",
				"height": 400
			}
		],
		"uid": 1,
		"title": "香脆炒黄瓜",
		"food": [{
				"name": "黄瓜",
				"len": "黄瓜"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "干辣椒碎",
				"len": "干辣椒碎"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/5fadbefc878111e6b87c0242ac110003_800w_533h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1.用盐和糖将黄瓜中的水分逼出来，这样会使瓜片脆爽可口，咬上去更有口感。\r2.因为之前已经用盐腌制过，所以最后炒的时候少放一点盐调味就可以了。\r3.如果喜欢吃花椒的同学，爆香辣椒油前可以先炼一下花椒油，味道更丰富。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "九月底的时候和父母重游山东，在龙口，老爸的一个朋友请我们吃饭，席间他点了一道炒黄瓜，他说不要小瞧这道炒黄瓜，可是有他们龙口特色的哦，因为黄瓜有特殊的脆感。\r我这人没别的什么爱好，但是一提到吃，就两眼发光，非要知道个三四五六，所以当这道菜端上来之后，我就毫不客气的下筷子，尝了尝。味道上感觉和家里常做的凉菜黄瓜龙（也就是蓑衣黄瓜）很相似，只是从冷盘变成了热炒，暖暖的。椒油的味道也很香浓，而黄瓜本身真心脆哦。\r脑子里铺了个小九九，猜想黄瓜如此脆的原因八成是之前用盐或者糖腌过，蓑衣水分被逼出去啦，也就不会炒出水水的感觉，成品就格外的脆。回家之后大胆尝试，事实证明，推论正确哦。\r只要你能吃那点辣味，就不要客气的放心尝试吧，味道真心好，素菜也可以很下饭哦。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9063a02f0da4bb223a",
		"work": [{
				"src": "",
				"text": "鸡胸肉洗净沥水片成两片，方便入味。放入保鲜袋（饭盒也可以）。取小碗，将三勺老抽、两勺料酒、适量盐倒入调匀。"
			},
			{
				"src": "",
				"text": "将调匀的料汁倒入保鲜袋，揉搓几次，确保料汁粘到每块肉上。挤出空气扎紧袋子。冷藏一晚。"
			},
			{
				"src": "",
				"text": "上锅。大火下油，入鸡胸肉，稍煎转中火，煎到两面金黄。"
			},
			{
				"src": "",
				"text": "将腌肉的料汁中加入适量糖和一勺蜂蜜，如果感觉料汁有点少可适量加水。倒入锅内，转小火慢煮，中间记得翻下。"
			},
			{
				"src": "",
				"text": "汁烧到一半后，把鸡胸肉拿出来，切块，再码回锅里。转大火收汁，汁不要全烧干，留一点，可以焯个西兰花或者青菜，把汁浇上，味道很棒。"
			},
			{
				"src": "",
				"text": "出锅，装盘。一个人也要好好吃饭。"
			}
		],
		"uid": 1,
		"title": "独食快手菜——蜜汁鸡胸肉",
		"food": [{
				"name": "鸡脯肉",
				"len": "鸡脯肉"
			},
			{
				"name": "老抽",
				"len": "老抽"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "蜂蜜",
				"len": "蜂蜜"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/03badb5288f811e6a9a10242ac110002_638w_620h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、我饭量不大，一块鸡胸肉要吃两三顿。你们酌情增减。2、我特别讨厌菜谱里这个适量，但是我做饭都随手抓料，全凭感觉，除非能量化的不然真只能说适量。3、鸡肉不要煮太久会柴哦～",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "最近在减脂，必然少不了好帮手鸡胸肉，煮着吃拌着吃煎着吃感觉过不了多久能专门给鸡胸肉出个菜谱。      哈哈哈～吃了三天水煮换一个口味，原则还是快手少调料，挤出休息时间。      第一次做菜谱图不是很全见谅，不过很简单应该看看就能明白。（图放不上来(╯°□°）╯︵ ┻━┻）",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9063a02f0da4bb223b",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/566786248cdc11e6b87c0242ac110003_650w_491h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "吐司切去四边，吐司上放一片咸火腿，再放上一片芝士。",
				"height": 400
			},
			{
				"src": "",
				"text": "接着再放一片咸火腿，盖上一片吐司，按此方法做好另一个。"
			},
			{
				"src": "",
				"text": "鸡蛋加牛奶打匀，做好的吐司两面都在蛋液里轻轻蘸一下，四个侧面也蘸一下。"
			},
			{
				"src": "",
				"text": "煎锅里倒少量橄榄油，放入蘸好蛋液的吐司，两面煎到金黄即可。"
			}
		],
		"uid": 1,
		"title": "十分钟快手早餐【港式火腿西多士】",
		"food": [{
				"name": "白吐司",
				"len": "白吐司"
			},
			{
				"name": "咸火腿",
				"len": "咸火腿"
			},
			{
				"name": "芝士",
				"len": "芝士"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "牛奶",
				"len": "牛奶"
			},
			{
				"name": "橄榄油",
				"len": "橄榄油"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/7204eef487b811e6b87c0242ac110003_469w_701h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "tips:\r **  做这款西多士，最好选白吐司，别用太甜的或者其它味道比较大的吐司。要不做出的西多士味道会怪怪滴哦。\r **  刚开始煎的时候两片吐司比较容易分开（最好不要老去动它，中间需要翻面的时候，用烹饪夹整个夹稳了再翻面），当芝士逐渐受热融化后，它就充当了粘合剂的作用，两片吐司就会粘得牢牢的啦。\r **  因为火腿本身有咸度，所以蛋液里不用放盐，就这样吃感觉味道刚刚好。\r **  煎吐司之前，最好将煎锅先烧热，再倒油，接着煎吐司，按照这样煎出的吐司才会外脆内软哦~~，火别太大，容易糊嘞！",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "煎到金黄香脆的吐司，夹着咸香的火腿与芝士，光想想都觉得好好次，尤其是芝士受热后半融化的状态，真是太娇嗲了！！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9063a02f0da4bb223c",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9e15d6fc930c11e6b87c0242ac110003_640w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "把枣子洗干净，（是干枣噢，不用煮过的）枣子干的话，泡半小时左右",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9dcfbb2c930c11e6b87c0242ac110003_650w_650h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "枣子沥干水，（我用了宜家的沙拉甩干机，没有的话沥一个晚上就好了）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/9d8fcd96930c11e6a9a10242ac110002_650w_650h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "用小刀把枣核挖出（又看到说用剪刀的但我用刀比较顺手）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/9d533dfe930c11e6a9a10242ac110002_650w_650h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "用筷子和温水把糯米粉搅拌，搅成絮状，看不到干粉的时候，用手揉，揉成光滑的面团，建议每次少揉一点，不够再做，因为糯米团放久了好象会变干，额，我也不知道为什么哟（用温水比较揉的开不知为什么？）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/9d10d6f8930c11e6b87c0242ac110003_650w_650h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "把揉好的糯米粉搓成小条夹在枣子里（糯米条软一点，蒸出来也比较软糯的）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9cd3fe68930c11e6b87c0242ac110003_634w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "上锅蒸就好啦（我自己蒸了15分钟，因为我的糯米团比较大，大家根据自己糯米和枣子的大小来蒸噢）",
				"height": 400
			},
			{
				"src": "",
				"text": "有厨友问，枣子蒸出来太干怎么办，可以把枣子当冷水里泡半小时，让枣子“吃点水”，千万不要先煮枣子，先煮的是做不了的噢"
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9c6f1f0c930c11e6a9a10242ac110002_640w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "挖枣核step1小刀往枣子正中间切下去，会切到硬硬的枣核，另一只手扶住枣子啊，我是要拍照。。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/9c33a2a6930c11e6a9a10242ac110002_634w_640h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "挖枣核step2然后刀头往上倾个30度左右，轻轻的沿着枣核切下去，枣核不一定要切的很干净，会有枣肉残留在上面，取下的枣核还可以煮汤的！",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9bf85700930c11e6b87c0242ac110003_640w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "挖枣核step3把刀子横过来，就是用刀绕着枣核切，一定要轻噢，不然枣子会破",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/9bc010d4930c11e6a9a10242ac110002_640w_640h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "挖枣核step4从另一边沿着枣核切",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/9b60e762930c11e6a9a10242ac110002_640w_640h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "挖枣核step5",
				"height": 400
			},
			{
				"src": "",
				"text": "挖枣核完成！"
			}
		],
		"uid": 1,
		"title": "心太软（糯米红枣）",
		"food": [{
				"name": "红枣",
				"len": "红枣"
			},
			{
				"name": "糯米粉",
				"len": "糯米粉"
			},
			{
				"name": "温水",
				"len": "温水"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/c4afbad4881311e6a9a10242ac110002_650w_650h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "揉面要用温水！冷水入锅，锅开后10～15分钟！用刀取不出枣核的用剪刀噢！取下来的枣核最好不要吃了哦",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "外面饭店也有这个，心太软，但是觉得油太多，还是清蒸一下的健康，原料只有红枣，糯米粉和水，健康无油又好味～",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9163a02f0da4bb223d",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/11a39b8a8bca11e6b87c0242ac110003_250w_167h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "皇后锅中加入比平时炒菜烧多的油，烧到3成热，放入辣椒、鲜麻椒、葱、姜、蒜煸出香味；放入香叶、八角、小茴香、蚝油、辣酱等香料",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/11d58c6c8bca11e6a9a10242ac110002_250w_167h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "放入洗净的小龙虾翻炒均匀",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/120113fa8bca11e6a9a10242ac110002_250w_167h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "然后淋入白酒、生抽、老抽，加入白糖炒出香味",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/122b24108bca11e6b87c0242ac110003_250w_167h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "看到小龙虾卷曲后，淋入200ml的清水加盖用中火焖8分钟，最后加入适量盐调味，火力调大将汤汁稍微收干即可",
				"height": 400
			}
		],
		"uid": 1,
		"title": "麻辣小龙虾",
		"food": [{
				"name": "小龙虾",
				"len": "小龙虾"
			},
			{
				"name": "干辣椒",
				"len": "干辣椒"
			},
			{
				"name": "鲜麻椒",
				"len": "鲜麻椒"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "姜",
				"len": "姜"
			},
			{
				"name": "香叶",
				"len": "香叶"
			},
			{
				"name": "大蒜",
				"len": "大蒜"
			},
			{
				"name": "八角",
				"len": "八角"
			},
			{
				"name": "小茴香",
				"len": "小茴香"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "老抽",
				"len": "老抽"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "白酒",
				"len": "白酒"
			},
			{
				"name": "蚝油",
				"len": "蚝油"
			},
			{
				"name": "辣酱",
				"len": "辣酱"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/0579d09c86f011e6a9a10242ac110002_450w_675h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "麻辣小龙虾从盘子到嘴里的时间绝对没超过10分钟就被全部报销掉了，只剩下留着香味的虾钳子，再一个个精雕细琢吧哈哈，味道不是吹的绝对和北京簋街的小龙虾有一拼，说起北京簋街的麻辣小龙虾知道的人肯定在留口水，不知道的人肯定想知道为什么要留口水。那是因为麻辣小龙虾已经几乎成了整条簋街的招牌菜，而且是不可或缺的那种。麻辣小龙虾并不是真正意义上的龙虾，只是形似，与深海的那种波士顿龙虾非常相象。龙虾学名叫克氏螯虾。小龙虾的吃法很多，或红烧或白煮，但我认为麻辣的做法是和小龙虾的绝配。白煮的腥气，红烧的单纯全然没有麻辣来的透彻、深邃。就像这个社会乱了一样，麻辣既是外表也是本质。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9163a02f0da4bb223e",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/3ec981cc8c1711e6b87c0242ac110003_194w_144h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "干银耳掰成小块放在温水中泡一晚，紫薯洗净去皮",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/3eeae2228c1711e6b87c0242ac110003_192w_145h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "银耳撕成小朵，紫薯切成丁状，葡萄干洗净备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/3f075cb88c1711e6a9a10242ac110002_194w_147h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将银耳放在锅中大火煮开",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/3f2533648c1711e6a9a10242ac110002_194w_146h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "再放入紫薯丁、冰糖和葡萄干",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/3f3eb3ac8c1711e6b87c0242ac110003_194w_145h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "大火煮开",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/3f5f2d3a8c1711e6b87c0242ac110003_196w_146h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "转小火熬煮10分钟",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/3f7ca1f88c1711e6a9a10242ac110002_194w_146h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "待紫薯银耳羹粘稠即可关火",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/3fa9165c8c1711e6a9a10242ac110002_178w_146h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "热食或自然冷却后再食用皆可",
				"height": 400
			}
		],
		"uid": 1,
		"title": "紫薯银耳羹",
		"food": [{
				"name": "银耳",
				"len": "银耳"
			},
			{
				"name": "紫薯",
				"len": "紫薯"
			},
			{
				"name": "葡萄干",
				"len": "葡萄干"
			},
			{
				"name": "冰糖",
				"len": "冰糖"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/fc289a42872f11e6b87c0242ac110003_400w_600h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "快手煮银耳：睡前将银耳放在温水中浸泡一晚，早上起来放在锅中煮开，加冰糖煮十分钟左右即可。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "做完紫薯银耳羹，小惊艳了一把，没想到这么妖娆剔透，这样貌美的滋补美容甜品送给妈妈们是再适合不过了~银耳富含丰富的胶质，如果想让妈妈看起来更年轻，就坚持喝银耳羹，也算是一个减龄养颜的小绝招~之前煮银耳羹都是泡软之后小火炖煮一小时让胶质释放出来，看了陈允斌谈养生的一期节目，十分钟就可以做出好喝的银耳羹，具体怎么做呢，超简单~",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9263a02f0da4bb223f",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2a82ad228c0f11e6a9a10242ac110002_221w_167h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "金针菇剪去根部洗净备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2aa110288c0f11e6b87c0242ac110003_204w_155h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅中放油，烧至六成热时依次放入蒜蓉和陴县豆瓣酱，炒30秒左右",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/2ac3ace68c0f11e6b87c0242ac110003_208w_158h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "豆瓣酱炒香后放入600毫升的清水",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2ae4921c8c0f11e6a9a10242ac110002_219w_164h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "大火烧开后放入金针菇",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2b002a368c0f11e6a9a10242ac110002_208w_156h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "煮开后加入肥牛片，用筷子快速翻动，让肥牛片在汤中散开，煮1分钟，当肥牛片变色后关火，盛出后散上葱花即可",
				"height": 400
			}
		],
		"uid": 1,
		"title": "肥牛金针菇",
		"food": [{
				"name": "肥牛片",
				"len": "肥牛片"
			},
			{
				"name": "金针菇",
				"len": "金针菇"
			},
			{
				"name": "葱花",
				"len": "葱花"
			},
			{
				"name": "陴县豆瓣酱",
				"len": "陴县豆瓣酱"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "蒜蓉",
				"len": "蒜蓉"
			},
			{
				"name": "油",
				"len": "油"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/60b2c626872c11e6b87c0242ac110003_600w_800h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "如果喜欢辣的可多放些豆瓣酱，就不再需要放盐了，因为豆瓣酱很咸的，如果不太喜欢辣的，放的豆瓣酱少，就得适量再加些盐。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "做这道菜整个过程下来不到10分钟，可谓快手家常菜，非常适合上班急急忙忙的上班族哦。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9263a02f0da4bb2240",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/efc9fa528eaf11e6b87c0242ac110003_350w_234h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "材料如下图事先将烤箱预热至200度，然后开始准备工作",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/efefbaee8eaf11e6a9a10242ac110002_573w_127h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将面包糠倒入平底锅，将橄榄油倒入，并且中火开始炒制面包糠变金黄色后，将面包糠转移至其它盘子什么的放凉待用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/f01514608eaf11e6a9a10242ac110002_350w_234h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "去除多余的脂肪后，用刀子在猪排上轻轻的一刀一刀的划过（nami桑解释说因为脂肪和瘦肉的弹性不一样，当烹制的时候他们的收缩率不同，听着好高级。。。。这样划过会有助于烹制时猪排保持平整漂亮！！）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f05069208eaf11e6b87c0242ac110003_568w_188h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "用肉锤打肉。。。。。（我这是神马翻译，翻译的好难听）。。nami桑说没有肉锤就用普通的刀背就好，然后用手整合肉的形状",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f07a9c7c8eaf11e6b87c0242ac110003_573w_192h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将盐和新鲜的胡椒洒在肉排上",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f0ae2d268eaf11e6a9a10242ac110002_576w_126h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将猪排裹上面粉，然后掸掉多余的粉末，再裹上全蛋液，之后裹上步骤2中的炒过的面包糠",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f0dbedf68eaf11e6a9a10242ac110002_350w_234h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将猪排移至烤盘，200度20min",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f109d6da8eaf11e6b87c0242ac110003_350w_234h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将烤好的猪排切开（nami桑说要像锯子一样前后锯开猪排，这样面包屑才不会掉~）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f131f8ae8eaf11e6a9a10242ac110002_575w_127h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "这步骤是制作酱，将芝麻碾碎，加入炒面酱",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f15898388eaf11e6a9a10242ac110002_350w_350h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "大概长这样，国内的日本超市应该有~~~也有可能写成（お好み焼き酱）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/f173d7d88eaf11e6a9a10242ac110002_320w_180h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "切丝办法，大概就是切一半再切一半，再把芯去掉，然后一堆一起切。。。太考验手法了，我完全无能！",
				"height": 400
			}
		],
		"uid": 1,
		"title": "日式炸猪排（非油炸 揚げないとんかつ）",
		"food": [{
				"name": "面包糠",
				"len": "面包糠"
			},
			{
				"name": "橄榄油（我觉得普通油也ok）",
				"len": "橄榄油（我觉得普通油也ok）"
			},
			{
				"name": "猪排",
				"len": "猪排"
			},
			{
				"name": "现磨胡椒",
				"len": "现磨胡椒"
			},
			{
				"name": "面粉",
				"len": "面粉"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "黑芝麻",
				"len": "黑芝麻"
			},
			{
				"name": "日式炒面酱",
				"len": "日式炒面酱"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/fd8f3508886a11e6b87c0242ac110003_700w_1050h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1,. nami桑说猪肉要薄才是关键，但也不能太薄，所以最好不要超过1.2cm2. 另外因为怕油腻，日式炸猪排多配切得细细的圆白菜丝一起吃，所以烤制的时候可以切圆白菜丝~",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "由于nami桑联系，说不希望自己的菜谱被直接发布在下厨房，希望删除，所以删除了其他菜谱，tonkatsu的这个上传作品太多，删了觉得对不起大家，所以和她商讨看能不能留下，还好nami桑同意了。另外附上了原博客的网址http://www.justonecookbook.com/recipes/baked-tonkatsu/今天nami桑讨论时，她说网站的运营并非她本人的兴趣，而是和广告利益都有挂钩，所以才不能转载的~另外各位去看看学习就好了，不要翻译或者转载图片，因为都是有版权的~~国外人民的维权意识就是强悍，，，，，，，，，，，，，，，，，，，，，，，这个方子来自日本主妇Nami，因为没有时间自己重复，所以图直接引用她博客的原图。日式炸猪排真的很好吃，但是毕竟油炸不健康，所以nami桑将油炸转为烤制。方子准备时间10min，制作时间20min，总耗时30min。微博里有小伙伴说最后酱汁写错了，可是这是nami桑博客里给的图片。。。。其实来日本三年我都没有分清楚章鱼烧，大阪烧，日式炒面酱的区别，明明都是一个味道嘛！！！！！！！另外有小伙伴感慨怎么才能把圆白菜切成那么细，日语里这种切法叫做　千切り　，也就是切成一千条（我猜的），下面附上youtube视频一段https://www.youtube.com/watch?v=mbJtxgzg2lA国内的筒子可能看不到，真抱歉 最下面贴上一张大概的图，脑洞大的自己脑补一下方法吧（太不负责了。。。。）",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9263a02f0da4bb2241",
		"work": [{
				"src": "",
				"text": "番茄去皮切小块，土豆切片"
			},
			{
				"src": "",
				"text": "爆香蒜末下土豆片，加少许生抽"
			},
			{
				"src": "",
				"text": "加入番茄块，炒至番茄软烂"
			},
			{
				"src": "",
				"text": "起锅前继续放蒜末，青椒，炒到青椒断生加盐"
			}
		],
		"uid": 1,
		"title": "青椒番茄土豆片",
		"food": [{
				"name": "青椒",
				"len": "青椒"
			},
			{
				"name": "番茄",
				"len": "番茄"
			},
			{
				"name": "土豆",
				"len": "土豆"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "盐",
				"len": "盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/810c2806873e11e6a9a10242ac110002_800w_536h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "必杀技是在一开始和起锅前的2段式加蒜末\r 很多同学问为什么做的不够小清新。。味道才是王道，好吃最重要。。想做好看的同学： \r1. 一定加生抽，一点就行\r2. 土豆片切好清水浸泡\r3. 不要到处跟人乱讲是我教你做这种小清新的……",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9363a02f0da4bb2242",
		"work": [{
				"src": "",
				"text": "面条在水里煮开（不要煮烂了）。"
			},
			{
				"src": "",
				"text": "面条断生后捞出沥干水分（爱吃凉一些的可以过下凉开水），然后立马加入芝麻油拌匀防止面条粘连。"
			},
			{
				"src": "",
				"text": "黄瓜切丝、香菜切小段、蒜敲扁切丁。"
			},
			{
				"src": "",
				"text": "将切完的辅料与鲜酱油、黄豆酱（我是海天辣黄豆酱）以及醋（可按个人口味任意加入调料）一同加入到面条里，然后大家一起生死缠绵拌均匀。"
			},
			{
				"src": "",
				"text": "最后装盘，美味快手的凉拌面就搞定了！"
			}
		],
		"uid": 1,
		"title": "夏日快手凉拌面",
		"food": [{
				"name": "面条（挂面各种面都可）",
				"len": "面条（挂面各种面都可）"
			},
			{
				"name": "黄瓜",
				"len": "黄瓜"
			},
			{
				"name": "香菜",
				"len": "香菜"
			},
			{
				"name": "大蒜",
				"len": "大蒜"
			},
			{
				"name": "豆瓣酱",
				"len": "豆瓣酱"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "芝麻油",
				"len": "芝麻油"
			},
			{
				"name": "醋",
				"len": "醋"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/637b23c687b811e6b87c0242ac110003_4928w_3264h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、芝麻油神马的可是凉拌菜之魂啊有木有！？拌面缺啥也不能缺这个啊！\r2、各种辅料调味料均个人随意搭配。换言之，冰箱里有什么，只要可以吃的，切小丁小段小丝丝后就都拌进去吧！\r3、面条沥干后要立马拌喔，防粘连很重要！",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "炎炎夏日，总有那么几道菜是夏季必备的心头爱。今天我要做的是，营养健康美味并且上手超快，手残认识也可以一次成功的——快手凉拌面。Here we go~和我一起拌起来！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9363a02f0da4bb2243",
		"work": [{
				"src": "",
				"text": "金针菇去根，洗净摆盘，上面放上剁椒，盖上保鲜膜，放进锅中蒸5分钟"
			},
			{
				"src": "",
				"text": "蒸好后把多余的水分倒出去，上面淋上蒸鱼豉油，撒上葱花"
			},
			{
				"src": "",
				"text": "锅中烧热油，冒烟之后，浇在金针菇上面即可，小心外溅哦！"
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/a6f6590e8e3911e6a9a10242ac110002_2304w_864h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "步骤图",
				"height": 400
			}
		],
		"uid": 1,
		"title": "十分钟快手菜--剁椒金针菇",
		"food": [{
				"name": "金针菇",
				"len": "金针菇"
			},
			{
				"name": "剁椒",
				"len": "剁椒"
			},
			{
				"name": "蒸鱼豆豉",
				"len": "蒸鱼豆豉"
			},
			{
				"name": "葱花",
				"len": "葱花"
			},
			{
				"name": "油",
				"len": "油"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/62f0e77e885311e6a9a10242ac110002_2304w_2304h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "这个剁椒金针菇做法很简单，属于快手菜，十分钟就能搞定了！而且味道不错，主要用到了剁椒和蒸鱼豉油，超市里面都有得卖！推荐一个吧十分钟快手菜--剁椒金针菇以后要是来人没有什么可以做的情况下就可以来个这个，绝对赞！这个菜因为放了剁椒和蒸鱼豉油，所以不用再放盐了！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9363a02f0da4bb2244",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/9028f6c2903811e6a9a10242ac110002_2448w_2448h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "鸡翅洗干净灼水，起锅用急自来水冲30秒，沥水备用；鸡蛋水煮至熟，剥壳备用。⚠️图片是后来补的，就没有准备鸡腿🍗了…",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/8ebcf20c903811e6a9a10242ac110002_2448w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "准备卤水配料，辣椒需要切断(桂皮、草果害羞没有入镜😳)",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/8d8e4048903811e6a9a10242ac110002_2448w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "鸡翅、鸡蛋以及卤水配料放小奶锅，先加淹没鸡翅鸡蛋一半的清水",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/8c4844fe903811e6a9a10242ac110002_1080w_1080h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加生抽4汤勺、老抽2汤勺、陈醋2汤勺、蚝油1汤勺、冰糖1汤勺、芝麻油1茶勺、盐(调整用)半汤勺(可不加)，加完所有调料应该刚好覆盖了鸡翅鸡蛋，如果还未覆盖，请添加清水至完全覆盖PS：汤勺是图片上的，具体一汤勺容量为多少我没具体量过",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/8b9457d2903811e6b87c0242ac110003_2448w_2448h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "大火煮开转中小火煮30分钟，想软绵一点的可以多煮一会儿，直至自己喜欢的程度。⚠️出锅前，试下咸度，试下咸度，试下咸度，便于做些调整。PS：请一定细心看心得，尤其是出锅前试下咸度非常必要！",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/89cb0da6903811e6b87c0242ac110003_2448w_2448h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "最后简单摆盘就可以吃大餐啦~",
				"height": 400
			}
		],
		"uid": 1,
		"title": "卤三鸡(鸡腿/鸡翅/鸡蛋)",
		"food": [{
				"name": "鸡翅",
				"len": "鸡翅"
			},
			{
				"name": "八角",
				"len": "八角"
			},
			{
				"name": "桂皮",
				"len": "桂皮"
			},
			{
				"name": "草果",
				"len": "草果"
			},
			{
				"name": "香叶",
				"len": "香叶"
			},
			{
				"name": "花椒(不吃辣可不放)",
				"len": "花椒(不吃辣可不放)"
			},
			{
				"name": "辣椒(不吃辣可不放)",
				"len": "辣椒(不吃辣可不放)"
			},
			{
				"name": "葱段",
				"len": "葱段"
			},
			{
				"name": "姜片",
				"len": "姜片"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "老抽",
				"len": "老抽"
			},
			{
				"name": "陈醋",
				"len": "陈醋"
			},
			{
				"name": "蚝油",
				"len": "蚝油"
			},
			{
				"name": "冰糖",
				"len": "冰糖"
			},
			{
				"name": "芝麻油",
				"len": "芝麻油"
			},
			{
				"name": "盐(调整用)",
				"len": "盐(调整用)"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/2e3e2e1a88fd11e6a9a10242ac110002_2448w_2448h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "1、鸡腿鸡翅灼水之后冲水，是为了鸡皮在后期的卤的过程中不至于破皮且能保持弹性；2、鸡蛋、鸡腿在卤的过程中，还是建议中间破个洞，便于入味；3、多余的卤汁，把渣渣过滤掉，煮开放凉，三五天要用可密封放冷藏保存，长时间不用密封放冷冻保存(每一个月必须拿出来解冻煮沸一次)，但是如果卤了羊肉，豆干，莲藕这些大气味的食物就只能冷藏放三两天了……4、鉴于大家使用的锅具大小不同，建议在出锅前，试下咸度，便于做些调整；5、菜谱中的食材也不局限在“三鸡”，还可以添加鸡脚、五花肉、豆干(豆干比较吸味，注意增减调味料)、土豆、芋仔等等，大家自由发挥；6、好多小伙伴问我这个卤出来是不是都是这个色泽，我只能告诉你，色泽跟老抽生抽的品牌，和水分的多少，火力的大小（水分挥发问题）等都有密切关系…7、生抽我一般用味极鲜，老抽、醋等等我都忘记当时的品牌了…",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "三鸡其实是鸡腿、鸡翅和鸡蛋的统称！有那么一段时间，特别馋各种三鸡的吃法，从卤、烤、蒸、炸、煎…等等，在三鸡的路上，我也算是资深吃客了...",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9463a02f0da4bb2245",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f2f9e29c8e7711e6a9a10242ac110002_640w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "准备5只新鲜的秋葵",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f32a1eda8e7711e6a9a10242ac110002_640w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "洗净后放入沸水里焯1分钟即捞出",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/f364d17e8e7711e6b87c0242ac110003_640w_640h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "放入凉水里冷却",
				"height": 400
			},
			{
				"src": "",
				"text": "冷却后掐头去尾再切成小圈圈"
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/f3b796b68e7711e6b87c0242ac110003_640w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加入蒜末，生抽 麻油和老干妈拌匀即可",
				"height": 400
			}
		],
		"uid": 1,
		"title": "夏日快手菜凉拌秋葵",
		"food": [{
				"name": "秋葵",
				"len": "秋葵"
			},
			{
				"name": "大蒜",
				"len": "大蒜"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "麻油",
				"len": "麻油"
			},
			{
				"name": "老干妈",
				"len": "老干妈"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/4c37e6a2886911e6a9a10242ac110002_640w_640h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "简单又好吃的快手菜。五分钟搞定凉拌秋葵",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9463a02f0da4bb2246",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/81501ae28d4811e6b87c0242ac110003_200w_145h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加两勺料酒、一勺酱油，一勺淀粉、半勺盐、然后抓一下，腌制20分钟。这个过程叫做“码味儿”",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/81a0a6888d4811e6b87c0242ac110003_200w_140h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "螺丝辣椒洗净，去蒂，一剖两瓣，然后切成细丝。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/81bc7a348d4811e6a9a10242ac110002_200w_145h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅中油烧热，下葱、姜、蒜、小米椒煸炒（这个时候把火稍微调小，火太大容易炒焦），炒出香味儿。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/81db3dc08d4811e6b87c0242ac110003_200w_150h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "下腌好的肉丝滑至七八成熟，可以先盛起来，偷懒拨一边儿也可。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/82027e088d4811e6b87c0242ac110003_200w_147h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "这时候下青椒丝、改大火略炒2分钟，一点点蚝油，再与肉丝拌匀快炒，少许盐（之前肉丝已经码过味了，所以请酌情放盐），最后勾一点点味精，关火，出锅。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/828cadda8d4811e6a9a10242ac110002_200w_288h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "青椒清脆碧绿、肉丝香辣宜人，米饭杀手来啦~~下饭绝佳！",
				"height": 400
			}
		],
		"uid": 1,
		"title": "青椒炒肉丝",
		"food": [{
				"name": "青椒",
				"len": "青椒"
			},
			{
				"name": "肉丝",
				"len": "肉丝"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "姜",
				"len": "姜"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "淀粉",
				"len": "淀粉"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/36c33c6886fc11e6a9a10242ac110002_448w_521h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "1、青椒我选用的是螺丝辣子，这种卷卷曲曲，状如螺丝的辣椒皮薄、肉厚、关键是辣味十足。买不到螺丝辣子的童鞋可以选用其他辣椒，但最好选择皮薄的辣椒。\r2、肉丝最好要提前上浆，就是将肉丝用蛋清或者水淀粉码一下，淀粉不要太多，浆不要挂太厚，腌制20分钟，这样炒出来的肉丝口感十分滑嫩入味，不柴。\r3、青椒要后放，放早了就不脆嫩了，盐也要最后放，放早了青椒会出水，颜色也会变黄。\r4、炒的时候放一点点蚝油，是此菜的秘诀哟！",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "青椒炒肉丝",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9563a02f0da4bb2247",
		"work": [{
				"src": "",
				"text": "黄瓜洗净，切片。木耳泡发，去蒂，洗净"
			},
			{
				"src": "",
				"text": "鸡蛋打入碗内，这个时候关键的步骤来了！！！！在鸡蛋里面加一点点料酒、水、一点点盐，然后顺着一个方向将鸡蛋搅匀，这样搅出来的鸡蛋口感更好"
			},
			{
				"src": "",
				"text": "热锅热油倒入打好的蛋液翻炒，稍微成型之后快速盛出"
			},
			{
				"src": "",
				"text": "再次热锅倒油，葱花儿爆锅，放木耳进去翻炒，之后放鸡蛋，最后放切好的黄瓜"
			},
			{
				"src": "",
				"text": "出锅之前放盐，因为之前蛋液里面放过一点了，所以要比平时炒菜时稍微少一点"
			},
			{
				"src": "",
				"text": "起锅，装盘，得嘞~"
			}
		],
		"uid": 1,
		"title": "黄瓜木耳炒鸡蛋",
		"food": [{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "黄瓜",
				"len": "黄瓜"
			},
			{
				"name": "黑木耳",
				"len": "黑木耳"
			},
			{
				"name": "葱花",
				"len": "葱花"
			},
			{
				"name": "油",
				"len": "油"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "料酒",
				"len": "料酒"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/7d99865a874d11e6a9a10242ac110002_4288w_2848h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "1。搅蛋液的时候加料酒和水，可以去除鸡蛋的腥味，而且会让炒出的鸡蛋更蓬松一点，口感更好。\r2。鸡蛋成型之后一定要快速盛出，因为后面还要二次入锅，鸡蛋老了不好吃。\r3。放盐的时候，因为之前蛋液里面放过一点了，所以要比平时炒菜时稍微少一点。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9563a02f0da4bb2248",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bcd976248c1911e6b87c0242ac110003_200w_150h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "原料 猪肉（肥瘦根据喜好自行决定） 和肉等量的西红柿 以及同样等量的尖椒 生姜 大蒜",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/bd65866e8c1911e6b87c0242ac110003_200w_150h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "尖椒选择辣度高的，切碎，我吃辣不行就去了心儿，如果想要更辣可以保留白心一起切碎，姜蒜切末",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bd8a3c528c1911e6a9a10242ac110002_200w_150h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "西红柿用开水烫后去皮，对切，去籽。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bd9966508c1911e6a9a10242ac110002_200w_150h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "西红柿籽会影响口感，不过要自己无所谓的话大咧咧皮都不去直接切碎也行",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bdae74328c1911e6b87c0242ac110003_200w_150h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "西红柿切碎备用。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bdcc2c7a8c1911e6b87c0242ac110003_200w_150h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "猪肉剁碎，加入盐，水淀粉，料酒拌匀。有加酱油的版本，我没加是为了成色清爽的考虑。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/bdf018068c1911e6a9a10242ac110002_200w_150h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "锅里下一小勺油，爆香姜末和一半分量的蒜末。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/be1e1a268c1911e6a9a10242ac110002_200w_150h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "入肉末，尽量滑散，炒至断生。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/be3ec01e8c1911e6b87c0242ac110003_200w_150h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "炒好的肉末盛起待用。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/be5b39888c1911e6b87c0242ac110003_200w_150h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅里下一小勺油，中火爆香剩下的一半蒜蓉，下番茄和一撮盐，炒出汁。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/be7d31148c1911e6a9a10242ac110002_200w_150h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "先加入尖椒末炒去生味，然后加入炒好的肉末，炒匀，试味。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/be9d41b68c1911e6a9a10242ac110002_200w_150h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "上桌，这个菜做过好多次，跟大梨说起云南的时候突然就又馋了。这道菜拌饭拌面拌米线都好吃的。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bec579ce8c1911e6b87c0242ac110003_200w_150h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "尖椒一定记得选辣度高的，味道酸辣略甜，天热的时候吃也很开胃。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "红三剁",
		"food": [{
				"name": "猪肉",
				"len": "猪肉"
			},
			{
				"name": "西红柿",
				"len": "西红柿"
			},
			{
				"name": "尖椒",
				"len": "尖椒"
			},
			{
				"name": "生姜",
				"len": "生姜"
			},
			{
				"name": "大蒜",
				"len": "大蒜"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/e6d6f280875f11e6b87c0242ac110003_600w_452h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9663a02f0da4bb2249",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2aaf0a348e9911e6b87c0242ac110003_1728w_1152h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "两个中等大小的西红柿切小块，葱切末。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2b1d9d468e9911e6b87c0242ac110003_1728w_1152h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅热后倒入比炒菜略少的油即可，油热后加入葱末爆香。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/2b7dde048e9911e6a9a10242ac110002_1728w_1152h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "葱香味出来后，加入西红柿块儿，翻炒半分钟。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2be33baa8e9911e6a9a10242ac110002_1728w_1152h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加入适量蕃茄酱，盐和糖，中火翻炒，直至炒出红油，西红柿的块儿状逐渐减少。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2cba87e08e9911e6b87c0242ac110003_1728w_1152h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加入半锅清水，大火烧开。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2d28815a8e9911e6b87c0242ac110003_1728w_1152h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "等待水开的过程时，将准备好的面粉加水，用筷子一点点搅拌，每次加一点水，搅拌到无水的状态再继续加，直到面粉全部呈大小一致的小颗粒状，无干面粉。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2d7aac788e9911e6b87c0242ac110003_1728w_1152h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅中水开后继续保持大火，分次加入小面疙瘩。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2dca54a88e9911e6b87c0242ac110003_1728w_1152h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "每到一次面疙瘩就用筷子快速搅拌，将面疙瘩在锅中散开不要黏住。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2e15cc3a8e9911e6a9a10242ac110002_1728w_1152h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "再开锅后转成中小火，面疙瘩成熟后转小火，将打散的鸡蛋画圈倒入锅中，先不要搅拌。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2eaf61ce8e9911e6a9a10242ac110002_1728w_1152h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "待鸡蛋稍微凝固后，用筷子轻轻搅拌，加入喜欢的青菜。出锅前淋一些香油即可。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "西红柿鸡蛋疙瘩汤",
		"food": [{
				"name": "西红柿",
				"len": "西红柿"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "面粉",
				"len": "面粉"
			},
			{
				"name": "葱末",
				"len": "葱末"
			},
			{
				"name": "香菜末",
				"len": "香菜末"
			},
			{
				"name": "蕃茄酱",
				"len": "蕃茄酱"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "香油",
				"len": "香油"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/e80eb34e887311e6b87c0242ac110003_1728w_1152h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、西红柿可以提前去皮，给老人小孩儿吃的时候。2、加入蕃茄酱是为了增加酸甜的口感，如果西红柿本身味道够足可省略。3、一定要把西红柿多炒一会，几乎看不到块儿状最好。4、面粉就用普通的中筋面粉，富强粉就可以，还可以用不含麦麸的全麦粉；面粉的量和水的量根据个人需要酌情增减。5、蔬菜可以选择小油菜，小白菜等，也可以不加。6、出锅前的香油最好不要省略。7、面疙瘩一定要大小一致，太大的话不容易熟还会影响口感。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "西红柿鸡蛋是多少人的大爱估计数不清了，炒着吃下饭又下面，做汤清甜可口，这回的疙瘩汤必须也要加入这个惹人爱的大本营。酸甜，省事儿。即便是三伏天儿里喝着冰啤酒撸着各种烤串儿，收尾的时候都愿意跟老板点一份疙瘩汤才叫圆满，吃完好像从头到脚都舒服。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9663a02f0da4bb224a",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/81579ea28d7f11e6b87c0242ac110003_1936w_1936h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "洋葱、胡萝卜切丝，包菜切碎（不用太小）。起锅少许油爆香洋葱。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/81ee5cd48d7f11e6a9a10242ac110002_1936w_1936h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "加入胡萝卜丝",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/8298a5908d7f11e6b87c0242ac110003_1936w_1936h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "放入包菜，翻炒，可以放一点生抽哦。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/8335e3788d7f11e6a9a10242ac110002_1936w_1936h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "另取一个锅，在烧开的水中放入速冻年糕。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/83ceba628d7f11e6b87c0242ac110003_1936w_1936h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "我用的是这个牌子的年糕，非常推荐！",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/2e6a3f8c271311e7bc9d0242ac110002_1080w_1921h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "也可用芝心年糕或者咸蛋黄年糕～淘宝有售～",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/84f0ec3a8d7f11e6b87c0242ac110003_1936w_1936h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "稍微烫过的年糕整锅倒入炒锅",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/85911b428d7f11e6a9a10242ac110002_1936w_1936h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加入两勺韩国辣酱",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/863c01f68d7f11e6a9a10242ac110002_1936w_1936h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "然后是一勺左右的韩国大酱，这个视个人口味定量，也可以不加的。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/86ef13d68d7f11e6b87c0242ac110003_1936w_1936h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加入一勺糖，喜欢吃甜一点也可以再多加一点。一定要加糖，可以提鲜噢！",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/884dce0c8d7f11e6b87c0242ac110003_1936w_1936h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "改中火闷几分钟，中途要搅拌一下，避免粘锅~",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/88de62288d7f11e6a9a10242ac110002_1936w_1936h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "然后开大火收汁，收汁的多少也要看个人喜好喽，有人喜欢吃有汤汁，有人喜欢稍微干一点的，自己定喽~这个时候还可以放入开水烫过的泡面也很赞的~",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/892dfc3e8d7f11e6b87c0242ac110003_500w_334h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "出锅~撒上芝麻，还可以撒些葱花~也可以加上切开的白水蛋~赞！香喷喷的辣炒年糕就做好啦！ =3=",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/846d02bc8d7f11e6a9a10242ac110002_1936w_1936h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "在炒锅中放入泡菜，继续翻炒。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "韩式辣炒年糕（or网红芝士套路之芝心年糕）",
		"food": [{
				"name": "年糕条",
				"len": "年糕条"
			},
			{
				"name": "包菜",
				"len": "包菜"
			},
			{
				"name": "胡萝卜",
				"len": "胡萝卜"
			},
			{
				"name": "洋葱",
				"len": "洋葱"
			},
			{
				"name": "韩国辣酱",
				"len": "韩国辣酱"
			},
			{
				"name": "韩国大酱",
				"len": "韩国大酱"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "韩国泡菜",
				"len": "韩国泡菜"
			},
			{
				"name": "芝麻",
				"len": "芝麻"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/be4beae8881611e6a9a10242ac110002_500w_334h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "实在要强调，推荐速冻年糕条，或者新鲜年糕条，普通那种硬硬的火锅年糕做出来一点都不好吃，之前试过几次都没有这种好吃~",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "容易上手的，美味炒年糕！推荐用速冻在冰柜里的那种年糕，会比普通货架上摆的那种更粘更糯！可用网红芝心年糕）",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9663a02f0da4bb224b",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/1c89e0b08f0611e6a9a10242ac110002_2448w_3264h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "马铃薯去皮后，切成细丝备用。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/1df19b288f0611e6a9a10242ac110002_2448w_3264h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "火腿片切成丝备用。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/1f607d948f0611e6a9a10242ac110002_2448w_3264h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "将马铃薯丝和火腿丝稍拌匀。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2065df408f0611e6a9a10242ac110002_2448w_3264h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "平底锅里倒入少许油，将马铃薯丝和火腿丝倒入锅中翻炒。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/219c458e8f0611e6a9a10242ac110002_2448w_3264h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "炒香变软后，打入鸡蛋，小火煎4-5分钟。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/22c1125a8f0611e6b87c0242ac110003_2448w_3264h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "煎至金黄后，关火，盖上盖子焖一分钟。在表面撒上混合胡椒碎等自己喜爱的调料，趁热享用。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "快手早餐—马铃薯火腿蛋",
		"food": [{
				"name": "马铃薯（土豆）",
				"len": "马铃薯（土豆）"
			},
			{
				"name": "火腿片",
				"len": "火腿片"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "各种自己喜爱的调料",
				"len": "各种自己喜爱的调料"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/abcf9e8c889311e6a9a10242ac110002_3216w_2134h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "一定不能求急开大火，否则容易糊，用小火煎。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "这是一道非常简单的快手早餐，忙碌的早晨，一份快速却丰富美味营养的餐点，提供了一上午满满的能量。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9763a02f0da4bb224c",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/5422050a8d2811e6a9a10242ac110002_300w_400h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将1茶匙白糖，1茶匙盐，1茶匙淀粉，1汤匙生抽，1汤匙蚝油和3汤匙水拌匀调成酱汁。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/544b796c8d2811e6a9a10242ac110002_300w_400h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "西兰花切成小朵。洋葱切丝。胡萝卜切片。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/54c4e9788d2811e6a9a10242ac110002_300w_400h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "锅里加水烧开，放入西兰花和胡萝卜焯烫10秒后捞出控水待用。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/55258fda8d2811e6a9a10242ac110002_300w_400h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "肥牛片入锅焯烫至颜色变白后捞出控水。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/55537d468d2811e6b87c0242ac110003_300w_400h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "重新起锅，加油烧热，放入洋葱丝略微翻炒几下。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/5583b4708d2811e6a9a10242ac110002_300w_400h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "放入肥牛片和料汁。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/55a832008d2811e6a9a10242ac110002_300w_400h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "中火煮至汤汁微浓（中火煮3-5分钟）。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/55e548488d2811e6b87c0242ac110003_300w_400h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "将肥牛片，洋葱丝，胡萝卜和西兰花摆在米饭上，再淋上汤汁就可以了。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "肥牛饭",
		"food": [{
				"name": "肥牛片",
				"len": "肥牛片"
			},
			{
				"name": "西兰花",
				"len": "西兰花"
			},
			{
				"name": "胡萝卜",
				"len": "胡萝卜"
			},
			{
				"name": "洋葱",
				"len": "洋葱"
			},
			{
				"name": "米饭",
				"len": "米饭"
			},
			{
				"name": "白糖",
				"len": "白糖"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "淀粉",
				"len": "淀粉"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "蚝油",
				"len": "蚝油"
			},
			{
				"name": "水",
				"len": "水"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/82147f5e87ee11e6a9a10242ac110002_600w_400h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1.汤汁多留些用来拌饭很好吃哈。\r 2.如果不喜欢吃西兰花和胡萝卜，可以不放。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9763a02f0da4bb224d",
		"work": [{
				"src": "",
				"text": "鸡蛋加盐打匀"
			},
			{
				"src": "",
				"text": "番茄切块"
			},
			{
				"src": "",
				"text": "锅内放适量油,待油热,倒入鸡蛋液,翻炒成块"
			},
			{
				"src": "",
				"text": "盛出鸡蛋,备用"
			},
			{
				"src": "",
				"text": "锅内加油,油热,倒入番茄,加盐翻炒"
			},
			{
				"src": "",
				"text": "加入炒好的鸡蛋,翻炒均匀即可"
			},
			{
				"src": "",
				"text": "盛盘撒葱花"
			}
		],
		"uid": 1,
		"title": "番茄炒蛋",
		"food": [{
				"name": "番茄",
				"len": "番茄"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "葱花",
				"len": "葱花"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/d219e4b8874d11e6b87c0242ac110003_800w_533h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "番茄炒蛋,做的好吃的关键是在火候,火要急,油要热,这样色彩鲜艳,味道酸甜,好吃好看好下饭.",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "番茄炒蛋约莫是新手学的第一道菜之首吧,是米饭杀手,就让我们化平庸为神奇吧.",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9763a02f0da4bb224e",
		"work": [{
				"src": "",
				"text": "西兰花切成小朵，放在洗菜盆里浸泡，同时做开水，放入少许盐"
			},
			{
				"src": "",
				"text": "水沸腾之后放入可爱的西兰花，最多不要超过两分钟，断生即可，捞出沥水"
			},
			{
				"src": "",
				"text": "坐锅，凉油时就投入蒜末，小火煸到一半金黄时就可以倒入蚝油，快速翻炒均匀，马上倒入沥好水的西兰花，整个过程一个字 快"
			},
			{
				"src": "",
				"text": "如果沥水不是很彻底，锅里的汤汁比较多可以适当淋个芡汁，喜欢吃香油的盆友出锅前淋入一点香油很提味"
			}
		],
		"uid": 1,
		"title": "蚝油蒜蓉西兰花",
		"food": [{
				"name": "西兰花",
				"len": "西兰花"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "蚝油",
				"len": "蚝油"
			},
			{
				"name": "盐",
				"len": "盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/edc1564e884a11e6a9a10242ac110002_1800w_1350h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "剩下的西兰花梗不要扔哦，那也是精华，削削皮，焯一下，可以凉拌哦，一样爽脆好吃咧~~我没有在放盐，因为本来他也不是下饭菜，再加上我俩口淡，觉得蚝油本身的咸淡就够了，而且焯西兰花时也放盐了，多少是有咸味的~多吃西兰花，减肥有抗癌哦~~~",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "一道有爽口的营养蔬菜，意外的美味。因为晨夫看到GQ男士上说西兰花是减肥好帮手，所以让我做西兰花给他吃，可是在我的记忆力，西兰花一直是一配角的形式出现的，比如赛螃蟹旁边会有一大圈西兰花，比如牛排旁边会点缀两朵增加鲜艳的颜色，可是最为主菜，这是第一次，却没想到这么好吃。来，让我们恭喜西兰花，终于当上了主角！！！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9863a02f0da4bb224f",
		"work": [{
				"src": "",
				"text": "打蛋"
			},
			{
				"src": "",
				"text": "不沾锅中低温加油。加入黄油，让它融化。"
			},
			{
				"src": "",
				"text": "在此期间加牛奶和盐到蛋液中~继续搅打使蛋液融入充分的空气"
			},
			{
				"src": "",
				"text": "黄油烧热时（考虑到国内的孩纸们都是明火灶比较强悍，可以在这一步就先关火，不强悍就小火）倒入蛋液。不要搅拌！让鸡蛋慢慢慢慢慢温热一分钟直到底部成型（如果你家煤气灶比较强悍可能不要一分钟）"
			},
			{
				"src": "",
				"text": "不要犹豫，拿起小木铲把鸡蛋从边缘往中间推，上层蛋液会流向锅底，凝固了接着往中间推，直到鸡蛋没有继续熟的迹象，（之前关火了的可以把锅放回到小火上继续疯狂的推拌，总之全程小火啊，不可以让鸡蛋上色 上色表示老了）"
			},
			{
				"src": "",
				"text": "看不到流动液体时 赶紧离火并继续搅拌，差不多变结实了就可以装盘了"
			},
			{
				"src": "",
				"text": "装盘 此时他们应该是柔软潮湿的。。据说鸡蛋很奇特他们还会继续变熟一点(后熟阶段）。。。所以在锅里千万不要炒过头就是这样喵！"
			},
			{
				"src": "",
				"text": "撒上黑胡椒"
			}
		],
		"uid": 1,
		"title": "美式炒蛋 scrambled eggs",
		"food": [{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "低脂牛奶",
				"len": "低脂牛奶"
			},
			{
				"name": "黄油",
				"len": "黄油"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "黑胡椒粉",
				"len": "黑胡椒粉"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/902cb71c878211e6a9a10242ac110002_873w_655h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "1）想吃的更丰富可以在第六步那里加上炒好的番茄丁，洋葱丁，培根丁，切好的芝士小丁，等等。。。(总之不会再出水的东东）2）2个蛋2茶匙牛奶只是比例噢~其实蛋多一点（比如3个蛋3茶匙牛奶）会比较好炒~ =v=3）使用平底锅（不粘锅）。4）考虑到很多人是一人食就炒一两个鸡蛋，口径比较小的锅或许更方便在锅中均匀搅拌5）不喜欢黑胡椒的可以不撒，我有朋友是喜欢挤上番茄酱吃的 萌萌哒！",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "参考了自己的经历和米国网站上各个菜谱。。。和下厨房的都不一样。。所以自己重新建一个详尽啰嗦版。。。完美美式炒蛋！！！_______________________不需要奶酪和重口味的调味品，只有原味的蛋 带给你不一样的早餐体验。嗯，炒鸡蛋 听起来很容易。可是越简单的东西，往往没有什么条条框框可以遵循，不容易掌握到他们最最重要的部分反而越弄越复杂。（这不是甜品哦，别加糖！）想做出嫩嫩的湿乎乎的，但是也完全熟了的scrambled eggs...第一个关键在于打蛋！！要把空气打进去，这样炒蛋才会软！恩恩不要紧张并不用打发来着。。。只要让他们变柔和就好了！！不需要打蛋器要手打！！第二个是控制火候。。。不能炒过头。。。如果蛋上面有一点点棕色的痕迹 或者变的干干的了就算是失败了好么亲！然后关于牛奶！想吃奶味重的加全脂，但是可能会影响到蛋的原味，如果想吃到完美炒蛋就要用低脂牛奶 （虽然我还是喜欢全脂ORZ）。。。牛奶的加入，可以延缓蛋内热量传播的速度，达到鲜嫩的效果。总之 出来的蛋要嫩兮兮 软乎乎 充满着蛋的原味，不是煎蛋饼噢（中式焦香的蛋~）______________________其实只要你有一口平底锅或者加热缓慢的电磁炉，做这道高蛋白早餐反而容易。步骤写的很复杂是怕大家有一口猛火灶和大铁锅。其实就是炒个鸡蛋，简单快手！别犹豫了，今天早餐就吃炒蛋吧！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9863a02f0da4bb2250",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/828873da93a811e6b87c0242ac110003_3000w_2000h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": ".葱花切碎分两半",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/83acf30893a811e6a9a10242ac110002_3000w_2000h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "锅中倒少许油。油热时放入一半葱花",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/84dcd75c93a811e6a9a10242ac110002_3000w_2000h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加入酱油两勺，白糖三勺翻炒10秒 关火",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/861cf87293a811e6a9a10242ac110002_3000w_2000h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "挂面提前煮好，过水。把另一半葱花放上面",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/8791cd0493a811e6a9a10242ac110002_3000w_2000h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "把锅中调好的汁浇上去就好啦 总共下来5分钟一倒本帮葱油拌面",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/88847ffe93a811e6a9a10242ac110002_3000w_2000h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "好吃到想妈妈",
				"height": 400
			}
		],
		"uid": 1,
		"title": "葱油拌面——5分钟早餐",
		"food": [{
				"name": "挂面",
				"len": "挂面"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "葱花",
				"len": "葱花"
			},
			{
				"name": "油",
				"len": "油"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/2c37779a893211e6a9a10242ac110002_3000w_2000h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "如果说早餐闲准备早餐太麻烦，那你一定要学学葱油拌面，好吃而且很快手新浪微博：小土堆er",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9963a02f0da4bb2251",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9928f3b48c4911e6b87c0242ac110003_474w_319h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "买来的花蛤放在清水中，在水里放入一勺盐、一勺香油，促进花蛤吐泥。泡的时候可以切酱、葱、蒜。泡一会儿后，用两只手像大叉子一样在水里来回反复的揉搓花蛤，让花蛤头晕，多吐点泥出来",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/99409b548c4911e6b87c0242ac110003_488w_320h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "长的干辣椒可以用剪子剪成两半、蒜切片、姜切丝、大葱的葱绿部分切成葱花，也可用小香葱",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/996953aa8c4911e6a9a10242ac110002_485w_324h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "反复清洗花蛤数次后，把花蛤放入开水锅中，盖上锅盖，一分钟后捞出",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/99a1fb888c4911e6a9a10242ac110002_495w_324h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "焯过水的花蛤都把壳子张开了，再用清水冲洗两遍，把花蛤里的泥彻底洗干净，沥干水分备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/99e4c4548c4911e6b87c0242ac110003_494w_331h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "起锅放油，煸香蒜片和姜丝后再放入干辣椒煸炒，然后放入花蛤",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/99ff7c9a8c4911e6b87c0242ac110003_497w_330h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "翻炒锅中的花蛤和配料两三分钟后先烹入生抽、再烹入黄酒",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9a2a0e388c4911e6a9a10242ac110002_492w_336h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "倒入蚝油、糖翻炒均匀，尝尝味道是否还需要加盐，如果味淡可以适量添加",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/9a4d77108c4911e6a9a10242ac110002_481w_310h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "一小勺干淀粉中倒入两大勺清水，淋入锅中上芡",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9a78453a8c4911e6b87c0242ac110003_486w_326h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "出锅前烹入葱花，翻炒均匀就可以出锅了",
				"height": 400
			}
		],
		"uid": 1,
		"title": "辣炒花蛤",
		"food": [{
				"name": "花蛤",
				"len": "花蛤"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "姜",
				"len": "姜"
			},
			{
				"name": "干辣椒",
				"len": "干辣椒"
			},
			{
				"name": "葱花",
				"len": "葱花"
			},
			{
				"name": "食用油",
				"len": "食用油"
			},
			{
				"name": "黄酒",
				"len": "黄酒"
			},
			{
				"name": "蚝油",
				"len": "蚝油"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "淀粉",
				"len": "淀粉"
			},
			{
				"name": "盐",
				"len": "盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/eedcc8c0873111e6b87c0242ac110003_457w_685h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "用蛤蜊做菜遇到的最大问题就是贝壳里的泥沙，去不净吃着牙碜，邻人扫兴。去除泥沙有好多的方法，有人说把生锈的菜刀放到水中和蛤蜊一起泡着，可以有效的去除泥沙，我试过效果不佳，而且现在家家都用不锈钢的厨具，想找生锈的东西比较费劲。我在家常用的方法有三个，依次分享：\r一、用香油盐水浸泡：如果时间允许的话，可以用放了香油和盐的水来泡蛤蜊，用这个方法有一点要注意，那就是水的温度，水最好是20度上下的水，如果直接用水龙头里放出的自来水，水温低，蛤蜊不爱张嘴。用这个方法泡2-3个小时，蛤蜊会吐出很多泥沙。\r二、来回摇晃：找个大点的，带盖子的盆或者盒子，把贝壳放进去，倒入少许水，没过即可，然后用手不停的来回摇晃容器，力度适中，不要过大，不然蛤蜊的壳子就会碎了，卖相不好。摇两分钟后，蛤蜊晕了，会吐出不少泥沙，用水洗一洗再摇一摇，反复三次就差不多了。\r三、焯水：这个方法是最直接的，最彻底去除蛤蜊中泥沙的方法了，不过要是用蛤蜊做汤的话就不建议用这个方法，鲜味会流逝。炒蛤蜊的话可以用。把蛤蜊放入开水锅中，盖上锅盖，一分钟后捞出。再用水冲洗，把花蛤里的泥彻底洗干净，沥干水分备用。用这个方法可以毫无保留的去除泥沙。有朋友建议我用焯过蛤蜊的水凉一凉，沙子会沉底，取上面的水再洗，这样可以保持蛤蜊的鲜味。我觉得也很有道理。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9963a02f0da4bb2252",
		"work": [{
				"src": "",
				"text": "首先，所有调味在小碗里调匀待用"
			},
			{
				"src": "",
				"text": "一点点底油，油锅加热到5成热时，放一半的葱白煸香，然后放入羊肉片迅速翻炒"
			},
			{
				"src": "",
				"text": "速冻羊肉卷这时有可能会出水（视你买的羊肉卷品质而定，我用过一点都没出水的），稍微炒炒就立马端起锅倒水然后赶紧继续炒，要很快哦~"
			},
			{
				"src": "",
				"text": "看到羊肉片开始变白时，放入剩余的大葱，翻炒均匀，倒入小碗调味料快手疾炒至肉片全部变白"
			},
			{
				"src": "",
				"text": "出锅"
			}
		],
		"uid": 1,
		"title": "葱爆羊肉",
		"food": [{
				"name": "羊肉片",
				"len": "羊肉片"
			},
			{
				"name": "大葱",
				"len": "大葱"
			},
			{
				"name": "白糖",
				"len": "白糖"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "蚝油",
				"len": "蚝油"
			},
			{
				"name": "白酒",
				"len": "白酒"
			},
			{
				"name": "醋",
				"len": "醋"
			},
			{
				"name": "盐",
				"len": "盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/036f4fa2874011e6a9a10242ac110002_4000w_3000h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "大葱的葱白要多一点，葱白最惹味儿有人做葱爆羊肉用羊后腿肉自己切片出来，我们为方便就用了速冻羊肉卷，这羊肉卷【【一定要选羔羊肉的，没有细碎花纹的！】】，不然炒出来会碎这道菜前后做好只需一刻钟，谨记【羊肉炒超过一分钟就老了】，所以调料要先兑好，一倒就完事儿。       速冻羊肉卷是个很方便的东西，逛超市时随手拿一盒回来冻在冰箱，可以做出好多种快手荤菜。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "冬天来啦，葱爆羊肉是一道快手惹味的下酒菜。冰箱里总是准备一盒速冻羊肉，想吃的时候基本只要有两根葱就可以开火了（其他都是常规佐料），约15分钟就上桌，肉菜很少能有这么快的了。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9963a02f0da4bb2253",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/d6a876f290d511e6b87c0242ac110003_800w_533h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "木耳提前用冷水泡发，再放在沸水中汆烫至断生，捞出沥干水分备用。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/d7255da290d511e6b87c0242ac110003_800w_533h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "葱、蒜、干辣椒切末备用。家里喜欢吃辣，所以我又剁了小米椒的末。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/d77301ba90d511e6b87c0242ac110003_754w_502h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将以上裁量放入碗中，放入适量香醋、生抽调味（香醋与生抽的比例为3:1），然后加入适量糖（根据自己口味调整），再加一小勺鸡精，拌匀后倒在木耳的容器中拌匀，半个到一个小时后食用即可！~汤汁酸辣鲜甜，木耳爽脆，很下饭哒！",
				"height": 400
			}
		],
		"uid": 1,
		"title": "爽口拌木耳",
		"food": [{
				"name": "木耳",
				"len": "木耳"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "干辣椒",
				"len": "干辣椒"
			},
			{
				"name": "小葱",
				"len": "小葱"
			},
			{
				"name": "香醋",
				"len": "香醋"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "鸡精",
				"len": "鸡精"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/908e118688e711e6b87c0242ac110003_754w_502h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "隔三差五就要做一个的爽口拌木耳~开胃又下饭。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9a63a02f0da4bb2254",
		"work": [{
				"src": "",
				"text": "基围虾洗净，剪掉脚和虾须。用的是长江基围虾不用开背去泥肠的。"
			},
			{
				"src": "",
				"text": "煮大概1升开水，加两小勺盐，水开后加葱姜，放入虾和料酒，大约5大勺."
			},
			{
				"src": "",
				"text": "水再次煮开后2-3分钟可以捞起了。"
			},
			{
				"src": "",
				"text": "制作蘸料：两三片姜切成末，加入小碗醋中，加少许酱油，一勺糖。"
			},
			{
				"src": "",
				"text": "具体口味可以自己定，但是醋上桌之前要微波炉叮20－30秒！！！让醋稍许热，冒香味！！！"
			}
		],
		"uid": 1,
		"title": "白灼基围虾",
		"food": [{
				"name": "基围虾",
				"len": "基围虾"
			},
			{
				"name": "醋",
				"len": "醋"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "葱姜",
				"len": "葱姜"
			},
			{
				"name": "白砂糖",
				"len": "白砂糖"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "盐",
				"len": "盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/2094480a87fc11e6b87c0242ac110003_3264w_2448h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "建议用长江基围虾，没有虾线，而且吃起来甜甜的。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "朴素的菜色 煮起来方便 吃起来够味^^\r 新鲜的虾肉嚼起来有有点甜味\r蘸醋的配比很有讲究噢\r醋的香味才是关键^^",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9a63a02f0da4bb2255",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ce0bd2388bcf11e6a9a10242ac110002_240w_177h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "芹菜摘洗干净，香干也用清水冲洗一下",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ce32ce748bcf11e6b87c0242ac110003_242w_178h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "都切成段，芹菜太粗的要切细",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ce53e1228bcf11e6b87c0242ac110003_241w_178h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "装保鲜盒放冰箱里保存，如果马上就炒这步就省啦，俺是要第二天早晨做，所以多了这一步",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ce7a3bd88bcf11e6a9a10242ac110002_243w_178h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "超过注油烧热，放姜蒜末爆香后先放芹菜翻炒一下，再放入香干翻炒，加胡椒粉和酱油翻炒至熟，出锅时放盐、葱花还有鸡精调味即可",
				"height": 400
			}
		],
		"uid": 1,
		"title": "芹菜炒香干",
		"food": [{
				"name": "芹菜",
				"len": "芹菜"
			},
			{
				"name": "香干",
				"len": "香干"
			},
			{
				"name": "姜末",
				"len": "姜末"
			},
			{
				"name": "蒜末",
				"len": "蒜末"
			},
			{
				"name": "葱花",
				"len": "葱花"
			},
			{
				"name": "花生油",
				"len": "花生油"
			},
			{
				"name": "胡椒粉",
				"len": "胡椒粉"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "鸡精",
				"len": "鸡精"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/38365c8e86fb11e6b87c0242ac110003_490w_518h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1.芹菜叶子不要丢掉，那是比芹菜茎还有营养的东西，我一般都是连叶子一起炒，有时是先摘下去炒鸡蛋了或者做汤了，见芹菜叶子炒鸡蛋——变废为宝。\r2.芹菜不爱熟，所以先下锅炒，有的人习惯先把芹菜用开水焯一下再炒，比如我老妈就这样做，可我总感觉那样焯一下水，芹菜的很多营养可能就流失了，所以我一般都是直接下锅炒，切细点炒就好啦。\r3.我原来炒青菜不放酱油，为了保持青菜的本色，可俺儿不喜欢吃那白花花没颜色的东西，所以俺每次炒菜都放一点点，青菜还是要少放酱油。\r4.细心的朋友会发现，我做菜喜欢放胡椒粉，胡椒粉是我家不可或缺的调料，因为它能帮助消化，增进食欲，健脾胃，是非常好的调味品。\r有时我也会在里面加一些胡萝卜、青椒、玉米粒、豌豆粒啥的，这个里就有豌豆粒。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "今天就上一个我家早晨经常吃的小炒菜——芹菜炒香干，清淡又不失营养，很适合我们这样的上班族。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9a63a02f0da4bb2256",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0de96d4e8d8c11e6b87c0242ac110003_600w_400h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "提前将鸡胸切成小块，撒上盐和胡椒面",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0e05ac7a8d8c11e6a9a10242ac110002_600w_400h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "淋上蛋清液（1个鸡蛋的蛋清就够了）腌上一小会儿，目的是入味~",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0e3860348d8c11e6a9a10242ac110002_600w_400h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将玉米淀粉倒入盘子里，这时把腌制好的鸡肉一块块的放进盘子，并均匀的裹上淀粉。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0e6741068d8c11e6b87c0242ac110003_600w_400h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "把裹好淀粉的鸡肉在事先准备好的全蛋液（1个全蛋的量）里泡一下",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0e8f43048d8c11e6a9a10242ac110002_600w_400h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "而后放入已经装好面包屑的塑料袋内，提着袋子轻轻一抖~鸡米花半成品就做好啦~",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/0eba171e8d8c11e6b87c0242ac110003_600w_400h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "将油锅做热，慢慢放进半成品的鸡米花，炸制表面金黄色就可以出锅啦~至此，一盘香脆可口的劲暴鸡米花就做成了~",
				"height": 400
			}
		],
		"uid": 1,
		"title": "鸡米花",
		"food": [{
				"name": "鸡胸肉",
				"len": "鸡胸肉"
			},
			{
				"name": "玉米淀粉",
				"len": "玉米淀粉"
			},
			{
				"name": "面包屑",
				"len": "面包屑"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "胡椒面",
				"len": "胡椒面"
			},
			{
				"name": "油",
				"len": "油"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/cb50cc76881c11e6a9a10242ac110002_500w_500h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "Sammy叮嘱\r材料的用量没有写的太明确，大家完全可以自行发挥，根据准备的鸡肉多少来搭配其他材料，没有固定的要求，制作起来也很简单，相信大家都能轻松制作成功滴~有问题欢迎在下方留言给sammy哈,我会尽力回复大家的！",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "Sammy烘焙博客——最贴心的烘焙入门博客！\r摘自：http://www.sammy365.com  很早以前就非常喜欢鸡米花香脆的口感和味道，今天特意为大家放出鸡米花的家庭制作方法，以后在家咱也可以做给自己吃啦！味道绝对不输给外面卖的哦~而且自己制作用料实在、健康卫生，做起来也不难，大家赶快去试试吧！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9b63a02f0da4bb2257",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/97215ac8902411e6a9a10242ac110002_960w_720h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "各种调料洗净备用。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9765e88c902411e6a9a10242ac110002_960w_720h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "杏鲍菇，胡萝卜，大蒜，青椒切片",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/97acbe2e902411e6b87c0242ac110003_960w_960h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "热锅凉油，下蒜片炒香。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9804ad82902411e6a9a10242ac110002_960w_720h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "下入杏鲍菇，翻炒至边缘略黄。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/987dec92902411e6b87c0242ac110003_960w_720h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "下入胡萝卜和青椒，这里不吃辣的可以用甜椒代替，红青甜椒代替胡萝卜和辣椒。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/98c04f56902411e6a9a10242ac110002_960w_720h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "略微翻炒成熟，加入一点生抽提鲜，盐，味精，然后用水淀粉沟薄芡，撒入一点黑胡椒，这里可以根据个人口味，也可以不加。出锅即可",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/990e1984902411e6b87c0242ac110003_960w_720h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "装盘",
				"height": 400
			}
		],
		"uid": 1,
		"title": "老丁的私房菜-美极杏鲍菇",
		"food": [{
				"name": "杏鲍菇",
				"len": "杏鲍菇"
			},
			{
				"name": "胡萝卜",
				"len": "胡萝卜"
			},
			{
				"name": "青椒",
				"len": "青椒"
			},
			{
				"name": "黑胡椒，盐，淀粉，大蒜",
				"len": "黑胡椒，盐，淀粉，大蒜"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/a5f2a3e288c511e6b87c0242ac110003_960w_717h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "杏鲍菇味道鲜美，有特别的口感，老丁很喜欢吃，这次发个素炒的版本。可以关注微信公众号：老丁的厨房，或者在微信公众号搜索 brookding ，对老丁私人公众号进行关注，谢谢。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9b63a02f0da4bb2258",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/3a9e16e48c0311e6a9a10242ac110002_200w_169h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "速冻甜玉米粒一包拿出来解冻，速冻青豆也解冻，如果用新鲜的甜玉米和新鲜青豆需要把玉米粒用刀切下，然后放入开水锅中烫两三分钟煮熟捞出，然后过凉水，青豆也是这样。胡萝卜去皮切成和玉米粒大小差不多的丁",
				"height": 400
			},
			{
				"src": "",
				"text": "锅烧热下少许油，如果用生松子这时下入松子小火翻炒一下，接着下胡萝卜同炒至断生，接着下青豆玉米粒快速翻炒几下，加入盐炒匀调味即可。如果用熟松子的话最后再放即可"
			}
		],
		"uid": 1,
		"title": "松仁玉米",
		"food": [{
				"name": "速冻甜玉米粒",
				"len": "速冻甜玉米粒"
			},
			{
				"name": "速冻青豆",
				"len": "速冻青豆"
			},
			{
				"name": "胡萝卜",
				"len": "胡萝卜"
			},
			{
				"name": "松仁",
				"len": "松仁"
			},
			{
				"name": "盐",
				"len": "盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/f8040428875311e6a9a10242ac110002_600w_466h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "有的菜重调味，有的菜则要做减法调味，这道菜如果再加生抽和糖之类的反而会破坏菜肴的鲜美清爽",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "最简单也受欢迎的一道家常菜，重在调味要简单",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9c63a02f0da4bb2259",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/c80b8dac90d811e6a9a10242ac110002_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "培根和吐司一起烤到表面金黄",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/c842864090d811e6b87c0242ac110003_767w_522h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "烤吐司的同时把卷心菜切成细丝（不需要焯水，生的可以吃）拌上自己喜欢的沙拉汁。白煮蛋切块儿，撒一点点盐和黑胡椒。沙拉汁我用的丘比芝麻的。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/c88365c090d811e6a9a10242ac110002_770w_454h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "接下来就是组合吐司了。其中一片吐司上放芝士和培根，另一片吐司抹上自己喜欢的酱（蛋黄酱、芥末酱、番茄酱 随你）再放上白煮蛋和好多好多的卷心菜，要尽可能多放！小心的把两片放好料的吐司合并起来",
				"height": 400
			},
			{
				"src": "",
				"text": "把组合好的吐司“腰斩”~(˶‾᷄ꈊ‾᷅˵)~"
			},
			{
				"src": "",
				"text": "个人觉得这个吐司很适合用光光教的那个三明治纸盒装饰。如果你和我一样手残弄不好，就像拧糖果那样把两边拧起来，更方便哦"
			}
		],
		"uid": 1,
		"title": "ins上超火的沼サン（沼三明治）",
		"food": [{
				"name": "吐司",
				"len": "吐司"
			},
			{
				"name": "培根",
				"len": "培根"
			},
			{
				"name": "芝士",
				"len": "芝士"
			},
			{
				"name": "自己喜欢的沙拉酱",
				"len": "自己喜欢的沙拉酱"
			},
			{
				"name": "卷心菜",
				"len": "卷心菜"
			},
			{
				"name": "黑胡椒",
				"len": "黑胡椒"
			},
			{
				"name": "水煮蛋或者煎蛋",
				"len": "水煮蛋或者煎蛋"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/33480c54161111e7947d0242ac110002_1510w_1080h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "卷心菜一定要多多多！我的吐司切太厚了反而不太好操作，你们做的时候记得用正常厚度的吐司哦٩(˃̶͈̀௰˂̶͈́)و",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "看到ins上很多霓虹人都做的一卷三明治特点就是里面超多卷心菜（也叫圆白菜、包菜、大头菜）看起来就是什么都可以不加   只要有卷心菜和吐司就ok 问了一下沼サン就是一个人名加三明治…具体原因不详求解答～（CC微博@我了一个，说是一个叫大沼道行的陶艺家的妻子做给他的）过程图等我下次烤了吐司再做这款的时候给补上！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9c63a02f0da4bb225a",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/da3ca1dc8c8211e6a9a10242ac110002_118w_175h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "虾去头上尖刺、须子、背部的脚，用牙签把虾线挑了，洗净沥干",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/da5e4c608c8211e6b87c0242ac110003_118w_177h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅里多放点油，把虾子放进去，煎两面",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/dafe8e5a8c8211e6a9a10242ac110002_116w_177h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "去一个碗里面放入葱姜蒜碎、2勺生抽，2勺老抽，半勺醋，一勺糖、一勺料酒，盐适量搅拌均匀",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/db2023268c8211e6b87c0242ac110003_118w_179h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "倒入锅里，盖盖，焖一下，中间翻两次锅直至汁收干出锅即可",
				"height": 400
			}
		],
		"uid": 1,
		"title": "油焖大虾",
		"food": [{
				"name": "虾",
				"len": "虾"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "姜",
				"len": "姜"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "老抽",
				"len": "老抽"
			},
			{
				"name": "醋",
				"len": "醋"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "盐",
				"len": "盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/bad62b5e873411e6b87c0242ac110003_402w_600h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "1、无论大虾，小虾都可以用这个方法做。\r2、也可以不调汁，虾子煎好了，把葱姜蒜碎放进去，加入上述的调料一样。\r3、不用开背，这么做的虾已经很入味了，特下饭。\r4、算是个快手菜了。有的时候忙不过来，爷又非常想在家吃饭，我就做这个，虾子化冻，稍微已处理就好。\r5、背上的虾线要挑了，牙签是个好工具。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9d63a02f0da4bb225b",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ba23911e906311e6b87c0242ac110003_1000w_667h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "虾开背去虾线，然后用刀背把虾肉来回剁几下，敲断虾筋。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bafebac8906311e6b87c0242ac110003_1000w_667h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "粉丝用热水泡软，然后码到盘子里，再用一坨粉丝绕一圈放在中央。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bbb0f31e906311e6a9a10242ac110002_1000w_667h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "如图码好虾子，虾头竖着靠在中间那坨粉丝上。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/bc543f4c906311e6a9a10242ac110002_1000w_667h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "打算压成泥加盐糖香油醋蒸鱼豉油调成个浇料。比例按自己的口味，可以尝一下不断调整。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/bdb444ea906311e6a9a10242ac110002_1000w_667h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "然后把蒜泥汁淋在虾子上。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/be58a332906311e6b87c0242ac110003_1000w_667h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "锅中烧热水水开后放入虾子大火蒸个6分钟。因为虾已经开背，肉很薄很好熟，所以蒸的时间不需要很长。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bea39cfc906311e6a9a10242ac110002_450w_300h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "之后虾上撒葱花，虾的间隙装饰红辣椒丁，最后烧热油浇在虾上即可上桌。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "花开富贵虾",
		"food": [{
				"name": "虾",
				"len": "虾"
			},
			{
				"name": "大蒜",
				"len": "大蒜"
			},
			{
				"name": "粉丝",
				"len": "粉丝"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "红辣椒",
				"len": "红辣椒"
			},
			{
				"name": "料酒盐糖醋蒸鱼豉油香油",
				"len": "料酒盐糖醋蒸鱼豉油香油"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/40b0179a88dd11e6b87c0242ac110003_1000w_667h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "蒸制时间还是要根据实际虾的大小来调整哟。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "开背虾也好蒜蓉粉丝蒸虾也好都是我家很常做的菜，这次换了个摆盘方法，应应景。做法超级简单味道超级赞！关键是造型美好，非常非常适合年夜饭都入座之后端上桌，绝对会换来满堂哇喔的！顺便名字也取了个带好彩头的，开背虾这样摆正好很像花瓣嘛！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9d63a02f0da4bb225c",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e8e39fc28d8d11e6b87c0242ac110003_638w_514h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "鸡肉切成丁，蒜剁末，姜切丝",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e923546e8d8d11e6a9a10242ac110002_640w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "水烧开。西兰花，菜花，胡萝卜下水灼一下，大概三十秒捞出，一定要过凉水，能够保证颜色和口感。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e94b99248d8d11e6a9a10242ac110002_638w_638h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "油烧热加入蒜末和姜丝爆香",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/e98a269e8d8d11e6b87c0242ac110003_640w_640h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "加入鸡肉，翻炒到半熟加入西兰花们。快出过时加一点盐，翻炒匀皆可装盘上桌了。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "（低于500卡快手菜）西兰花炒鸡胸肉",
		"food": [{
				"name": "无皮鸡胸肉",
				"len": "无皮鸡胸肉"
			},
			{
				"name": "西兰花",
				"len": "西兰花"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "姜",
				"len": "姜"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/9cdf7d1e881d11e6a9a10242ac110002_636w_638h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "开始健身的时候，每天都看着卡路里，计算负卡路里，可是每天嘴馋，不愿意挨饿，天天吃白水煮鸡肉几乎要奔溃，上班又忙碌。这道菜虽然没有白水煮鸡肉健康低卡，不过足够解馋。而且十五分钟能够完成，分享给广大健身的姐妹们。这样一道菜绝对管饱，无需米饭或者其他淀粉食物辅助。我一般用6oz的西兰花就够了。今天因为是两人份所以了菜花和胡萝卜。注意，下鸡肉的时候油温不要过高，否则会有transfat形成。鸡胸肉一定要买无皮的。也可以换成虾。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9e63a02f0da4bb225d",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/83d93e628c7411e6b87c0242ac110003_690w_341h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "化冻洗净后的虾仁加入白酒2滴、盐、料酒少许，拌匀腌制十分钟",
				"height": 400
			},
			{
				"src": "",
				"text": "然后将料汁水控干后加入少许橄榄油拌匀"
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/840984468c7411e6a9a10242ac110002_690w_343h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "两个鸡蛋磕入碗中，再倒入牛奶，加入适量的盐",
				"height": 400
			},
			{
				"src": "",
				"text": "用搅拌器打匀"
			},
			{
				"src": "",
				"text": "姜切末"
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/848796928c7411e6b87c0242ac110003_690w_340h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "锅内油热后加入姜末炝锅",
				"height": 400
			},
			{
				"src": "",
				"text": "开大火放入虾仁翻炒"
			},
			{
				"src": "",
				"text": "炒至虾仁卷曲或者稍变色"
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/84ac31c88c7411e6a9a10242ac110002_690w_341h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "倒入蛋液，此时要将火调的略小一些",
				"height": 400
			},
			{
				"src": "",
				"text": "滑炒至蛋液凝固即可关火"
			}
		],
		"uid": 1,
		"title": "滑蛋虾仁",
		"food": [{
				"name": "虾仁",
				"len": "虾仁"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "纯牛奶",
				"len": "纯牛奶"
			},
			{
				"name": "姜",
				"len": "姜"
			},
			{
				"name": "白酒",
				"len": "白酒"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "料酒",
				"len": "料酒"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/3b7fd788873411e6a9a10242ac110002_556w_900h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "什么虾仁做的口感最好呢？我觉得用袋装的冷冻虾仁做最好，因为这种虾仁脆嫩的跟加了水似的，炒熟后都还是晶莹剔透状。那清脆的口感并不是鲜虾所能代替了的。然后炒制的时候为了保住它的水嫩质感，我喜欢用油将虾仁裹住，因为油能把虾仁内的水份锁住不流失。不喜欢用淀粉、蛋清什么的，总觉得那样不清爽搞不好还会弄得满锅粘糊糊的。\r如何让虾仁不腥呢？超市买的袋装虾仁很嫩，但气味却奇腥，为了去腥我用白酒、料酒、鸡蛋、姜给它去腥增鲜。因为鸡蛋是很神奇的改味剂，很多的辣、苦味菜跟鸡蛋炒在一起，那不怎么讨人喜欢的味道似乎都能被鸡蛋给镇压吞没了，所以鸡蛋是个去腥的好东西。再加上滑蛋虾仁本来就是很有名的特色粤菜，这种搭配鲜美至极是前辈们早已创下的。还有，多用点姜末炝锅，因为姜有去腥、暖胃的功效。白酒、料酒的去腥功能是众所周知的。\r怎样让鸡蛋的口感更滑嫩呢？牛奶的加入会让鸡蛋嫩的像蒸蛋羹，因为我知道有道菜叫“牛奶虾仁”所以我就将加入蛋液中的水换成了牛奶，没想到结果出奇的好，鸡蛋不光软、嫩颜色还特别好看，还有一点就是滑炒出的鸡蛋不像加水那样散。\r另，要用不粘锅才能达到滑炒的效果，或者多加油、水淀粉也能滑炒。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9e63a02f0da4bb225e",
		"work": [{
				"src": "",
				"text": "韭菜洗净后切段，鸡蛋在碗内打散后倒入料酒，搅拌均匀"
			},
			{
				"src": "",
				"text": "锅热后注入油，倒入蛋液用筷子滑炒至散后盛出备用"
			},
			{
				"src": "",
				"text": "锅内重新注入油，7成热时倒入韭菜大火翻炒，调入盐、糖、生抽，大火翻炒20秒后倒入鸡蛋，翻炒5秒即可"
			}
		],
		"uid": 1,
		"title": "韭菜炒鸡蛋",
		"food": [{
				"name": "韭菜",
				"len": "韭菜"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "糖",
				"len": "糖"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/ac35933686fe11e6a9a10242ac110002_460w_690h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1.炒鸡蛋时倒入料酒会去腥，热锅凉油超出的鸡蛋软，香\r2.用糖代替鸡精和味精更提味",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "这道菜，说简单也难。难就难在炒韭菜的时间上，少了会生，过了会老。有人说，15秒即可。但尝试了，15秒的韭菜刚刚断生，却还没入味道。终于有耐心掐着计时器炒菜，25秒，生熟软硬及味道，都刚刚好。10秒钟的差距在于，一种适合大众，一种适合我家。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9e63a02f0da4bb225f",
		"work": [{
				"src": "",
				"text": "芦笋根部去老皮 切去老梗 洗净切长段 放入沸水中煮熟 捞出沥干水份摆盘备用"
			},
			{
				"src": "",
				"text": "生抽、白糖、盐和稍许清水倒入锅中煮开 浇在芦笋上"
			},
			{
				"src": "",
				"text": "姜末、蒜末撒在芦笋上 食用油和芝麻油在锅内烧至七成热后淋在姜蒜末上 最后撒上红椒丝即可"
			}
		],
		"uid": 1,
		"title": "鲜味油淋芦笋",
		"food": [{
				"name": "芦笋",
				"len": "芦笋"
			},
			{
				"name": "姜末、蒜末",
				"len": "姜末、蒜末"
			},
			{
				"name": "红椒丝",
				"len": "红椒丝"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "芝麻油",
				"len": "芝麻油"
			},
			{
				"name": "白糖",
				"len": "白糖"
			},
			{
				"name": "油",
				"len": "油"
			},
			{
				"name": "盐",
				"len": "盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/ceee446287b311e6b87c0242ac110003_600w_400h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1.食谱摘自美食堂 建议的酱油是金标生抽",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "用一份很容易调制的酱汁给煮的鲜嫩的芦笋入味，既能突出食材的鲜，又简单到不劳你动菜刀。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9f63a02f0da4bb2260",
		"work": [{
				"src": "",
				"text": "一大碗剩米饭的量，用两三勺酱油，一点料酒，一点糖，再加一点油拌匀。拌匀后依据本菜谱封面观察颜色，根据颜色决定要不要多加酱汁或米饭。"
			},
			{
				"src": "",
				"text": "打散鸡蛋备用。热锅，倒少许油，将鸡蛋倒入，快速炒碎，盛出备用。"
			},
			{
				"src": "",
				"text": "再倒少许油，加葱末炒香，倒入拌好的米饭翻炒均匀。"
			},
			{
				"src": "",
				"text": "把鸡蛋倒入锅中拌匀，尝一尝味道，最后加少许蚝油出锅。"
			}
		],
		"uid": 1,
		"title": "酱油炒饭(超级简单)",
		"food": [{
				"name": "剩米饭",
				"len": "剩米饭"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "酱油（老抽）",
				"len": "酱油（老抽）"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "耗油",
				"len": "耗油"
			},
			{
				"name": "糖",
				"len": "糖"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/20deea74889a11e6a9a10242ac110002_780w_438h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "做炒饭时，剩米饭要比新鲜米饭更好吃。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "酱油炒饭，对于爱吃重口的小伙伴来说，绝对是满足口感的神饭！我尝试出来的这个版本，非常非常非常简单，大家做起来吧！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909af9f63a02f0da4bb2261",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/ad5247b6934011e6b87c0242ac110003_2448w_2448h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "鸡蛋煮10分钟，过冷水去鸡蛋皮。每个鸡蛋竖着划几道，就是表面浅浅的划一下就好，因为一会煮的时候划得太深鸡蛋就散了。口重担心不入味的，也可以再用筷子把鸡蛋扎透一两个眼儿（就是外形不太好看）。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ae65355a934011e6a9a10242ac110002_2448w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "倒入啤酒，放入鸡蛋，大火烧开。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b01b12c0934011e6a9a10242ac110002_2448w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加入所有调料，转中火。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/b134a112934011e6b87c0242ac110003_2448w_2448h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "继续收汤，大概还有刚能盖过锅底的汤就可以关火了。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "快手啤酒卤鸡蛋",
		"food": [{
				"name": "煮鸡蛋",
				"len": "煮鸡蛋"
			},
			{
				"name": "啤酒",
				"len": "啤酒"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "老抽",
				"len": "老抽"
			},
			{
				"name": "蚝油",
				"len": "蚝油"
			},
			{
				"name": "白糖",
				"len": "白糖"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "八角",
				"len": "八角"
			},
			{
				"name": "香叶",
				"len": "香叶"
			},
			{
				"name": "花椒",
				"len": "花椒"
			},
			{
				"name": "干辣椒",
				"len": "干辣椒"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/fb63737a88f611e6b87c0242ac110003_750w_728h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "出锅就可以吃啦ʅ(‾◡◝)ʃ",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "非常简单易做，像我家这种鸡蛋消耗大户简直是早餐利器啊(˶‾᷄ ⁻̫ ‾᷅˵)不要被长长的配料表吓到，真的很容易。-----------------集中回答几个经常被问到的问题哈～1.下面说的勺是类似韩餐用的吃饭勺子（具体几毫升我也没有计量过），中式餐饮的调料多少有点凭感觉啦，分量大约差不多就好了，不要过于纠结勺子的大小，调味的时候可以尝一尝，主要是每个人对咸淡的要求也不一样对不对，按照自己的口味来就好，我写的几勺你们也可以理解成各种调料之间的比例关系，按比例搭配增减。明白了吗宝贝们～(///ω///)2.用什么牌子的啤酒？这个也是问的比较多的。我就是用最便宜的两块多钱一听（330ml）的啤酒，不用找太高级的啤酒啦。至于说为啥呢？因为我用德国黑啤试过，会有点苦呢～反而便宜的大众国产啤酒更适合做这个。3.能存放几天？这个还真不好说，跟储藏环境、咸度、密封情况什么的都有关系。我一般做10个冷藏三天内吃完，貌似再多放一两天应该也可以，但是怎么说呢，还是尽快吃掉吧，放太久也会有亚硝酸盐产生吧。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afa063a02f0da4bb2262",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/04a4bbb68bcb11e6b87c0242ac110003_430w_500h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "葱洗净切成葱花，小红椒洗净去蒂切成辣椒圈。（不太会吃辣的把辣椒籽去掉）",
				"height": 400
			},
			{
				"src": "",
				"text": "金针菇洗净切去根部洗净，锅中水烧开熄火，入金针菇焯水一分钟，捞出沥干水份"
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/04dcd8ac8bcb11e6a9a10242ac110002_430w_500h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "碗里倒入两勺生抽酱油，加一点白糖调匀",
				"height": 400
			},
			{
				"src": "",
				"text": "将沥干水份的金针菇梳理整齐码在碗中，撒上葱花"
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/053b71148bcb11e6b87c0242ac110003_430w_500h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅烧热，倒入两勺食用油，油温升至八成热，转小火下辣椒圈爆香，捞出辣椒圈放在金针菇碗中",
				"height": 400
			},
			{
				"src": "",
				"text": "转大火让锅中油温升高至冒烟，关火，迅速浇在金针菇上，激发出葱花的香味，吃时拌匀即可"
			}
		],
		"uid": 1,
		"title": "白灼金针菇",
		"food": [{
				"name": "金针菇",
				"len": "金针菇"
			},
			{
				"name": "小红椒",
				"len": "小红椒"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "白糖",
				"len": "白糖"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "食用油",
				"len": "食用油"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/317f7968870311e6b87c0242ac110003_466w_700h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1.烫金针菇的时候一定要熄火，烫过头金针菇就软答答的没精神了。\r2.酱油要用平时我们用来蘸蘸吃的生抽酱油，我用的是六月鲜，也可以用美级鲜之类。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "上次发了个椒油金针菇，有个妈妈给我留言。说女儿最喜欢吃白灼金针菇，想让我教一下。\r找时间做了一下，非常的好吃，这种做法只需几分钟，非常简单方便，金针菇用极简单的白灼的方法，再加上鲜美的蘸料，可谓是最原汁原味的做法了。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afa063a02f0da4bb2263",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2166d9ea90e511e6a9a10242ac110002_2448w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "洋葱、胡萝卜切丁，鸡蛋打散。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/22a7ed5890e511e6b87c0242ac110003_2448w_2448h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "放油炒散鸡蛋，变黄下其他食材爆炒。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/241b987490e511e6b87c0242ac110003_2448w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加米饭，放盐，生抽炒匀。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/25751d1c90e511e6b87c0242ac110003_2592w_2592h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "味道不错噢（≧∇≦）",
				"height": 400
			}
		],
		"uid": 1,
		"title": "蛋炒饭",
		"food": [{
				"name": "米饭（隔夜最好）",
				"len": "米饭（隔夜最好）"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "胡萝卜",
				"len": "胡萝卜"
			},
			{
				"name": "青豆",
				"len": "青豆"
			},
			{
				"name": "洋葱",
				"len": "洋葱"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "猪油",
				"len": "猪油"
			},
			{
				"name": "生抽",
				"len": "生抽"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/2c62512688e311e6b87c0242ac110003_640w_640h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "一碗米饭、一个鸡蛋、一点蔬菜，饭菜都齐了！PS：我有一朋友，炒饭一定要是隔夜饭，精致的人儿(￣▽￣)我一般冰箱有什么吃什么，混搭(^○^)",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afa163a02f0da4bb2264",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/3df1af8290c611e6b87c0242ac110003_1248w_797h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "茄子洗净切条，也可以手撕，手撕味道好些，但是麻烦，看自己。肉切肉条，老丁炒茄子喜欢比较大的肉，这里可以根据个人喜好切肉丝或者肉片，蒜切小块备用。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/3e5dac8c90c611e6b87c0242ac110003_741w_545h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "热锅凉油，多放油，由于茄子吸油，一次放足，而且茄子油水大些好吃。放入肉翻炒变色。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/3eb1f2ba90c611e6b87c0242ac110003_1010w_868h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "放入茄子，接下来是整个菜的关键步骤，首先一定转中火，火大了容易糊，茄子放入后，用锅铲压一下茄子，慢慢的逼出茄子的水份，",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/3f1e2e6c90c611e6a9a10242ac110002_1044w_835h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "茄子开始吸油，但是逼一会儿之后它就会把吸的油“吐”出来，这里需要耐心，慢慢闷，轻轻压，小心翻锅至茄子水份吐干，茄子变细。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/3f71a1aa90c611e6a9a10242ac110002_1078w_807h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "加入两个八角，大蒜，和小半勺白糖。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/400ea4fa90c611e6b87c0242ac110003_1083w_857h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "闷到茄子很细的时候，这时候茄子几乎软烂了，加入生抽，老抽，适量盐调味。最后加少许味精出锅即可。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "老丁的私房菜-油焖茄子",
		"food": [{
				"name": "茄子",
				"len": "茄子"
			},
			{
				"name": "瘦肉",
				"len": "瘦肉"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "老抽，盐",
				"len": "老抽，盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/0740a36288d311e6b87c0242ac110003_960w_717h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、这个菜一定不要放水，一丁点也不行，放了味道就变了。2、小火慢闷，慢慢煨出水，开始用锅铲压可以加速这个过程，但是茄子出水一定时候，变细了就不能压了，容易碎掉。3、茄子和大蒜是绝配，可以多放点大蒜。4、白糖不能少。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "茄子是老丁很喜欢的一种蔬菜，油焖茄子更是老丁常做的菜，味道非常可口。可以关注微信公众号：老丁的厨房，或者在微信公众号搜索 brookding ，对老丁私人公众号进行关注，谢谢。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afa163a02f0da4bb2265",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/77598c6a904211e6a9a10242ac110002_597w_800h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "首先将黄油加热至全部液化",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/76f35f6c904211e6b87c0242ac110003_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加入白糖、红糖、香草精、盐，搅拌均匀。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/7677b0f6904211e6a9a10242ac110002_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加入淡奶油(或者鸡蛋)（混合物要完全冷却才能加鸡蛋）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/76292a26904211e6a9a10242ac110002_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "搅拌均匀。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/75181e76904211e6a9a10242ac110002_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "筛入低筋面粉、小苏打、可可粉。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/7496c6aa904211e6a9a10242ac110002_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "切拌均匀即可。(不要过度搅拌)",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/744172d6904211e6b87c0242ac110003_597w_800h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "加入巧克力豆",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/73efbe82904211e6b87c0242ac110003_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "混合均匀后放入冰箱，冷藏1至12小时。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/737b575e904211e6b87c0242ac110003_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "揉成2cm直径的球体，整齐排列在烤盘上(间距推荐4-5cm)。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/72aa78be904211e6a9a10242ac110002_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "在每个球球上面点缀几颗巧克力豆。(球球烤完自己会变扁的,所以不用特意去压扁噢~)",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/72372b98904211e6b87c0242ac110003_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "放入预热好的烤箱内，上下火190℃，中层，9分钟。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/71b70ee0904211e6b87c0242ac110003_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "香喷喷的曲奇出炉咯~",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/714872aa904211e6a9a10242ac110002_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "松松软软的口感超赞的~",
				"height": 400
			}
		],
		"uid": 1,
		"title": "巧克力豆曲奇(Chocolate Chip Cookies)",
		"food": [{
				"name": "黄油",
				"len": "黄油"
			},
			{
				"name": "白糖",
				"len": "白糖"
			},
			{
				"name": "红糖",
				"len": "红糖"
			},
			{
				"name": "香草精",
				"len": "香草精"
			},
			{
				"name": "鸡蛋(或淡奶油)",
				"len": "鸡蛋(或淡奶油)"
			},
			{
				"name": "耐烤巧克力豆(纯可可脂70%以上的巧克力)",
				"len": "耐烤巧克力豆(纯可可脂70%以上的巧克力)"
			},
			{
				"name": "低筋面粉",
				"len": "低筋面粉"
			},
			{
				"name": "法芙娜可可粉",
				"len": "法芙娜可可粉"
			},
			{
				"name": "小苏打",
				"len": "小苏打"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "装饰用耐烤巧克力豆",
				"len": "装饰用耐烤巧克力豆"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/a968eda688ac11e6a9a10242ac110002_597w_800h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "楼主用的是法芙娜可可粉和法芙娜百分之70可可脂巧克力或者是烘焙专用的巧克力豆,所以做出来绝对不会很甜,不要再说楼主的配方甜了(楼主真的好伤心,用好的可可和巧克力就不会甜腻,请各位根据自己使用的可可量和巧克力甜度来调整配方中的糖份吧~楼主心急，没放冷藏，直接烤的也很好吃呶~喜欢吃硬、脆曲奇的可以适当再加2分钟左右~小烤箱底火过旺,适当降低30度左右。对于鸡蛋过敏的儿童可以换成淡奶油~没有香草精可不放~没有可可粉可不放，不放可可粉的则需要减糖(10-20g左右)，楼主用的是法芙娜，所以相对略苦~也可以使用普通的纯可可脂巧克力,,切成巧克力豆大小拌入冷却的面团里,,烤完以后不要动他,等他彻底冷却,,巧克力又重新凝固以后再吃。（不太推荐，经过高温的巧克力口感会很差）刚刚混合好以后粘手可能是面粉还未吸透油脂，静置15分钟后，取一小块放在掌心搓圆，能成就好，还粘就是面粉吸水性不好，微微的加一点点粉。楼主懒癌发作，一直想写一个“王子曲奇星”的菜谱（就暂时记录这边吧）：（搓20颗球，需压扁）黄油\t40G 糖粉\t30G 鸡蛋液\t30G低粉\t70G 玉米淀粉\t30G 可可粉\t10G耐烤巧克力豆\t20G 盐\t少许",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "一款比蔓越莓饼干还简单的美味曲奇饼干~黄油不需要打发~口感好似趣多多软曲奇~回味无穷~此配方：16块（如图一盘量）注：这款是软曲奇。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afa263a02f0da4bb2266",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/8fce27aa9a0211e69ce70242ac110002_280w_123h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "把生土豆洗净削皮，切成小丁，上锅蒸熟，蒸的时候用保鲜膜包起来，千万别进水。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/8fb600629a0211e69ce70242ac110002_292w_123h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "蒸熟之后，然后用勺子压成土豆泥；再加入盐和白胡椒粉拌匀备用。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/8f9635349a0211e6b2400242ac110002_206w_115h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "鲜虾洗净，去头去壳留尾和倒数第二节壳。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/8f7a469e9a0211e6b2400242ac110002_306w_127h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅中烧开水，焯一下大虾，熟了之后捞出沥干水分，加少许料酒和盐腌15分钟；",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/8f47a3389a0211e6b2400242ac110002_306w_123h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "取适量土豆泥放在手心，压平之后放入大虾；",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/8ee488669a0211e69ce70242ac110002_138w_119h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "然后把土豆泥捏紧成圆形，包裹住没有虾壳的部分，留出来有虾壳的尾部；",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/8ebe849a9a0211e6b2400242ac110002_168w_91h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "碗里打一个鸡蛋加少许盐，搅拌均匀，再准备一个盘子倒入适量的面包糠。取土豆虾球裹上厚厚的一层蛋液，再沾上一层面包糠；",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/8ea0d30a9a0211e69ce70242ac110002_338w_129h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "锅中倒油，烧至6成热，放入裹好的土豆虾球，炸至金黄色即可捞出。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "土豆虾球",
		"food": [{
				"name": "①主料：",
				"len": "①主料："
			},
			{
				"name": "鲜虾",
				"len": "鲜虾"
			},
			{
				"name": "土豆",
				"len": "土豆"
			},
			{
				"name": "②调料：",
				"len": "②调料："
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "白胡椒粉",
				"len": "白胡椒粉"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "鸡蛋液",
				"len": "鸡蛋液"
			},
			{
				"name": "面包糠",
				"len": "面包糠"
			},
			{
				"name": "花生油",
				"len": "花生油"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/13d61cce882911e6a9a10242ac110002_800w_800h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "去年中旬才开始学做饭，一开始没有拍过程。后来开始用手绘的形式来表现，感兴趣的话可以看我的微博，没拍过程的菜都打算画一遍。这个土豆虾球的样子可爱吧，做法也很简单～",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afa263a02f0da4bb2267",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/cfecec6e8c1911e6b87c0242ac110003_218w_215h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "准备好材料：飞饼皮三张、榴莲肉一块，鸡蛋一个",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/d00a27ac8c1911e6a9a10242ac110002_218w_218h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "榴莲去核后用勺子稍压成果泥",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/d02a01e48c1911e6a9a10242ac110002_220w_217h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "取出飞饼皮三张，稍撒些干粉将飞饼皮叠放在一起",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/d03e30248c1911e6b87c0242ac110003_219w_213h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "用擀面杖将飞饼皮擀成厚薄均匀的长方型",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/d05d33f28c1911e6b87c0242ac110003_218w_210h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "切成大小均匀的正方形小面片",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/d06bd8ee8c1911e6a9a10242ac110002_216w_209h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "用勺子取适量榴莲肉放入面片的中间，在面片的四边刷上少许打匀的鸡蛋液",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/d084ed8e8c1911e6a9a10242ac110002_219w_209h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "对折面片成三角形，用手将边缘处压紧",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/d09fb43e8c1911e6b87c0242ac110003_218w_208h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "用叉子压出花纹，再刷上一层蛋液再用牙签在表面扎一些小孔",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/d0b598628c1911e6b87c0242ac110003_216w_212h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "放入预热好180度的烤箱，烤20分钟左右到表面金黄即可",
				"height": 400
			}
		],
		"uid": 1,
		"title": "榴莲酥",
		"food": [{
				"name": "榴莲肉",
				"len": "榴莲肉"
			},
			{
				"name": "飞饼皮",
				"len": "飞饼皮"
			},
			{
				"name": "鸡蛋液",
				"len": "鸡蛋液"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/61403d4a873011e6b87c0242ac110003_460w_613h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "1、这个方法同样也可以烤成香蕉派，将榴莲换成切小段的香蕉就可以了。\r2、榴莲虽好吃，但不可一次吃得太多，不然容易导致身体燥热，最好搭配性凉的水果如西瓜，山竹等一同食用。\r3、飞饼大型的超市都有卖，有不同的口味，买的时候注意挑一下用原味微甜的。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "上周碰巧赶上水果店促销，10元一斤的价格赶紧抱回了一个，熟透了的榴莲不能久存，除了用它做了前几天早餐版的榴莲忘返外，还烤了这一炉的榴莲酥，这个甜点很快手很好吃，用超市买来的飞饼切割做皮儿包入榴莲肉烤至表面金黄即可，外皮香酥松脆，内芯浓郁腴滑，这种绝妙的口感千万不要错过哦。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afa563a02f0da4bb2268",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/f51c47ec8d4e11e6b87c0242ac110003_200w_150h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "白菜帮洗净，斜刀片成稍大块的薄片；大葱切成牛眼、蒜切片，干红辣椒去籽剪成圈；",
				"height": 400
			},
			{
				"src": "",
				"text": "炒锅倒入适量油加热至五成左右，下干辣椒、蒜片和大葱略煸，放入白菜后马上加入1大勺醋炒出香气；"
			},
			{
				"src": "",
				"text": "翻炒1分钟后调入生抽、白糖和盐，炒匀后再加入1勺醋，然后稍稍勾一点芡，淋几滴香油出锅即成。"
			}
		],
		"uid": 1,
		"title": "醋溜白菜",
		"food": [{
				"name": "白菜帮",
				"len": "白菜帮"
			},
			{
				"name": "干红辣椒",
				"len": "干红辣椒"
			},
			{
				"name": "大葱",
				"len": "大葱"
			},
			{
				"name": "陈醋",
				"len": "陈醋"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "白糖",
				"len": "白糖"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "水淀粉",
				"len": "水淀粉"
			},
			{
				"name": "蒜瓣",
				"len": "蒜瓣"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/0f4530d2880111e6b87c0242ac110003_620w_465h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "白菜尽量用新鲜的，打蔫的菜帮做不出爽脆的口感；干辣椒一定要放，会让这道菜做出干香的味道；放一点就可以，没有辣味只有香气；醋要分两次放，先放的作用是激出基础香气，后放的作用是弥补烹制中流失的醋酸味；做此菜全程大火，下料和煸炒要连贯，一气呵成。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "小时候不爱吃菜帮，无论是大白菜还是绿叶菜；现在学会了下厨，不仅掌握了营养搭配的知识，还可以把普通的蔬菜做得更可口。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afa563a02f0da4bb2269",
		"work": [{
				"src": "",
				"text": "鸡腿洗净，去骨，切成中等大小的块状，和剥好的大蒜一起装入碗中。土豆切成和鸡腿差不多大小的块，盛在另一个碗中。"
			},
			{
				"src": "",
				"text": "根据鸡肉的量，将新奥尔良烤翅腌料和温水按1:2的比例调成料汁倒入鸡腿肉中拌匀，料汁不能太少，每块鸡肉都要裹住厚厚的料汁，要是想更入味可以用手抓匀。同时留部分料汁拌入土豆中拌匀，用量不必太大。"
			},
			{
				"src": "",
				"text": "两个碗中都加入黑胡椒粗粒、意大利香草料（可以随意，可以不加，这些都是增香的），用量根据自己的喜好添加。在鸡腿肉中拌入少许橄榄油。"
			},
			{
				"src": "",
				"text": "土豆中加入孜然、少许盐，注意盐不要过多，腌料本身就已经很够味了。之后将鸡腿肉和土豆都静置腌渍10-15分钟。此时烤箱可预热250℃。"
			},
			{
				"src": "",
				"text": "用一个大一点的盘子（我用的是披萨烤盘）将土豆均匀的铺在底层，用刷子在土豆上刷上一层薄薄的橄榄油。"
			},
			{
				"src": "",
				"text": "将鸡腿肉和大蒜都均匀地码在土豆上，可以根据自己的喜好加点芝麻增香，放进已预热好250℃的烤箱中层，用上下火220℃的温度烘烤20-25分钟。"
			},
			{
				"src": "",
				"text": "在烘烤15分钟时，小心取出烤盘，在鸡腿肉上再刷一层橄榄油再放入烤箱，这样最后烤出的鸡腿肉不至于太干太柴。"
			},
			{
				"src": "",
				"text": "25分钟左右取出，开吃吧！厨房已经香气四溢啦！"
			}
		],
		"uid": 1,
		"title": "新奥尔良烤鸡腿土豆",
		"food": [{
				"name": "鸡腿肉",
				"len": "鸡腿肉"
			},
			{
				"name": "土豆（中等大小）",
				"len": "土豆（中等大小）"
			},
			{
				"name": "新奥尔良烤翅腌料",
				"len": "新奥尔良烤翅腌料"
			},
			{
				"name": "黑胡椒粗粒",
				"len": "黑胡椒粗粒"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "孜然",
				"len": "孜然"
			},
			{
				"name": "橄榄油（或其他油均可）",
				"len": "橄榄油（或其他油均可）"
			},
			{
				"name": "温水",
				"len": "温水"
			},
			{
				"name": "意大利香草料（可选）",
				"len": "意大利香草料（可选）"
			},
			{
				"name": "大蒜（可选）",
				"len": "大蒜（可选）"
			},
			{
				"name": "白芝麻（可选）",
				"len": "白芝麻（可选）"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/0121d5ca882711e6a9a10242ac110002_5184w_3456h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "1、这道菜就是以快手和随意为主，所以不要去在乎用量精确到几克几克，凭感觉来！配料也可以按自己的喜好随意增减哦~\r2、土豆尽量切小块或者切薄，这样才容易烤透，烤制时间上也会大大缩短。\r3、烤的时候要根据自己的烤箱温度调节，我这里的温度和时间只是按照自家烤箱的脾气，乃们要注意烤的时间不要太长哦，否则鸡腿肉会干干的不好吃哟！0(>^ω^<)0",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "每周五晚上下班回家，都想捣鼓个什么好吃的。这周发现家里屯了好多鸡腿，于是想着做个什么烤箱菜。\r于是就开始胡乱折腾，想到什么材料好吃就放什么，没想到进烤箱之前我妈一闻说太香了，她要配米饭……\r其实我原本是考虑包着生菜吃或者配面包吃o(╯□╰)o，出炉后香气四溢我妈说这简直就是新一代配饭利器！简直是肉食者和土豆控的福音啊！而且超快手！不用等！\r 土豆淀粉肉肉什么的，偶尔ci一次不会那么容易胖哒吃货们你们懂得哈哈~O(∩_∩)O",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afa663a02f0da4bb226a",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/6a04b4688dcc11e6b87c0242ac110003_768w_1152h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "鲍鱼用刷子刷干净，肉肉周围一圈褶皱的黑泥刮洗干净，然后用水冲洗得白白净净的。这次连美丽的壳里外都要刷得干干净净。",
				"height": 400
			},
			{
				"src": "",
				"text": "用小刀尖伸进去贴着壳壁下刀把鲍鱼肉和壳分离。"
			},
			{
				"src": "",
				"text": "把鲍鱼的黑色内脏部分剪去，屁屁那里也要用手把里面的东西挤出，这样就可以烹饪了。"
			},
			{
				"src": "",
				"text": "把鲍鱼肉切十字花刀，花面向上再摆回壳中。"
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/6a47ddce8dcc11e6a9a10242ac110002_768w_1152h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "粉丝在沸水锅里焯软滤干水份，平铺在大小适中的盆中，再把鲍鱼摆在粉丝上。",
				"height": 400
			},
			{
				"src": "",
				"text": "热锅放油，把蒜泥下锅煸熟，用小勺乘出每个鲍鱼上放一些，剩下放在粉丝上。"
			},
			{
				"src": "",
				"text": "小碗中放入海鲜酱油、蚝油、料酒、一点点糖拌匀，淋在鲍鱼和粉丝上。"
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/6a8d4e9a8dcc11e6b87c0242ac110003_768w_1152h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅中沸水后，放进鲍鱼蒸5-6分钟出锅，撒香葱OK。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "蒜蓉粉丝蒸鲍鱼",
		"food": [{
				"name": "鲍鱼",
				"len": "鲍鱼"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "粉丝",
				"len": "粉丝"
			},
			{
				"name": "海鲜酱油",
				"len": "海鲜酱油"
			},
			{
				"name": "蚝油",
				"len": "蚝油"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "糖",
				"len": "糖"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/d32ee69c87d311e6b87c0242ac110003_620w_380h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、蒜蓉可多放一些很入味。。。\r2、 粉丝根据自己爱好放多放少。粉丝融合鲍鱼的鲜和熟蒜的香还有调料的咸淡，好像主味是它而非鲍鱼，妖儿巨爱，每次都要求放很多。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afa663a02f0da4bb226b",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/621fb2ce8bbb11e6a9a10242ac110002_121w_162h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "牛肉洗净沥干水，将牛肉切成小块，加1/3匙淀粉、1/3匙酱油、1/3匙白糖、一匙料酒，拌匀，腌制一会儿。下油锅之前再放半匙色拉油拌匀，为的是锁住牛肉本身的水分",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/6245e1568bbb11e6b87c0242ac110003_122w_160h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "快炒所以要先调好调味料：一匙清水、半匙辣椒酱、半匙酱油、半匙芝麻油、半匙盐、1/3匙白糖",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/626947d68bbb11e6b87c0242ac110003_124w_160h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "姜剁成末。切洋葱：洋葱逆纹切条，这样炒出来的洋葱口感更脆",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/629711668bbb11e6a9a10242ac110002_120w_161h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅中加油，加至8成热后，关火，将牛肉和洋葱一起过油，洋葱先过一遍油可以去除洋葱辛辣味",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/62bcddce8bbb11e6b87c0242ac110003_122w_161h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "捞出沥油",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/62e0cc028bbb11e6b87c0242ac110003_121w_161h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "锅中留少许油，大火爆香姜末",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/630a36968bbb11e6a9a10242ac110002_122w_161h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "转小火，下洋葱牛肉",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/6336b84c8bbb11e6a9a10242ac110002_121w_162h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "倒调味汁，转大火，翻炒至收汁",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/fcd2f8d68c5511e6b87c0242ac110003_122w_160h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "出锅前加少许料酒即可",
				"height": 400
			}
		],
		"uid": 1,
		"title": "洋葱炒牛肉",
		"food": [{
				"name": "牛肉",
				"len": "牛肉"
			},
			{
				"name": "洋葱",
				"len": "洋葱"
			},
			{
				"name": "老姜",
				"len": "老姜"
			},
			{
				"name": "辣椒酱",
				"len": "辣椒酱"
			},
			{
				"name": "老抽",
				"len": "老抽"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "芝麻油",
				"len": "芝麻油"
			},
			{
				"name": "淀粉（马铃薯）",
				"len": "淀粉（马铃薯）"
			},
			{
				"name": "白糖",
				"len": "白糖"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/ad6ed1f686f211e6b87c0242ac110003_480w_640h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "我这次牛肉是切小块，其实切成条状会更好。\r很多朋友受不了洋葱的辛辣味，所以洋葱要经过一个步骤处理。\r洋葱味牛肉味，互相融合～要的就是这个味儿！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afa763a02f0da4bb226c",
		"work": [{
				"src": "",
				"text": "将藕洗净去皮，切成一片片的薄片"
			},
			{
				"src": "",
				"text": "热水开，放入藕片滤去浆汁"
			},
			{
				"src": "",
				"text": "热锅旺油，放入藕片翻炒片刻，倒入调好盐，糖，鸡精，醋。酱油，淀粉的混合汁。汁收浓入味即可"
			}
		],
		"uid": 1,
		"title": "糖醋藕片",
		"food": [{
				"name": "鲜藕",
				"len": "鲜藕"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "鸡精",
				"len": "鸡精"
			},
			{
				"name": "醋",
				"len": "醋"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "淀粉",
				"len": "淀粉"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/7869c5ea872b11e6a9a10242ac110002_500w_375h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "藕性味甘甜，有解渴消烦，健脾开胃的作用，夏季好凉菜",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afa763a02f0da4bb226d",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e818db548f6b11e6a9a10242ac110002_2448w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "香肠从中间切成两半",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/e94e3f328f6b11e6b87c0242ac110003_2448w_2448h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "平面向下 再切一半 不要全部切完 留一点点连着",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/eaa648208f6b11e6a9a10242ac110002_2448w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅内放油加热 放入香肠 待香肠变软的时候弯下来变成爱心形状",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ebeb77fa8f6b11e6b87c0242ac110003_2448w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "用牙签固定香肠尾部 再打一个蛋在中间煎熟 就可以啦",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ecf3d3ea8f6b11e6b87c0242ac110003_2448w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "不加蛋的爱心香肠",
				"height": 400
			}
		],
		"uid": 1,
		"title": "爱心香肠煎蛋",
		"food": [{
				"name": "香肠",
				"len": "香肠"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/266737ae884911e6a9a10242ac110002_2448w_2448h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "鸡蛋比较大的话可以一个鸡蛋做两个爱心啦我的封面图就只用了一个鸡蛋哦用平底锅鸡蛋比较不容易漏出来还是会有漏出来的话就等蛋液凝固后用锅铲把多出来的部分弄掉就好咯第二步的时候 留下连接的部分不要太多 不然弯爱心的时候尾部会不够长碰不到~吃的时候记得把牙签弄下来。。。喜欢吃熟鸡蛋的话就翻面两面煎吧喜欢糖心的小火煎一面啦",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "从微博上看到搬运过来 @999道私房菜依然是两样时差党最容易买到的食材简单的爱心早餐",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afa763a02f0da4bb226e",
		"work": [{
				"src": "",
				"text": "西兰花掰好，洗净，梗可以切片，用盐水浸泡"
			},
			{
				"src": "",
				"text": "烧一锅水，待水开后将西兰花捞出沥水，放入开水中焯烫"
			},
			{
				"src": "",
				"text": "剥好大蒜，切蒜末"
			},
			{
				"src": "",
				"text": "西兰花开锅变成翠绿色之后，捞出再过一遍凉水。捞出之后沥干"
			},
			{
				"src": "",
				"text": "热锅倒油，蒜末爆锅，放西兰花翻炒"
			},
			{
				"src": "",
				"text": "临出锅前，放盐"
			}
		],
		"uid": 1,
		"title": "蒜蓉西兰花",
		"food": [{
				"name": "西兰花",
				"len": "西兰花"
			},
			{
				"name": "大蒜",
				"len": "大蒜"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "油",
				"len": "油"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/cae58208874111e6b87c0242ac110003_4288w_2848h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1。 西兰花难清洗，一定要用盐水浸泡。\r2。用开水焯烫过之后，过凉水，可以保持翠绿的颜色。 \r3。剥大蒜有秘诀，蒜瓣用刀拍一下，蒜皮就很容易取下来了。\r4。爆锅时一定刚刚飘出香味就放菜，蒜末很细小，非常容易糊=。=",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afa863a02f0da4bb226f",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/81d004149a4a11e6b2400242ac110002_2047w_1631h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "鲜香菇洗净，擦干水分后，去蒂成小碗托状备用。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/81478a589a4a11e6b2400242ac110002_1024w_876h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "备馅。鲜虾剥壳挑出虾线，洗净控干水分备用。用刀背碾压后，再剁碎。胡萝卜切小碎粒。马蹄洗净去皮切小碎粒。刚才切下来的香菇蒂取一两个也切小碎粒。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/80fb3a0e9a4a11e69ce70242ac110002_767w_1024h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "调馅儿。虾泥放碗中，加入黄酒、盐、白糖（一点点提鲜，但不能吃出甜味）、白胡椒粉、葱姜水（一点点）搅打均匀。再加入胡萝卜碎、香菇蒂碎、马蹄碎搅打上劲。把调好的馅儿嵌入香菇内。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/80ac36169a4a11e6b2400242ac110002_1024w_812h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "蒸制。入蒸锅，沸水上锅，大火6分钟。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/80611f6e9a4a11e69ce70242ac110002_1024w_819h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "取出盘子，里面有许多蒸出来的汤汁。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/802503bc9a4a11e6b2400242ac110002_1024w_681h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "把汤汁倒入炒锅里，加热，尝一下味道，加入少许的盐调味，再加入水淀粉勾薄芡，把芡汁淋在蒸好的虾仁酿香菇上，撒上少许的小香葱碎即可。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "鲜虾酿香菇",
		"food": [{
				"name": "鲜香菇",
				"len": "鲜香菇"
			},
			{
				"name": "鲜虾仁",
				"len": "鲜虾仁"
			},
			{
				"name": "马蹄",
				"len": "马蹄"
			},
			{
				"name": "胡萝卜",
				"len": "胡萝卜"
			},
			{
				"name": "葱姜水",
				"len": "葱姜水"
			},
			{
				"name": "黄酒",
				"len": "黄酒"
			},
			{
				"name": "盐、白糖",
				"len": "盐、白糖"
			},
			{
				"name": "白胡椒粉",
				"len": "白胡椒粉"
			},
			{
				"name": "水淀粉",
				"len": "水淀粉"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/6e9b93da8a4211e6a9a10242ac110002_1024w_768h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "馅儿中的马蹄必须加（没有的话可用笋丁碎代替）马蹄碎是为了提升口感。胡萝卜碎是为了颜色更加好看。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afa963a02f0da4bb2270",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bbea64ba8bbc11e6a9a10242ac110002_205w_138h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "番茄洗净",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bc2155608bbc11e6b87c0242ac110003_206w_139h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "放到开水锅里煮3-5分钟",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bc409d268bbc11e6b87c0242ac110003_207w_139h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "至表皮开始脱落为止",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bc6641668bbc11e6b87c0242ac110003_206w_139h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "去皮,切块,备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bc8b0c308bbc11e6a9a10242ac110002_208w_139h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "菜花掰成小块,备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bcb24f708bbc11e6b87c0242ac110003_206w_139h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "过滚水焯熟(水中加几滴油)",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bce5358e8bbc11e6a9a10242ac110002_206w_138h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "过冷水,沥干水分,备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bd0e7d688bbc11e6a9a10242ac110002_206w_141h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "另起一锅,锅内放油,油热,放入番茄块煸炒",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bd3265d48bbc11e6b87c0242ac110003_207w_138h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加番茄酱至炒出汤汁,番茄变软,放入菜花,加盐,糖调味,让菜花裹上茄汁即可",
				"height": 400
			}
		],
		"uid": 1,
		"title": "番茄菜花",
		"food": [{
				"name": "菜花",
				"len": "菜花"
			},
			{
				"name": "番茄",
				"len": "番茄"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "番茄酱",
				"len": "番茄酱"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/a0b8149a86f711e6b87c0242ac110003_480w_720h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afa963a02f0da4bb2271",
		"work": [{
				"src": "",
				"text": "菠菜洗干净，中间切一刀；烧一锅开水，把菠菜丢进去焯一下，去去草酸。"
			},
			{
				"src": "",
				"text": "趁着烧水的空档，把两只鸡蛋搅匀了"
			},
			{
				"src": "",
				"text": "菠菜变得翠绿后，捞出来，水倒掉。大概几十秒就好。"
			},
			{
				"src": "",
				"text": "锅内倒底油，中火把鸡蛋倒进去，用筷子划散；在鸡蛋开始成形但还有点液体，嫩嫩的时候把菠菜下进去。【本人喜欢吃蛋蛋裹着菠菜的口感(￣▽￣)】如果喜欢吃蛋和菠菜分开的，就多炒一会蛋，等蛋都成形了一块一块的，再放菠菜。"
			},
			{
				"src": "",
				"text": "由于菠菜焯水过，已经是熟的了；这时只要把菠菜和蛋翻炒均匀就可以了。"
			},
			{
				"src": "",
				"text": "差不多啦，撒盐 出锅！！"
			}
		],
		"uid": 1,
		"title": "极简菠菜炒蛋【三分钟快手菜",
		"food": [{
				"name": "菠菜",
				"len": "菠菜"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "油",
				"len": "油"
			},
			{
				"name": "盐",
				"len": "盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/19ce1e60889211e6b87c0242ac110003_640w_640h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "这是一道家常菜，但营养丰富，快手又好吃。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afa963a02f0da4bb2272",
		"work": [{
				"src": "",
				"text": "茄子洗净去蒂，切成滚刀块，撒少许盐，用手抓匀静置20分钟"
			},
			{
				"src": "",
				"text": "土豆去皮切滚动块，用手洗掉表面淀粉。青椒去蒂去籽切块"
			},
			{
				"src": "",
				"text": "锅中烧油至七八成热（160--180度），下入腌过的茄子和沥干水分的土豆炸至表面金黄捞出控油"
			},
			{
				"src": "",
				"text": "锅中留少许底油，下青椒翻炒一下，再下茄子土豆、生抽、盐、糖一同炒匀即可出锅"
			}
		],
		"uid": 1,
		"title": "少油地三鲜",
		"food": [{
				"name": "茄子",
				"len": "茄子"
			},
			{
				"name": "土豆",
				"len": "土豆"
			},
			{
				"name": "青椒",
				"len": "青椒"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "糖",
				"len": "糖"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/f83dc964874011e6b87c0242ac110003_600w_452h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1.土豆炸的时间比茄子长一些，先捞出茄子，再捞土豆，或分开炸\r2.腌茄子的盐不用太多，以免过咸",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "老爸是东北人，烧得一手好菜，这地三鲜就是我小时候最爱吃的菜之一\r现在也挺喜欢吃，但是吃不了太油腻的~今天这个法子，茄子炸之前先处理一下，就会很少吸油，做出来的口感软糯，入味，没油不腻，非常好吃~",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afaa63a02f0da4bb2273",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b422a0dad4a511e6bc9d0242ac110002_2080w_1560h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "蛋黄加糖粉加柠檬汁放进一个尺寸稍微大一点的碗里，或者小底的不锈钢盆都行，别用底很大的盆，那样你盆打烂了蛋黄都打不发(我用的土鸡蛋，很小，所以放了4个蛋黄)",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/f0fda2e8d4a511e6bc9d0242ac110002_1560w_2080h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "我用的这个打蛋头，12线的，某宝可以买，几块钱一对，很好用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/3592948cd4aa11e6bc9d0242ac110002_2080w_1560h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "然后就使劲打吧。。。打到浓稠发白，可以写8字不轻易消失就可以",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/39d1ff92d4aa11e6947d0242ac110002_1560w_2080h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加入奶粉，你会发现很干，没关系，翻拌几下就好了（请不要拿任何东西代替奶粉，无可替代，）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/4030f118d4aa11e6947d0242ac110002_1560w_2080h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "拌到这种就行啦，这一步别用打蛋器搅哈，会消泡",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/3dc4ff50d4aa11e6bc9d0242ac110002_2080w_1560h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "放入裱花袋，剪一个小小的口，多大的口呢，就牙签那么大直径就行啦",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9d8836c0d4a811e6bc9d0242ac110002_3120w_4160h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "挤呀挤，挤小小的，比较容易熟",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/452639e4d4aa11e6bc9d0242ac110002_1560w_2080h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "挤到一半的时候烤箱上下火100度左右预热(具体的温度按照自家烤箱脾气来)烤的过程最好在旁边看着，因为挺容易糊的～一旦糊了，就没有最好的口感咯，没熟千万别开烤箱门，会塌，中间会凹陷，我用的是长帝trtf32，烤网中层，上下火70度烤了15分钟刚好，因为我烤箱温度偏高的，大部分烤箱用上下火100度烤12到15分钟就完全足够",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/478b2cb2d4aa11e6947d0242ac110002_1560w_2080h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "出炉了，很漂亮有木有，出炉要赶紧密封起来，不然很容易回潮，完全烤熟的溶豆很轻易的就拿下来了，豆豆味道超级好，我家宝宝很爱吃呢，一个一个的拿，锻炼抓握能力，宝妈们赶紧做起来吧",
				"height": 400
			},
			{
				"src": "",
				"text": "豆豆"
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9b593fdcd4aa11e6947d0242ac110002_1560w_2080h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "豆豆",
				"height": 400
			}
		],
		"uid": 1,
		"title": "入口即化的无添加蛋黄溶豆",
		"food": [{
				"name": "蛋黄",
				"len": "蛋黄"
			},
			{
				"name": "婴儿奶粉",
				"len": "婴儿奶粉"
			},
			{
				"name": "柠檬汁（没有就不放）",
				"len": "柠檬汁（没有就不放）"
			},
			{
				"name": "糖粉（可不放）",
				"len": "糖粉（可不放）"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/9ac04cc28f5511e6b87c0242ac110003_2080w_1560h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "1.不要用低筋粉代替奶粉     2.蛋黄一定要打好，不然后面就成饼了3.最好要铺油纸操作4.溶豆不要挤太大5.溶豆只有没烤熟出炉才会塌，烤熟的溶豆是很饱满的，而且不沾油纸6.溶豆过几分钟就凉透了，一定要及时密封起来，不然会回潮变软～密封起来放过夜口感最好，超脆，入口即化7.宝宝八个月以下不建议放糖，这个小零食只要宝宝添加了辅食就可以吃的哈～8.做不成功不要说什么我方子有问题啊之类的，我可以明确的跟你说，蛋黄溶豆你就算不放奶粉不放柠檬不放糖，只要打发好了放进去烤照样出来的是溶豆，加这些东西只是增加口感而已，做成饼的原因有以下几个，蛋黄没有打发好，翻拌消泡，奶粉含有添加剂，所以，下次做失败了，麻烦先找找自身的原因，你以为烘焙能一帆风顺吗，没有点耐心你还碰烤箱干嘛！9.我烤箱温度是偏高很多，所以我用的是上下火70度烤了15分钟的，因为每个烤箱的脾气不同，请各位厨友们根据自家烤箱脾气来",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "之前我家宝宝都是在母婴店买小馒头，死贵，味道还不好，自从在下厨房看到某宝妈的作品，发誓以后再也不要买给宝宝吃了～经过多次改良实践，得出来此方～  (强调强调强调！！！！咱能不能按配方好好做一次？柠檬汁没有的话可以不放，但是！！！！请不要拿一些蔬菜泥啊，橙汁什么的来代替！做不成型了来质问我！！？没有奶粉就去买，不要想着拿母乳啊拿粉啊啥的来代替！！！做出来味道不对别先来质问我，好好的看看方子，多看几遍，几遍看不懂就多看几百遍，小贴士和底下有别人提问，你先看看，看明白再下手，不要动不动就改方子，完了改失败了还得给我个差评，什么道理这是！！！）",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afaa63a02f0da4bb2274",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e374866e8bc111e6b87c0242ac110003_250w_166h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "牛肉切长条，我觉得可以粗一点，吃起来过瘾点",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e3a8b9348bc111e6b87c0242ac110003_249w_166h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "放白糖（一点点）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/e3d2de268bc111e6a9a10242ac110002_249w_165h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "少许生粉",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/e3fc277c8bc111e6b87c0242ac110003_249w_165h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "生抽",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e434813a8bc111e6a9a10242ac110002_250w_166h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "料酒",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e45b706a8bc111e6a9a10242ac110002_249w_166h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "一汤匙清水",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e47ca1368bc111e6b87c0242ac110003_249w_165h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "拌匀，腌制一会儿",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e4a2a6a68bc111e6b87c0242ac110003_249w_166h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "姜蒜葱切末",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/e4cea1208bc111e6a9a10242ac110002_249w_165h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "调汁：部分姜蒜葱末、风味豆豉酱、盐、生粉（别太多，起到勾薄芡作用）、料酒、生抽（调汁看你自己喜欢汤多点还是汤少点，决定料酒的量）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e4ec19128bc111e6b87c0242ac110003_249w_166h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "青椒剪去蒂，再剪开，去籽儿",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/e52645748bc111e6a9a10242ac110002_249w_166h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "处理好的所有青椒洗净沥水",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e562e5888bc111e6b87c0242ac110003_249w_166h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "往腌制好的牛肉里加一汤匙油，准备开始炒",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e5cd752e8bc111e6b87c0242ac110003_249w_165h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加了油拌匀的牛肉",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e61007188bc111e6a9a10242ac110002_249w_167h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅中放少许油",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e63cc0e68bc111e6b87c0242ac110003_250w_166h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "爆香剩下的姜蒜葱末",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/e6630bb68bc111e6b87c0242ac110003_249w_165h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "放青椒煎",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e69b0f168bc111e6b87c0242ac110003_250w_166h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "煎至青椒表面起焦",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e6cd3e5a8bc111e6a9a10242ac110002_250w_166h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "取出青椒",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/e7025cca8bc111e6b87c0242ac110003_249w_165h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "煎青椒的汤汁留在锅中",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e737be388bc111e6a9a10242ac110002_250w_165h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "往锅里放入调好的汁",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e767a4cc8bc111e6a9a10242ac110002_249w_165h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "汤汁煮开",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/e7974b008bc111e6b87c0242ac110003_249w_165h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "下牛肉",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e7f6b1bc8bc111e6a9a10242ac110002_250w_165h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "用筷子滑动下牛肉",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e822024a8bc111e6a9a10242ac110002_249w_166h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "大火再次煮开",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/e8419c868bc111e6a9a10242ac110002_251w_165h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "下青椒",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e86bf18e8bc111e6b87c0242ac110003_251w_166h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "大火拌炒10-20秒，收汁下（具体时间看你牛肉粗细决定，牛肉熟了就OK了）",
				"height": 400
			}
		],
		"uid": 1,
		"title": "青椒牛柳",
		"food": [{
				"name": "牛肉",
				"len": "牛肉"
			},
			{
				"name": "青椒",
				"len": "青椒"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "蒜瓣",
				"len": "蒜瓣"
			},
			{
				"name": "老姜",
				"len": "老姜"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "生粉",
				"len": "生粉"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "风味豆豉酱（老干妈也可）",
				"len": "风味豆豉酱（老干妈也可）"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/864e9c06873c11e6b87c0242ac110003_450w_678h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、  个人觉得牛柳还是稍稍粗一点好，吃起来过瘾！别担心，这种做法牛肉都会很嫩的\r2、  腌制牛肉的时候别忘记那一汤匙水，还有少许白糖，注意别放盐！下锅之前放一汤匙油\r3、  青椒看自己喜欢处理，我是怕青椒里面有虫，所以都是剪开洗净\r4、  青椒先煎，盛出来，别担心没有青椒味，因为那个汤汁还在锅中，牛肉青椒味还是很赞\r5、  煮牛肉的时候，时间自己掌控，如果没什么经验的话，你可以将火关小，尝下牛柳熟了没，熟了就立马关火\r6、  先调汁，为的是尽量缩短牛肉在锅中的时间",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "这样大块的肉儿  啃起来才过瘾哦\r顺便可以少切几刀   你们懂的。。。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afaa63a02f0da4bb2275",
		"work": [{
				"src": "",
				"text": "肉末用料酒、少量生抽略调匀，生抽不要太多否则颜色太深；\r番茄切小丁，不嫌麻烦可去皮后切丁；\r鲜毛豆洗净沥干；"
			},
			{
				"src": "",
				"text": "锅中下油，下姜末炒出香味；\r下肉末，将肉末炒散发白；\r放入鲜毛豆翻炒拌匀；\r加入清水，直至淹过毛豆大约0.5公分；"
			},
			{
				"src": "",
				"text": "开大火将水烧开后，盖上锅盖；\r转小火，焖大约10分钟；\r打开锅盖，尝尝看毛豆是否软熟，如果喜欢稍微硬一点的可以稍微缩短一两分钟，喜欢软烂些的可以延长一两分钟，根据各家口味调节；"
			},
			{
				"src": "",
				"text": "豆子焖到自己想要的程度后，加入番茄丁；\r放盐，让番茄尽快出水；\r开大火，加速将番茄炖软顺便开始收汁；"
			},
			{
				"src": "",
				"text": "汁水强烈建议不要收的太干，多留一些拌饭非常鲜美；\r可以尝一尝，如果番茄不够甜比较酸的话加一点糖调味；\r到觉得合适的时候关火出锅即可。"
			},
			{
				"src": "",
				"text": "一定要用大勺kuai着吃哦~享用吧~"
			}
		],
		"uid": 1,
		"title": "肉末番茄烧毛豆",
		"food": [{
				"name": "新鲜毛豆",
				"len": "新鲜毛豆"
			},
			{
				"name": "大个成熟番茄",
				"len": "大个成熟番茄"
			},
			{
				"name": "半肥瘦猪肉末",
				"len": "半肥瘦猪肉末"
			},
			{
				"name": "姜末",
				"len": "姜末"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "生抽",
				"len": "生抽"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/7445f6a287dd11e6b87c0242ac110003_750w_749h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、毛豆的硬软程度可根据自己口味调节焖制时间，建议焖的稍微软一点，会很类似茄汁焗豆罐头的口感；\r2、焖锅之前的水最好一次加够，如果中间必须添加，建议用开水，不要用凉水；\r3、番茄一定不要先放，先放番茄的话，其酸性会使得豆子难以软熟；\r4、放了番茄再放盐比较好，这样盐可以让番茄的汁水加速释放；\r5、番茄和毛豆都极为鲜美，可以不加味精鸡精之类了。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "这道菜，还在我很小的时候，妈妈就常做来给我拌饭吃了，妈妈每次做，一定留出多多的汤汁，因为我最爱舀上几大勺在米饭里。每次只要有它，我保准能吃一大碗饭。\r番茄的鲜香、毛豆的豆香，再加一点肉末的提携，如此易得的食材，如此简单的组合，却蕴含了无比的营养和鲜美。\r昨天做了这道菜打算传个作品，翻遍了和毛豆有关的菜谱却竟然没有一个类似的，我不仅感到非常惊讶，我原以为这道菜会是极为常见的家常菜，出现在千万的中国家庭餐桌上，毕竟，它已经是我如此习以为常的一道菜啦！\r那好吧~让我来把这道我最爱的妈妈菜介绍给大家吧~",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afab63a02f0da4bb2276",
		"work": [{
				"src": "",
				"text": "鲜虾开背去虾线，剥壳成虾仁，加半勺盐、料酒腌制片刻"
			},
			{
				"src": "",
				"text": "芦笋用刨子削去下半段的硬表皮（上半较嫩的部分不用削），斜切成段"
			},
			{
				"src": "",
				"text": "起油锅，大火烧热，丢芦笋，丢虾仁（一起丢进去问题也不大），炒至虾仁变红，加一勺盐，再炒一会儿，炒匀即可出锅"
			}
		],
		"uid": 1,
		"title": "清炒芦笋虾仁",
		"food": [{
				"name": "芦笋",
				"len": "芦笋"
			},
			{
				"name": "鲜虾",
				"len": "鲜虾"
			},
			{
				"name": "油",
				"len": "油"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "料酒",
				"len": "料酒"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/3a92fb50875911e6a9a10242ac110002_800w_619h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "空口就能吃掉一盘的菜，非常清甜。\r光这两样就足够鲜香，葱姜蒜什么的都不用加",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afab63a02f0da4bb2277",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/669697ec8c2811e6a9a10242ac110002_200w_151h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "虾建议选个头差不多大的为宜。剪虾足、去虾须，用刀给下开背，挑出虾腺。开背的虾会更加入味",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/a02b4dd69ab011e69ce70242ac110002_200w_151h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅中倒入约2汤勺的油，放入葱段和姜片，待煎至姜片收缩，葱段变成褐色取出",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/696a15fc8c2811e6b87c0242ac110003_200w_151h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "放入处理好的虾，煎至一面变红后，再煎另一面。烹入料酒，调入生抽，加糖翻炒均匀",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/69910a5e8c2811e6a9a10242ac110002_200w_151h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "姜切丝，放入锅中。再加入番茄酱炒匀",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/69b1773a8c2811e6a9a10242ac110002_200w_151h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "加入少量清水，盖上盖子适当小焖片刻，待汤汁减少",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/69d02b1c8c2811e6b87c0242ac110003_200w_300h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "大火收汁即可盛出",
				"height": 400
			}
		],
		"uid": 1,
		"title": "油焖虾",
		"food": [{
				"name": "虾",
				"len": "虾"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "番茄酱",
				"len": "番茄酱"
			},
			{
				"name": "清水",
				"len": "清水"
			},
			{
				"name": "姜",
				"len": "姜"
			},
			{
				"name": "葱",
				"len": "葱"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/f882d2d0873011e6a9a10242ac110002_459w_690h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afac63a02f0da4bb2278",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/48b9b04e902c11e6b87c0242ac110003_960w_720h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "牛腩肉洗净切2厘米左右的块。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/4900eb44902c11e6a9a10242ac110002_960w_720h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅内放冷水，放入牛腩肉，下几片姜，一点料酒。烧开去浮沫。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/4969c966902c11e6b87c0242ac110003_960w_720h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "牛肉捞出备用，西红柿洗净，顶部切十字刀口",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/49b36954902c11e6a9a10242ac110002_960w_720h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅内烧开水，将西红柿头向下放入锅内，略煮。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/4a0f0e94902c11e6b87c0242ac110003_960w_720h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "略煮的西红柿表皮会破解，方便剥皮。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/4a769654902c11e6a9a10242ac110002_960w_720h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "西红柿剥皮备用。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/4ac44520902c11e6b87c0242ac110003_960w_720h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "取两个西红柿切小丁，两个切大块。小丁的用来主要熬煮酸味。大块的用来最后吃。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/4b168ba0902c11e6a9a10242ac110002_960w_720h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "葱切小粒，姜切片备用。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/4b99783a902c11e6a9a10242ac110002_960w_720h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "热锅凉油，葱姜爆锅出香味后加入西红柿小丁，用炒勺尽量压粘，加一点水，小火炒出酸味。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/4c0736ae902c11e6b87c0242ac110003_960w_720h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "然后加入牛肉翻炒。略炒即可。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/4c50b982902c11e6a9a10242ac110002_960w_720h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅内加水，没过食材，老丁用的砂锅，也可以用高压锅，或者就是炒锅。加入盐调味，如果酸度不够，可以加入番茄酱。烧开后小火慢炖一个小时，然后加入大块西红柿，再炖半小时至牛肉软烂为止。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/4cc4a43c902c11e6b87c0242ac110003_960w_720h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "最后撒上香菜出锅。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "老丁的私房菜-番茄牛腩煲",
		"food": [{
				"name": "牛腩肉",
				"len": "牛腩肉"
			},
			{
				"name": "番茄",
				"len": "番茄"
			},
			{
				"name": "葱姜",
				"len": "葱姜"
			},
			{
				"name": "番茄酱（可选）",
				"len": "番茄酱（可选）"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/6d4e65f488c411e6a9a10242ac110002_960w_720h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、现在番茄酸味不够，加入番茄酱可以有效增加酸味，也可以提鲜。2、如果用高压锅，半个小时即可。3、最后加入大块西红柿环节，也可以加入几个土豆块，味道更佳，因为土豆含有淀粉，汤会更粘稠。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "牛肉的营养价值很高，常见的红烧牛肉味道较重，老丁这次发一个清淡的版本，味道酸爽，牛肉味十足，家里小家伙连汤底都吃干净了，嘿嘿。可以关注微信公众号：老丁的厨房，或者在微信公众号搜索 brookding ，对老丁私人公众号进行关注，谢谢。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afac63a02f0da4bb2279",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/d5bbd9da8f5111e6a9a10242ac110002_2352w_1568h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "所要用到的原料,烤箱预热150度",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/d6eb6bea8f5111e6b87c0242ac110003_2352w_1568h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "将牛奶和淡奶油倒奶锅里，小火加热",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/d842418a8f5111e6b87c0242ac110003_2352w_1568h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加热的同时缓慢搅拌均匀，看到冒热气的时候就关火，放凉，大约需要10分钟",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/d981582e8f5111e6a9a10242ac110002_2352w_1568h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "蛋黄加糖并搅拌均匀",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/da8b675a8f5111e6a9a10242ac110002_2352w_1568h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "将蛋液缓慢倒入放凉的奶锅里",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/dc1bc7c28f5111e6a9a10242ac110002_2352w_1568h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "搅拌均匀",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/dd958b6a8f5111e6a9a10242ac110002_2352w_1568h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将蛋奶液倒入准备好的烤杯里，同时取一个烤盘，烤盘里倒入热水",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/dedd05d48f5111e6b87c0242ac110003_2352w_1568h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将烤杯和烤盘放进烤箱150度烤30分钟，注意不要烤过",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e04092068f5111e6b87c0242ac110003_2352w_1568h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "布丁放进冰箱冷藏2小时至2天以内都可以，要吃的时候从冰箱取出，烤杯内撒一小勺糖在布丁表面，再转动烤杯让布丁表面沾上一层糖，将多余的糖倒出，最后用喷枪在离布丁几公分的地方喷烧，要注意观察，因为喷枪焦糖的速度很快",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/e17f330c8f5111e6b87c0242ac110003_2352w_1568h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "Enjoy",
				"height": 400
			}
		],
		"uid": 1,
		"title": "法式焦糖布丁Creme Brulee",
		"food": [{
				"name": "淡奶油",
				"len": "淡奶油"
			},
			{
				"name": "牛奶",
				"len": "牛奶"
			},
			{
				"name": "蛋黄",
				"len": "蛋黄"
			},
			{
				"name": "糖",
				"len": "糖"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/5d54510c88a811e6b87c0242ac110003_2352w_1568h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "Creme Brulee作为经典的法式甜点，口感细腻柔滑超甜蜜，做法也很简单，可以提前做好放冰箱冷藏，饭后作为甜点可以在两分钟之内端上桌招待客人。吃的时候用小勺轻轻一敲，将薄薄脆脆的一层焦糖敲开，底下是冰凉顺滑的蛋奶布丁，甜蜜~~~",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afac63a02f0da4bb227a",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ca5934ce99de11e69ce70242ac110002_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "准备好所有材料，将土豆切丁，杏鲍菇、香肠切片",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ca83041699de11e69ce70242ac110002_450w_555h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "放些许油，土豆下过翻炒一小下下，略有变色就可以了~",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/cab593a499de11e6b2400242ac110002_450w_508h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将杏鲍菇以及你喜欢的蔬菜等也入锅翻炒一下",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/caef85c899de11e69ce70242ac110002_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将你爱的酱挖几勺放入，我用的是老干妈，老干妈的口味大家懂得，每个味道都十分好吃- - 再将淘干净的米放入锅中，拌一下。是的，你没有看错，生米放进料里拌一下=。=",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/cb2cbf6a99de11e6b2400242ac110002_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将拌好的生米和料倒入电饭锅，加适量水，比料略高一些就好。煮饭档，坐等就OK了！灰常重要的一点，这里加水一定要加热水！！",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/cb69a2e099de11e69ce70242ac110002_800w_533h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "电饭锅跳到保温档，再焖会儿，将水分蒸发掉一些就可以开动喽！",
				"height": 400
			}
		],
		"uid": 1,
		"title": "香肠土豆焖饭【一人也要吃好版】",
		"food": [{
				"name": "土豆",
				"len": "土豆"
			},
			{
				"name": "香肠",
				"len": "香肠"
			},
			{
				"name": "杏鲍菇",
				"len": "杏鲍菇"
			},
			{
				"name": "你喜欢的任何酱",
				"len": "你喜欢的任何酱"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/fa48b12c884111e6b87c0242ac110003_800w_533h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "1、关于米的话，我觉得最好不要选类似糯米这种比较粘的米，因为焖饭的话还是粒粒分开比较好吃。2、最后煮饭的时候千万要放热水，因为我有一次焖饭的时候不造在想什么，鬼使神差直接倒了凉水进去煮，最后我得到了一锅土豆泥- - 3、我觉得酱的味道其实已经蛮重的了，口味清淡的人就不需要再放其他调料，盐啊什么的，口味重的人可以再放点酱或者盐之类的调味~4、关于用料，因为我是杏鲍菇爱好者，所以我很喜欢放杏鲍菇，不爱吃的人可以不放，然后可以换成你喜欢的任何蔬菜和肉类，其他用料也是一样。土豆建议还是不要换了，毕竟人家焖饭名字叫【土豆焖饭】= =5、一个人的时光有时候的确是孤单无助的，但在那个对的人来之前，更要照顾好自己，每一餐都不能将就。好好爱自己才能更好地爱别人。   愿这一碗焖饭，能温暖很多个正在疲于奔波生活中的你我他。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "大学的时候总是习惯三两好友，甚至整个寝室倾巢出动去吃饭，打打闹闹，你偷我的菜我偷你的肉，那样的时光真是想想都会笑。毕业之后，好友们各奔东西，像4年前一样重新散落到地图上的各个城市。终究是要一个人生活了。在毕业后的很长一段时间我对于吃饭这件事都十分苦恼。一个人吃饭没人说话就算了，有时候想炒菜吃，炒一个觉得吃起来没有满足感，多炒几个菜又吃不完还浪费。直到我开始对做焖饭上瘾= =可以随意加自己想吃的蔬菜肉类，不小心焖多了，放进冰箱，第二天再热一下，味道还是很不错的。最主要的是非常方便快手，不用煎炒等复杂程序。工作了一天，回到家累挂了，焖上一锅饭，还不用洗很多锅碗瓢盆，已是满足。今天和大家分享一款我经常一个人吃饭的时候做的焖饭。【香肠土豆焖饭】",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afad63a02f0da4bb227b",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/b615cc9c92eb11e6b87c0242ac110003_3264w_2448h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "剥掉皮的馒头一个，泡在水中泡一会儿。泡到馒头中间没有硬芯。（馒头和肉馅的比例1个馒头：一斤猪肉馅儿）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/b4e6f31e92eb11e6b87c0242ac110003_3264w_2448h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "泡好的馒头，挤干水分，捏烂，直接抓进肉馅儿里。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b3a7d94692eb11e6b87c0242ac110003_3264w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "抓匀的肉馅儿里加入一个鸡蛋，然后加入姜末、料酒、盐、鸡精、十三香、少许生抽等调料，拌匀。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b26ad5a692eb11e6b87c0242ac110003_3264w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "拌匀后加入适量的淀粉，搅拌匀。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/b13e462292eb11e6a9a10242ac110002_3264w_2448h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "反复搅打均匀，上劲儿，即可。（丸子可以成团的程度，如果太稀要再次加少许淀粉，太软炸出的丸子不成形。）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/afea558692eb11e6b87c0242ac110003_3264w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "炒锅热油，筷子放进去冒泡泡就可以炸制了。左手抓一把肉馅儿，做攥拳头的动作，使肉馅从虎口处挤出。右手蘸少许水，把挤出的丸子切断，顺势弄圆，下锅炸制。（1、左手只管挤丸子，右手单手做切断丸子和弄圆的动作。沾水是为了让肉不粘手，方便弄圆。但是别沾太多水哦，下锅时容易溅出油花的，小心烫到^_^2、丸子下锅要慢慢从锅边滑入，以免溅出油花烫伤^_^）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ae51ab6692eb11e6b87c0242ac110003_3264w_2448h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "丸子逐个下锅炸至金黄捞出，然后再次全部下锅炸一遍即可。（复炸一次，丸子吐油，不油腻，更酥脆。中小火炸制，注意火候。）",
				"height": 400
			}
		],
		"uid": 1,
		"title": "酥炸肉丸子",
		"food": [{
				"name": "猪肉馅儿",
				"len": "猪肉馅儿"
			},
			{
				"name": "馒头",
				"len": "馒头"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "盐、鸡精、十三香",
				"len": "盐、鸡精、十三香"
			},
			{
				"name": "料酒、生抽",
				"len": "料酒、生抽"
			},
			{
				"name": "淀粉",
				"len": "淀粉"
			},
			{
				"name": "姜末",
				"len": "姜末"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/92d0355e88a211e6a9a10242ac110002_3264w_2448h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "汇总大家问到的问题：1、为什么加馒头？此款是酥炸，加馒头可以使丸子外酥脆，内松软，即使冷了也是松软的。传统炸丸子需要在肉馅里加淀粉，此方子相当于用馒头取代了部分淀粉！2、馒头就是普通市售的那种，如果馒头太大就少放些……馒头一定要剥皮，皮弄不太烂，容易有大块。3、馒头泡过后一定要挤干水分，挤干水分，挤干水分！重要的事情说三遍！如果丸子难以成型，想想是不是馒头带进去太多水分，还有就是含水调料包括鸡蛋是不是加多了，如果都没有，继续加淀粉！一定要上劲才能挤丸子。上劲就是感觉搅拌的时候比一开始要费力，做几次你就明白了！4、十三香什么的依个人口味添加，这就是中国菜，其实很灵活。但是还是不建议放葱末，因为葱末炸过容易局部变黑，影响卖相。加姜已经足够提味儿了！当然你爱吃葱，一定要加也不是不可以！5、喜欢吃纯肉丸子，一点淀粉都不加的，这个方子不讨论。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "这个肉丸子的炸法是从爸爸那里学来的，炸好的丸子非常松软可口，也不会油腻，特别的香！炸好的丸子可以直接吃，也可以多做些冻起来，做糖醋丸子、红烧丸子、丸子汤、大烩菜等等，都很好吃。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afad63a02f0da4bb227c",
		"work": [{
				"src": "",
				"text": "鸡蛋均匀打散备用。"
			},
			{
				"src": "",
				"text": "牛奶在锅中煮开，倒入鸡蛋液，适当搅拌，加入适量冰糖。"
			},
			{
				"src": "",
				"text": "最后加入燕麦片焖1分钟即可（即食麦片焖1分钟，生麦片煮3分钟）。"
			}
		],
		"uid": 1,
		"title": "牛奶鸡蛋燕麦",
		"food": [{
				"name": "牛奶",
				"len": "牛奶"
			},
			{
				"name": "燕麦",
				"len": "燕麦"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/408840ce87ea11e6b87c0242ac110003_600w_399h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "早上来一碗，元气满满！",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "几年前去一个很要好的同学家住了几天，她早上都会起来给我煮这碗牛奶鸡蛋燕麦粥。她说她别的不拿手，就是这碗粥做得特别好吃。\r几年后，我们分隔两地，已许久不曾见面，但每每回忆起她的牛奶燕麦粥，心中仍旧缓缓漾起一阵甜蜜。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afae63a02f0da4bb227d",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/ca8979028d5111e6a9a10242ac110002_2784w_1856h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "将油麦菜洗净，沥干水分，切成8厘米左右的段。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/cc60b5928d5111e6a9a10242ac110002_4080w_2720h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将蒜拍成蒜蓉。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/cd9e20d48d5111e6b87c0242ac110003_4080w_2720h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅内放入适量的油，待油热，放入蒜蓉爆香。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/cf1db0f08d5111e6a9a10242ac110002_4080w_2720h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "向锅内加入油麦菜。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/d0b4110c8d5111e6b87c0242ac110003_4080w_2720h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加入适量的盐，翻炒均匀，盛盘即可。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "蒜蓉油麦菜",
		"food": [{
				"name": "油麦菜",
				"len": "油麦菜"
			},
			{
				"name": "蒜瓣",
				"len": "蒜瓣"
			},
			{
				"name": "盐",
				"len": "盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/a2db249e880311e6a9a10242ac110002_800w_533h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "嘻嘻,越是简单的小菜,吃起来就越舒心.\r他们说我做蒜蓉的菜,蒜是往死里放的节奏啊...",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afae63a02f0da4bb227e",
		"work": [{
				"src": "",
				"text": "将土豆青红椒切丝"
			},
			{
				"src": "",
				"text": "锅中倒油，见热倒入土豆炒7分熟，加盐1小勺半。炒匀装起"
			},
			{
				"src": "",
				"text": "另起油锅，倒入加盐的青椒丝翻炒后，将土豆丝红椒丝榨菜丝倒入拌匀起锅前加1/4勺味精"
			}
		],
		"uid": 1,
		"title": "青椒土豆丝",
		"food": [{
				"name": "土豆",
				"len": "土豆"
			},
			{
				"name": "红辣椒",
				"len": "红辣椒"
			},
			{
				"name": "青辣椒",
				"len": "青辣椒"
			},
			{
				"name": "涪陵榨菜丝",
				"len": "涪陵榨菜丝"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "味精",
				"len": "味精"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/b37f2e7086f111e6a9a10242ac110002_435w_577h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "1.土豆丝切得要粗细差不多，切好必须泡在水中以防氧化变黑。\r2.炒土豆丝时边炒边放水，以防胡锅。\r3.炒青椒时一定要快，再入锅前就加半小勺盐，增加青椒的脆感。\r4.加上涪陵榨菜丝，土豆丝的香味就截然不同了。以显示你的与众不同。\r5.喜欢辣味的还可以发挥，在土豆之前的油锅里加干辣椒。\r6.喜欢醋溜的还可以在土豆下锅时就到几滴黑醋，这样的土豆炒出来是脆的，不糊锅。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "最家常的土豆怎么炒都很好吃，可是要是想更胜人一筹的话，还是要动动脑筋的。你在青春年少时可能做过土豆丝，你还记得它的味道吗？那肯定也是一个美好的回忆。。。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afae63a02f0da4bb227f",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9885ef5e8c4711e6b87c0242ac110003_263w_169h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "把芦笋改刀切成比培根宽度略长的长度，放入加了少许食用油和盐的开水锅焯水，焯好后捞出迅速浸入加了冰块的凉开水里",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/98ae5b068c4711e6a9a10242ac110002_263w_165h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "培根一切为三备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/98d258308c4711e6a9a10242ac110002_263w_175h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "取一小处培根片，包入2根芦笋，卷起，用牙签固定。然后依次做好全部",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/98ee37f88c4711e6a9a10242ac110002_262w_168h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将做好的芦笋卷入平底锅，煎至培根微微焦黄，撒上黑椒碎即可",
				"height": 400
			}
		],
		"uid": 1,
		"title": "培根芦笋卷",
		"food": [{
				"name": "培根",
				"len": "培根"
			},
			{
				"name": "芦笋",
				"len": "芦笋"
			},
			{
				"name": "黑椒碎",
				"len": "黑椒碎"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/0c51ac5e873211e6a9a10242ac110002_690w_458h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1.芦笋焯水时加油，能让芦笋颜色更翠绿。焯好后马上泡入冰水里，口感更脆爽。\r2.做好的培根卷除了煎，你也可以用烤箱和微波炉烘烤。\r3.培根本身就有咸味，做好的培根卷不用另外放盐，直接磨点黑椒碎上去就很好吃了。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "准备了道又简单又漂亮的家常宴客菜，哪怕你是新手厨娘，也能轻松搞定。。。\r做法简单，造型简单，调味简单，但是味道很不简单的“培根芦笋卷”",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afaf63a02f0da4bb2280",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bef70b7e8e7611e6a9a10242ac110002_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "准备好丝瓜，蒜，和少量肉馅。肉馅的制作方法很简单，将切剁碎加点葱姜末，少量生抽 蚝油，盐 胡椒粉拌匀即可，不要加老抽哦  不然蒸出来的颜色过深  就不美腻了。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/bf3b66b68e7611e6a9a10242ac110002_800w_533h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "丝瓜洗净 去头尾、去皮",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bfcf2ff48e7611e6a9a10242ac110002_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "把丝瓜切成4厘米左右的小块。不要太薄了 不然蒸完了 就没形状了",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/c00587ca8e7611e6b87c0242ac110003_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "用挖球器或者小勺子，把丝瓜中间的瓤挖出一厘米深。不用太深了",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/c03a4bcc8e7611e6b87c0242ac110003_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "挖出来的瓤 也不用丢掉，可以切碎后拌入肉馅，可以让肉馅鲜而不腻",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/c07478068e7611e6a9a10242ac110002_800w_533h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "用小勺，把肉馅装进丝瓜小凹槽内",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/c0a77a088e7611e6b87c0242ac110003_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "热水上汽后 蒸5分钟即可。不要蒸久了，不然丝瓜的颜色就不好看了",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/c0f1ee088e7611e6a9a10242ac110002_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅内烧热油，倒入切碎的蒜末爆香。我这光为了拍照了 蒜都爆糊了",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/c12cdf688e7611e6a9a10242ac110002_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将蒸好的丝瓜里的原汤倒出来，倒进煸香的油锅里，",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/c1a4c0e68e7611e6b87c0242ac110003_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "倒入水淀粉进行勾芡。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/c215d7688e7611e6b87c0242ac110003_800w_533h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "关火，调入鸡精和盐",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/c246311a8e7611e6b87c0242ac110003_839w_560h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将熬好的勾芡汁，均匀的淋在摆好盘的丝瓜上。点缀点红红绿绿的菜丝即可",
				"height": 400
			}
		],
		"uid": 1,
		"title": "丝瓜酿肉丸",
		"food": [{
				"name": "丝瓜",
				"len": "丝瓜"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "水淀粉",
				"len": "水淀粉"
			},
			{
				"name": "清水",
				"len": "清水"
			},
			{
				"name": "肉馅",
				"len": "肉馅"
			},
			{
				"name": "植物油",
				"len": "植物油"
			},
			{
				"name": "盐 鸡精",
				"len": "盐 鸡精"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/d8514ef4886811e6b87c0242ac110003_839w_560h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1.给小孩子做饭 一个很好用的讨巧办法，就是尽可能的把饭菜做的美一点，精致一点2.调制的肉馅内不要加老抽哦  不然蒸出来的颜色过深  3.不要蒸久了，中火5分钟即可",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "又到了丝瓜上市的季节了丝瓜是个好东西，蛋白质和维生素含量都挺高。特别适合给正在长身体的孩子们食用不过丝瓜可是不能生吃的一定要去皮后加热食用可以开水焯过后凉拌，或者清炒，煲汤等今天这个丝瓜酿肉是非常快手的一道菜，尽可能大的保留了丝瓜的营养和原汁原味",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afaf63a02f0da4bb2281",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/5578eb728bc911e6b87c0242ac110003_490w_325h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "青椒切碎丁状备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/55e162a68bc911e6a9a10242ac110002_490w_325h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "热锅下油，油热后，下青椒炒至断生后，加适量盐调好后起锅，装进大碗里",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/5613d0248bc911e6b87c0242ac110003_490w_325h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "敲入2个鲜鸡蛋，撒少许胡椒粉",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/564536aa8bc911e6b87c0242ac110003_490w_325h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "彻底的搅打均匀",
				"height": 400
			},
			{
				"src": "",
				"text": "净锅内再下入少许底油，晃动锅子，用油把整个锅底都润一下，像摊饼样倒入步骤5里拌好的青椒蛋液，撒入熟芝麻，待蛋液基本凝固时，炒散即可"
			}
		],
		"uid": 1,
		"title": "青椒炒蛋",
		"food": [{
				"name": "青椒",
				"len": "青椒"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "熟芝麻",
				"len": "熟芝麻"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "胡椒粉",
				"len": "胡椒粉"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/06af813e86f311e6a9a10242ac110002_458w_690h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1.2次放油，油的用量都不需要太多，加起来用量就跟平时炒一盘菜一样。\r2.熟芝麻要多加些，每一口都能吃到芝麻才够香。\r3.在最后一步时，直接把它摊成青椒鸡蛋饼再切块吃应该也不错。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "今天这款青椒炒蛋，是跟嫂嫂偷学的。。。据说是湖北仙桃还是哪的特色菜来着。\r是哪的菜不是我研究的重点。。。在我看来。。。好吃才是王道！虽然只是多加了些芝麻，但是口感和味道马上就变得不同寻常起来~~~",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afaf63a02f0da4bb2282",
		"work": [{
				"src": "",
				"text": "土豆去皮，切片，然后用清水冲洗一下"
			},
			{
				"src": "",
				"text": "炒锅大火烧热之后下油，趁油还没烧热把土豆片放下去快速翻炒，让每一片上都裹上油"
			},
			{
				"src": "",
				"text": "依个人口味烹入盐、生抽，可以放少许糖提味儿"
			},
			{
				"src": "",
				"text": "不断翻炒土豆"
			},
			{
				"src": "",
				"text": "土豆快要熟的时候加入少许水，盖上锅盖中小火稍微闷一下，土豆片口感会比较软绵"
			},
			{
				"src": "",
				"text": "出锅装盘"
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/32c108828e5111e6b87c0242ac110003_600w_399h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "这盘放了一点孜然，和红椒粉上色，不加这两样也照样好吃！",
				"height": 400
			}
		],
		"uid": 1,
		"title": "朴素的土豆片",
		"food": [{
				"name": "土豆",
				"len": "土豆"
			},
			{
				"name": "油",
				"len": "油"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "水",
				"len": "水"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/9410971087d511e6b87c0242ac110003_600w_399h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、土豆切片之后最好清水清洗或者浸泡，去除表面多余淀粉以免粘锅糊锅\r2、如果要放孜然，在开始下了土豆之后就可以放了，孜然越炒越香。\r3、如果要放红椒粉，出锅之前放一些迅速翻一翻就可以了，红椒粉不适合长时间加热，香味会流失\r4、加水步骤也可省略，我喜欢吃软烂些的土豆所以加了这一步\r5、最后也可以加点水淀粉勾芡，留些汤汁拌饭超级香！",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "单纯的土豆片，不用加别的只略放些盐和生抽，原汁原味的土豆就很好吃了！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afb063a02f0da4bb2283",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/edc36ff693b211e6a9a10242ac110002_200w_200h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "土豆切丝，冷水多冲洗几遍，把表面的淀粉洗掉防止土豆炒时软化。青椒切丝、姜蒜切细、干辣椒切小段。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ee105f3293b211e6a9a10242ac110002_800w_530h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "干辣椒放入后马上加入土豆丝，马上加土豆的原因是干辣椒容易糊。也可将干辣椒和土豆丝一同加入。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/ee5fbbe093b211e6a9a10242ac110002_800w_530h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "加盐、辣椒油、青椒丝翻炒均匀。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/eec13c9e93b211e6b87c0242ac110003_800w_530h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "起锅之前加香醋、鸡精调味，混合均匀即可出锅。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ef00f75893b211e6a9a10242ac110002_800w_530h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "成品欣赏",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ef45fae293b211e6b87c0242ac110003_800w_530h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "成品欣赏",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/efaba84c93b211e6b87c0242ac110003_800w_530h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "成品欣赏",
				"height": 400
			}
		],
		"uid": 1,
		"title": "家常菜 酸辣土豆丝",
		"food": [{
				"name": "土豆",
				"len": "土豆"
			},
			{
				"name": "青椒丝",
				"len": "青椒丝"
			},
			{
				"name": "干红椒",
				"len": "干红椒"
			},
			{
				"name": "姜",
				"len": "姜"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "油",
				"len": "油"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "醋",
				"len": "醋"
			},
			{
				"name": "辣椒油",
				"len": "辣椒油"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/cd3d58e0889111e6b87c0242ac110003_620w_411h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、土豆丝不易太细，太细易断，切到粗细均匀最好了。2、醋要起锅前加，若先加入醋的酸味会蒸发掉，最后起锅就没那么酸了，当然也可以分两次加，放土豆丝时加一次，起锅加一次。3、土豆丝不能炒太久，火候稍微一过土豆丝就软了。关注美食微信号  meishi0123 每天与大家分享不同菜品的做法，或者 QQ:  694755640  空间也可查看。 QQ群： 438996620 厨友们我们多多交流，在烹饪上有什么问题我们互相讨论。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "家里没有辣椒油的可以不用，但是辣度就没这么高了，但是可以多放些干红椒。关注美食微信号  meishi0123 每天与大家分享不同菜品的做法，或者 QQ:  694755640  空间也可查看。 QQ群： 438996620 厨友们我们多多交流，在烹饪上有什么问题我们互相讨论。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afb063a02f0da4bb2284",
		"work": [{
				"src": "",
				"text": "先煮意面，比平时煮面的时间稍微短一点。比如我买的意面包装上写煮5分钟，我就煮了4分钟就捞出来放一边。"
			},
			{
				"src": "",
				"text": "大蒜切片洋葱切丝培根切块。"
			},
			{
				"src": "",
				"text": "橄榄油热锅，中火爆香蒜末，陆续扔进洋葱和培根翻炒至飘出香味。"
			},
			{
				"src": "",
				"text": "转小火100ml牛奶和手撕成小块的芝士片三片入锅边搅拌边煮至芝士融化。"
			},
			{
				"src": "",
				"text": "倒进煮好的意面，用盐和黑胡椒调整味道，觉得OK了就关火，倒入一个打散的鸡蛋，搅拌均匀即可盛盘享用。"
			}
		],
		"uid": 1,
		"title": "超简单的奶汁培根意面Carbonara",
		"food": [{
				"name": "意面",
				"len": "意面"
			},
			{
				"name": "大蒜",
				"len": "大蒜"
			},
			{
				"name": "洋葱",
				"len": "洋葱"
			},
			{
				"name": "培根",
				"len": "培根"
			},
			{
				"name": "牛奶",
				"len": "牛奶"
			},
			{
				"name": "芝士片",
				"len": "芝士片"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "黑胡椒",
				"len": "黑胡椒"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/9e3caf62889311e6a9a10242ac110002_640w_640h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "好多人不加鸡蛋，但是不加鸡蛋就不是carbonara了。事先把面煮好放在冰水里最后再加进奶汁，这时再打入鸡蛋就不会变成蛋花。锅里温度太高鸡蛋才会变蛋花。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "好多奶汁培根意面的方子里都要用淡奶油，最后鸡蛋拌面的时候也只用蛋黄扔掉蛋白，成本很高。我这个方子用牛奶和全蛋，做起来也简单，加上煮面的时间也不用20分钟。方子里写的是洋葱但菜谱封面图上用的是刀豆。其实放什么蔬菜都OK啦蟹味菇什么的应该也挺好的嗯。一人份",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afb163a02f0da4bb2285",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/136f5df08bbb11e6a9a10242ac110002_400w_267h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "去皮切片，防止土豆丝粗中有细，细中带粗，最好一口气切完，在炒之前一定要冲两三次水，把多余的淀粉冲走，并在清水里泡一会儿",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/139fb96e8bbb11e6a9a10242ac110002_277w_400h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅烧热放油，所谓“热锅凉油”炸辣椒或花椒，爆葱花，放土豆，放醋，然后是生抽、鸡粉，出锅",
				"height": 400
			}
		],
		"uid": 1,
		"title": "炒土豆丝",
		"food": [{
				"name": "土豆",
				"len": "土豆"
			},
			{
				"name": "干辣椒",
				"len": "干辣椒"
			},
			{
				"name": "葱丝",
				"len": "葱丝"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "米醋",
				"len": "米醋"
			},
			{
				"name": "鸡粉",
				"len": "鸡粉"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/95e06b8286f011e6b87c0242ac110003_410w_580h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "炒土豆丝的最高境界是——“外软内脆”。\r首先，要刀工好，粗细不均，自然影响口感，甚至于生熟不均；锅的热度要掌握好，确保“热锅凉油”不粘锅为妙；其次是火候，炒的时间过长，会导致土豆的有“面面”的感觉，甚至索性回归淀粉勾芡时代，反之，炒的时间过短，土豆还有“生涩”的感觉；另外，炒这玩意儿，不要用太多的调料，生抽、米醋、糖是必须的，辅料有葱即可，姜蒜还是省省别放了，讲究点在来点干辣椒或花椒。炒土豆丝，醋是必不可少的，它不仅能增加土豆丝的爽脆感，还可以减少食盐的用量。还有，有了生抽，就不要放盐，生抽既有咸鲜味，还增加为菜肴增加了浅浅的，有食欲的颜色。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afb163a02f0da4bb2286",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/d081d028993311e69ce70242ac110002_3179w_2120h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "牛油果取出果肉，切成小丁（黄豆那么大）虾仁用水煮熟，我是直接煮了鲜虾剥出来的，所以颜色是红红的蛮好看。黄瓜和芒果果肉也切成小丁。虾仁留几个完整的漂亮的做最后的装饰，其余的也切成小丁。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/cf049014993311e6b2400242ac110002_3527w_2351h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "所有切好的材料放入一只大碗，这个时候沙拉的调味你有两个选择：1是直接用沙拉酱加一段青芥末拌匀。2如果你想要更低脂健康一些的，就用浓稠酸奶加一点青芥末来代替，同样也很好味。如果是用酸奶可以稍微放少许盐提味。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/cb1bc832993311e69ce70242ac110002_4155w_2770h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "牛油果沙拉拌匀后，用勺子把沙拉舀到薯片上，放一只虾仁装饰。OK，享用吧，咔嚓咔嚓停不下来！",
				"height": 400
			},
			{
				"src": "",
				"text": "沙拉里面的4种食材，牛油果是cream的口感，黄瓜是脆的口感，芒果负责甜味，虾仁负责鲜味。这几样食材的奇妙搭配带来味觉上的完美体验，缺一不可哦！"
			}
		],
		"uid": 1,
		"title": "薯片牛油果大虾沙拉",
		"food": [{
				"name": "牛油果",
				"len": "牛油果"
			},
			{
				"name": "黄瓜",
				"len": "黄瓜"
			},
			{
				"name": "芒果",
				"len": "芒果"
			},
			{
				"name": "虾仁（我是鲜虾现剥的）",
				"len": "虾仁（我是鲜虾现剥的）"
			},
			{
				"name": "沙拉酱（或者浓稠酸奶）",
				"len": "沙拉酱（或者浓稠酸奶）"
			},
			{
				"name": "青芥末",
				"len": "青芥末"
			},
			{
				"name": "原味薯片",
				"len": "原味薯片"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/bd344d1e891811e6a9a10242ac110002_2875w_1917h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "青芥末就是吃三文鱼刺身的那种，是整个调味的灵魂，不用太多豌豆那么点儿就足够。薯片沙拉要现做现吃，时间长了薯片会吸收沙拉里的水分变得不脆影响口感了。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "早在前几年牛油果这玩意儿还没有进入广大群众的视野的时候，只有在进口超市的一角才得见，粗糙的外表昂贵的身价，一直让我好奇它为什么那么贵，后来了解到这也是一种营养非常丰富的水果。去HK出差，在超市看到牛油果还不到国内一半的价格，立马人肉抗了一打回家。那个时候还没有下厨房这么专业的APP，国人对牛油果的吃法也还停留在伴酱油和做沙拉而已，一日家宴，我一拍脑袋整出这个牛油果虾仁沙拉，连我那个吃遍世界的闺蜜也狂赞呢~~写个菜谱，为牛油果事业添砖加瓦！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afb263a02f0da4bb2287",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/b7427c0a925f11e6a9a10242ac110002_600w_600h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "将番茄洗净，用刀在顶部划出十字痕迹；",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b7817446925f11e6a9a10242ac110002_600w_600h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将其放入沸水中，浸泡2分钟，取出剥掉表皮；",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/b831a67c925f11e6b87c0242ac110003_600w_600h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "去皮番茄、土豆滚刀切块；",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/b885895e925f11e6a9a10242ac110002_600w_600h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "起锅，放入黄油，小火让其融化；",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/b8e5047e925f11e6a9a10242ac110002_800w_800h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "放入番茄块，在黄油中翻炒均匀；",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b923b656925f11e6b87c0242ac110003_800w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "使用压泥器，将番茄块压泥；",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b96c221a925f11e6b87c0242ac110003_800w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "放入土豆，翻炒均匀后加适当热水；",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b9abdd74925f11e6a9a10242ac110002_600w_600h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "大火烧至沸腾后，小火煲10-15分钟，即可出锅。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b9f4ce30925f11e6a9a10242ac110002_800w_600h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "非常好喝~",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ba3cdcf2925f11e6b87c0242ac110003_1280w_1280h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "欢迎关注【小番茄食堂】公众微信号，分享一些做与吃的心得。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "番茄土豆浓汤",
		"food": [{
				"name": "土豆、番茄",
				"len": "土豆、番茄"
			},
			{
				"name": "黄油、盐",
				"len": "黄油、盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/4ac5a2ca88c111e6b87c0242ac110003_800w_600h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、步骤04中，黄油入锅一定要用小火，慢慢让其融化，否则很容易烧焦；2、步骤06中，番茄块不需要全部压成泥，留部分番茄丁，整个菜肴更有口感，没有压泥器可用汤勺替代；3、步骤08中，该汤一定要用小火煲10分钟以上，让土豆析出淀粉，提升浓郁口感；4、黄油可用植物油代替，菜肴整体口感会清淡很多；5、土豆可以切成小丁，更容易熬出浓郁的滋味。【步骤图片、步骤文字和小贴士文字均为本人原创，禁止任何形式的转载和盗用，谢谢配合！】",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "番茄、土豆，很常见的蔬菜，做法很多。今天用这两种蔬菜做一道汤--番茄土豆浓汤。这道汤简单、快手又有营养。使用香浓的黄油搭配番茄，番茄炒制过程中析出酸甜的番茄汁，与浓郁黄油交融，汇成可口的汤汁。加入土豆块，浇入热水，咕嘟咕嘟地煮上十几分钟。富含淀粉的土豆增添汤汁的浓稠口感，喝起来更加味美。这道菜特别适合一个人的夜晚，整个房间都充斥着黄油那股特有的香气，觉得一个人也不孤单。浓汤暖手又暖心，又香醇又可口，简单配一碗白米饭，也是一餐精彩的晚宴。看了下大家做的番茄土豆浓汤，反馈都还不错啊，谁能告诉我为啥菜谱评分会这么低，真是好心塞……嘤嘤嘤！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afb263a02f0da4bb2288",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/abea5b109ab711e6b2400242ac110002_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "山楂泡盐水洗净",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ac60b9f49ab711e69ce70242ac110002_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "全部切开成两半",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/acbc717c9ab711e6b2400242ac110002_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "放入锅中，加入清水，与山楂齐平即可",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ad1884bc9ab711e69ce70242ac110002_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "挤进柠檬汁，搅拌均匀，中火煮熟(山楂果肉都软烂即可)",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/adb800d29ab711e69ce70242ac110002_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "煮山楂的水不要倒掉,留着备用。(图中已是被我快用完的样子)",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ae1e98d89ab711e6b2400242ac110002_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "煮熟的山楂趁热过筛用刮刀将山楂在筛网里来回碾压",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/aea1bfd89ab711e6b2400242ac110002_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "压碾果泥其间感觉粘稠不易操作，不断用煮山楂的水稀释一下再挤压",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/af36a21a9ab711e69ce70242ac110002_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "最后筛网中剩下果皮和果核(装在大碗里备用)",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/af8869569ab711e6b2400242ac110002_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "得到一盆山楂果糊",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/afd123c69ab711e69ce70242ac110002_597w_800h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "果糊重入锅中",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/b01f47f49ab711e69ce70242ac110002_597w_800h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "加入白糖和冰糖，继续中小火加热",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b07a163e9ab711e69ce70242ac110002_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "边加热边不停搅拌",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/b0df60f29ab711e69ce70242ac110002_597w_800h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "山楂果浆:比糕要稀,搅拌到勺子上挂薄糊，用手指在挂糊的勺子上划一道，果糊不会流动合拢，果酱即成。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b126abc49ab711e6b2400242ac110002_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "装瓶冷藏即可~",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b17fc9de9ab711e6b2400242ac110002_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "然后剩下的继续加热，至勺子上能够厚厚挂糊，果糊流动性差，最终的状态:糊要挂在勺子上~~~",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b1dca24e9ab711e69ce70242ac110002_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "离火搅拌机下,勺子插里面也不会倒",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b25481609ab711e6b2400242ac110002_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "趁热装进抹了一层色拉油的耐热容器中",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b2afe2c69ab711e6b2400242ac110002_640w_853h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "完全冷却后，倒出即成山楂糕！",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b308b81a9ab711e69ce70242ac110002_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "煮好的山楂糕糊取一点铺在烤盘里薄薄一层",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b35fd4e29ab711e69ce70242ac110002_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "冷却后卷起切段",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b39fd7369ab711e6b2400242ac110002_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "即成山楂卷。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/b3f757869ab711e6b2400242ac110002_597w_800h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "之前第八步留下的果核和果皮和残留的一点果泥倒入2-3杯凉白开水和适量糖搅拌均匀后用筛网过筛出果皮果核丢弃。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b462bfa89ab711e6b2400242ac110002_597w_800h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "留下的山楂茶用纱布再过筛一遍，筛掉沉淀物(也可不过筛，纯个人偏好)，即得到一杯酸酸甜甜的山楂茶。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "山楂糕山楂卷山楂茶山楂果酱",
		"food": [{
				"name": "山楂",
				"len": "山楂"
			},
			{
				"name": "白砂糖",
				"len": "白砂糖"
			},
			{
				"name": "冰糖",
				"len": "冰糖"
			},
			{
				"name": "鲜榨柠檬汁",
				"len": "鲜榨柠檬汁"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/fe9504e288b411e6b87c0242ac110003_597w_800h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "柠檬汁不宜放太多,起到抗氧化作用即可。柠檬和山楂都属碱性。锅子不宜用铁锅。山楂本身并没有毒性，但用铁锅熬煮山楂时，由于铁锅中的铁与山楂中的果酸生成铁化合物，大量铁化合物进入胃内，刺激胃部而引起中毒。一般在食用30～60分钟后发病，主要有恶心、呕吐、上腹部不适、头晕等症状，并可出现舌和齿龈呈紫黑色。一般恢复较快，症状严重者应送医院治疗。（另外，不宜用铁锅煮绿豆,因为豆皮中所含的单宁质遇铁后会发生化学反应,生成黑色的单宁铁,并使绿豆的汤汁变为黑色,影响味道及人体的消化吸收。不宜用铁锅煮藕,铁锅煮藕会发生化学反应,白藕变黑,而且吃了这种藕,还会引起肠胃不适。）网友说可以用一半的麦芽糖代替白糖，有助于山楂酱更浓稠容易成糕1 选山楂要选偏生的，生的山楂果胶含量高，容易成冻。什么样的叫生的呢，就是你用手颠颠，觉得比较重一点的，不要是那种空洞的。2 水一定要少放，水放多的，再怎么熬，凝胶的作用也不是很大。适量就可以，所谓适量就是山楂放锅里煮，不会干掉就好",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "真是一款一劳永逸的食物~一次性就可以制作出山楂糕、山楂卷、山楂果酱。连分离出来的果核果皮都能拿来泡个茶水,做成山楂茶。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afb263a02f0da4bb2289",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/95c3e9fc8bbf11e6a9a10242ac110002_150w_200h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "油麦菜洗净，沥干水分，切大段备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/95eb281e8bbf11e6a9a10242ac110002_150w_200h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "取鲮鱼罐头，把鱼肉手撕成小块，大蒜剁成末备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9612b35c8bbf11e6a9a10242ac110002_150w_200h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "起油锅，爆香一半蒜末",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/963685528bbf11e6b87c0242ac110003_150w_200h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "先下菜梗，再下菜叶，大火翻炒至软，盛出备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/96600b168bbf11e6a9a10242ac110002_150w_200h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "起油锅，下入另一半蒜末和罐头里的豆豉炒香",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9688501c8bbf11e6b87c0242ac110003_150w_200h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "下入鲮鱼翻炒",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/96acb3808bbf11e6b87c0242ac110003_150w_200h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "添加少许盐、糖、生抽和胡椒粉调味",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/96cea2ec8bbf11e6a9a10242ac110002_150w_200h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "调入适量水淀粉，煮开后浇在炒好的油麦菜上即可",
				"height": 400
			}
		],
		"uid": 1,
		"title": "豆豉鲮鱼油麦菜",
		"food": [{
				"name": "油麦菜",
				"len": "油麦菜"
			},
			{
				"name": "豆豉鲮鱼罐头",
				"len": "豆豉鲮鱼罐头"
			},
			{
				"name": "大蒜",
				"len": "大蒜"
			},
			{
				"name": "水淀粉",
				"len": "水淀粉"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/85709b1086f911e6b87c0242ac110003_650w_435h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、豆豉鲮鱼应经足够咸，注意盐的适量添加，口味轻的可以省略盐；\r2、也可以先炒油麦菜，然后放入豆豉鲮鱼同炒；还可以先炒豆豉鲮鱼，然后添加油麦菜同炒。随个人喜好。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "这道菜，油麦菜和鲮鱼即使分开炒，整个菜的制作也不过10分钟，要是再简化下程序，两样原料一块下锅炒，那干脆用不了5分钟。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afb363a02f0da4bb228a",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/61384fc08bdd11e6b87c0242ac110003_500w_474h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "锅中放入适量水加热至沸腾，放入肥牛片焯烫至变色，捞出备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/617019788bdd11e6a9a10242ac110002_500w_388h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "金针菇洗净，过沸水焯烫30秒，捞出沥干水分",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/619d7f448bdd11e6a9a10242ac110002_500w_406h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "芝麻酱中逐渐加入凉开水，调至适宜浓稠度，再加入油泼蒜泥、海鲜酱油、辣椒油、香油、白芝麻混合均匀，制成调味汁",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/61d512568bdd11e6b87c0242ac110003_500w_375h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将焯烫好的肥牛片和金针菇混合，再加入调味汁混合均匀，点缀上香菜碎即可",
				"height": 400
			}
		],
		"uid": 1,
		"title": "麻酱金针肥牛",
		"food": [{
				"name": "肥牛片",
				"len": "肥牛片"
			},
			{
				"name": "金针菇",
				"len": "金针菇"
			},
			{
				"name": "大蒜",
				"len": "大蒜"
			},
			{
				"name": "香菜",
				"len": "香菜"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/8e56367c86fe11e6b87c0242ac110003_500w_598h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "这菜实在很适合“家用”，特别是初入厨房的新手———薄的肥牛片在各大超市都能买到，金针菇只是洗净分小颗即可，都不需要刀工和技巧；更重要的是，它需要的只是简单的焯烫、调味，想来不至于被难倒，新新厨娘更不至于担心在家里人面前出了洋相。从准备到出锅，不过10多分钟的时间而已，但味道却很鲜美~像这样如此容易搞定的快手懒人菜，非常适合初学做饭的人做~也适合和我一样的上班族做，荤素搭配营养均衡！你，要不要尝试下呢？\r说起肥牛，大家会潜意识就想到涮火锅。其实用肥牛入菜是很讨巧的方法，切片薄，口感嫩，容易入味。以前在外面吃饭常会点木桶肥牛，肥牛鲜美，蘑菇的滑溜，酸得爽口利落，辣得痛快淋漓；自己也尝试做过洋葱肥牛盖饭，肥牛的嫩滑，辣椒的鲜香，再加上浓郁的汤汁将其完美包裹，是当之无愧的华丽快手盖浇饭。嗜油的金针菇不仅能中和肥牛的油腻口感，同时也表现出浓浓的鲜味，配合到肥牛的一丝丝甜，当然还有些许油辣椒的辣及浓郁的芝麻酱料，吃口非常鲜嫩哦。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afb363a02f0da4bb228b",
		"work": [{
				"src": "",
				"text": "大蒜用菜刀拍扁，可以轻松去皮，然后再切小点。"
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/98748bde8d3111e6b87c0242ac110003_580w_385h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "菠菜洗净。同时烧开一锅水，投入菠菜，汆一两分钟，去除草酸，沥干水待用。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/98aa6fe28d3111e6a9a10242ac110002_200w_110h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "热锅冷油，放入蒜末，炒香。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/98ca760c8d3111e6b87c0242ac110003_200w_131h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "然后放入菠菜，翻炒。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/98f298bc8d3111e6a9a10242ac110002_200w_136h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加适量盐味精，炒匀即可出锅。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "蒜末菠菜",
		"food": [{
				"name": "菠菜",
				"len": "菠菜"
			},
			{
				"name": "大蒜",
				"len": "大蒜"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "味精",
				"len": "味精"
			},
			{
				"name": "橄榄油",
				"len": "橄榄油"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/0d7abe2087f211e6b87c0242ac110003_526w_349h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "清爽的快手菜～",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afb463a02f0da4bb228c",
		"work": [{
				"src": "",
				"text": "鸡蛋加一点点盐，打匀"
			},
			{
				"src": "",
				"text": "韭黄切成段"
			},
			{
				"src": "",
				"text": "锅里放油，锅热后放入韭黄，加一点点盐，翻炒一下下就好，倒入蛋桨"
			},
			{
				"src": "",
				"text": "等蛋桨凝固后，用铲子分成小块，翻一下就可以了"
			}
		],
		"uid": 1,
		"title": "韭黄炒蛋",
		"food": [{
				"name": "韭黄",
				"len": "韭黄"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "鸡精",
				"len": "鸡精"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/1853a5d4874611e6a9a10242ac110002_800w_568h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "可以根据自己喜欢适量加点胡椒粉\r，我个人只喜欢放盐(*^__^*) 嘻嘻……可能很多人做这道菜是先煎蛋后放韭黄炒匀，不过我比较喜欢先炒韭黄，因为这样炒完吃的时候，一块块韭黄跟蛋是连在一起的",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "一个简单得不行的家常菜，香且好下饭，色泽鲜嫩好看O(∩_∩)O",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afb463a02f0da4bb228d",
		"work": [{
				"src": "",
				"text": "备食材：茼蒿洗净，红辣椒洗净切斜片，大蒜洗净去皮切丁；"
			},
			{
				"src": "",
				"text": "水烧开，水中加少许盐、油，茼蒿过水烫熟捞起，摆盘"
			},
			{
				"src": "",
				"text": "热锅，下油、蒜瓣、小辣椒、酱油，翻炒两下，起锅，直接淋在茼蒿上，搞定！"
			}
		],
		"uid": 1,
		"title": "凉拌茼蒿——懒人快手菜系列",
		"food": [{
				"name": "茼蒿",
				"len": "茼蒿"
			},
			{
				"name": "小辣椒",
				"len": "小辣椒"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "油",
				"len": "油"
			},
			{
				"name": "大蒜",
				"len": "大蒜"
			},
			{
				"name": "酱油",
				"len": "酱油"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/89ed0cb4882a11e6a9a10242ac110002_1631w_1350h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "小辣椒稍微翻炒一下，会出一点点辣味，比直接摆盘更提味好吃。如果想要辣一些的人，可以将小辣椒拍碎再切，多炒几下，辣味儿会更重！",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "即清淡又美味，时令快手菜！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afb463a02f0da4bb228e",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/0f5e39b28d5911e6b87c0242ac110003_200w_142h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "白菜洗净，用手撕成条，放入烧开了水的锅中，待水再次开起就捞出，不要煮时间长了，这样刚好爽口",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0fb772ac8d5911e6a9a10242ac110002_200w_150h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "烫过的白菜控掉水，放入盘中，依次浇上生抽，盐糖，花椒粉辣椒粉",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/0fcc154a8d5911e6b87c0242ac110003_400w_295h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "1大匙油放入小锅中烧热热的，均匀浇在撒了调料的白菜上，与此同时倒入一勺好醋（今天用的宁化府老陈醋）~拌一下就可以吃啦",
				"height": 400
			}
		],
		"uid": 1,
		"title": "响油白菜",
		"food": [{
				"name": "白菜",
				"len": "白菜"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "陈醋",
				"len": "陈醋"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "花椒粉",
				"len": "花椒粉"
			},
			{
				"name": "辣椒粉",
				"len": "辣椒粉"
			},
			{
				"name": "油",
				"len": "油"
			},
			{
				"name": "白芝麻",
				"len": "白芝麻"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/f34bd206875f11e6a9a10242ac110002_600w_440h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "油不需太多，够浇熟调料即可 \r放凉了也很好吃",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "快速焯烫过的白菜捞出，撒上调料，烧热一点油，浇在白菜上，伴随刺啦刺啦响声的还有扑鼻的香味\r油泼的做法不同于炒，虽然都有油做介质，但油泼的吃起来却清爽很多\r还有很多种蔬菜都适合这么吃呢\r单纯的蔬菜也有很多种美味吃法",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afb563a02f0da4bb228f",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/84e2d63c8c5211e6b87c0242ac110003_230w_231h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "买回的花蛤要事先用淡盐水浸泡吐尽泥沙",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/850883828c5211e6a9a10242ac110002_236w_234h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "姜蒜剁成末、红尖椒斜刀切小段",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/8536a05a8c5211e6b87c0242ac110003_233w_229h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "热锅冷油，小火爆香姜蒜末和麻辣酱",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/854c8db68c5211e6b87c0242ac110003_231w_149h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "开大火加入花蛤继续翻炒",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/857221e88c5211e6a9a10242ac110002_234w_152h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "保持大火状态，不要另外放水了，（因为花蛤在炒过程中自己会有水分）根据个人口味可以放一点点的糖",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/8599ef528c5211e6b87c0242ac110003_220w_140h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "炒至花蛤完全开口，这时候可以撒点香葱末，然后关火炒匀即可出锅",
				"height": 400
			}
		],
		"uid": 1,
		"title": "辣炒花蛤",
		"food": [{
				"name": "新鲜花蛤",
				"len": "新鲜花蛤"
			},
			{
				"name": "李锦记麻辣酱",
				"len": "李锦记麻辣酱"
			},
			{
				"name": "红尖椒",
				"len": "红尖椒"
			},
			{
				"name": "姜",
				"len": "姜"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "香葱末",
				"len": "香葱末"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/acb10bea873211e6b87c0242ac110003_600w_400h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "1、花蛤一定要新鲜，并且泥沙要吐尽，不然吃到有沙的蛤肉感觉可是不好的哦\r2、一定要大火爆炒，这样才能保持蛤肉的肥美",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "花蛤餐桌上经常出现的，夏季时候做法比较清淡，随着秋分时节到来，对我来说，食辣的季节也来了。\r好吧，先拿花蛤开刀，几分钟时间，家庭版销魂的辣味海鲜菜就做成了。\r你可以来杯啤酒，也可以端上一大碗米饭，绝对地挑逗你的味蕾，淋漓畅快。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afb563a02f0da4bb2290",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/ae268930908f11e6a9a10242ac110002_1248w_936h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "豆腐脱模，切成1.5厘米左右小块",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/aec5d652908f11e6a9a10242ac110002_1248w_936h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "火腿切丁",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/afaf4576908f11e6b87c0242ac110003_1248w_936h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "取一锅热水，待水将开非开的时候轻轻倒入豆腐。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b03c0fba908f11e6b87c0242ac110003_1248w_936h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "小火保持水微开，加入一点盐，煮10分钟左右，注意火不可过大，否则水沸腾会将豆腐弄碎。另外下锅后不可用锅铲翻动，略微摇晃即可。煮好后倒出备用。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/b1c586f4908f11e6b87c0242ac110003_1248w_936h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "锅烧热，倒入油，油4成热，倒入两个咸蛋黄，用炒勺压碎。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b2aa7ac0908f11e6a9a10242ac110002_1248w_936h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "小火将咸蛋黄炒散，注意小火，否则就糊了。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b3620a46908f11e6b87c0242ac110003_1248w_936h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "倒入豆腐，略微逛锅",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b3daff6e908f11e6a9a10242ac110002_1248w_936h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加入火腿丁，晃锅，如果汁比较粘稠不易裹匀，可以加入一点点水，用小勺将汁浇匀即可。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/b504bd3a908f11e6a9a10242ac110002_1248w_936h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "由于咸蛋黄有咸味，不需要再加入盐，加入少许味精或者鸡精调味（也可以不加），一点点香油，小心装盘，撒上香葱装饰即可。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "老丁的私房菜-蟹黄豆腐",
		"food": [{
				"name": "内脂豆腐",
				"len": "内脂豆腐"
			},
			{
				"name": "火腿",
				"len": "火腿"
			},
			{
				"name": "咸鸭蛋",
				"len": "咸鸭蛋"
			},
			{
				"name": "香葱",
				"len": "香葱"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/79953e8e88e011e6a9a10242ac110002_1122w_840h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "北方过年将就吃豆腐，豆腐，都福，口彩吉利可以关注微信公众号：老丁的厨房，或者在微信公众号搜索 brookding ，对老丁私人公众号进行关注，谢谢。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afb663a02f0da4bb2291",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/725109988e2e11e6a9a10242ac110002_200w_133h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "生菜洗净。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/72745c2c8e2e11e6a9a10242ac110002_200w_133h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "蒜剥去外皮，切成碎末，锅烧热放油，放入蒜末，煸炒出蒜的香味来。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/729adf968e2e11e6b87c0242ac110003_200w_133h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "放入生菜翻炒放入盐、生抽翻，最后炒放入鸡精调味。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/72ba5ad88e2e11e6a9a10242ac110002_200w_133h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "装盘。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "蒜蓉生菜",
		"food": [{
				"name": "生菜",
				"len": "生菜"
			},
			{
				"name": "大蒜",
				"len": "大蒜"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/af4216b687a911e6b87c0242ac110003_5184w_3456h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "生菜的含水量高，营养丰富，而且超级低脂，是女生减肥最好的选择。含B族维生素和维生素C、E、膳食纤维以及多种矿物质。多吃生菜，对于人的消化系统大有裨益。生菜可以促进胃肠道的血液循环，对于脂肪、蛋白质等大分子物质，能够起到帮助消化的作用，富含丰富的膳食纤维。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "生菜是春天吃的比较多的菜，而蒜蓉生菜又是我们平时比较常见的做法，这里天使妹教大家怎样做出翠绿的蒜蓉生菜~o(∩_∩)o ~",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afb663a02f0da4bb2292",
		"work": [{
				"src": "",
				"text": "杏鲍菇洗净切成5cm长的长方条，蒜瓣切末，香葱切葱花。"
			},
			{
				"src": "",
				"text": "大火烧热油，加入葱花和蒜末爆香，加入切好的杏鲍菇翻炒2分钟。"
			},
			{
				"src": "",
				"text": "加入美极鲜、白糖、黑胡椒碎翻炒，酱汁融入每一根杏鲍菇里就可以加点盐出锅啦～"
			}
		],
		"uid": 1,
		"title": "美极杏鲍菇",
		"food": [{
				"name": "杏鲍菇",
				"len": "杏鲍菇"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "香葱",
				"len": "香葱"
			},
			{
				"name": "黑胡椒碎",
				"len": "黑胡椒碎"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "白糖",
				"len": "白糖"
			},
			{
				"name": "油",
				"len": "油"
			},
			{
				"name": "美极鲜味汁",
				"len": "美极鲜味汁"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/95cb05b487fc11e6b87c0242ac110003_1417w_1151h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "1、没有美极鲜也可以用普通酱油，我还用过味极鲜酱油一样美味\r2、糖和和黑胡椒只要比例对可以依据自己的口味添加",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "贝太厨房的食谱上看到的，相信我这是我吃过最好吃的杏鲍菇做法了，用我妈的话说是好吃到舌头都快吞下去了哈哈(✧ω✧)～",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afb663a02f0da4bb2293",
		"work": [{
				"src": "",
				"text": "锅烧热后，倒油，晃动锅子使油均匀布满锅内壁"
			},
			{
				"src": "",
				"text": "蒜粒切一下，炒出香味"
			},
			{
				"src": "",
				"text": "小白菜切段，大火快炒"
			},
			{
				"src": "",
				"text": "撒盐，放一点点味精调味"
			}
		],
		"uid": 1,
		"title": "清炒小白菜",
		"food": [{
				"name": "小白菜",
				"len": "小白菜"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "味精",
				"len": "味精"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/d0fb084a873a11e6a9a10242ac110002_600w_400h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "关于白菜、青菜的叫法，中国各地都不同。以我生活过的两个城市举例，比如【青菜】，杭州指的就是这个菜谱里这种，但北京如果说【青菜】，指的是所有绿叶蔬菜的统称。\r 以下来自维基百科——\r大白菜（黄芽菜、胶菜、结球白菜）\r小白菜（青菜、不结球白菜）\r圆白菜（卷心菜、包心菜）\r它们是近亲，同属十字花科芸薹属。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afb763a02f0da4bb2294",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/8c6110368f3b11e6a9a10242ac110002_836w_557h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "下面来说说做法，关于这道菜要用到的豆腐呢，最好是选用嫩豆腐，这样的豆腐吃起来口感嫩滑。如下图所见，内酯豆腐就是嫩豆腐。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/8caca3348f3b11e6b87c0242ac110003_836w_557h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将肉末放入一碗中，在碗内加入生抽、生粉和少许油，抓匀，腌制十分钟。将嫩豆腐切好，切成长宽高各1厘米的小立方块，平铺在碟子里，铺一层就够了，多出来的豆腐就放到另一个盘子里，可以蒸两盘。将小葱切碎。",
				"height": 400
			},
			{
				"src": "",
				"text": "先将豆腐放一会儿，然后把豆腐出来的水排掉。"
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/8cfd24448f3b11e6a9a10242ac110002_836w_557h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅内热油，油热后放入腌制好的肉末，将肉末炒一下，用锅铲将肉末快速搅开，炒的时间不要太久，因为等一下还要蒸。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/8d404b528f3b11e6a9a10242ac110002_836w_557h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "在豆腐上淋上一些生抽，然后将炒好的肉末平铺在豆腐上。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/8d87665e8f3b11e6b87c0242ac110003_836w_557h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "沸水蒸十分钟，撒上葱花（纯属点缀，为了美观），这道菜就算完成了。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "肉末蒸豆腐",
		"food": [{
				"name": "嫩豆腐（内酯豆腐）",
				"len": "嫩豆腐（内酯豆腐）"
			},
			{
				"name": "猪肉末",
				"len": "猪肉末"
			},
			{
				"name": "小葱",
				"len": "小葱"
			},
			{
				"name": "油",
				"len": "油"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "生粉",
				"len": "生粉"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/2c5d553688a211e6b87c0242ac110003_5472w_3353h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "欢迎关注微信公众平台——小胖子的厨房，会定期发布菜谱，还会不定期发布各地美食推荐。在添加好友界面选择公众号，直接输入“小胖子的厨房”或者输入公众号gordonandhiskitchen搜索即可。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "这道菜是有一回在外面吃饭的时候在菜单上看到的，当时在菜单上看到了图片感觉很诱人啊，所以就脑补了一下做法，后来自己就把这道菜做了出来，感觉还挺好吃的，看来脑补得还比较成功。豆腐鲜嫩软滑，再配上美味的肉末，两者融合，是一道很好吃的下饭菜。而且做起来也简单。欢迎关注微信公众平台——小胖子的厨房，会定期发布菜谱，还会不定期发布各地美食推荐。在添加好友界面选择公众号，直接输入“小胖子的厨房”或者输入公众号gordonandhiskitchen搜索即可。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afb763a02f0da4bb2295",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/cbf0681a91d311e6a9a10242ac110002_650w_650h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "准备材料乌冬面用热水抄散控水备用青椒切丝 洋葱切丁鸡柳切丁西红柿切丁蒜切片其他蔬菜按照自己洗好来 总之 青椒 洋葱 蒜瓣不能少鸡柳也可以换成鸡肉丁",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ccb2c30691d311e6a9a10242ac110002_650w_650h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅里倒油 烧热后放入鸡柳丁 ",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ccdf456691d311e6b87c0242ac110003_650w_650h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "鸡肉丁变色后把其他蔬菜倒入锅中 一起煸炒两分钟  把菜都炒倒",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/cd2b79f491d311e6a9a10242ac110002_650w_650h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "菜都超软后 假如生抽 再次翻炒",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/cd707cac91d311e6b87c0242ac110003_650w_650h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "加入乌冬面翻炒  ",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/cdb3881291d311e6a9a10242ac110002_650w_650h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加入耗油 反超均匀 就可以吃啦",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/cdf47cdc91d311e6b87c0242ac110003_650w_650h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "最后煎一个溏心蛋",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ce48dcbe91d311e6b87c0242ac110003_650w_650h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "完美",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ce8ded5e91d311e6b87c0242ac110003_650w_650h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "",
				"height": 400
			}
		],
		"uid": 1,
		"title": "炒乌冬面 快手菜",
		"food": [{
				"name": "鸡柳",
				"len": "鸡柳"
			},
			{
				"name": "洋葱",
				"len": "洋葱"
			},
			{
				"name": "青椒",
				"len": "青椒"
			},
			{
				"name": "乌冬面",
				"len": "乌冬面"
			},
			{
				"name": "西红柿",
				"len": "西红柿"
			},
			{
				"name": "角瓜",
				"len": "角瓜"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/e8fbe1fe88f111e6b87c0242ac110003_650w_650h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "快手菜 蔬菜可根据自己喜好陪一杯果汁开启美好的一天",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afb763a02f0da4bb2296",
		"work": [{
				"src": "",
				"text": "芦笋洗净切掉末端"
			},
			{
				"src": "",
				"text": "锅中烧开水，加少许盐和几滴油，将芦笋放入烫一两分钟，捞出过凉水，可让芦笋更绿更脆"
			},
			{
				"src": "",
				"text": "将芦笋码齐，切成适宜长度，装盘浇生抽即可"
			}
		],
		"uid": 1,
		"title": "白灼芦笋",
		"food": [{
				"name": "芦笋",
				"len": "芦笋"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "油",
				"len": "油"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/a69ed01e873911e6b87c0242ac110003_600w_419h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "应季芦笋，鲜嫩可爱，适宜简单烹饪\r已入夏，白灼的各种鲜蔬当道",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afb863a02f0da4bb2297",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/68c634a28bc211e6a9a10242ac110002_500w_203h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "牛肉洗净切小丁；青红椒洗净切小圈状；洋葱切小丁；生姜去皮切片",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/6904a2e68bc211e6b87c0242ac110003_500w_369h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "牛肉丁中加入料酒、盐、红烧酱油、孜然（粉末+颗粒）、水淀粉、蚝油、香油，混合均匀，腌制20分钟",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/698004b88bc211e6a9a10242ac110002_500w_205h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "锅中放入适量油加热至5成，放入腌制好的牛肉粒翻炒至变色，盛出备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/69f5a95c8bc211e6a9a10242ac110002_500w_369h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅中放入少许油加热，放入洋葱碎和生姜片炒至微微焦黄色，放入辣椒圈炒出香味",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/6a66c3bc8bc211e6b87c0242ac110003_500w_369h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "依次放入炒好的牛肉粒、孜然（粉末+颗粒）、辣椒粉、白芝麻翻炒均匀即可",
				"height": 400
			}
		],
		"uid": 1,
		"title": "孜然牛肉粒",
		"food": [{
				"name": "牛肉",
				"len": "牛肉"
			},
			{
				"name": "青红椒",
				"len": "青红椒"
			},
			{
				"name": "洋葱",
				"len": "洋葱"
			},
			{
				"name": "生姜",
				"len": "生姜"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "红烧酱油",
				"len": "红烧酱油"
			},
			{
				"name": "孜然（粉末+颗粒）",
				"len": "孜然（粉末+颗粒）"
			},
			{
				"name": "水淀粉",
				"len": "水淀粉"
			},
			{
				"name": "蚝油",
				"len": "蚝油"
			},
			{
				"name": "香油",
				"len": "香油"
			},
			{
				"name": "辣椒粉",
				"len": "辣椒粉"
			},
			{
				"name": "白芝麻",
				"len": "白芝麻"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/9079afe286fe11e6b87c0242ac110003_490w_732h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "今天，这道孜然牛肉粒是当之无愧的道美味“下饭菜”，不用尝，只看看，你就会产生吃饭的欲望，渴望用白糯的香米饭将这些美味统统包裹，然后好好地放到胃里才安心吧。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afb963a02f0da4bb2298",
		"work": [{
				"src": "",
				"text": "葱蒜切片少许 西葫芦切片 西红柿切块儿"
			},
			{
				"src": "",
				"text": "热锅凉油 葱蒜爆锅 炒香之后放入西葫芦 翻炒 炒软之后放入西红柿 加糖 翻炒 西红柿不成形之前 加盐 翻炒 可以少放一点儿鸡精提鲜 翻炒几下出锅"
			}
		],
		"uid": 1,
		"title": "西红柿炒西葫芦",
		"food": [{
				"name": "西葫芦",
				"len": "西葫芦"
			},
			{
				"name": "西红柿",
				"len": "西红柿"
			},
			{
				"name": "葱蒜",
				"len": "葱蒜"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/2df3a93e884f11e6a9a10242ac110002_638w_640h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "一切西红柿参与的菜 都要放糖",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afb963a02f0da4bb2299",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2e67b3488f2e11e6a9a10242ac110002_640w_626h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "香菇挖掉内部变成小碗状，把挖下来的香菇切丁，打两个鸡蛋放少许盐入鸡蛋（请无视上图的西兰花和火腿肉丁这个是做其他菜的）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2eff2fac8f2e11e6b87c0242ac110003_640w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "把鸡蛋和香菇丁一起拌匀，感觉像肉糜鸡蛋搅拌在一起其实只有香菇丁。最后每个上放适量葱花，上蒸锅15分钟",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/2f62457e8f2e11e6b87c0242ac110003_638w_640h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "最后成品因为鸡蛋液会适当膨胀，无伦视觉还是味觉都和肉糜蛋蒸香菇很相似。很美味",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/2fa6797e8f2e11e6a9a10242ac110002_640w_640h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "最后因为我是当减肥健康美食的 所以算清淡的大家可以按喜好放别的或者沾酱油啊",
				"height": 400
			}
		],
		"uid": 1,
		"title": "香菇蒸蛋-控油减肥菜单",
		"food": [{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "香菇",
				"len": "香菇"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "葱花",
				"len": "葱花"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/3fbd90d6889e11e6b87c0242ac110003_638w_638h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "卡路里计算8个香菇19大卡（100克）+2个鸡蛋约110大卡（80克）=129大卡",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "我做菜的原则就是少油或者无油 所有食材查薄荷卡路里。力争美味健康又能控制体重。香菇蒸鸡蛋：不用肉和鹌鹑蛋就是为了控制热量",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afb963a02f0da4bb229a",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/70063e848e9611e6b87c0242ac110003_200w_150h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将口蘑表面洗净，去掉蘑菇梗，控干水分。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/70210b888e9611e6a9a10242ac110002_200w_150h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "平底锅倒油，小火，先将蘑菇口朝下煎一分钟。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/7091aa148e9611e6a9a10242ac110002_200w_150h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "翻面，继续煎，一会儿就能看到口蘑的小碗里充满了液体，这时就可以关火了。 用筷子尖蘸一点点盐，在每个口蘑的小碗里点一点就可以了。这液体是蘑菇的精华，特别鲜，取出蘑菇时千万不要打翻了呀。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "保留最原始鲜味儿的煎口蘑",
		"food": [{
				"name": "口蘑",
				"len": "口蘑"
			},
			{
				"name": "盐",
				"len": "盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/0a9bc6d887eb11e6a9a10242ac110002_800w_600h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "口蘑用下面的方法料理之后，可以品尝到口蘑最原始的鲜味儿。而且又不考验厨艺，有口平底锅就能做了。淘宝店铺：小羽私厨http://xiaoyusichu.taobao.com微信公号：小羽私厨新浪微博：桐小羽",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afba63a02f0da4bb229b",
		"work": [{
				"src": "",
				"text": "丝瓜切条状，如图，加点盐用手抓下，然后洗净待用"
			},
			{
				"src": "",
				"text": "三个鸡蛋加少许盐打散，盐不需要多"
			},
			{
				"src": "",
				"text": "锅中放油，把鸡蛋放入滑炒，不要炒的太老，成型就立即盛出"
			},
			{
				"src": "",
				"text": "立即放入丝瓜煸炒"
			},
			{
				"src": "",
				"text": "然后放入鸡蛋一起，加一点盐，加点水，然后放入鸡精，即可盛出装盘，一盘丝瓜炒鸡蛋就完成啦，哈哈"
			}
		],
		"uid": 1,
		"title": "丝瓜炒蛋（快手菜）",
		"food": [{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "丝瓜",
				"len": "丝瓜"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "鸡精",
				"len": "鸡精"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/9af0c9e2891511e6a9a10242ac110002_640w_480h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "丝瓜切好后加少许盐码一下，可以使丝瓜不会发黑，炒出来是翠绿翠绿的，又好看又清爽！第一次发菜谱，可能显得有点啰嗦了，但是真的是超级简单的一道快手菜啊！",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "丝瓜的药用价值很高，全身都可入。常吃丝瓜可以提高人体免疫力，预防疾病，延缓衰老。丝瓜中含防止皮肤老化的B族维生素，增白皮肤的维生素C等成分，能保护皮肤、消除斑块，使皮肤洁白、细嫩，是不可多得的美容佳品！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afba63a02f0da4bb229c",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/7e843c52981611e6b2400242ac110002_3264w_2448h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "豆腐切块，青椒，葱切末，姜切末",
				"height": 400
			},
			{
				"src": "",
				"text": "调制酱汁，酱油三勺，水2/3碗，糖适量，搅匀。切肉末，放姜末，盐，搅匀，放置十分钟。"
			},
			{
				"src": "",
				"text": "起锅，倒油，翻炒肉末和青椒末（时间很短，迅速捞出）"
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/80f6c45a981611e69ce70242ac110002_3264w_2448h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "倒油，放入豆腐，中火稍微煎一会",
				"height": 400
			},
			{
				"src": "",
				"text": "倒入步骤2 的酱汁，再加半碗水。"
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/833df85a981611e69ce70242ac110002_2133w_1600h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "水开后，倒入之前的肉末和青椒末，还有葱花，焖煮半分钟（不要用锅铲翻动豆腐，会碎哦~）最后装盘，OK~",
				"height": 400
			}
		],
		"uid": 1,
		"title": "肉末豆腐~无敌下饭菜",
		"food": [{
				"name": "嫩豆腐",
				"len": "嫩豆腐"
			},
			{
				"name": "肉",
				"len": "肉"
			},
			{
				"name": "青椒",
				"len": "青椒"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "姜",
				"len": "姜"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/2c9521d8883d11e6b87c0242ac110003_2133w_1600h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "喜欢甜的朋友，可以多加一点糖哦~~",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "简简单单，一学就会的下饭菜~~",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afba63a02f0da4bb229d",
		"work": [{
				"src": "",
				"text": "羊肉片提前化冻，香菜洗净沥干水分切段"
			},
			{
				"src": "",
				"text": "锅烧热倒油，下几粒花椒，出香味后，将花椒捞出不用"
			},
			{
				"src": "",
				"text": "随后下葱、姜"
			},
			{
				"src": "",
				"text": "倒入羊肉片翻炒至变色"
			},
			{
				"src": "",
				"text": "调入少许糖、料酒、生抽，继续翻炒至水收干"
			},
			{
				"src": "",
				"text": "下孜然粒、孜然粉、盐"
			},
			{
				"src": "",
				"text": "最后倒入辣椒面，放入香菜段炒匀即出锅"
			}
		],
		"uid": 1,
		"title": "孜然羊肉片",
		"food": [{
				"name": "羊肉片",
				"len": "羊肉片"
			},
			{
				"name": "香菜",
				"len": "香菜"
			},
			{
				"name": "花椒",
				"len": "花椒"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "姜",
				"len": "姜"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "孜然粒",
				"len": "孜然粒"
			},
			{
				"name": "孜然粉",
				"len": "孜然粉"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "辣椒面",
				"len": "辣椒面"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/d8a2cc1686f611e6a9a10242ac110002_526w_690h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、调料中孜然粒、孜然粉都要放，比单放一种的味道能提升很多。\r2、炒的过程中有可能会出汤，大火不断翻炒一会汤基本就会收干了，一定要把汤炒干，否则很影响味道的。\r3、香菜的量也要多些，而且要最后放，放入香菜即关火，利用余温炒匀即可。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "现在过小年很少吃关东糖了，普通人家就做个轻松快手又过瘾给力的羊肉。这菜要真正好吃，羊肉的质量也关键，须得是牛街德聚源的羊肉片——现场片出的羊肉片，肉好，放心，做起来省事，可以孜然，也可以葱爆，更可涮锅。这个冬天，我家的羊肉几乎全是这三个吃法。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afbb63a02f0da4bb229e",
		"work": [{
				"src": "",
				"text": "莲藕去皮洗净后整个入锅煮 大火煮开后保持中火一直莲藕变色 筷子能刺穿后关火 煮好的莲藕在流水里冲凉后放入凉水里浸十分钟 捞出切薄片"
			},
			{
				"src": "",
				"text": "老抽、白糖一茶匙 生抽、蚝油一汤匙 鸡精少许 辣椒末两汤匙"
			},
			{
				"src": "",
				"text": "1和2混合后用筷子搅拌均匀即可食用"
			}
		],
		"uid": 1,
		"title": "南昌凉拌藕",
		"food": [{
				"name": "莲藕",
				"len": "莲藕"
			},
			{
				"name": "蚝油",
				"len": "蚝油"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "老抽",
				"len": "老抽"
			},
			{
				"name": "白糖",
				"len": "白糖"
			},
			{
				"name": "鸡精",
				"len": "鸡精"
			},
			{
				"name": "辣椒末",
				"len": "辣椒末"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/9bd59e0687a211e6b87c0242ac110003_600w_400h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1.我买的辣椒末巨辣 不能吃太辣的同学先少发一点 尝过觉得不够还可以再加 \r2.不能不放辣椒 不然不算南昌凉拌藕了",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "南昌街头小吃 非常过瘾！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afbb63a02f0da4bb229f",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/577803ec8d5211e6a9a10242ac110002_2784w_1856h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "菠菜去根,洗净,切成6厘米左右的段.",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/58e838c88d5211e6a9a10242ac110002_4080w_2720h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "向锅内放入适量的水,煮沸,放入菠菜焯熟.",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/5b0f2e188d5211e6a9a10242ac110002_4080w_2720h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将菠菜捞出,过冷水,沥干水分.",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/5c2ebcf08d5211e6a9a10242ac110002_4080w_2720h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "将沥干的菠菜紧紧的压入一平底的容器内.",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/5d800fb48d5211e6a9a10242ac110002_4080w_2720h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "姜切末,将姜末生抽,芝麻油,少量的盐,鸡粉和糖调成均匀的调味汁.",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/5e8e03f28d5211e6b87c0242ac110003_4080w_2720h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将压紧的菠菜倒扣在盘子里.",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/605f4c048d5211e6a9a10242ac110002_4080w_2720h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "将调好的调味汁浇在做好造型的菠菜上.",
				"height": 400
			}
		],
		"uid": 1,
		"title": "姜汁菠菜",
		"food": [{
				"name": "菠菜",
				"len": "菠菜"
			},
			{
				"name": "姜",
				"len": "姜"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "芝麻油",
				"len": "芝麻油"
			},
			{
				"name": "白砂糖",
				"len": "白砂糖"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "鸡粉",
				"len": "鸡粉"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/a43e42ee880311e6b87c0242ac110003_800w_533h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "1,想要菠菜的颜色青翠可以在焯菠菜的时候往水里加几滴油.\r2,如果有条件,可以将姜末改成姜蓉,更入味.",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afbb63a02f0da4bb22a0",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bece5a888bbc11e6b87c0242ac110003_210w_142h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "备料",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/beff633a8bbc11e6b87c0242ac110003_212w_140h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "鸡蛋磕入碗内，打散，一点点地加入生粉搅拌均匀",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bf2421ac8bbc11e6a9a10242ac110002_220w_142h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "洋葱切细条",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/bf66d6328bbc11e6b87c0242ac110003_220w_147h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加入水、盐和色拉油再次搅拌均匀",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/4e02dbcc8c5611e6b87c0242ac110003_219w_142h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "热锅凉油倒入蛋液用筷子迅速地滑散",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/4e2a2cfe8c5611e6a9a10242ac110002_218w_149h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "立即加入切成细条的洋葱",
				"height": 400
			},
			{
				"src": "",
				"text": "翻炒至出香味"
			},
			{
				"src": "",
				"text": "即可出锅盛盘"
			}
		],
		"uid": 1,
		"title": "洋葱炒蛋",
		"food": [{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "紫洋葱",
				"len": "紫洋葱"
			},
			{
				"name": "生粉",
				"len": "生粉"
			},
			{
				"name": "色拉油",
				"len": "色拉油"
			},
			{
				"name": "水",
				"len": "水"
			},
			{
				"name": "盐",
				"len": "盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/e2194c6086f711e6a9a10242ac110002_416w_616h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、蛋液中加点水和油，可以使蛋更滑嫩，加入生粉可以增加炒蛋的量\r2、洋葱很容易熟，放入后炒出香味就可以了（不必等完全炒熟），利用食物本身的余热可以使洋葱完成熟透",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "发现将洋葱放在冰箱事先冷藏后再切就不会“流眼泪”了。将洋葱和鸡蛋搭配来份小炒，但如何炒炒滑嫩量多的鸡蛋呢？秘诀就这样一点：蛋液中加点生粉，加点色拉油，再来点水，冷油滑炒，自然就做成了美味的炒鸡蛋。不信？你试试看哦。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afbc63a02f0da4bb22a1",
		"work": [{
				"src": "",
				"text": "内酯豆腐切小块，葱切葱花，鸡蛋打入碗中~"
			},
			{
				"src": "",
				"text": "虾仁用一小勺的盐揉搓后马上冲洗干净。沥干水份后，加入一点点淀粉稍微拌均匀备用。"
			},
			{
				"src": "",
				"text": "内酯豆腐切好后，先在冰箱中放置约30分钟，以便让豆腐中的多余水份渗出。将豆腐渗出的水倒掉不要，豆腐块均匀的摆放在深盘中。鸡蛋加入盐1g，打均匀。普通鸡蛋大概净重50g左右。所以要加2倍的水稀释，也就是约80-100g左右水或冷高汤都可以。加入后搅打均匀，将蛋液用过滤网过滤，隔离出多余的气泡后将蛋液倒在豆腐上。包上保鲜膜，上锅中火蒸8-10分钟~记住别用大火!"
			},
			{
				"src": "",
				"text": "蒸的期间来调一个无比简单的调味汁。蒸鱼豉油1汤匙，凉开水或冷高汤1汤匙，香油1茶匙，搅均匀即可。水蛋蒸好后，将保鲜膜去除，放上腌好的虾仁，再蒸2分钟。上桌前淋入酱汁，撒上葱花即可上桌。此菜，是一道老少皆宜的快手料理!"
			}
		],
		"uid": 1,
		"title": "虾仁豆腐蒸水蛋",
		"food": [{
				"name": "内脂豆腐",
				"len": "内脂豆腐"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "清水",
				"len": "清水"
			},
			{
				"name": "虾仁",
				"len": "虾仁"
			},
			{
				"name": "香葱",
				"len": "香葱"
			},
			{
				"name": "蒸鱼豉油",
				"len": "蒸鱼豉油"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "香油",
				"len": "香油"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/aa9bcd4c940a11e6a9a10242ac110002_1620w_1080h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "重点:1个鸡蛋，需要加入2个蛋重量的水量。过滤网过滤蛋液，隔出气泡。保鲜膜包住盘子用中火蒸，别用大火。就以上三个重点!!!特别提示：感谢大家对这个食谱的喜爱。这两天看了大家的作品，感觉有些注意事项需要再和大家讲解清楚。1.主要是鸡蛋和豆腐的比例问题，1个鸡蛋（约50g）+250g左右的内酯豆腐是比较适合的比例。如果豆腐多，则鸡蛋的比例也要增加，这样就不大会出现蒸好后水水的问题。2.豆腐别切得太大块，这样蒸的时候水分出来的会比较平均，才不会影响整体效果。3.如想蒸出食谱图片的效果，豆腐就要自然堆放在盘子中间的位置，再将蛋液淋下去。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "蒸水蛋，北方也叫“鸡蛋羹”。其实都是一个意思!想要蒸出来的水蛋鲜嫩平滑，还真需要三点技巧呢!建议操作前先看小贴士!",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afbc63a02f0da4bb22a2",
		"work": [{
				"src": "",
				"text": "将冬瓜切片。将猪肉切片后拌入淀粉中。"
			},
			{
				"src": "",
				"text": "将锅加热。加入适量食用油至油开。将切碎的蒜放入锅中。"
			},
			{
				"src": "",
				"text": "蒜香味出后将腌好的猪肉放入锅中翻炒。"
			},
			{
				"src": "",
				"text": "翻炒适当后加入切片好的冬瓜翻炒。"
			},
			{
				"src": "",
				"text": "加入适量水，盖锅盖煮至收汁，加入适量盐（和酱油）再翻炒即可盛盘。"
			}
		],
		"uid": 1,
		"title": "快手菜：冬瓜炒肉片（健康版）",
		"food": [{
				"name": "猪肉",
				"len": "猪肉"
			},
			{
				"name": "冬瓜",
				"len": "冬瓜"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "油",
				"len": "油"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/1a765e48882611e6a9a10242ac110002_608w_640h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "猪肉按纹理切肉质更嫩。如果口味稍重的话，切好的肉片还可以加入少许酱油搅拌再与淀粉拌匀。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "很家常的菜，我们家吃东西比较健康，一般少油少盐不怎么放味精鸡精。比较喜欢放酱油的孩纸们可以看看小贴士",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afbc63a02f0da4bb22a3",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/7137489e8cab11e6a9a10242ac110002_185w_144h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "杏鲍菇和红椒洗净切丝，姜切末，葱切葱花",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/715564148cab11e6b87c0242ac110003_191w_147h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "炒锅中放油，油热后放入姜葱爆香",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/717892e08cab11e6b87c0242ac110003_199w_150h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加入杏鲍菇翻炒",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/7199cb5e8cab11e6b87c0242ac110003_190w_141h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "等杏鲍菇炒至软时，加入酱油和蚝油",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/71ba5a908cab11e6a9a10242ac110002_192w_145h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "加和红椒丝炒至断生，再加盐调味，最后淋几滴香油即可",
				"height": 400
			}
		],
		"uid": 1,
		"title": "蚝油杏鲍菇",
		"food": [{
				"name": "杏鲍菇",
				"len": "杏鲍菇"
			},
			{
				"name": "红椒",
				"len": "红椒"
			},
			{
				"name": "姜",
				"len": "姜"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "蚝油",
				"len": "蚝油"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "香油",
				"len": "香油"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/3080ac8e873611e6b87c0242ac110003_600w_800h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "酱油和蚝油都含有盐，最后加盐的时候一定注意别放多了哈。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afbd63a02f0da4bb22a4",
		"work": [{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/a4650b28997d11e6b2400242ac110002_200w_137h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "准备材料君~ 要是想更简单一点就准备，杏鲍菇五花肉红油豆瓣酱就OK啦~",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/a48134e2997d11e69ce70242ac110002_200w_139h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "大蒜切片，尖椒切圈圈",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/a49b38a6997d11e69ce70242ac110002_200w_150h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "五花肉买回家后可以冷冻起来，冻肉比较容易切薄片..但是肉块有冰霜比较滑手，切的时候注意哟~",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/a4d8144c997d11e6b2400242ac110002_200w_157h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "杏鲍菇先切成三段再切片，薄厚相宜~太薄了会煮没了..太厚了感觉不入味。 ",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/a5095aac997d11e6b2400242ac110002_200w_164h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "配菜每次手头有什么就会搭配什么～ 芹菜胡萝卜和青椒都是极好的！胡萝卜的超好吃！",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/a52d15aa997d11e69ce70242ac110002_200w_145h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "油锅放少许油干煸五花肉，可以冷油下锅，这样就不会爆油星子啦。要想五花肉好吃这一步绝对不能省略，因为五花肉有肥肉比较肥，先将肥肉的猪油逼出来，这样五花肉不会那么腻，而且更香～",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/a54a2a1e997d11e6b2400242ac110002_200w_145h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "利用五花肉逼出来的猪油煎杏鲍菇～煎过的杏鲍菇比较Q弹，而且要是不煎的话直接爆炒杏鲍菇会出水的~",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/a5c38576997d11e69ce70242ac110002_200w_149h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅里少许油，爆香姜蒜辣椒 （可以不放辣椒，因为郫县红油豆瓣酱已经有辣味了）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/a5e48410997d11e6b2400242ac110002_200w_143h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "倒入杏鲍菇和配菜翻炒，这个时候就是为了将爆香的姜蒜辣椒和五花肉杏鲍菇完美融合，大概翻炒10秒钟左右。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/a609f5ce997d11e6b2400242ac110002_200w_146h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "去过四川后就爱上郫县豆瓣酱了！完全是痴迷！炒什么都想放！加少许豆瓣酱，然后将其搅拌均匀..因为豆瓣酱比较咸所以一定要翻炒均匀啦，不然有的地方会咸了。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/a63010f6997d11e6b2400242ac110002_200w_149h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加入小碗水焖一下，有汁水的感觉拌饭也很赞！加盐，生抽，（加了豆瓣酱有咸味了盐和生抽不要加太多）杏鲍菇就很鲜美啦，不用加鸡精啦，要是有这个习惯的撒那么一点也不错啦 ^^",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/a654d422997d11e69ce70242ac110002_200w_247h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "翻炒片刻装盘出锅~",
				"height": 400
			}
		],
		"uid": 1,
		"title": "五花肉爆炒杏鲍菇",
		"food": [{
				"name": "杏鲍菇",
				"len": "杏鲍菇"
			},
			{
				"name": "尖椒",
				"len": "尖椒"
			},
			{
				"name": "五花肉",
				"len": "五花肉"
			},
			{
				"name": "生姜",
				"len": "生姜"
			},
			{
				"name": "大蒜",
				"len": "大蒜"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "郫县红油豆瓣酱",
				"len": "郫县红油豆瓣酱"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/cb88c2ea87ed11e6b87c0242ac110003_1980w_1315h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1. 主要是五花肉爆炒杏鲍菇，配菜可以自己搭配，胡萝卜彩椒赶脚也不错呢~\r2. 不吃辣椒可以不放辣椒，纯五花肉爆炒杏鲍菇就很鲜美\r3. 喜欢辣椒不吃辣可以放彩椒\r4. 不喜欢红油豆瓣酱的味道可以用有辣味的青椒or尖椒\r5. 豆瓣酱不要加太多会咸的\r6. 杏鲍菇炒了缩水会变少，所以要是3人吃最好吃俩杏鲍菇",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "#五花肉爆炒系列第一弹#\r#专注五花肉XX年---五花肉爆炒杏鲍菇#\rhttp://www.xiachufang.com/recipe/100029502/  #五花肉爆炒系列第二弹\r#专注五花肉XX年---五花肉爆炒花菜#\rhttp://www.xiachufang.com/recipe/100029512/  #五花肉爆炒系列第三弹#\r#专注五花肉XX年---五花肉爆炒莴笋#\rhttp://www.xiachufang.com/recipe/100051149/  #五花肉爆炒系列第四弹#\r#专注五花肉XX年之五花肉爆炒胡萝卜#\rhttp://www.xiachufang.com/recipe/100053254/  #五花肉爆炒系列第五弹#\r#专注五花肉XX年之五花肉爆炒豆腐干#\rhttp://www.xiachufang.com/recipe/100053658/   某天我麻麻买了俩杏鲍菇回家..\r自此开启了吃杏鲍菇模式...\r吃过黄油煎杏鲍菇、青椒炒杏鲍菇、肉片杏鲍菇 .......\r就是很特别的味道吧..\r然后比较弹牙..\r刚才还和麻麻吐槽什么菌菇类、秋葵、芦笋什么的都木有很爱次...\r 五花肉是我最爱吃的肉，不喜欢纯肥肉太腻了，瘦肉太柴了\r五花肉有Q弹的皮，肥瘦相间的肉最赞了~\r当菇类的鲜美与五花肉的肉香味融合那就是在舌尖跳舞呀..\r #乐购TESCO优鲜下厨房-蔬菜#",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afbd63a02f0da4bb22a5",
		"work": [{
				"src": "",
				"text": "龙利鱼片解冻，吸干水分，两面涂抹盐和现磨黑胡椒碎轻轻按摩均匀、腌制20分钟。"
			},
			{
				"src": "",
				"text": "电饼铛或平底锅，中低火，倒少量橄榄油，入葱丝姜丝炝香后划到两边，入龙利鱼片。"
			},
			{
				"src": "",
				"text": "龙利鱼耐煎不耐搅动，翻面的时候用筷子和木铲辅助一下，两面都煎发白后，淋适量果酒，可加盖闷一小会儿。"
			},
			{
				"src": "",
				"text": "切一薄片柠檬，再对半剪开，放在鱼身两边略煎即可入味。"
			},
			{
				"src": "",
				"text": "关火，鱼身再撒适量黑胡椒碎，出锅装盘。"
			}
		],
		"uid": 1,
		"title": "香煎龙利鱼——fit食谱系列",
		"food": [{
				"name": "速冻龙利鱼片",
				"len": "速冻龙利鱼片"
			},
			{
				"name": "研磨黑胡椒",
				"len": "研磨黑胡椒"
			},
			{
				"name": "橄榄油",
				"len": "橄榄油"
			},
			{
				"name": "鲜柠檬",
				"len": "鲜柠檬"
			},
			{
				"name": "葱丝",
				"len": "葱丝"
			},
			{
				"name": "姜丝",
				"len": "姜丝"
			},
			{
				"name": "果酒",
				"len": "果酒"
			},
			{
				"name": "食盐",
				"len": "食盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/c951a60088e111e6b87c0242ac110003_1599w_1066h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "生抽——Never！勾芡——Never！果酒选择你喜欢的味道即可。腌制的时候，盐只是抹一点点，不是腌咸菜那种规模><",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "煎龙利鱼的秘诀，就在于你一定要像对待素颜女神一样对待它。只可淡妆，不能浓抹。施以信任之手，还以艳惊之味。无论是尊崇原汁原味的考虑，还是出于fit食谱适量、少油、少盐、高蛋白的减脂增肌规律，以下呈现的都是最简最优的料理方式。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afbd63a02f0da4bb22a6",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ed9ab4828c1711e6a9a10242ac110002_251w_167h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "老姜用刨刀刨",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/edc01b468c1711e6a9a10242ac110002_250w_167h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "裹到纱布里",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ede1e8848c1711e6b87c0242ac110003_250w_167h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "拧出姜汁",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/edf9c49a8c1711e6b87c0242ac110003_249w_167h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "牛奶倒入锅中",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ee14dbae8c1711e6a9a10242ac110002_247w_165h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "放白糖",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ee35efec8c1711e6a9a10242ac110002_251w_164h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "加热牛奶，到锅边开始又小泡，即关火，凉一会儿（70度左右说是最好，有温度计可以量，我是自己估计的）",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/ee607c128c1711e6b87c0242ac110003_249w_165h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "取一个小碗，倒入姜汁",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ee80cb708c1711e6b87c0242ac110003_250w_164h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "快速将牛奶倒入姜汁中",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/eeb43ec48c1711e6a9a10242ac110002_249w_166h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "盖上盖子，放置10分钟左右，牛奶就会凝结即可",
				"height": 400
			}
		],
		"uid": 1,
		"title": "姜撞奶",
		"food": [{
				"name": "纯奶",
				"len": "纯奶"
			},
			{
				"name": "姜汁",
				"len": "姜汁"
			},
			{
				"name": "白糖",
				"len": "白糖"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/08a328a0873011e6a9a10242ac110002_690w_458h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、白糖看自己口味来\r2、姜汁要用新鲜磨出来的\r3、牛奶不需要煮沸\r4、姜汁量少了很难凝固哈，多试几次，慢慢就会百战百胜。。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "15分钟搞定\r姜撞奶\r跟双皮奶一样在外边看到就爱点的玩意儿\r很温暖的一道甜品\r滑嫩甜\r又带点老姜的辣\r暖胃\r心也跟着暖起来\r做起来比双皮奶步骤更简单些我觉得\r没事儿就做碗啃啃呗\r想着复杂\r其实再简单不过\r等到牛奶跟姜汁碰撞凝结之后\r就可以啃啦~~\r就地啃光。。。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afbe63a02f0da4bb22a7",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/6f292cc68cbe11e6b87c0242ac110003_293w_193h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将豆腐撕去豆腐盒表面的封口，然后轻轻地扣在菜板上，用刀将盒底的四个角都割开一个小口",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/6f5bc5c88cbe11e6a9a10242ac110002_291w_192h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "轻轻怕打盒子让豆腐脱离盒子的四壁，然后轻轻地将盒子拿下来，这样软嫩的内酯豆腐就会完整地被取出来了",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/6f83e6de8cbe11e6a9a10242ac110002_299w_197h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "将内酯豆腐切0.5~0.8左右厚的片，然后在中间也切上一刀",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/6f9a27b48cbe11e6b87c0242ac110003_295w_196h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "用刀将豆腐分两次托着放到深盘中，用手轻轻地一按就会成为整齐的互相叠压的豆腐片",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/6fb008228cbe11e6b87c0242ac110003_295w_197h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "将肥瘦相间的肉末放入碗中，放酱油和少许料酒搅拌均匀",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/6fe026e28cbe11e6a9a10242ac110002_299w_196h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "炒锅中倒入适量食用油，放入肉末炒变色",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/7009ad0a8cbe11e6a9a10242ac110002_297w_198h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将肉末拨到锅边，将剁碎成泥的豆瓣酱和葱姜末小火炒出红油",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/7032a2a08cbe11e6b87c0242ac110003_297w_197h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "再将肉末和豆瓣酱混合，放入小半碗清水煮开锅",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/705be16a8cbe11e6b87c0242ac110003_293w_197h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将淀粉放一点点水搅开倒入锅中，将锅里的豆瓣肉末酱汁搅匀成浓稠的汁",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/708adf2e8cbe11e6a9a10242ac110002_298w_196h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "将煮好的酱汁倒在豆腐盘中，放到蒸锅中大火上汽后蒸8分钟关火，取出撒上绿葱花即可",
				"height": 400
			}
		],
		"uid": 1,
		"title": "香辣肉末蒸豆腐",
		"food": [{
				"name": "内酯豆腐",
				"len": "内酯豆腐"
			},
			{
				"name": "肉末",
				"len": "肉末"
			},
			{
				"name": "四川豆瓣酱",
				"len": "四川豆瓣酱"
			},
			{
				"name": "味极鲜酱油",
				"len": "味极鲜酱油"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "姜",
				"len": "姜"
			},
			{
				"name": "淀粉",
				"len": "淀粉"
			},
			{
				"name": "料酒",
				"len": "料酒"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/304f1844873711e6a9a10242ac110002_450w_657h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "香辣肉末蒸豆腐就是我家常吃的一道菜，非常的简单和快手，适合忙碌的上班族，更适合刚下厨房的新手们，而且这道菜的非常的漂亮诱人，用来宴客也是非常好的选择，放了豆瓣辣酱的蒸豆腐看起来红彤彤的，其实只是微辣而已，完全不喜欢吃辣的可以不放辣酱，直接做成咸香口味~~",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afbe63a02f0da4bb22a8",
		"work": [{
				"src": "",
				"text": "金针菇去根洗净控水"
			},
			{
				"src": "",
				"text": "肉末中加少许油搅拌均匀（也可以再加一点料酒或胡椒面）"
			},
			{
				"src": "",
				"text": "开火做炒锅不加油，加热后把金针菇放入一直翻炒，把金针菇的汁水炒干些，变蔫吧啦就盛出待用"
			},
			{
				"src": "",
				"text": "锅中放适量油，油热放姜末煸香将肉末放入捣碎翻炒，至肉末变色后加酱油继续翻炒出肉香"
			},
			{
				"src": "",
				"text": "放入变蔫吧的金针菇，翻炒均匀即可出锅。至于放不放盐就看您的口味啦....."
			}
		],
		"uid": 1,
		"title": "肉末金针菇",
		"food": [{
				"name": "肉末",
				"len": "肉末"
			},
			{
				"name": "金针菇",
				"len": "金针菇"
			},
			{
				"name": "姜",
				"len": "姜"
			},
			{
				"name": "油",
				"len": "油"
			},
			{
				"name": "六月鲜特级酱油",
				"len": "六月鲜特级酱油"
			},
			{
				"name": "盐",
				"len": "盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/f8d2171887c211e6a9a10242ac110002_4349w_3257h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "1.锅中不放油把金针菇先翻炒...这样做出来的菜就不会出很多汤水啦....\r2.不过喜欢汤汤水水的童鞋就省去第3步骤吧~~~~\r3.2014.1.15加说明：到现在为止已经有381位朋友捧场做过这道小菜了！大家普遍反映卖相不怎样味道还可以、还有很多朋友加入了辣味调剂自己的口味（如鲜青椒、小辣椒、干辣椒、辣椒面），反正爱吃辣味的朋友您就酌情处理吧！",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "其实肉末金针菇是一道普普通通的家常菜，但是我在其中使用了一个（自认为）小妙招——可以使这道菜不再汤汤水水.....",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afbe63a02f0da4bb22a9",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/4839d54c97f511e6b2400242ac110002_226w_151h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "大虾洗净后用牙签挑去虾线，剪去长须，撒入料酒拌匀，码味10分钟待用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/48181bf097f511e6b2400242ac110002_224w_149h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将黑胡椒、白胡椒、花椒面和盐混合成椒盐，蒜头压成蒜蓉，葱和辣椒都切细末待用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/47f91d4a97f511e69ce70242ac110002_226w_149h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将码味过的大虾沥干，再用厨房纸彻底擦干水分，拌入淀粉，让虾壳均匀的沾满淀粉",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/47d6f3e697f511e6b2400242ac110002_225w_149h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅内放稍多的油，烧至6、7成热时分批次下大虾煎炸，每面1-2分钟即可",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/47bac6c697f511e69ce70242ac110002_227w_150h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "捞出大虾沥油，锅内留少许底油，中高火下蒜蓉、葱花和辣椒末爆香",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/479b6da897f511e6b2400242ac110002_225w_152h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "将大虾回锅，下准备好的椒盐粉翻炒几下即可",
				"height": 400
			}
		],
		"uid": 1,
		"title": "【曼食慢语】椒盐大虾",
		"food": [{
				"name": "大虾",
				"len": "大虾"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "蒜头",
				"len": "蒜头"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "青红小辣椒",
				"len": "青红小辣椒"
			},
			{
				"name": "淀粉",
				"len": "淀粉"
			},
			{
				"name": "黑胡椒",
				"len": "黑胡椒"
			},
			{
				"name": "白胡椒",
				"len": "白胡椒"
			},
			{
				"name": "花椒面",
				"len": "花椒面"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "做法：",
				"len": "做法："
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/d7753760873311e6a9a10242ac110002_690w_458h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "大虾去虾线即可，不要开背\r下锅前要将虾壳彻底擦干\r分批次下锅，不要一次下太多虾让锅里太拥挤\r注意火候和油温，切忌煎炸时间太长",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "中等个头的大虾最适合做椒盐虾，太小了虾肉易老，太大了虾壳过硬。大小适中才能壳脆肉嫩兼而有之，香酥鲜甜一味不缺。\r自制椒盐粉其实非常简单，将花椒、黑白胡椒和盐配比起来就是了。若是用作蘸料，最好是将整粒的花椒、胡椒和粗盐粒下锅干炒片刻，激出香味来，再打成椒盐粉。而椒盐虾这样用于烹饪，就可以省掉干炒的步骤，直接将花椒面、胡椒粉和细盐混合就行了。\r椒盐粉基本上是没有技术含量的，椒盐虾成功与否完全取决于火候，外壳要酥脆，虾肉的水分也不能过多流失。一般来说油炸食品想要酥脆的效果需要下两次油锅，第一次中等油温定型，第二次高温逼出水分和多余的油脂，即可让外壳干爽酥松不油腻。但椒盐虾我个人觉得没必要这么繁琐，虾肉易熟易老，煎炸两次的话无论如何虾肉都会过于干涩。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afbf63a02f0da4bb22aa",
		"work": [{
				"src": "",
				"text": "土豆去皮擦丝，用水先洗两遍，泡着。这样可以去掉多余的淀粉，炒起来更爽脆。"
			},
			{
				"src": "",
				"text": "胡萝卜去皮擦丝。干辣椒剪断，小葱切细段，蒜切片。"
			},
			{
				"src": "",
				"text": "热锅下油，油热下干辣椒葱花和蒜，炒香。"
			},
			{
				"src": "",
				"text": "土豆丝滤干水和胡萝卜丝下锅。炒至熟，加盐，出锅。"
			}
		],
		"uid": 1,
		"title": "炒胡萝卜土豆丝",
		"food": [{
				"name": "胡萝卜",
				"len": "胡萝卜"
			},
			{
				"name": "土豆",
				"len": "土豆"
			},
			{
				"name": "干辣椒",
				"len": "干辣椒"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "小葱",
				"len": "小葱"
			},
			{
				"name": "盐",
				"len": "盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/a1a441a0887111e6a9a10242ac110002_4752w_3168h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "美味又简单，营养又好看。炒素菜我建议用猪油，这样炒出来的菜很香、也没有怪味，或者用调和油也行。我个人不建议用生味太重的油，比如花生油葵花籽油，虽然这类油本身闻起来很香，但也就是因为他们本身味道太重，炒出来的菜也会生油味很重。我个人嗅觉味觉比较敏感，实在闻不惯菜里的生油味。所以，如果要去掉有些植物油的生味，可能就需要把油烧红烧熟。这样油烟会大，我个人不喜欢。我通常是，热锅冷油，油热后，把辅料放入后，发出兹兹声为佳，再之后持续大火也没关系，而不是传统的兹拉一声，当然，这是个人做菜的习惯，大家随意就好。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afc063a02f0da4bb22ab",
		"work": [{
				"src": "",
				"text": "烤箱预热230度。"
			},
			{
				"src": "",
				"text": "煮一锅水，水里加盐，煮沸后放入洗净的小土豆（不需要去皮），煮到土豆变软，可以轻松将筷子插入即可。"
			},
			{
				"src": "",
				"text": "将煮好的土豆取出，表面用纸巾吸干水分备用。"
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/59eae4cc8db211e6a9a10242ac110002_600w_450h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "准备一个烤盘，均匀的倒入橄榄油，不要小抠油，倒油可以防止土豆粘底，然后码上小土豆。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/5a4d0a128db211e6b87c0242ac110003_600w_450h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "用压土豆的工具或者是叉子将土豆纵向压一下。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/5a88becc8db211e6a9a10242ac110002_600w_450h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "然后再横向压一下。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/5ae4fca08db211e6b87c0242ac110003_600w_450h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "然后在压开花的土豆表面，先刷上橄榄油；再撒盐，再撒上黑胡椒碎粒及自己喜欢的香草，我撒的迷迭香和香芹碎。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/5b25be528db211e6b87c0242ac110003_600w_450h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "然后放入预热好的烤箱，230度烤20-25分钟，最后几分钟注意观察颜色，表面金黄，喜欢焦脆口感的可以等表面土豆块粒边缘微微泛浅棕色即可。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/5b585cf48db211e6a9a10242ac110002_600w_450h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "有时候土豆比较大的，感觉表面还不够脆，我会等烤箱熄火后，用余温再闷几分钟再取出。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "迷迭香烤小土豆",
		"food": [{
				"name": "小土豆",
				"len": "小土豆"
			},
			{
				"name": "橄榄油",
				"len": "橄榄油"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "黑胡椒碎粒",
				"len": "黑胡椒碎粒"
			},
			{
				"name": "迷迭香",
				"len": "迷迭香"
			},
			{
				"name": "香芹碎",
				"len": "香芹碎"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/fdd0cfca882b11e6b87c0242ac110003_737w_553h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1. 一般土豆要吃多少做多少，不过注意计算自家的烤盘大小，别煮太多放不下。\r2.烤盘底一定抹均匀橄榄油，不然烤好的土豆会粘在上面，我一般直接往上倒油，给出的分量只是毛估估的。\r3. 烤箱菜一般生的时候撒盐，不像中餐可以尝味道，新手很难撒准，把握不了拧可少撒一点，淡了吃的时候还可以另外撒，但是咸了就覆水难收了。一般指尖抓起来，表面薄薄撒上一层就可以了。本身土豆是用盐水煮的。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "最爱烤箱菜，无油烟又省力，这个烤小土豆之前在家里做过一次，就被我妈要求再做。烤的时候不用去皮，连皮一起烤出来表面焦脆可口，内里香软无比。一口一个简直和吃零食一样，一盘一顿就没了。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afc063a02f0da4bb22ac",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/a79bda2a8e8211e6a9a10242ac110002_300w_199h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "先将生菜掰成小块，洗净，锅中添水，水开后放入一点点盐，几滴油。然后放入洗净的生菜汆烫几秒钟即可。最好用个大锅，水量多一点，把菜分两次下锅，因为一次放太多生菜，受热不均，会导致有的烂了，有的还没有熟，影响口感。最好在旁边放一盆加了冰块的凉水，汆烫好的生菜捞出来后迅速放入冰水中过一下，这样可以使烫好的生菜口感更脆，而且颜色保持的更好。处理好的生菜就可以控干水分摆在盘中备用了。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/a7ba0b1c8e8211e6a9a10242ac110002_300w_199h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "切好蒜末，炒锅倒油，油热后放入蒜末，翻炒出香味，放蚝油、生抽、糖、料酒，搅匀至糖融化，汤汁略微粘稠即可关火。然后趁热浇在之前摆好盘的生菜上即可。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "蚝油生菜",
		"food": [{
				"name": "生菜",
				"len": "生菜"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "蚝油",
				"len": "蚝油"
			},
			{
				"name": "生抽",
				"len": "生抽"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "料酒",
				"len": "料酒"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/8797baf8886c11e6b87c0242ac110003_800w_600h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "蚝油生菜做法简单，热量不高，基本上我一个人吃一盘都不会担心长肉。淘宝店铺：小羽私厨http://xiaoyusichu.taobao.com微信公号：小羽私厨新浪微博：桐小羽",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afc063a02f0da4bb22ad",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/7dee55e48e6f11e6a9a10242ac110002_2375w_2818h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "茄子和豆角切整齐的段",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/7eb5d0068e6f11e6b87c0242ac110003_2786w_1908h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "蒜头和干辣椒切块",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/82e5cc628e6f11e6b87c0242ac110003_2448w_3264h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "热油先炸豆角，炸到豆角表面起泡就好。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/83fab55e8e6f11e6b87c0242ac110003_2448w_2663h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "豆角捞起来滤油，接着炸茄子看到表面变软就差不多啦。",
				"height": 400
			},
			{
				"src": "",
				"text": "剩下的油装起来，留下一点爆蒜头和辣椒。"
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/84dbd8688e6f11e6b87c0242ac110003_2384w_2482h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "最后倒入茄子和豆角，加点盐、耗油起锅。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "茄子豆角",
		"food": [{
				"name": "茄子",
				"len": "茄子"
			},
			{
				"name": "豆角",
				"len": "豆角"
			},
			{
				"name": "蒜头",
				"len": "蒜头"
			},
			{
				"name": "辣椒",
				"len": "辣椒"
			},
			{
				"name": "耗油",
				"len": "耗油"
			},
			{
				"name": "油",
				"len": "油"
			},
			{
				"name": "盐",
				"len": "盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/1ed5c0ae885e11e6a9a10242ac110002_811w_640h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "油不用倒太多，炸过的油可以用来炒菜。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "以前只会羡慕大师傅把这首菜做得那么好吃，哈哈，没有想到今天我也能完成得如此成功哇！！！真心太好吃啦，一大盘一转眼扫空了。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afc163a02f0da4bb22ae",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/2271064e90cc11e6b87c0242ac110003_1248w_768h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "二条青洗净备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/22da4a5090cc11e6a9a10242ac110002_1070w_838h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "斜切备用。因为二条青细长，斜切可以增加食材大小。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/23400a0290cc11e6b87c0242ac110003_1248w_855h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "肉切片备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/23b6fe0a90cc11e6a9a10242ac110002_1248w_936h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "切葱花，姜丝，热锅凉油，下葱姜爆锅，然后下肉片快速翻炒。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/24187ba890cc11e6b87c0242ac110003_1248w_936h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "待肉片变色，加入老抽调色。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/247ced2290cc11e6a9a10242ac110002_1248w_936h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "倒入辣椒快速翻炒。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/24ff1cac90cc11e6a9a10242ac110002_1248w_936h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "翻炒成熟，加入适量盐，味精，出锅即可。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "老丁的私房菜-小炒肉",
		"food": [{
				"name": "青辣椒（二条青）",
				"len": "青辣椒（二条青）"
			},
			{
				"name": "梅花肉",
				"len": "梅花肉"
			},
			{
				"name": "老抽，盐",
				"len": "老抽，盐"
			},
			{
				"name": "葱姜",
				"len": "葱姜"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/fdcd63b0889b11e6a9a10242ac110002_960w_960h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "湘菜的经典菜式，下饭一流。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afc163a02f0da4bb22af",
		"work": [{
				"src": "",
				"text": "菠菜洗净切大段，入开水中焯烫30秒，先放菠菜梗，后放菜叶，攥干水分"
			},
			{
				"src": "",
				"text": "鸡蛋加一勺料酒，少许白糖打散，葱姜切末备用"
			},
			{
				"src": "",
				"text": "大火热油滑散鸡蛋，盛出"
			},
			{
				"src": "",
				"text": "少许底油爆香葱姜，下入菠菜和鸡蛋，加入盐和生抽翻炒均匀"
			}
		],
		"uid": 1,
		"title": "菠菜炒鸡蛋",
		"food": [{
				"name": "菠菜",
				"len": "菠菜"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "葱姜末",
				"len": "葱姜末"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "白糖",
				"len": "白糖"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "生抽",
				"len": "生抽"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/87052ab8880711e6b87c0242ac110003_800w_533h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "在东北有一种吃菠菜的方法，就是菠菜焯到段生纯蘸黄酱吃，试过么？特别清爽。\r冬天这么吃，有些凉，还是吃温热的比较好。\r 手凉脚凉的姑娘们一定要多吃姜多吃补血的食物。\r 每次碰到新鲜的菠菜，我都会毫不犹豫的存货。到家洗净，热水焯烫，攥干水分成菠菜团，放在冰箱里至少可以吃两顿。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afc163a02f0da4bb22b0",
		"work": [{
				"src": "",
				"text": "煮锅放水烧开，加少许盐，放入意面煮7-10分钟左右，推荐用细面类，软硬度视个人口味调整。煮好关火凉至一旁。"
			},
			{
				"src": "",
				"text": "蒜瓣去皮切小片。火腿片切小块。牛油果一切两半用勺将果肉挖出碾成泥。"
			},
			{
				"src": "",
				"text": "热锅融化黄油或倒入橄榄油少许，将蒜瓣煸香，表面微微发黄即可。"
			},
			{
				"src": "",
				"text": "火腿碎倒入锅内，煸至表面微翘"
			},
			{
				"src": "",
				"text": "倒入牛油果，牛奶，芝士碎，小火搅拌炖煮至芝士融化，汤汁浓稠。（牛奶和芝士可换成奶油50ml左右加水）"
			},
			{
				"src": "",
				"text": "拌入意面，搅拌使面条和酱料充分融合，如果汤汁过干可加入几勺煮意面水稀释，放入盐和胡椒，搅拌均匀，关火，就可以享用啦！"
			}
		],
		"uid": 1,
		"title": "小清新牛油果火腿意面",
		"food": [{
				"name": "牛油果（熟透了的为佳）",
				"len": "牛油果（熟透了的为佳）"
			},
			{
				"name": "意面",
				"len": "意面"
			},
			{
				"name": "全脂牛奶",
				"len": "全脂牛奶"
			},
			{
				"name": "芝士碎",
				"len": "芝士碎"
			},
			{
				"name": "火腿片（或火腿肠一根）",
				"len": "火腿片（或火腿肠一根）"
			},
			{
				"name": "黄油（或橄榄油）",
				"len": "黄油（或橄榄油）"
			},
			{
				"name": "盐和胡椒",
				"len": "盐和胡椒"
			},
			{
				"name": "大蒜",
				"len": "大蒜"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/092be85888c411e6a9a10242ac110002_2448w_2448h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "消灭熟透了的牛油果的好方法，极其快手方便，端出来又健康又美腻，完全可以作为宴会主食震撼小伙伴啊！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afc263a02f0da4bb22b1",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/4ea832668bbb11e6b87c0242ac110003_490w_361h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "鸡蛋打散，稍微放点盐，搅匀，起油锅，小火将蛋液烘成一个厚厚的蛋饼",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/4ecfaa588bbb11e6a9a10242ac110002_319w_115h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "盛出，切成块备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/4ef1b2748bbb11e6b87c0242ac110003_157w_116h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "木耳泡发去根蒂，撕成小块",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/4f6c1ad28bbb11e6a9a10242ac110002_159w_115h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "青红椒洗净切碎备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/4fabe0d68bbb11e6a9a10242ac110002_160w_119h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "葱蒜切碎备用",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/d7c6f2188c5511e6b87c0242ac110003_157w_117h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "糖，醋，酱油，料酒，淀粉，再加少许水调和，兑成汁",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/d7d653708c5511e6b87c0242ac110003_157w_115h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "再起油锅，放豆豉，葱姜蒜末炒香",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/d7f7a4128c5511e6a9a10242ac110002_321w_114h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "放入准备好的木耳和青红椒碎翻炒均匀",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/d81ad6a88c5511e6a9a10242ac110002_160w_116h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "后倒入兑好的汁，搅拌，烧开",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/d8b07a828c5511e6b87c0242ac110003_323w_118h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "放入蛋饼，炒匀，出锅，撒点葱花即可",
				"height": 400
			}
		],
		"uid": 1,
		"title": "鱼香鸡蛋",
		"food": [{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "木耳",
				"len": "木耳"
			},
			{
				"name": "青椒",
				"len": "青椒"
			},
			{
				"name": "红椒",
				"len": "红椒"
			},
			{
				"name": "葱",
				"len": "葱"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "醋",
				"len": "醋"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "淀粉",
				"len": "淀粉"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/1abd449686f211e6b87c0242ac110003_500w_415h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afc263a02f0da4bb22b2",
		"work": [{
				"src": "",
				"text": "龙利鱼室温解冻 最好微解冻未全化时切成2厘米左右的小块 一口一块很满足 有木有(*^__^*)"
			},
			{
				"src": "",
				"text": "用料酒 盐 腌制龙利鱼 15mins准备一锅 烧热水 准备汆鱼烧水的功夫切蔬菜丁 还有勾芡汁儿（配小半碗水）"
			},
			{
				"src": "",
				"text": "水烧开 放鱼 烫一下 四周变色中心微红就可以捞出来啦"
			},
			{
				"src": "",
				"text": "锅热 一点油 可以爆下葱姜放蔬菜丁（要是速冻的话炒几下就放鱼 要是现切的蔬菜丁 就先放胡萝卜 再放青豆 再放玉米 时间要稍微长点）"
			},
			{
				"src": "",
				"text": "放鱼 然后就可以放勾芡汁儿啦 中火 慢慢收汁儿 搞定 鱼超嫩有木有 简单有木有 吼吼"
			}
		],
		"uid": 1,
		"title": "缤纷龙利鱼 简单快手",
		"food": [{
				"name": "龙利鱼",
				"len": "龙利鱼"
			},
			{
				"name": "青豆",
				"len": "青豆"
			},
			{
				"name": "玉米粒",
				"len": "玉米粒"
			},
			{
				"name": "胡萝卜丁",
				"len": "胡萝卜丁"
			},
			{
				"name": "料酒",
				"len": "料酒"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "五香粉",
				"len": "五香粉"
			},
			{
				"name": "白胡椒粉",
				"len": "白胡椒粉"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "淀粉",
				"len": "淀粉"
			},
			{
				"name": "葱姜",
				"len": "葱姜"
			},
			{
				"name": "小葱末",
				"len": "小葱末"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/af0ee41c883011e6a9a10242ac110002_1400w_934h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "我这次是用的速冻蔬菜 所以很快 5分钟搞定 要是现切的蔬菜 炒时间要长一些哈",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "龙利鱼是好东西啊 鲜嫩没刺 还营养健康 搭配各色配菜 五分钟搞定 低调的奢华有木有？ 上得了台面不？(*^__^*) 本来想做鱼米之乡 没放薏米 改着改着就做成了自家版 好看还简单 以后会长撸吧搭配了青豆 玉米 胡萝卜 蚕豆 四季豆 其实还可以放彩椒丁 我要是说都用的速冻的你们不要剁我 当然现切蔬菜更营养啦 鼓励大家现切！！ps：勾汁儿的五香粉还有白胡椒粉 大家一定要根据自己的菜量 还有接受程度慢慢来 不要一下子放很多 一小勺比平时放素菜盐的量再少点 尤其是白胡椒粉 放多点吃起来爽 但不习惯的觉得呛啊",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afc363a02f0da4bb22b3",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9c584a368de711e6b87c0242ac110003_960w_960h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "海鲜菇去根部 洗净，在热水里汆烫熟后捞起；",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/9ca60d848de711e6a9a10242ac110002_960w_960h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "热油锅 煸香蒜片，西红柿切小块下锅翻炒出汁(觉得汁水不够 可少量加些水)",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/9d0aae1a8de711e6a9a10242ac110002_960w_960h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "倒入海鲜菇一起炒匀，适量盐调味 再加点糖提鲜 沸腾后即可出锅，撒上切碎的葱花。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "茄汁海鲜菇",
		"food": [{
				"name": "西红柿",
				"len": "西红柿"
			},
			{
				"name": "海鲜菇",
				"len": "海鲜菇"
			},
			{
				"name": "小葱",
				"len": "小葱"
			},
			{
				"name": "蒜头",
				"len": "蒜头"
			},
			{
				"name": "油",
				"len": "油"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "糖",
				"len": "糖"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/25ab109a883c11e6a9a10242ac110002_960w_960h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "好像茄汁**的做法都很好吃 也很家常 关键是方便又美味茄汁又是下饭\"利器\" 总叫人忍不住再添一碗饭…试试番茄与海鲜菇的组合 让原本酸甜开胃的一道菜又多出一分鲜美滑嫩海鲜菇色泽洁白 肉质细嫩 味道鲜美，还是一种低热量、低脂肪的保健食品装盘后再撒上点葱绿 这道菜的品相是不是也很吸引人呢？O(∩_∩)O~",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afc363a02f0da4bb22b4",
		"work": [{
				"src": "",
				"text": "花甲买回后用油盐水泡一会儿，吐净泥沙后洗净"
			},
			{
				"src": "",
				"text": "锅中烧开水，入花甲焯至开口迅速捞出，沥干水分待用。"
			},
			{
				"src": "",
				"text": "香葱、干红辣椒、香菜切段，蒜瓣拍扁，八角分开掰成小块。豆瓣酱、白糖、料酒混合搅匀待用。其实不用混合，炒时分开放也可以。但是因为我比较懒而且动作比较慢，而炒的过程其实很短，所以就提前混合好，这样只需要倒一次调料就OK。"
			},
			{
				"src": "",
				"text": "热锅凉油，小火，入花椒八角姜片蒜瓣，煸香后入香葱段、干红辣椒"
			},
			{
				"src": "",
				"text": "转大火，入花甲快速翻炒几下，倒入调好的豆瓣酱+料酒+白糖，翻炒均匀后即可关火，撒上香菜段，用余热翻匀。"
			}
		],
		"uid": 1,
		"title": "辣炒花甲",
		"food": [{
				"name": "花甲",
				"len": "花甲"
			},
			{
				"name": "八角",
				"len": "八角"
			},
			{
				"name": "花椒",
				"len": "花椒"
			},
			{
				"name": "干红辣椒（小朝天椒也可）",
				"len": "干红辣椒（小朝天椒也可）"
			},
			{
				"name": "姜",
				"len": "姜"
			},
			{
				"name": "香葱",
				"len": "香葱"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "香菜",
				"len": "香菜"
			},
			{
				"name": "郫县豆瓣酱",
				"len": "郫县豆瓣酱"
			},
			{
				"name": "白糖",
				"len": "白糖"
			},
			{
				"name": "料酒",
				"len": "料酒"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/d5832a4e887211e6b87c0242ac110003_1620w_1080h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1.焯花甲时不要过久，这一步只是为了让花甲开口，后面炒时就不会炒出很多水，所以最好是刚一开口就捞出来，煮久则老。2.八角分开掰成小块会更容易出味道。3.因为花甲已经焯开口，所以最后翻炒一定要快快快，花甲从下锅到关火不超过半分钟。久了花甲里的水分会散掉，肉也随之干瘪，没有咬下去汁液满溢的鲜嫩感了。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "平日里花甲最喜欢的炒法有两种。一种是最最新鲜的花甲，在调味上做减法，用极少的调味料烹制出花甲最原本的鲜甜味道。这个改天买到新鲜花甲来写。另一种甜辣口儿，调味料稍多些，味道就重些，就是今天写的这个。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afc463a02f0da4bb22b5",
		"work": [{
				"src": "",
				"text": "秋葵洗净，横切成小薄片。"
			},
			{
				"src": "",
				"text": "鸡蛋打散，加入油，盐，酱油，蚝油拌匀。"
			},
			{
				"src": "",
				"text": "边搅拌，边慢慢加入150ml清水。（用汤匙把表面的泡泡勺走，这样蒸出来的鸡蛋才细滑。）"
			},
			{
				"src": "",
				"text": "鸡蛋盅放入锅里，加入适量水烧开，大火蒸约十分钟。"
			}
		],
		"uid": 1,
		"title": "秋葵鸡蛋羹",
		"food": [{
				"name": "秋葵",
				"len": "秋葵"
			},
			{
				"name": "鸡蛋",
				"len": "鸡蛋"
			},
			{
				"name": "油",
				"len": "油"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "蚝油",
				"len": "蚝油"
			},
			{
				"name": "清水",
				"len": "清水"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/c128f49e7e7211e5932d1fa6201cbf0d.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afc463a02f0da4bb22b6",
		"work": [{
				"src": "",
				"text": "丝瓜去皮，洗净，从中间一分为二切片备用"
			},
			{
				"src": "",
				"text": "锅内油烧热，下蒜茸煸出香味，倒入丝瓜，加入盐一起翻炒"
			},
			{
				"src": "",
				"text": "炒至丝瓜心完全变白即可出锅"
			}
		],
		"uid": 1,
		"title": "清炒丝瓜",
		"food": [{
				"name": "丝瓜",
				"len": "丝瓜"
			},
			{
				"name": "大蒜",
				"len": "大蒜"
			},
			{
				"name": "花生油",
				"len": "花生油"
			},
			{
				"name": "盐",
				"len": "盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/64cf0466870b11e6a9a10242ac110002_490w_367h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "这是在老家向邻居家的哥哥学了，丝瓜切好后如果不当时炒应该放入盐水中泡着，因为丝瓜剥皮后和空气接触后会氧化!炒时放入丝瓜就加盐，一直翻炒这样炒出来的汤都是白的，为什么会这样我也不知道，前辈的经验一定要听，因为我试验过。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afc563a02f0da4bb22b7",
		"work": [{
				"src": "",
				"text": "土豆切块泡在水中洗两遍，目的是洗去淀粉，（水不是指不是开水，是温水或冷水，讲究的用纯净水，用自来水就好）"
			},
			{
				"src": "",
				"text": "把茄子撕成小块或小条（母亲大人说，撕得好吃，但我觉得是因为她懒得切）"
			},
			{
				"src": "",
				"text": "猪肉切丁"
			},
			{
				"src": "",
				"text": "锅中热油，微微冒烟时放肉丁炒到变色加入土豆（今天才听说冷油炒菜，菜会吸很多油。这种做法也是今天新学的爆炒，活到老学到老呀，但如果你有别的方法也随意，简单粗暴嘛，就是不纠结细节）"
			},
			{
				"src": "",
				"text": "加入酱油，爱吃辣的加一勺郫县豆瓣或老干妈下去一起炒。"
			},
			{
				"src": "",
				"text": "炒两分钟左右加水没过土豆，然后加茄子，加一小撮糖"
			},
			{
				"src": "",
				"text": "煮开后转小火煮到土豆绵软。两瓣大蒜拍碎放入锅中，然后转大火煮两分钟收汁，出锅前加入一些蚝油。"
			}
		],
		"uid": 1,
		"title": "土豆炖茄子",
		"food": [{
				"name": "土豆",
				"len": "土豆"
			},
			{
				"name": "茄子",
				"len": "茄子"
			},
			{
				"name": "猪肉",
				"len": "猪肉"
			},
			{
				"name": "老干妈/郫县豆瓣（非必需）",
				"len": "老干妈/郫县豆瓣（非必需）"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "蚝油（非必需）",
				"len": "蚝油（非必需）"
			},
			{
				"name": "大蒜",
				"len": "大蒜"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/36b2cdd8882311e6a9a10242ac110002_800w_600h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1.什么叫绵软呢？就是你平时喜欢的炖土豆的口感，最好的判断方法就是尝一下。\r2.大蒜最后加是因为北方人比较喜欢大蒜辛辣的味道，如果不习惯就和茄子一起加或者和肉一起加。但不要不加，因为“吃肉不吃蒜，营养减一半”\r3.加糖是为了“提鲜”不要加太多，除非你来自包邮区。\r4.酱油我就用的普通的，如果喜欢颜色深一点就加些老抽配生抽。\r5.由于酱油和老干妈都是咸的，我尝了一下咸度够就没加盐。\r6.不记得在哪里听说高温破坏蚝油的营养，所以出锅时才加。我妈没说加蚝油，我加只是因为我的蚝油快过期了。而且衩姐曾说蚝油是烹饪界的牛仔裤和小黑裙—百搭！\r7.由于我的大料粉占了我两个调料盒，加茄子时我还加了一些大料粉。\r8.Buon appetito!",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "今天早上娘亲刚教的，中午试验成功，晚上来写菜谱。这道菜绝对秉承东北炖菜简单粗暴的原则，而且我妈从来不是会在做菜上很用心的女人，但绝对好吃！因为，子曾经曰过：“土豆炖茄子，撑死老爷子”",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afc663a02f0da4bb22b8",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/7978611e944911e6b87c0242ac110003_267w_221h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "葱末、姜茸、香油、盐、酱油（一半）放入装肉馅的碗里搅拌均匀备用。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/79a034a0944911e6b87c0242ac110003_268w_176h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "辣椒按我照片上的方法处理好。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/79dcfd9a944911e6a9a10242ac110002_497w_677h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "把肉馅装在辣椒里面，平底锅中小火倒入植物油煎辣椒，直到表面有点微微发黄之后取出来。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/7a238558944911e6b87c0242ac110003_376w_267h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "锅子不用刷，把蒜末放到锅里稍煸炒，倒入剩下一半的酱油和2-3汤勺水，烧开后把煎好的辣椒放回锅里中小火闷10分钟左右或者汁收的差不多就可以装盘了。",
				"height": 400
			}
		],
		"uid": 1,
		"title": "肉馅辣椒-新手下厨 stuffed Chili pepper",
		"food": [{
				"name": "辣椒",
				"len": "辣椒"
			},
			{
				"name": "猪肉馅",
				"len": "猪肉馅"
			},
			{
				"name": "小香葱",
				"len": "小香葱"
			},
			{
				"name": "姜茸",
				"len": "姜茸"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "香油",
				"len": "香油"
			},
			{
				"name": "蒜",
				"len": "蒜"
			},
			{
				"name": "油、盐",
				"len": "油、盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/e4fe575a88e511e6a9a10242ac110002_800w_465h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1.制作酱油汁的时候不需要放盐，肉馅已经调过味，酱油的咸味也已经足够了。2.选辣椒的时候应该按自己能吃辣的程度选择，我没用菜椒做过，不过你可以试试 J3.锅子不用刷的原因是因为煎过辣椒的油有辣椒和肉汁的味道，它是烹饪的时候自然形成的味素保留在锅里。而且用中小火烹饪不用太担心锅子会烧糊了。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "关注http://weibo.com/yanyanfoodtube微博更多更新，跟随我们更有趣的美食之旅！！这道菜肴是我老公最喜欢的。事实上是Rick建议我把这个配方在博客上与大家分享的，“人们一定会喜欢的”他说。辣椒里面装满了美味的香料，猪肉馅混合了亚洲的调味酱油。试一试朋友们，就像Rick说的，你一定会喜欢的。This one is a favorite of my husbands. In fact Rick suggested I put this recipe on the blog to share with you, “They’ll love it,” he said. So here it is, peppers filled with delicious spiced minced pork in an Asian flavored sauce. Give it a try, like Rick say’s, you’ll love them.",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afc663a02f0da4bb22b9",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0db2abd08dfd11e6a9a10242ac110002_640w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "准备材料。1、先往肉馅里加入一个鸡蛋、酱油、少许黄酱、橄榄油、盐和适量姜粉，顺时针搅匀，一定要多搅一会儿哈～2、把大葱切碎，注意不要切得过于细碎，否则就不香了。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0d7c68b88dfd11e6b87c0242ac110003_638w_638h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "把葱碎加入肉馅搅匀，待用。简单吧？下面开始和面。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0d364d2e8dfd11e6b87c0242ac110003_640w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "普通面粉或高筋面粉都行，关键是水要用温热的水(尤其是冬天)，这样饼烙出来软和。面要和得尽量软一些，和好后盖上盖子静置20分钟左右，再揉一揉，就可以了。我这次用的是高筋粉。不会和面的朋友可以参考我另一个菜谱：家常烙饼，里面有和面的方法。http://m.xiachufang.com/recipe/100688618/?from=singlemessage&isappinstalled=1",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0d0020828dfd11e6b87c0242ac110003_640w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "把和好的面团分成小面团，每个30g左右，擀成中间厚周围薄的面皮儿，放上肉馅，像包包子一样包好。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0ccd2a248dfd11e6a9a10242ac110002_640w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "把小包子合口朝下放在已经烧热的平底锅上按扁。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/0c95276e8dfd11e6b87c0242ac110003_640w_640h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "保持中火一分钟左右翻面用刷子给这一面刷上一层油，同样一分钟左右再翻回来，也给另一面刷一层油。",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/0c5a62dc8dfd11e6a9a10242ac110002_640w_640h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "再来回翻着烙一会儿，当小饼鼓气了，就熟啦！可以吃啦～",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0c2765628dfd11e6b87c0242ac110003_640w_638h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "当然大家也可以烙成那种多层的肉饼，虽然同样的馅和面，两种饼的口感和味道却不同，大家可以都试试哈！以下有多层饼的图解：",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0be711248dfd11e6b87c0242ac110003_640w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "把揉好的面分成小面团，每个大概100g左右，将小面团擀成薄皮",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/0ba9eb288dfd11e6a9a10242ac110002_638w_640h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "抹上3/4的肉馅，肉馅儿要抹的厚一点儿哈～",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0b6a909a8dfd11e6b87c0242ac110003_640w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "切口儿",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0b2fdf9a8dfd11e6a9a10242ac110002_638w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "叠",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0aeb636a8dfd11e6a9a10242ac110002_638w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "又叠",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/0ab349a88dfd11e6a9a10242ac110002_640w_640h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "再叠",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/09f1756c8dfd11e6a9a10242ac110002_638w_640h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "叠好后的样子",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/09aecc6c8dfd11e6a9a10242ac110002_638w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "捏口儿",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/096803ae8dfd11e6b87c0242ac110003_638w_640h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "捏好的样子",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/0928f1288dfd11e6a9a10242ac110002_638w_640h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "用手按压",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s1.cdn.xiachufang.com/07fed4208dfd11e6b87c0242ac110003_638w_640h.jpg@2o_50sh_1pr_1l_300w_90q_1wh",
				"text": "用擀面杖擀成饼",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/709bc3b0000a11e7947d0242ac110002_1280w_1024h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "接下来就可以上铛烙了，烙的方法同前面的小圆肉饼一样。烙好了，切块儿，吃～",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/07274ec48dfd11e6a9a10242ac110002_1536w_2048h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "有些朋友不知道黄酱是什么，特别说明一下：黄酱又称大豆酱、大酱，是用黄豆炒熟磨碎后发酵而制成，呈粘稠状态的调味品，具有浓郁的酱香和酯香，可用于烹制各种菜肴，也是制作炸酱面的配料之一，一般在超市都能买到，或网购。也有干黄酱，可以用适量酱油稀释后使用。在此谢谢@闪爸闪闪小厨房的建议！",
				"height": 400
			}
		],
		"uid": 1,
		"title": "葱香牛肉饼",
		"food": [{
				"name": "牛肉馅",
				"len": "牛肉馅"
			},
			{
				"name": "大葱",
				"len": "大葱"
			},
			{
				"name": "鸡蛋(如果肉馅比较湿就不用放鸡蛋了)",
				"len": "鸡蛋(如果肉馅比较湿就不用放鸡蛋了)"
			},
			{
				"name": "酱油",
				"len": "酱油"
			},
			{
				"name": "橄榄油(不放也行)",
				"len": "橄榄油(不放也行)"
			},
			{
				"name": "黄酱",
				"len": "黄酱"
			},
			{
				"name": "姜粉",
				"len": "姜粉"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "面粉",
				"len": "面粉"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/598b6798881e11e6a9a10242ac110002_1162w_1080h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "1、既然是葱香肉饼，那大葱的量不能减，且不要剁得过于细碎！2、烙饼时不要往平底锅里倒油，要直接刷在饼上，既可省油又能减少油烟！",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "❗️❗️声明一下❗️❗️我是回族，所以如果有朋友用我的方法制作非牛羊肉馅饼，请不要传照片在这个菜谱里！谢谢～我老妈在没有大葱的季节会用葱头(洋葱)代替大葱做肉饼，家里人也都觉得挺好！不过我还是觉得用大葱做这葱香牛肉饼才是最香的！",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afc763a02f0da4bb22ba",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/4211c8288d0511e6b87c0242ac110003_600w_445h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "把鸡蛋磕入米饭中，搅拌均匀。",
				"height": 400
			},
			{
				"src": "",
				"text": "把韭菜切碎，也放入米饭和鸡蛋糊中，放入盐，搅拌均匀。"
			},
			{
				"src": "",
				"text": "加热电饼铛，倒入米饭鸡蛋糊，盖盖子，上下加热，5分钟即可。"
			},
			{
				"src": "",
				"text": "吃时切小块即可。"
			}
		],
		"uid": 1,
		"title": "鸡蛋米饭饼——上班族快手早餐",
		"food": [{
				"name": "米饭半碗",
				"len": "米饭半碗"
			},
			{
				"name": "盐少许",
				"len": "盐少许"
			},
			{
				"name": "鸡蛋三个",
				"len": "鸡蛋三个"
			},
			{
				"name": "韭菜几棵",
				"len": "韭菜几棵"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/c31e8f9487d011e6a9a10242ac110002_600w_800h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "如果喜欢甜味的，可以不加盐和韭菜，改为放白糖。",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "你是怎么处理剩米饭呢？是不是做成了蛋炒饭？\r         俺今天把剩米饭做成了鸡蛋米饭饼，哈哈，剩米饭巧利用哦，也算一款快手早餐吧。\r         非常省事，做法也超简单。口感香脆可口，颜色金黄，让人一看就很有食欲哈。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afc763a02f0da4bb22bb",
		"work": [{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/eab1e50e99d911e69ce70242ac110002_2048w_1364h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "切水果切薄片",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/eb75517499d911e6b2400242ac110002_2047w_1366h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "贴紧贴在杯壁里面",
				"height": 400
			},
			{
				"width": 600,
				"src": "http://s2.cdn.xiachufang.com/ebd2e85299d911e69ce70242ac110002_2048w_1364h.jpg?imageView2/2/w/300/interlace/1/q/90",
				"text": "照拍照片呀拍照片",
				"height": 400
			},
			{
				"src": "",
				"text": "喝"
			}
		],
		"uid": 1,
		"title": "有些「杯壁」的酸奶们",
		"food": [{
				"name": "酸奶",
				"len": "酸奶"
			},
			{
				"name": "各种水果",
				"len": "各种水果"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/43fddb4a897711e6b87c0242ac110003_3264w_3264h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "酸奶选择稠一些的希腊酸奶或者自己养的里海什么的，可以直接放，也可以和别的水果打在一起弄个渐变神马的水果选择软一点的，草莓、香蕉、橙子、猕猴桃一类的。贴住的要点就是！薄！切得薄才能贴住！造型多变，波浪啊，斜纹儿啊，旋转啊什么的发挥想象吧",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "这些年留在我们卑鄙，不，杯壁上的酸奶们品种多花样全贴起来吧，骚年",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afc763a02f0da4bb22bc",
		"work": [{
				"src": "",
				"text": "去蒂，洗净"
			},
			{
				"src": "",
				"text": "开水淖荷兰豆，加淡盐水和少量的油能够保持荷兰豆的清翠哦"
			},
			{
				"src": "",
				"text": "待荷兰豆变色即可起锅"
			},
			{
				"src": "",
				"text": "热油锅爆香蒜蓉"
			},
			{
				"src": "",
				"text": "快速翻炒，洒上盐，起锅"
			}
		],
		"uid": 1,
		"title": "蒜蓉荷兰豆",
		"food": [{
				"name": "荷兰豆",
				"len": "荷兰豆"
			},
			{
				"name": "蒜头",
				"len": "蒜头"
			},
			{
				"name": "蒜蓉",
				"len": "蒜蓉"
			},
			{
				"name": "盐",
				"len": "盐"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/2c16338c872011e6b87c0242ac110003_517w_690h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "如何保持荷兰豆的青翠呢？\r开水中放少量的盐和油，下荷兰豆焯熟，过凉水，热油锅爆蒜蓉，下荷兰豆快速翻炒调入食盐即可。\r百度荷兰豆:\r荷兰豆系指豌豆中的软荚豌豆，又称食荚豌豆。荷兰豆对增强人体新陈代谢功能有十分重要的作用，是西方国家主要食用蔬菜品种之一。由于其营养价值高，风味鲜美，并具有延缓衰老、美容保健功能，在美国、加拿大、澳大利亚、新加坡、马来西亚、香港等市场十分畅销。由于荷兰豆易于加工、贮藏、运输，也是很有前途的出口创汇特菜品种之一。\r荷兰豆对增强人体新陈代谢功能有十分重要的作用，是西方国家主要食用蔬菜品种之一。由于其营养价值高，风味鲜美，并具有延缓衰老、美容保健功能，深受人们的喜爱。",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afc863a02f0da4bb22bd",
		"work": [{
				"src": "",
				"text": "蒜苔洗干净切成小段，肉切成丝，大蒜切成片，两个辣椒"
			},
			{
				"src": "",
				"text": "锅烧热，放油，稍热放肉炒几下放几滴醋，翻炒几下放入辣椒、大蒜、蒜台"
			},
			{
				"src": "",
				"text": "炒10秒加一小勺糖，继续炒，蒜台有点变软改小火"
			},
			{
				"src": "",
				"text": "加盐翻炒，加味精翻炒出锅"
			}
		],
		"uid": 1,
		"title": "蒜苔炒肉",
		"food": [{
				"name": "蒜苔",
				"len": "蒜苔"
			},
			{
				"name": "瘦肉",
				"len": "瘦肉"
			},
			{
				"name": "辣椒",
				"len": "辣椒"
			},
			{
				"name": "大蒜",
				"len": "大蒜"
			},
			{
				"name": "醋",
				"len": "醋"
			},
			{
				"name": "糖",
				"len": "糖"
			},
			{
				"name": "盐",
				"len": "盐"
			},
			{
				"name": "味精",
				"len": "味精"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s1.cdn.xiachufang.com/2b923aae873f11e6b87c0242ac110003_800w_600h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "",
		"type": "1",
		"name": "Devon"
	}

	,
	{
		"py_id": "5909afc863a02f0da4bb22be",
		"work": [{
				"src": "",
				"text": "1.红枣洗净泡水30分钟，去核（切开红枣不能切断取核）；"
			},
			{
				"src": "",
				"text": "2.糯米混入热水揉成团，揉搓合适大小椭圆形塞入枣内；"
			},
			{
				"src": "",
				"text": "3.冷水大火开蒸10分钟出锅（如果喜欢带更多甜味，可以淋上蜂蜜或糖浆）。"
			}
		],
		"uid": 1,
		"title": "[糯米枣]，好喜欢的小食。",
		"food": [{
				"name": "红枣",
				"len": "红枣"
			},
			{
				"name": "糯米粉",
				"len": "糯米粉"
			}
		],
		"userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
		"workbanner": "http://s2.cdn.xiachufang.com/42f9b1a2889f11e6a9a10242ac110002_500w_750h.jpg?imageView2/2/w/660/interlace/1/q/90",
		"tip": "",
		"mark": {
			"report": 0,
			"collect": 324,
			"cont": 56,
			"think": 123
		},
		"time": 1493802420000,
		"text": "那天路过新疆人摆的干果摊子，看到鲜红的大枣忍不住买下。回家的晚上，搓入糯米团入枣中，清甜与Q糯的完美结合，一口下去，软心可口，不加糖也是如此美味！好喜欢的小食。",
		"type": "1",
		"name": "Devon"
	}
];

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

				collection.find({}, { limit: 20 }).sort({ _id: -1 }).toArray(function(err, docs) {
					db.close();
					res.send(docs);
				});

			});

		}
	})
});

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

				collection.find({ "_id": ObjectID(id) }).toArray(function(err, docs) {
					db.close();
					res.send(docs);
				});

			});

		}
	})
});

module.exports = router;
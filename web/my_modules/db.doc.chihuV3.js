var mongodb = require('mongodb');
var server = require('./db');

module.exports = new mongodb.Db('chihuv3', server, {
	safe: true
});
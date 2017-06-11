var mongodb = require('mongodb');
var server = require('./db');

module.exports = new mongodb.Db('ikm', server, {
	safe: true
});
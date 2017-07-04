var mongodb = require('mongodb');
var server = require('./db');

module.exports = new mongodb.Db('chihu2', server, {
	safe: true
});
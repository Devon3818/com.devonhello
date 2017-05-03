var mongodb = require('mongodb');
var server = require('./db');

module.exports = new mongodb.Db('chihu', server, {
	safe: true
});
var mongodb = require('mongodb');

module.exports = new mongodb.Server("localhost",27017,{safe:true});
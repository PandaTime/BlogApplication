'use strict';
const config = require('./../config'),
    mongoose = require('mongoose');

const api = {};
module.exports = api;

api.initialize = function() {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'error..'.red));
    db.on('open', function callback() {
        console.log('connected to db'.green);
    });
};
// initialization of the models
require('./schemes/users');
require('./schemes/posts');

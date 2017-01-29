/**
 * Created by pizzax on 28.01.2017.
 */
const autherization = require('./authorization'),
      verification = require('./verification');

const api = {};



module.exports = api;

api.login = autherization.login;
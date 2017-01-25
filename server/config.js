const path = require('path');

module.exports = {
    port : process.env.PORT || 8080,
    rootPath : path.join(__dirname, '..'),
    publicPath: path.join(__dirname, '..', 'public'),
    elementsPerPage: 10,
    secretKey: '12345-67890-09876-54321',
    db: 'mongodb://admin:123@ds145997.mlab.com:45997/workspace'
}
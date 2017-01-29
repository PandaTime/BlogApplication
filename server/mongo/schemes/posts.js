var mongoose = require('mongoose');

module.exports = (function() {
    const postsSchema = mongoose.Schema({
        body: String,
        permalink: {type: String, index: {unique: true}},
        author: String,
        title: String,
        tags: [String],
        comments: [{
            body: String,
            author: String,
            date: Date
        }],
        number_comments: {type: Number, default: 0},
        last_comment_date: Date,
        date: Date
    });

    const collection = 'posts'; // DB collection name
    mongoose.model('posts', postsSchema, collection);
})();
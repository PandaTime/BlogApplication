'use strict';
const posts = require('mongoose').model('posts'),
      config = require('../../config');

const api = {};

module.exports = api;

// saving often used information here
const cache = {
    topicsNumber: 0
};

// initializing cache
(function(){
    posts.find({}).count().exec((err,number)=>{
        console.info(`Number of Topics:${number}`.blue);
        cache.topicsNumber = number;
    })
})();

// served information
const postsList = {
    _id: 0,
    permalink: 1,
    author: 1,
    title: 1,
    tags: 1,
    number_comments: 1,
    last_comment_date: 1
};
const postDetailed = {
    _id: 0,
    body: 1,
    author: 1,
    title: 1,
    tags: 1,
    comments: 1
}

api.getPostsList = function(req, res){
    posts.find({}).select(postsList)
        .skip(Math.max((parseInt(req.params.page || 0) - 1), 0) * config.elementsPerPage)
        .limit(config.elementsPerPage)
        .exec((err, data)=>{
            if(err) {
                res.status(400).end();
                console.error(err.toString().red);
            }else{
                res.status(200).json({posts: data, totalResults : cache.topicsNumber});
            }
        })
};

api.getPostDetails = function(req, res){
    posts.findOne({permalink: req.params.id}).select(postDetailed)
        .exec((err, data)=>{
        if(err){
            res.status(400).end();
            console.error(err.toString().red);
        }else{
            res.status(200).json(data);
        }
    })
}

api.newComment = function(req, res){
    let body = req.body,
        curTime = new Date(),
        newComment = {
            body: body.body,
            author: body.username,
            date: curTime
        };
    // .author - from post request; .username - from verification by passport
    if(body.author != body.username){
        console.info(`Problem: New Comment creation at ${new Date()} by ${body.username}, used nickname ${body.author}.`.blue)
    }
    if(!body.body){
        res.status(400).end();
        return;
    }
    posts.update({permalink: body.post_link},
                 {$push:{comments: newComment}, $set:{last_comment_date: curTime}, $inc:{number_comments: 1}},
                 {upsert:true})
        .exec((err, data)=>{
            if(err){
                res.status(400).end();
                console.error(err.toString().red);
            }else{
                res.status(200).json({success: true});
            }
        })
};

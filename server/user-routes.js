'use strict';

const app = require('express').Router();

const userHandler = require('./mongo/user/userHander');



module.exports = app;

// function call in function in case there will be some additional validation/logic.
app.post('/user/login', (req, res)=>{
    userHandler.login(req, res);
});
app.get('/user/logout', (req, res)=>{
    userHandler.logout(req, res);
});
app.get('/user/check',
        (req, res, next)=>{
            req.check = true;
            next();
        },
        userHandler.verifyUserName,
        (req, res)=>{res.status(200).json({authorized: true, username: req.body.username});
})
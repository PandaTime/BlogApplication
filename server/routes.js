'use strict';
const express = require('express'),
    path = require('path');

const ajaxRouter = require('./ajax-router'),
    userRouter = require('./user-routes');


module.exports = function(app, config) {
    app.post('*', (req, res, next)=>{
        console.info('Url:', req.url);
        console.info('Body:', req.body);
        next();
    });
    app.all('/ajax*', ajaxRouter);

    app.all('/user*', userRouter);
};


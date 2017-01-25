'use strict';
const express = require('express'),
      path = require('path');

const ajaxRouter = require('./ajax-router');


module.exports = function(app, config){
    app.get('*', (req, res, next)=>{
        console.info('Url:', req.url);
        next();
    });
    app.get('/ajax*', ajaxRouter);
};


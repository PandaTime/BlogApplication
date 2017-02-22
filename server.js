'use strict';
const colors = require('colors');

const express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    LocalStrategy = require('passport-local').Strategy,
    passport = require('passport'),
    User = require('./server/mongo/schemes/users'),
    path = require('path'),
    config = require('./server/config');


const app = express();


//initializating Mongo
require('./server/mongo/mongooseSetup').initialize();

// initializing our middleware
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cookieParser(config.cookieSecret));
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// our router
require('./server/routes')(app, config);

// static files
app.use(express.static(config.publicPath));
// default route
app.use((req, res)=>{
    res.sendFile(path.join(config.publicPath, 'index.html'));
});
app.listen(config.port, ()=>{
    console.info(`Listeting port ${config.port}..`.green)
});

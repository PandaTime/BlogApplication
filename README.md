Forum Application
=========================
It's SPA forum application that was created with the help of:
* node.js(express) + mongo(mongooose)
* passport.js for autherization(passport-local strategy)
* react+redux
* scss
* webpack as front-end package bundler

## Installation
```
npm install
npm run build
npm start
```
<b>Build modes:</b>
* "dev:build" - development with hotreload (proxy: localhost:8080)
* "prod:build" - minimized build for production
* "analyze:build" - loading "webpack-bundle-analyzer" at localhost:8888 (for bundle components size);

## What's done
* Authorization and authentication
* Styling(80%)
* Possibility to add new comments

## To-do List
* Registration
* Adding new Topics
* Pagination
* Possibility to update personal comments
* some other minor fixes

## Used Beta packages:
1. extract-text-webpack-plugin
2. webpack
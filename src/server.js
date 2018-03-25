// @TODO airbnb eslint
// @TODO webapp todo
// context is a bus
const context = {};
const express = require('express');
const app = express();
context.app = app;
context.log = require('./services/log.js').bind(null, context)();
context.mode = require('./services/mode.js').initMode.bind(null, context)();
context.config = require('./services/config.js').bind(null, context)();
require('./nodes/routes.js').bind(null, context);// init routes

const config = context.config.server;

app.listen(config.port, function () {
    console.log('Example app listening on port 3005!');
});

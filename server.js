const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const express = require('express');
const config = require('./config');
const parameters = require('express-request-parameters');
const mainSchema = require('./schema/main-schema');
const jsont = require('json-transforms');
const transformRules = require('./rule/transform-rules');

const app = express();

if (config.env === 'development') {
    app.use(logger('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(compression());
app.use(cors());

app.post('/',parameters(mainSchema), function (req, res, next) {
    //console.log("filter request payload:", req.parameters);
    req.payload =  req.parameters;
    next();
});

app.use(function (req, res, next) {
    const payload  = req.payload;
    const transformed  = jsont.transform(payload, transformRules);

    res.json(transformed);
    next();
});

// error handler
app.use(function (err, req, res, next) {
    const errorMessage = "Could not decode request: "+ err.message;
    res.status(err.status || 500);
    res.json({ error: errorMessage });
});

app.set("port", config.port || 3000);

app.listen(app.get("port"));

console.log("Express server listening on port " + app.get("port"));

module.exports = app;



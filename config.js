//este arquivo é a biblioteca que puxará a validação

var express = require('express'),
    load = require('express-load'),
    bodyParser = require('body-parser'),
    expressValidator = require('express-validator');

module.exports = function() {
    
    var app = express();
    
    app.set('view engine', 'ejs');
	app.set('views', './app/views');
    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(expressValidator());
    
    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);
    
    return app;
};
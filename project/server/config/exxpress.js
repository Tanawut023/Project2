const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');


module.exports = function(){
    const app = express();
    app.use(morgan("dev"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(express.static(path.join(__dirname, '../../dist')));
    require('../router/event.router')(app);

   return app
}
const mongoose = require('./server/config/mongoose');
const express = require('./server/config/exxpress.js');
const db = mongoose();
const app = express();

app.listen(8000, function(){
    console.log("hello");
})

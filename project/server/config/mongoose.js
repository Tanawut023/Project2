const config = require('./env/development');
const mongoose = require('mongoose');

module.exports = function(){
    mongoose.set("debug",config.debug);
    const db = mongoose.connect(config.mongoUri,{
        useMongoClient: true
    })
    require('../model/user.model')
    return db
}
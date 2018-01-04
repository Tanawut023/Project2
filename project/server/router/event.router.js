module.exports = function(app){
    const showEvent = require('../controller/user.controller');
    app.route('/show')
    .get(showEvent.showTodo)
}
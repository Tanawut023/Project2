module.exports = function(app){
    const todo = require('../controller/user.controller');
    app.route('/todo')
    .post(todo.createTodo)
}
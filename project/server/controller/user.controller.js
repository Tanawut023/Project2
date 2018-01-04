const Todo = require('mongoose').model('todo');

exports.createTodo = function(req, res){
    const todo = new Todo(req.body);
    todo.save(function(err){
        if(err) {console.log(err)
        }
        else{
        res.json(todo);
        }
    })
}
exports.showTodo = function(req, res){
    Todo.find({}, function(err, todos){
        const output = {
            message : todos
        }
        res.json(output);
    })
}
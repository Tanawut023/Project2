const mongoose = require('mongoose');
const schema = mongoose.Schema;

const todoSchema = new schema({
    event: String
})

mongoose.model("todo", todoSchema);
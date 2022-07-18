const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    name:{
        type:String
    },
    category:{
        type:String
    },
    date:{
        type:Date
    }
})
const Task = mongoose.model("Task",taskSchema)
module.exports = Task
const mongoose = require('mongoose');
//Creating schema
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
//Creating model
const Task = mongoose.model("Task",taskSchema)
module.exports = Task
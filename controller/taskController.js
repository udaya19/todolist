const Task = require('../models/task');
module.exports.getTasks = (req,res)=>{
    Task.find({},(err,task)=>{
        if(err){
            console.log("Error in rendering the data",err)
        }
        else{
            res.render('home.ejs',{
                title:'Task App',
                task_list:task,
            })
        }
    })
}
module.exports.addTask = async (req,res)=>{
    let task = new Task({
        name:req.body.name,
        category:req.body.category,
        date:req.body.date
    })
    task = await task.save();
    console.log(task)
    res.redirect('/');
}

module.exports.deleteTask = (req,res)=>{
    let id = req.query.id;
    Task.findOneAndDelete(id,(err)=>{
        if(err){
            console.log("Couldn't delete task");
            return;
        }
        res.redirect('/');
    })
}
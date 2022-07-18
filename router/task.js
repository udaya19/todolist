const express = require('express');
const router = express.Router();
const Task = require('../models/task')
router.get('/',(req,res)=>{
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
})
router.post('/add-user',async (req,res)=>{
    let task = new Task({
        name:req.body.name,
        category:req.body.category,
        date:req.body.date
    })
    task = await task.save();
    console.log(task)
    res.redirect('/');
})
module.exports = router;
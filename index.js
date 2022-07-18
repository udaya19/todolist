//importing libraries
const express = require('express');
const app = express();
//Defining port number
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
//Parsing the data
app.use(express.urlencoded())
//Use express router
app.use('/',require('./router/task'))
//View setup engine
app.set('view engine','ejs');
app.set('views','./views');
//Use static files
app.use(express.static('./assets'))
//Connecting to database
mongoose.connect('mongodb://localhost/todo_task1');//connect to database
const db = mongoose.connection//check if connection is established or not
db.on('error',console.error.bind(console,'error connecting to db'));//error message
db.once('open',()=>{//success message
    console.log("Successfully connected to database");
})

//Establishing server
app.listen(port,(err)=>{
    if(err){
        console.log("Error in running sever")
    }
    console.log("Server running on port",port);
})
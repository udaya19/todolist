const express = require('express');
const router = express.Router();
// const Task = require('../models/task');
const taskController = require('../controller/taskController');
router.get('/',taskController.getTasks)
router.get('/delete-task/',taskController.deleteTask)
router.post('/add-user',taskController.addTask)
module.exports = router;
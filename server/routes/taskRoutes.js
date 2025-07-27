const express = require('express');
const router = express.Router();
const {createTask,getMyTasks, getAllTasks} = require('../controllers/taskController');
const {protect, authorize} = require('../middleware/auth');

router.post('/', protect, createTask);
router.get('/me', protwct, getMyTasks);
router.get('/all', protect, authorize(["admin"]), getAllTasks);

module.exports = router;
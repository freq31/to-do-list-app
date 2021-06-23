const express=require('express');
const router=express.Router();
const add_new_task_Controller=require('../controllers/add_new_task');
router.get('/',add_new_task_Controller.new_task);
module.exports=router;
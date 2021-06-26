//set up the router
const express=require('express');
const router=express.Router();
// require the controller for the given url
const add_new_task_Controller=require('../controllers/add_new_task');
//get the controller
router.get('/',add_new_task_Controller.new_task);
module.exports=router;
//first require express and setup router
const express=require('express');
const router=express.Router();
//add url to your controllers
const homeController=require('../controllers/home_controller');
//const userController=require('../controllers/users_controller');
//handle get request
router.get('/',homeController.home);
//router.use('/users',require('./users'));
//router.use('/posts',require('./posts'));
//finally export the router to be used in index.js
router.post('/create-task',homeController.create_task);
router.get('/delete-task',homeController.delete_task);
module.exports=router;
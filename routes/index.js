//first require express and setup router
const express=require('express');
const router=express.Router();
//add url to your controllers
const homeController=require('../controllers/home_controller');
//handle get request
router.get('/',homeController.home);
router.get('/delete-task',homeController.delete_task);
//handle the post request
router.post('/create-task',homeController.create_task);
//to handle request for other pages first require that router and then use it
router.use('/add-task',require('./add_new_task'));
//finally export the router to be used in index.js
module.exports=router;
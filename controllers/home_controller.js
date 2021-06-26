//require the document 
const db=require('../config/mongoose');
const Task=require('../models/task_list');
//rendering the home page of my project.
module.exports.home=function(req,res){
    //first find the data in the databse and send the tasklist to the views for rendering home page
    Task.find({},function(err,tasks){
        if(err){
            console.log('error in fetching tasks from db');
            return;
        }
        return res.render('home',{
            title:"To Do List Manager",
            title1:"Your Tasks",
            taskList:tasks
        });
    });
        
    
}
//add new task to our database
module.exports.create_task=function(req,res){
    
    //add new task to database 
    Task.create({
        task:req.body.task,
        time:req.body.time,
        date:req.body.date,
        category:req.body.category

    },function(err,newTask){
        if(err){console.log('error in creating the task');
        return;}
        //return back to the home page after adding new task
        return res.redirect('/');
    });
}
//delete a task
module.exports.delete_task=function(req,res){
    //get the id from query
    let id=req.query.id;
    // find the task in the database in db and delete
    Task.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error in deleting from db');
            return;
        }
        //return back to the page which gave the request
        return res.redirect('back');
    })

};

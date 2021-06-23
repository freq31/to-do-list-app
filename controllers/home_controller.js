//require the document 
const db=require('../config/mongoose');
const Task=require('../models/task_list');
//send a response to the request given by the router.
//console.log(Task);
module.exports.home=function(req,res){
    //return res.end('<h1>express is up for codeial</h1>');
    //render the response 
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
//add new task
module.exports.create_task=function(req,res){
    
    //render the response 
    Task.create({
        task:req.body.task,
        time:req.body.time,
        date:req.body.date,
        category:req.body.category

    },function(err,newTask){
        if(err){console.log('error in creating the task');
        return;}
        
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
        return res.redirect('back');
    })

};

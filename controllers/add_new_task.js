//render the view of the  add_new_task ejs file and also provide the dynamic titles
module.exports.new_task=function(req,res){
    return res.render('add_new_task',{
        title:"To Do List Manager",
        title1:"Add New Task"

    });
};
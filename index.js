//basic express server
const express=require('express');
const port=8000;
const app=express();
//require the layout library
const expresslayouts=require('express-ejs-layouts');
// require the database
const db=require('./config/mongoose');
//require the document
const Task=require('./models/task_list');
// set the static folder
app.use(express.static('./assets'));
//use layouts
app.use(expresslayouts);
//encode the form data
app.use(express.urlencoded());
//use express router
app.use('/',require('./routes/index'));
//extract style and scripts from pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

//basic express server
app.listen(port,function(err){
    if(err){
        console.log('following error is running on the server:',err);
        return;
    }
    console.log('server is running on port number:',port);
});

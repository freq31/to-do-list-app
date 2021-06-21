//require the mongoose library
const mongoose =require('mongoose');
//set up a db connection
mongoose.connect('mongodb://localhost/to_do_list_app_development');
const db=mongoose.connection;
// handle errors and success
db.on('error',console.error.bind(console,'error connecting to db'));
db.once('open',function(){
    console.log('succesfully connected to database');
});
//export the database
module.exports=db;
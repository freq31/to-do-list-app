const mongoose=require('mongoose');
const taskschema=new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true

    },
    date:{
        type:String,
        required:true

    },
    category:{
        type:String,
        required:true

    }
    
});
const task=mongoose.model('task',taskschema);
module.exports=task;
const mongoose=require('mongoose');


const userSchema=new mongoose.Schema({
    FirstName:{
        type:String,
        require:true,
        min :6,
        max:255,
    },
    LastName:{
        type:String,
        require:true,
        min :6,
        max:255,
    },UserName:{
        type:String,
        require:true,
        min :6,
        max:255,
    },
    Passward:{
        type:String,
        require:true,
        max:1024,
        min:6,
    },
    date:{
        type:Date,
        default:Date.now,

    },
    Email:{
        type:String,
        require:true,
        max:255,
        min:6,
    }
})


module.exports=mongoose.model('user',userSchema);
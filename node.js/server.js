const express = require('express');
const { status } = require('express/lib/response');
const httptornedo = express();
const db= require('./db');



httptornedo.post('/one',(req,res)=>{
    let one = req.body
    try{
        let status=db.addone(one);
        res.status(201).json(status);
    }
    catch(error){
        res.status(500).json({status:"Erorr", message:"something wrong"});
    }
})

httptornedo.listen(3200, ()=>{
    console.log("server is run");
})

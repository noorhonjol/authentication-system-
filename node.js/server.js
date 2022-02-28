const express = require('express');

const app = express();
const js=require('./public/js/master')

// const db= require('./db');

const expresslayout=require('express-ejs-layouts');

app.use(express.static('public'))
app.use('/css',express.static(__dirname,+'public/css'))


app.use(expresslayout);
app.set('view engine','ejs')


app.post('/sign-up',(req,res)=>{
    req.body;
    
})

app.get('',(req,res)=>{
    res.render('index')

})
app.get('/sign-up',(req,res)=>{
    res.render('sign-up')
})
app.get('/login',(req,res)=>{

    res.render("login-in")
})

// app.post('/one',(req,res)=>{
//     let one = req.body
//     try{
//         let status=db.addone(one);
//         res.status(201).json(status);
//     }
//     catch(error){
//         res.status(500).json({status:"Erorr", message:"something wrong"});
//     }
// })

app.listen(3200, ()=>{
    console.log("server is run");
})

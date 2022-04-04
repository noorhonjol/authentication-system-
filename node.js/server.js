const express = require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const app = express();
const Bodyparser=require('body-parser');
const authRoute = require('./routes/auth');
const expresslayout=require('express-ejs-layouts');
const path =require('path');


app.use(express.static('public'))
app.use(expresslayout);
app.set('view engine','ejs');

dotenv.config();


mongoose.connect(process.env.DB_CONNECT,
    {useNewUrlParser:true},()=>{
    console.log("connected to db");
})


app.use(Bodyparser.urlencoded());
app.use(Bodyparser.json());

app.get('/register',(req, res)=>{
    res.render('sign-up')
})
app.get('/log-in',(req, res)=>{
    res.render('login-in')
})
app.get('/forget',(req, res)=>{
    res.render('index')
})

//app.get('/login',(req,res)=>{
 //   res.render('login');
//})
app.get('/sign-up',(req,res)=>{
    res.render('sign-up');
})
app.use(Bodyparser.urlencoded());
app.use(Bodyparser.json());
app.use('',authRoute)

//app.get('/views/account')

app.listen(3200, ()=>{
    console.log("server is run");
})

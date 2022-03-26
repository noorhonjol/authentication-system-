const express = require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv')
const app = express();
const Bodyparser=require('body-parser');
const authRoute = require('./routes/auth')
const expresslayout=require('express-ejs-layouts');



app.use(express.static('public'))

app.use(expresslayout);
app.set('view engine','ejs');

dotenv.config();



mongoose.connect(process.env.DB_CONNECT,
    {useNewUrlParser:true},()=>{
    console.log("connected to db");
})

app.get('/api/user/login',(req,res)=>{res.render('layout')})
app.use(Bodyparser.urlencoded());
app.use(Bodyparser.json());
app.use('/api/user',authRoute)

//app.get('/views/account')



// app.get('',(req,res)=>{
//     res.render('index')

// })
// app.get('/sign-up',(req,res)=>{
//     res.render('sign-up')
// })
// app.get('/login',(req,res)=>{

//     res.render("login-in")
// })



// app.post('/sign-up',(req,res)=>{
    
// })


app.listen(3200, ()=>{
    console.log("server is run");
})

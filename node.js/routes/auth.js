const router=require('express').Router()
const req = require('express/lib/request');
const User=require('../model/user')
router.post('/register',async(req,res)=>{
    const user =new User({
        FirstName:req.body.FirstName
        ,LastName:req.body.LastName
        ,UserName:req.body.UserName
        ,Passward:req.body.Passward
        ,date:req.body.date
        ,Email:req.body.Email
    });
    try {
        const savedUser=await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err)
    }
})
require('./')
router.post('/login')


module.exports=router;
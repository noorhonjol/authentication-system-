const router=require('express').Router();
const User=require('../model/user');

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
        const found_email = await User.findOne({"Email":user.Email});
        const found_userName = await User.findOne({"UserName":user.UserName});
        if(!found_email&&!found_userName){
            const savedUser=await user.save();
            res.send(savedUser);
        }
        else{
            console.log("the user is found you cant add it");
            res.send("the user is found you cant add it")
        }
    } catch (err) {
        res.status(400).send(err)
    }
})

router.post('/login',async(req,res)=>{
    const foundemail =await User.findOne({Email:req.body.Email})
    console.log(req.body.Email)
    if(!foundemail){
        console.log("the email dont found")
    }
    else{
    if(foundemail.Email===req.body.Email){
        if(foundemail.Passward===req.body.Passward){
            console.log("welcome in your account")
        }
        else{
            console.log("password dont match")
        }
    }}
})

router.put('/reset' , async(req ,res)=>{
    const newPassword = "123456"
    const confirmPassword = "123456"
    if(newPassword===confirmPassword){
    await user.findOneAndUpdate({UserName : "ahmad"} , {Passward : newPassword})
    const a = await User.findOne({UserName : "ahmad"});
    res.send(a);
    }
})

module.exports=router;
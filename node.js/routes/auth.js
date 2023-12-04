const router=require('express').Router();
const User=require('../model/user');
const nodemailer = require('nodemailer');
const { findOneAndUpdate } = require('../model/user');

router.post('/register',async(req,res)=>{
    const user =new User({
        FirstName:req.body.FirstName
        ,LastName:req.body.LastName
        ,UserName:req.body.UserName
        ,Passward:req.body.Passward
        ,date:req.body.date
        ,Email:req.body.Email
        
    })
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



//////


//////


//we can use this code to send email


////////



})

router.post('/login',async(req,res)=>{
    const foundemail =await User.findOne({Email:req.body.UserOrEmail})

    if(!foundemail){
        console.log("the email dont found")
    }
    /////
    else{
        if(foundemail.Email===req.body.UserOrEmail){
            if(foundemail.Passward===req.body.Passward){
                console.log("welcome in your account")
            }
            else{
                console.log("password is wrong")
            }
    }}



    console.log("the email dont found")
    console.log("the email dont found")
    console.log("the email dont found")
    console.log("the email dont found")
    console.log("the email dont found")
    console.log("the email dont found");



    /////////


})
router.post('/forget',async(req,res)=>{
    const filter={Email:req.body.Email}
    const foundemail =await User.findOne(filter)
    const id=foundemail._id.valueOf();
    if(foundemail.Email===req.body.Email){
        let random=Math.floor(Math.random()*100000);
        await User.updateOne(filter, {verifycode:random});
        await foundemail.save();
        let transporter = nodemailer.createTransport({
            service: "gmail",
            port: 587,
            secure: false,
            auth: {
                user: "noorwebh@gmail.com",
                pass: "12345678@.",
            },
        });
        let mailoption={
            from:"noorwebh@gmail.com",
            to:req.body.Email,
            subject:"verfiy code",
            text:`this your verfiy code ${random}
            and this linlk => http://localhost:3200/update/${id}`
            
        }
        transporter.sendMail(mailoption,(err,dat)=>{
            if(err){
                console.log('err');
            }
            else{
                res.redirect(`vefiy/${id}`)
        }
        })
    }
})


router.get('/vefiy/:id',async(req,res)=>{
    res.render('vefiy');
});

router.post('/vefiy/:id',async(req,res)=>{
    const founduser=await User.findById(req.params.id);
    if(req.body.verify==founduser.verifycode){
        res.redirect(`/update/${req.params.id}`);
    }
    else{
        res.send("unvalid code");
    }
});

router.get('/update/:id',async(req,res)=>{
    res.render("update")
})


router.post('/:id',async(req,res)=>{
    res.send("welcome")
})
module.exports=router;
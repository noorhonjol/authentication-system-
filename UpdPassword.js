const user = require("./user")


router.post('/reset' , async(req ,res)=>{
const newPassword = "123456"
const confirmPassword = "123456"
 if(newPassword===confirmPassword){
   await user.findOneAndUpdate({UserName : "ahmad"} , {Passward : newPassword})
   const a = await User.findOne({UserName : "ahmad"});
   res.send(a);
 }
})
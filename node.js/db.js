const user = [
    {email:"alkukhunomar@gmail.com", password:"1234"},
    {email:"noor@gmail.com", password:"234"},
    {email:"zahhaa@gmail.com", password:"222"},

]

const getAllone=()=>{
    return user;
}

const addone=(one)=>{
    user.push(one)
    return user;    
}

module.exports={
    getAllone,
    addone
}
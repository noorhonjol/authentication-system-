


function WarningMassage(){
let x=document.getElementsByClassName('email');
let email=/\w+@gmail.com /ig;
if (!(x.match(email))){
document.getElementsByClassName('warning').style.display='block';
    }

}

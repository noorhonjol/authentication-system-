<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/css/master.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>

<body class="number1">



aa
    <div id="id1">
        <h1>
            sign in
        </h1>
        <i></i>
        <div class="form">

            <div class="item">
               

                <label>Username</label>
                <input class="input1" type="text" placeholder="username" name="username">
                <label>name</label>
                <input class="input1" type="text" placeholder="name ">
                <label>phone number</label>
                <input class="input1" type="tel" placeholder=" phone number" name="tel">
                <label>email</label>
                <input class="input1" type="email" placeholder="email">
                <label>data</label>
                <input type="date" class="input1" placeholder="date">
                <label>password</label>
                <input class="input1" type="password" placeholder="password">


            </div>

        </div>





        <button class="log1" type="submit">sign in</button>
        <pre></pre>
        <button class="fa fa-facebook" type="submit ">acbook</button>
        <button class="fa fa-twitter" type="submit ">twitter</button>
        <button class="fa fa-google" type="submit ">oogle</button>



    </div>

</body>

</html>
.number1 {
    background-image: url("https://1.bp.blogspot.com/-jX1J9u3ADk0/UICEqdfwoDI/AAAAAAAAK-U/O9YZoNEJ3d0/s1600/3809fashion.jpg ");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
}

#id1 {
    width: 50%;
    text-align: center;
    margin: auto;
    margin-top: 15%;
    color: orange;
    background: rgba(0, 0, 0, .8);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, .5);
    border-radius: 10px;
    font-family: sans-serif;
    position: relative;
}

#id1 h1 {
    color: orange;
}

#id1 .form {
    margin-top: 10 auto;
    font-size: 18px;
    background: rgba(0, 0, 0, 0.8);
    color: orange;
    
}

.input1 {
    background: rgba(255, 252, 252, 0.8);
    text-align: left;
}

#id1 .item {
    display: flex;
    flex-direction: column;
    margin-top: 10 auto;
    font-size: 18px;
    background: rgba(0, 0, 0, .8);
    color: orange;
}

#id1 .log1 {
    text-align: center;
    margin: auto;
    width: 150px;
    height: 30px;
    margin-top: 18px;
    font-size: 18px;
    color: white;
    border-radius: 25px;
    background-image: linear-gradient(to right, #3B5998 0%, #55ACEE 100%, #dd4b39 0%);
}

.fa {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    margin: 5px 2px;
    -webkit-border-radius: 125px;
    border-radius: 125px;
}

.fa-facebook {
    background: #3B5998;
    color: white;
}

.fa-twitter {
    background: #55ACEE;
    color: white;
}

.fa-google {
    background: #dd4b39;
    color: white;
}
let arryofinput=document.querySelectorAll('.rech p')

for (let i=0;i<arryofinput.length;i++)
{
    console.log(arryofinput[i])
    //arryofinput[i].style.display='block'
}


let signup=document.getElementsByClassName('signup');

signup.addEventListener("click",action);
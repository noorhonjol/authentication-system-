const express = require('express');
const {MongoClient }=require('mongodb')
const app = express();
const Bodyparser=require('body-parser');

const expresslayout=require('express-ejs-layouts');

app.use(express.static('public'))
app.use('/css',express.static(__dirname,+'public/css'))
app.use(Bodyparser.urlencoded());
app.use(Bodyparser.json());

app.use(expresslayout);
app.set('view engine','ejs')


// app.get('',(req,res)=>{
//     res.render('index')

// })

app.get('/sign-up',(req,res)=>{
    res.render('sign-up')
})
// app.get('/login',(req,res)=>{

//     res.render("login-in")
// })

// async function main(){
//     const uri="mongodb+srv://noorhonjol:123456789n@cluster0.kc6fp.mongodb.net/a?retryWrites=true&w=majority    "
//     const client=new MongoClient(uri);
//     try {
//         await client.connect();

//         await createListing(client,
//             {
//                 name: "Lovely Loft",
//                 summary: "A charming loft in Paris",
//                 bedrooms: 1,
//                 bathrooms: 1
//             }
//         );

//     } catch (e) {
//         console.error(e);
//     }finally{
//         await client.close();
//     }
    
// }
// main().catch(console.error);

// async function listDatabases(client){

//     const databasesList= await client.db().admin().listDatabases();
    
//     console.log("databases");

//     databasesList.databases.forEach(db => {
//         console.log(` - ${db.name}`);
//     })
// }

async function createListing(client, newListing){

    const result = await client.db("a").collection("a").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}


const uri="mongodb+srv://noorhonjol:123456789n@cluster0.kc6fp.mongodb.net/a?retryWrites=true&w=majority    "
const client=new MongoClient(uri);
client.connect();


app.post('/sign-up',(req,res)=>{
    

    // if(req.body.email==listemail){

    // }else{
        createListing(client,req.body);
    // }

})


app.listen(3200, ()=>{
    console.log("server is run");
})

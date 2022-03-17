const  {MongoClient} = require('mongodb');

async function main(){
    const uri = "mongodb+srv://zahaa:za2211@cluster0.pwibb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);
    try {
        await client.connect();
await listDataBases(client);

await createListing(client , {
    Firstname : "zahaa",
    LastName : "Ahmad",
    UserName : "Zahaa Muhnna",
    Email : "zahaahmad@gmail.ocm",
    Password : 123456 ,
    Birthday : "22 Novmber 2002"
})
    }catch(e){
        console.error();
    }finally {
        await client.close();
    }
}
main().catch(console.error);

async function creatlisting(client , newlisting){
    const Result = await client.db("sample_airbnb").collection("ListingsAndReviwes").insertOne(newlisting);
    console.log('New Listing creater with wiht the following id : ${result.insertedId}');

}

async function listDataBases( client){
        const DataBasesList =  await client.db().admin().listDataBases();
            console.log("Databases:");
                DataBasesList.databases.forEach(db => {
                    console.log('- ${db.name}')
})
}
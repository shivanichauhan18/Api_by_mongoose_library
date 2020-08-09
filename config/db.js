const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const uri = "mongodb+srv://shivanic18:jsglIF8CQvo841A7@images.eksa4.mongodb.net/meeta?retryWrites=true&w=majority";
MongoClient.connect(uri,(err,client)=>{
    if(err){
        console.log(err)
    }
    console.log("connect")
    const db = client.db("meeta");
    db.collection("device").insertOne({
        "name":"deep",
        "age":20
    }).then(res => console.log(res.ops))
    .catch(err => console.log(err))
    // db.collection("users").findOne({}).then(res => console.log(res))
    // .catch(err => console.log(err))

})












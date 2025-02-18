//importing mongoDB driver
const mongodb = require('mongodb');

//configuring MonogClient for creating connection and accessing database
const MongoClient = mongodb.MongoClient;

let _DB;

//putting the MongoDB connection code in an arrow function so that it can be exported
const MongoConnection = (callback) =>{

    //creating connection to MongoDB database with connect() method which returns a promise
    MongoClient.connect('mongodb://localhost:27017/ecommerce')
    .then(client=>{
        console.log("Connected");
        _DB = client.db();
        callback();
     })
    .catch(err=>{
        console.log(err);
     });
}


const getDB =()=>{ 
    if(_DB){
        return _DB;
    }
    throw "No Database Found";
}


exports.MongoConnection = MongoConnection;
exports.getDB = getDB;
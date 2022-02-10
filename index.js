const {MongoClient} = require('mongodb');
const cli = require('nodemon/lib/cli');
// if to connect to locahost online
const url = "mongodb://localhost:27017";

// kuki node JS is client and server is mongodb mongodb toh fetch kr rhe data
// so client name rakheya
const client = new MongoClient(url);

// async await beacuse server toh data dlean nu time lagda
const getData =async ()=>{
    let result = await client.connect();
    // tell mongo which database to use
    let db=result.db('Tutorial')
    // connect to collection
    //let collection = db.collection('name of collection')
    let collection = db.collection('videos')

    console.log(collection.find({}).toArray()+"\n\n\n")
    
    // handle Promise
    // await nal apne aap promise handle ho janda
    let response = await collection.find().toArray()
     console.log(response)
}
getData()
console.log("staret")


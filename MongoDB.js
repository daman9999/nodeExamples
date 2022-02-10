const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);
const DATABASE ='Tutorial';

const dbConnection=async()=>{
    const connected_client = await client.connect();
    let db = connected_client.db(DATABASE)
    let collection = db.collection('videos')
    console.log('Database Connected\n ');
    return collection;

}



// handle DB with promise
const dbConnectionWithPromise = () =>{
    
dbConnection(DATABASE,'videos').then((resp)=>{
    // toArray() return Promise then then().catch() necessary
            resp.find({}).toArray().then((item)=>console.log(item)).catch(
                (err)=>console.log("Error Fetching result"+err))
    }
).catch((err)=>console.log("not connected\n"+err))

}




// EASY WAY TO HANDLE PROMISE
const main = async() =>{
    let data =await dbConnection(DATABASE,'videos');
    let res= await data.find({}).toArray();
    console.log(res)
    
    
}



// export the file
module.exports=dbConnection;
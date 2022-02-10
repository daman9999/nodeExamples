// INSERT THE DATA WITH MONGO DB
const dbConnect =  require('./MongoDB');


const insert = async() =>{
    const db =await  dbConnect();
    const res = await db.insertOne({
        brand:"apple",
        model:"iphone 12"
    });
    console.log(res)
// insert multiple result
const resu=await db.insertMany(
        
    [
        {brand:"motorola",model:"g40"},
        {brand:"peach",model:"china"},

]

);

console.log("Many Data Inserted")
    if(res.acknowledged===true)
    {
        console.log("Data inserted")
    }


}

exports.insert=insert;
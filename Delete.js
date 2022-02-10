const dbConnect = require('./MongoDB')

const deleteData = async()=>{
    const db = await dbConnect();
    const res= await db.deleteMany(
            {brand:"peach"}
    );
    console.log("DATa DELETED")
}
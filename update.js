const dbConnect =require('./MongoDB')


const updateData=async ()=>{
        let db= await dbConnect()
        // update single result
        let res = await db.updateOne({
            brand:"Apple"},
            {$set:{brand:"daman"}
        })
        console.log(res)
        console.log("updated result")
}
updateData()
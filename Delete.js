// used for update data in api we can also do this with post
// but this is standardized method
const dbConnect = require('./MongoDB');

const express = require('express');
const { response } = require('express');
const app = express()
const port = 3000


//********************* */
const mongodb = require('mongodb');
//********************* */



app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))


app.delete('/:id',async(req,res)=>{
    console.log(req.params.id)
    const data = await dbConnect();
    // mongo db vch id is _id and it is objectID so we have to convert it to object
    let result = await data.deleteOne({_id: new mongodb.ObjectId((req.params.id).trim())});
    res.send(result)
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const { response } = require('express')
const express = require('express')
const dataBase = require('./MongoDB')
const app = express()
const port = 3000

// ********************
app.use(express.json())
// *************
app.get('/', (req, res) => res.send('Hello World!'))

app.post('/',async(req,res)=>{
    console.log(req.body)
    // res.send({"this-is-response":"yes"})
    let db = await dataBase();
    // POSTMAN/ThunderClient toh jo v data aya oh insert hoje database vch
    let result = await db.insertMany([req.body]);
    // send the result to api
    res.send(result)
     
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
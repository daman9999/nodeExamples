const dbConnect = require('./MongoDB')
const express = require('express')
const app = express()
const port = 3000

app.get('/', async(req, res) => {
    let data = await dbConnect();
    data=await data.find({}).toArray();
    console.log(data)
  res.send(data)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

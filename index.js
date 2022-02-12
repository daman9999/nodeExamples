const express = require('express')
require('./config');
const Products = require('./Product');
const app = express()
const port = 3000



// post put delete nal v data search ho janda

app.use(express.json())
app.get('/search/:key',async(req,res)=>{
  console.log(req.params.key)
  // use regex to search
  let data = await Products.find(
    // here we cant use price because it is Number in SCHEMA
    {
      
        "$or":[
         { "name":{$regex:req.params.key}},
         { "brand":{$regex:req.params.key}},
         { "category":{$regex:req.params.key}},
         

        ]
      
    }
  );
  res.send(data)

})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


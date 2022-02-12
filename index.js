const express = require('express')
require('./config');
const Products = require('./Product');
const app = express()
const port = 3000





app.use(express.json())
app.post('/create',async(req,res)=>{
  res.send("done")
  console.log(req.body)
  // store in database
  let data =new Products(req.body)
  let result = await data.save();
  console.log(result)

})



app.get('/list',async(req,res)=>{
  let data =  await Products.find();
  res.send(data);

})

app.delete('/delete/:_id',async(req,res)=>{
  console.log(req.params)
  let data =  await Products.deleteOne(req.params);
  res.send(data)
      
})


app.put('/update/:_id',async(req,res)=>{
  let data = await Products.updateOne(
                        // set condition
                      req.params,
                        // set the updated data
                      {$set:req.body})
res.send(data)
  })



app.listen(port, () => console.log(`Example app listening on port ${port}!`))


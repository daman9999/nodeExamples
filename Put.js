// used for update data in api we can also do this with post
// but this is standardized method
const dbConnect = require('./MongoDB');

const express = require('express');
const { response } = require('express');
const app = express()
const port = 3000


app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))


// app.put('/',async (req,res)=>{
//     let data = await dbConnect();
//     let result = await data.updateOne(
//         {name:"daman"},
//         {$set:{name:"ram"}}
//     );
//     res.send(result);
//     console.log(req.body) 
//     console.log(result)
// })


// we want the params to send from url
// eg=> localhost:3000/<I phone 13>
// we want to update iphone 12 it is not there
// we can send that by params
// we given extra param route us hisab nal bneya nahi
// so /:name param is necessary

app.put('/:name',async (req,res)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:req.params.name},
        {$set:req.body}
    );
    res.send(result);
    console.log(req.body) 
    console.log(result)
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))

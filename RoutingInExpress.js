const express = require('express');
const app = express();


// routing
app.get('',(req,res)=>{
    console.log("this is object we got=>",req.query);
    console.log("this is name we got=>",req.query.name);
    res.send('this is home page');
})


app.listen(4000)
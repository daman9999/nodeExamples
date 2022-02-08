// load Express
const express = require('express');

// make it executeable because it is not in executeable state
const app=express();



// make the get() 
// get() => used to create routes
// get('')=>means it is homepage

app.get('',(req,res)=>{
    res.send('welcome'+'Hello,this is homepage')
})

// about us page '/' is necessary

app.get('/about',(req,res)=>{
    res.send('Hello,this is aboutpage')
})

// make a server
app.listen(5000)

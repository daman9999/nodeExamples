const express = require('express');
const app =express();
const path = require('path');



const publicPath = path.join(__dirname,'public')
console.log("PATH is =>"+publicPath)

// load static files by static()
// app.use(express.static(publicPath))

// _ means nothing in req
app.get('',(_,res)=>{
    // load file from public page
    res.sendFile(`${publicPath}/index.html`)
})

// about page
app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})

//Show error if incorrect url
app.get('*',(_,res)=>{
    res.sendFile(`${publicPath}/error.html`)
})




app.listen(4000)
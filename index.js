const express = require('express');
const app =express();
const path = require('path');



const publicPath = path.join(__dirname,'public')
console.log("PATH is =>"+publicPath)

// load static files by static()
app.use(express.static(publicPath))

app.listen(4000)
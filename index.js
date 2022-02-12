const { response } = require('express');
const express = require('express')
const multer = require('multer');
const app = express()
const port = 3000

// upload is a middle-ware
const upload = multer({
  storage:multer.diskStorage({
    // cb=>callback
    destination:(req,file,cb)=>{
      // upload is here folder name in cb
        cb(null,"upload")
    },
    filename:(req,file,cb)=>{
      // save the uploaded file with filename
      const d = new Date();
      cb(null,file.fieldname+"-"+`${d.getDate()}-${d.getMonth()}-${d.getFullYear()}[${d.getHours()}h${d.getMinutes()}m${d.getSeconds()}s]`+".jpg")
    }
  })
  // telling that we are uploading only a single file (field name in thunderclient)
}).single("user_file")


app.post('/upload',upload,async(req,res)=>{
    res.send("uploading a file")
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
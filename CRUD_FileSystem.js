const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'crud')
// // create a file
// fs.writeFileSync(`${dirPath}/file1.txt`,"this is simple text")


// // read a file
// fs.readFile(`${dirPath}/file1.txt`,`utf8`,(err,item)=>{
//     console.log(item);
// })


// // append a file
// fs.appendFile(`${dirPath}/file1.txt`," //append text=> red",(err)=>{
//     if(!err) console.log("file is updated")
// })

// // rename operation
// fs.rename(`${dirPath}/file1.txt`,`${dirPath}/apple.txt`,(err)=>{
//     console.log("file renamed")
// })

// delete a file
fs.unlinkSync(`${dirPath}/apple.txt`)


// buffer => temporary memory location
// node nu memory location chahidi koi v operation perform karn to pehla so that is called bufffer

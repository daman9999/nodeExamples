const fs = require('fs');
const path = require('path');
// 
// fs.writeFileSync('apple.txt',"this is a apple file")

// create files in loop


// const dirPath = path.join(__dirname)
// --*** shows current path
// console.log("pxath==>",dirPath)

// show the files folder path

const dirPath = path.join(__dirname,'files')
// shows path of files folder
console.log("pxath==>",dirPath)

for(let i=0;i<5;i++){
    fs.writeFileSync(dirPath +`/file${i}.txt`,`this is file${i}`)
}

// read the file
fs.readdir(dirPath,(error,files)=>{
    files.forEach(item=>console.log(item))
})
// you can't access d:/ e:/ f:/ drive by node js 
// kuki jis tuc kmm krde ho oh server bn jnda
// te us toh bhr nhi ja skde kuki ik virtual enviroment di
// trah behave karda aa us toh baad jo v howe us nu koi frk nahi painda

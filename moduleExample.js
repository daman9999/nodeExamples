// jo import karne paine oh non-global hunde jiwe
const fs=require("fs");

//console module global aa kuki kiteo import nahi karna peya
console.log("this is daman")

//file system write file sync makes new file and wite string
fs.writeFileSync("hello.txt","daman Codes node")


// import the one function from module like this 
const fileSys = require('fs').writeFileSync;
fileSys("abc.md","abc")
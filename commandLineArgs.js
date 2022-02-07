// node index.js [Command Line Args]
//eg=> node index.js daman 100

// process object aa node da sab kuj hunda node da lest's run
//  console.log(process)



// // // CLA

// console.log(process.argv)
// [0] [1] reserved for node and index.js 

const fs = require('fs')

const input = process.argv;
fs.writeFileSync(input[2],input[3]);

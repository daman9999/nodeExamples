// async parallel vch execute hunda
// e.g.

console.log('task 1')
// task 2 de execute krn da wait nahi krna fatafat aage chl jana ahi fast banandi a node nu
setTimeout(()=>{
    console.log('task 2')
},1000)

console.log('task 3');



// DRAWBACK of ASYNCHORONOUS 
// e.g.
let a= 10
let b =0

setTimeout(()=>{
    b=30
},1500)

console.log(a+b);
// ans 40 ana c but 10 aya that is disadvantage

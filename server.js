//  http module handle karda http request andd response
const http = require('http')

//created a server which listens to 4500 port

// http.createServer().listen(4500)

// create server also takes function as a parameters

// request => send by Client to server
// response => send by Server to client
http.createServer((request,response)=>{
    // can send HTML with this 
    response.write("<h1>hello this is response from server</h1>");
    response.write("hello this is response from server");
    // end() is important server nu pata ni lagna ki kidr 
    // end kara response
    response.end();

}
).listen(4500)


// on browser you can write localhost:4500 you can see the result
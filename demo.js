const http = require('http');
const page = `
<h2>Information</h2>
<input type="text"/><br/>
<input type="text"/><br/>
<input type="text"/><br/>
<input type="text"/><br/>

`

http.createServer(function (req,res){
    // node js kai tags nu support karda by default kaiya nu nahi
    // node js nu dasn painda aa ki eh html vch content aa
    // isnu html vch pase karo jida ki input tag nahi
    // process krega usnu dasna paina ki input tag aa
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("<h1> Heading</h1>"); 
    res.write(page);

    res.end();
}).listen(4500)
const http = require('http');


var data ={name:"daman",age:"45"}

// multiple data
// var data =[
// {name:"daman",age:"45"},
// {name:"raman",age:"5"}
// ]
http.createServer(function (req,res){
     
// to make an APi we want to tell http the Header type 
res.writeHead(200,{'Content-Type':'application\json'})
// res.write('{"name":"anil"}')
res.write(JSON.stringify(data));
    res.end();
}).listen(4500)
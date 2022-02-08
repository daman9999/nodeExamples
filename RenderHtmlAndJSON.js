const express = require('express');
const app = express();


// send HTML
app.get('',(req,res)=>{
    res.send(
        `
    <input type = "text" placeholder="Username"/>
    <button type = "submit" >Submit</button>
    <a href='/about' >go to about page</a>
    `
    
    )
} );


app.get('/about',(req,res)=>{
    res.send(
        [
            {
                "name":"send"
            },
            {
                "name":"ram"
            }

        ]
    );
}

)


app.listen(4000)
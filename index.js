const express = require('express')
const app = express()
const port = 3000

// middleware
// req,res we need to modify so it is there
// next is a function it will proceed when route is called
    const reqFilter=(req,res,next)=>{
        console.log('reqFilter');
        // we have to call next otherwise it will keep loading in browaer
        // eg:-> if age is older then 18 user can access page
        
        
            if(req.query.age<18){
                res.send('Please Confirm You are over 18')
            }
            else if(!req.query.age){
                res.send("please put down age")
            }
            else{
                next();
            }
        
            
        
        
    }


    // using the middleware
app.use(reqFilter)

app.get('/', (req, res) => {
    res.send("welcome to homepage")
})

app.get('/users', (req, res) => {
    res.send("welcome to users page")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
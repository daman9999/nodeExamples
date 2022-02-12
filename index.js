const express = require('express')
// Event Emitter is a class
const EventEmitter = require('events')
const app = express()
const port = 3000
let count =0;

// 2. make object event emitter
const event = new EventEmitter();

// 3. handle the event generated
// on(GENERATED event_name , callback_function)
event.on("countAPI",()=>{
    console.log("countAPI,Called",count++);
})



app.get('/', (req, res) => {res.send('Hello World!'),
// 3. Generate the event with name of countAPI
event.emit("countAPI")
})
app.get('/search', (req, res) =>{
    res.send('Search api called')
    event.emit("countAPI")
})
app.get('/update', (req, res) => res.send('Update api called'))

// count how many types user hit API

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const express = require('express')

const app = express() // creating object

// bind this app
app.use(express.json())

const books=[
    {title:'java', id:1},
    {title:'python', id:2},
    {title:'Nodejs ', id:3},
    {title:'python', id:4}
]

app.get('/',(req, resp)=>{
    resp.send('Welcome Nouman')
})

// bind this to actual server
app.listen(8080) // we can run to any available port

// nodemon index.js
// http://localhost:8080/    //  go here to see response

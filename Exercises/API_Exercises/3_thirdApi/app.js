const express = require('express')
const app = express()
const port = 9090

//get request
//("/") = directory
//(req, res) = callback function
app.get("/", (req, res) => {
    return res.send({"Test2":"This is a JSON object with a key and value"})
})

//Listen on port: 
app.listen(port, (error) => {
    if(error) {
        console.log('Something went wrong with the Port')
    }

    console.log('All good on port: ' + port)
})
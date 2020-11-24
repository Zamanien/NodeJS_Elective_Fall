const express = require('express')
const app = express()
const port = 8080

app.get("/", (req, res) => {
    return res.send({"Testing":"Another Express"})
})

app.listen(port, (error) => {
    if(error){
        console.log('Error with port')
    }
    console.log('Running on port ' +  port)
})
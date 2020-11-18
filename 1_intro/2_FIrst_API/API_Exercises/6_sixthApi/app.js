const express = require('express')
const app = express()
const port = 9090


app.get("/", (req, res) => {
    return res.send({"Key":"The value"})
})


app.listen(port, (error) => {
    if (error) {
        console.log('Some error on Port')
    }
    console.log('Up and running: ' + port)
})
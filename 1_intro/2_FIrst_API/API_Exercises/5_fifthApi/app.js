const express = require('express')
const app = express()
const port = 8080


app.get("/",(req, res) => {
    return res.send({"Test 5" : "Here we go"})
})


app.listen(port, (error) => {
    if (error) {
        console.log('Error on port')
    }

    console.log('Running on port: ' + port)
})
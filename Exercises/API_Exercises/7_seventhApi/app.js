const express = require('express')
const app = express()
const port = 9999


app.get("/outcome", (req, res) => {
    let outcome1 = {"Test7":"Outcome"}
    let outcome2 = {"Test7":"Outcome2"}
    let outcome3 = {"Test7":"Outcome3"}
    
    res.json([outcome1, outcome2, outcome3])
   
})


app.listen(port, (error) => {
    if (error) {
        console.log('Error')
    }

    console.log('Running on port: ' + port)
})
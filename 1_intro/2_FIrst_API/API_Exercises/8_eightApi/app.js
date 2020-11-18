const express = require('express')
const app = express()
const port = 9090


app.get("/",(req, res) => {
    return res.sendFile('C:/Users/Tariq/Documents/4. Semester/Fall2020/NodeJS/NodeJS_Fall/NodeJS_Elective_Fall/Exercises/Week37/API_Exercises/8_eightApi/HTML/frontpage.html')
})

app.listen(port, (error) => {
    if (error) {
        console.log('Errors')
    }

    console.log('Up and running: ' + port)
})


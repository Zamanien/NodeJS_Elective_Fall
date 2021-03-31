const express = require('express');
const app = express(); 
const port = process.env.port || 8080;

//Tells the systemn to use json
app.use(express.json());

//Index route -> returns json object
app.get('/', (req, res) => {
    return res.json({test: "Testing this Json object"});
});


//Server listen on given port
app.listen(port, (error) => {
    if(error) {
        console.log(`Failed: ${error}`);
    } else {
        console.log(`Up and running on port: ${port}`);
    }
});
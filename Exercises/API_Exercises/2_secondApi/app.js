const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    return res.send({"Test":"This"});
});

app.listen(port, (error) => {
    if (error) {
        console.log('Port Error');
    }
    console.log('Successful')
}) 
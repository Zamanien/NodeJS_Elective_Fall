const express = require('express');
const app = express(); 
const port = process.env.PORT || 8080; 

app.get('/', (req, res) => {
    return res.send({Jiayi: "Tyk"});
})

app.listen(port, (error) => {
    if(error) {
        console.log(error);
    } else {
        console.log(`Running on port: ${port}`);
    }
});


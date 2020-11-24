const express = require("express");
const app = express();

app.get("/index", (req, res) => {
    return res.sendFile(__dirname + "/html/index.html")
});

const port = process.env.PORT || 8080; 

app.listen(port, (error) => {
    if(error){
        console.log("Error: " + error);
    }else{
    console.log("Server up and running on: " + `${port}` )
    }
});
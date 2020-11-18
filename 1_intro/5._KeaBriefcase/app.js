const express = require("express");
const app = express();
const fs = require("fs")

app.use(express.static("public"));

//Required in order to handle post methods
app.use(express.json());
app.use(express.urlencoded({extended: true}))

function readHTML() {
    const content = fs.readFile("/public/upload/upload.html");
    return readHTML.toString(); 
}
/*
app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/public/upload/upload.html");
});
*/

app.get("/", (req, res) => {
    return res.send(readHTML);
});


app.get("/about", (req, res) => {
    return res.sendFile(__dirname + "/public/about/about.html")
});

app.get("/download", (req, res) => {
    return res.sendFile(__dirname + "/public/download/download.html")
});

app.get("/form", (req, res) => {
    return res.send({data: req.query})
});
/*
app.post("/form", (req, res) => {
    console.log(req.body);
    return res.send({data: req.body})
});
*/

const upload = require('../route/upload.js');
app.use(upload);



const port  = process.env.PORT || 80;

app.listen(port, (error) => {
    if (error) {
        console.log("Server couldn't start :( ", error);
    }
    console.log("Server started on port", Number(port));
});

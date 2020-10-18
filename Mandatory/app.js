
//import of 'express'
const express = require('express');
//const app assigned the express method
const app = express();
const port = process.env.PORT || 9999;


//Used to serve static files such as images, css files & JS files
app.use(express.static('static/res/images'));
app.use(express.static('static/html/content'));
app.use(express.static('static/html'));
app.use(express.static('static'));

//get function that tages path & req + res as parameter. Followed by a call-back function
app.get("/", (req, res) => {
    //returns the HTML file. Dirname used to avoid giving whole path
    return res.sendFile(__dirname + "../html/index.html");
});

app.get("/node", (req, res) => {
    return res.sendFile(__dirname + "../html/content/node.html");
});

app.get("/api", (req, res) => {
    return res.sendFile(__dirname + "../content/api.html")
});

app.get("/javascript", (req, res) => {
    return res.sendFile(__dirname + "../html/content/javascript.html")
});

app.get("/restapi", (req, res) => {
    return res.sendFile(__dirname + "../html/content/api.html")
});

app.get("/http", (req, res) => {
    return res.sendFile(__dirname + "../html/content/http.html")
});

app.get("/spaceX", (req, res) => {
    return res.sendFile(__dirname + "../html/content/spacexApi.html")
});
















//app.listen is a function that binds and listens to the specified port & host
//returns error if server fails to launch on specified port
const server = app.listen(port, (error) => {
    if(error) {
        console.log('WARNING: Error setting up Server' + port);
    }
    console.log('Server is running on port:', server.address().port);
});
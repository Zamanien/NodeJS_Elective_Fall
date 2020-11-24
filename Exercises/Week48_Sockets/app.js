const express = require('express');
const app = express();  

const server = require('http').createServer(app);
const io = require('socket.io')(server); 

socket.on("server sending message", ({data}) => {
    console.log('Sent message')
});

io.on("connection", (socket) => {
    socket.on("client sent message", ({ data }));
    console.log({data: message});
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/chatPage.html");
});


const port = process.env.PORT | 9090;

server.listen(port), (error => {
    console.log(`Running on port: ${port}`);
});

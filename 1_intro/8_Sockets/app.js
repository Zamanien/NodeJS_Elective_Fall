const express = require("express");
const app = express(); 


const server = require('http').createServer(app);

//importing socket io library and ... 
const io = require('socket.io')(server);

//event based communication
//first parameter - string that identifies an event (connection is a default event)
io.on('connection', (socket) => {
    console.log(socket); 
    console.log('Socket connected');

    socket.on("client changed colour", ({ data }) => {
        //console.log(data);
        // broadcasts to all sockets in this namecpace
        socket.emit('server sending the colour', {data: data});

        //Updates / changes everything but not itself
        socket.broadcast.emit("Server sending the colur", {data: data});
    });

    socket.on("disconnect", () => {
        console.log("One socket disconnected");
    })
})

app.get("/", (req, res) => {
    return res.send({test: 'Test'});
});

app.get("/colourpicker", (req, res) => {
    return res.sendFile(__dirname + "/colourPicker.html");
});

server.listen(8080), (error => {
    console.log(`Server running on port: ${port}`)
});
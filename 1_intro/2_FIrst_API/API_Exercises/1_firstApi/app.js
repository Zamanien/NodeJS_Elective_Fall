
const express = require('express');
const app = express();
const morgan = require('morgan');
const { query } = require('express');
const port = 9090;

const date = new Date()
const time = date.getHours() +  ':' + date.getMinutes() + ':' + date.getMinutes();

app.get('/me', (req, res) => {
    return res.send({'Me' : 'My name is Tariq'});
});

app.get("/time", (req, res) => {
    return res.send({time: date});


});
//Current Month
app.get("/month", (req, res) => {

    const currentMonth = date.toLocaleString('default', {month: 'long'});
    return res.send({Month: currentMonth});
    console.log(currentMonth)


});


//CurrentMonth - Latif

const months = {
    0: "January",
    1: "Februrary",
    2: "March",
    8: "September"

};

app.get("/months", (req, res) => {
    const months = date.getMonth(); 
    console.log(months);

    return res.send({months: months[months]});
});
/*
app.get("/day", (req, res) => {
    const currentDay = date.toLocaleString('default', {currentDay: 'long'});
    return res.send({Day: currentDay});
    console.log(currentDay)
});

*/


const days = {

    //Starts from sunday because: 
    //1. Document library says so 
    //2. British week starts from sunday
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wedensday',
    4: 'thursday', 
    5: 'Friday', 
    6: 'Saturday'
}

app.get("/day", (req, res) => {
    const day = date.getDay(); 
    console.log(day);
    return res.send({days: days[day]});
})

app.use(express.json());

//In browser enter the following after the URL: 
//?key=value&key=value
//? = request
//key = json key
//value = json value
//& = and --> To put in more key pairs
app.get("/querystring", (req, res) => {
    return res.send({ query: req.query});
});

//create a request handler on the path message that takes a path variable 
//from theh client and returns it directly to the client in the respone 
app.get("/message/:path", (req, res) => {
                                //dot notation
    return res.send({ path: req.params.path, 
                        query: req.query});
});


//Post request
app.post("/showmethebody", (req, res) => {
    return res.send({body: req.body});
});





app.listen(port, (error) => {
    if(error){
        console.log('Error starting Server');
    }

    console.log('Server is running perfectly', port)



});


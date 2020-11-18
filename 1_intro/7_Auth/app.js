const express = require("express");
const app = express(); 


require("dotenv").config();  

const session = require("express-session");

app.get("/test", (req, res) => {
    return res.sendFile(__dirname + "/html/test.html");
});

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false, 
    saveUninitialized: true,
    cookie: {secure: false}
}));

const rateLimit = require("express-rate-limit"); 


const rateLimiter = rateLimit({
    windowsMs: 10 * 60 * 1000, 
    max: 10
});

//use ratelimiter on all /auth endpoints
app.use("/auth", rateLimiter); 

//Auth routes imported and initilized
const authRoute = require("./routes/auth.js");
const authPages = require("./routes/pages.js");
const sessionRoutes = require("./routes/session.js")
app.use(authPages);
app.use(authRoute);
app.use(sessionRoutes);


//Body parser - Middleware
app.use(express.json());


app.use(express.static("/html"));

app.use((req, res, next) => {
    console.log("This runs on all routes");
    next(); 
});

function greetings(req, res, next){
    console.log("Nice to see you", req.ip);
    next(); 
}

app.get("/", greetings, (req, res, next) => {
    console.log("Hit the first route");
    next();
});

app.get("/", (req, res) =>{
    return res.send(501).send({data: "Data out"})
});

/*
app.get("", (req, res) => {

});
*/

//Status codes
//200 - Ok
//4xx - User errors
//401 - Unortharized
//403 . Forbidden 
//5xx - Server errors
//500 - Internal Server Error


const port  = process.env.PORT || 9090;

app.listen(port, (error) => {
    if(error){
        console.log("Couldn't get port", error); 
    } else{
        console.log("Running on", Number(port));
    }
});
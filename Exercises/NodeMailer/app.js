const express = require('express');
const app = express(); 
const nodemailer = require('nodemailer'); 
require('dotenv').config(); //Password for mail goes here

app.use(express.static('/public/html/'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/html/contactForm.html');
});

app.post('/send', async(req, res) => {
    const getEmail = req.body.email;
    const getSubject = req.body.subject;    
    const getContent = req.body.content; 

    const output = `
        <h3>Contact Information</h3>
        <ul>
            <li>From: ${req.body.email}</li>
            <li>Name: ${req.body.name}</li>
            <li>Subject: ${req.body.subject}</li>
        </ul>
        <h3>Content</h3>
        <p>${req.body.content}</p>
        `;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'gmail',
        secure: false, 
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }, 
        tls: {
            rejectUnauthorized:false
        }
    });

    const mailOptions = {
        from: getEmail,
        to: process.env.EMAIL,
        subject: getSubject, 
        content: getContent,
        html: output
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if(err){
            console.log(`Error: ${err}`);
            res.status(401).send();
        } else {
            res.status(200).send('Email sent');
        }
    });

    console.log(req.body);
});



const port = process.env.PORT || 9090;
app.listen(port, (error) => {
    if(error){
        console.log(`Error on: ${error}`);
    }else{
        console.log(`Up and running on port: ${port}`);
    }
});

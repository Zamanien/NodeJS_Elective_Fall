const express = require('express');
const app = express(); 
const port = process.env.PORT | 8080;
const bcrypt = require('bcrypt');

//allows app to use json
app.use(express.json());


//in a real world app this would be stored in DB
const users = []

//real world applications would not expose user passwords like this - this is for testing purposes only
app.get('/users', (req, res) => {
    return res.json(users);
});

//create users - post 
app.post('/users', async (req, res) => {
    try {
        //generate salt - gensalt takes 10 as default, so empty = 10. Larger number = more secure but slower
        //larger number == longer hash
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        //assigns body of requests specified as name and hashed password into 'users'
        const user = { name: req.body.name, password: hashedPassword }
        //pushes it into the user array
        users.push(user);
        res.status(201).send();
    } catch {
        res.status(500).send();
    }


});

app.post('/users/login', async (req, res) => {
    
    const user = users.find(user => user.name === req.body.name);
    
    if(user == null){
        return res.status(400).send('Can not find the user');
    }try{
        
    if(await bcrypt.compare(req.body.password, user.password)) {
        res.send('Logged in');
    } else {
        res.send('Not Allowed')
    }

    }catch{
        return res.status(500).send();
    }
});


app.listen(port, (error) => {
    if (error) {
        console.log('Error launching server' + error); 
    } else {
        console.log(`Running on port: ${port}`);
    }
})
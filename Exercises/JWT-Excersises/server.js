const express = require('express');
const app = express();





const posts = [{
    username : 'Gabriel',
    title: 'Test 1' 
}, 
{
    username : 'Person 2', 
    title : 'Test 2'
}

]

app.get('/posts', (req, res) => {
    return res.json(posts);
});

app.get('/login', (req, res) => {

});






const port = process.env.PORT = 8080; 
app.listen(port, (error) => {
    if (error) {
        console.log('Error launching server' + error);
    } else {
        console.log(`Server running on port: ${port}`);
    }
});

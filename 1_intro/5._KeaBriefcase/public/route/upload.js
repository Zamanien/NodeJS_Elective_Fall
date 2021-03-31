const router = require('express').Router(); //imports the express router class

//Alternate (unpreferred) way to write require method above 
/*
const express = require('express')
const router = express.Router; 

/*
const exports = postRouter = router.post('/form', (req, res) => {
    return res.send({data: req.body});

});
*/


router.post('/form', (req, res) => {
    return res.sendFile({ data: req.body }); 
});

module.exports = router; 



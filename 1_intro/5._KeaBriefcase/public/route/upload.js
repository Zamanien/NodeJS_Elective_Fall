const router = require('express').Router(); 

/*
const exports = postRouter = router.post('/form', (req, res) => {
    return res.send({data: req.body});

});
*/

router.post('/form', (req, res) => {
    return res.sendFile({ data: req.body }); 
});

module.exports = router; 



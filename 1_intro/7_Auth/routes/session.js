const router = require('express').Router(); 


router.get('/setNewSession', (req, res) => {
    return req.send({data: req.query.secret}); 
});


router.get('/setSession', (req, res) => {
    //console.log(req.session);
    req.session.mySecret = 'My private key';
    req.session.isLoggedIn = true; 
    return res.send({data: 'Session Set'});
}); 

router.get('/getSession', (req, res) => {

    return res.send({data: req.session.secret});
});


module.exports = router; 
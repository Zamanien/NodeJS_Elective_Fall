const router = require('express').Router(); 

const bcrypt = require('bcrypt');
const saltRoundes = 12; 

const plainTextPassword = 'mypassword'

bcrypt.hash(plainTextPassword, saltRoundes, (error, hash) => {
    console.log(hash);
});


router.post("/auth/login", (req, res) => {
    return res.status(501).send(); 

});

router.post("/auth/signup", (req, res) => {
    return res.status(501).send(); 
});

router.get("/auth/logout", (req, res) => {
    return res.status(501).send(); 
});



module.exports = router; 


const bcrypt = require('bcrypt');
const saltRounds = 10; 

const str = ''; 
const myPassword = 'thisIsMyPass';

function hashPass(str){
    bcrypt.hash(myPassword, saltRounds, (error, hash) => {
        console.log(hash);
    }); 
}

console.log(process.env);
 

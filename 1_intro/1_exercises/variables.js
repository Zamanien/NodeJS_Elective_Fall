// accessing let before initialization throws an error 
// console.log(name);
let name = "name";

// scope in javascript
{
    {
        let scopedVar = 123;
    }
    // let sticks to its scope or below
    // console.log(scopedVar)
    
}

const myObj = {

    'key' : 'value',
    'key2' : 'value2'
};

const fruits = ['Apple', 'Banana'];

fruits.push('pear');


fruits.pop();
fruits.pop();

console.log(fruits[0]);

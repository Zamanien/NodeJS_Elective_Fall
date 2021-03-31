// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const numberOnetoFloat = parseFloat(numberOne); 
const numberTwotoFloat = parseFloat(numberTwo); 

console.log(numberOnetoFloat + '\n' + numberTwotoFloat);


// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const fixedFloatOne = parseFloat(anotherNumberOne).toFixed(2);
const fixedFloatTwo = parseFloat(anotherNumberTwo).toFixed(2); 

console.log(fixedFloatOne + '\n' + fixedFloatTwo);






// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals



const averageOut = parseFloat((one + two + three) / 3).toFixed(5);
console.log(averageOut);



// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"


console.log(letters[2])




// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript


const factOut = fact.replace('j', 'J')
console.log(factOut);


// --------------------------------------




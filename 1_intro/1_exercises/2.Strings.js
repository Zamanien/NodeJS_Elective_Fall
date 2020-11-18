// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const numberOne1 = parseFloat(numberOne); 
const numberTwo2 = parseFloat(numberTwo);


console.log(numberOne1, numberTwo2);

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

// const anotherNumberOneFloat = parseFloat(anotherNumberOne); 
// const anotherNumberTwoFloat = parseFloat(anotherNumberTwo); 

const result = (Number(anotherNumberOne) + Number(anotherNumberTwo)).toFixed(2);

// const result = (anotherNumberOneFloat + anotherNumberTwoFloat).toFixed(2);



console.log(result);


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const resultAverage = ((one + two + three) / 3).toFixed(5); 

console.log(resultAverage); 





// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log(letters.charAt(2));





// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const replacedFact = fact.replace('j', 'J');

console.log(replacedFact);



// --------------------------------------




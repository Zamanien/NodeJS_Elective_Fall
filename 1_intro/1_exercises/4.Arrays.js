// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
// show b in the console 

console.log(letters[1]);

// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  

friends.push('friend1','friend2','friend');

console.log(friends);

// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

console.log(significantMathNumbers.indexOf(1729));


// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

diet.splice(2, 0,  'hamburger', 'soda', 'pizza');

console.log(diet);


// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 



diet.pop(); 

console.log(diet);
// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

const newDiet = diet.slice(); 

console.log(newDiet);

// --------------------------------------
// Exercise 7 - For loop

const letter = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

for (let i = 1; i < letter.length; i=i+2){
    console.log(letter[i]);
}


// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];
const discardedNumbers = [];

for (let j = 0; j < numbers.length; j++){
    
    if(numbers[j] < 0 || numbers[j] > 6) {
        console.log(numbers[j]);
    }

    else{
        discardedNumbers.push(numbers[j]);
    }

}
console.log(discardedNumbers);  



// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

// --------------------------------------


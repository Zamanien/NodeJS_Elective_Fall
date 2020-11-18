//Prmonises = synthetic callbacks
//two states: 
//1. Pending (igang)
//2. Fulfilled (overstået)
    // - resolve, reject (two outcomes)

/*
new Promise((resolve, reject) => {
    //genrally do this when working with files
    //Set a timeout of 3 seconds - 3000 miliseconds
    setTimeout(() => {
        // lots of code here
    resolve('Running'); //Only resolves when everything in the code section has run
    }, 3000);
    
}).then(output => console.log(output)) //Then is called if everything is resolved
    .catch(output => console.log(output));

*/
//aMethod().then

//.then -> Og så ... 

//Another way of writing it: 
/*
try {
        //genrally do this when working with files
    //Set a timeout of 3 seconds - 3000 miliseconds
    setTimeout(() => {
        // lots of code here
    resolve('Running'); //Only resolves when everything in the code section has run
    }, 3000);
} catch{
    reject('Something went wrong')
}
*/
/*
async function testAsync() {
    const res = await fetch('')
}
*/

//Function is wrapped in promise. Promisified. Otherwise, then() can't be used
function nonBlockingTest() {
  
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Not every promise works this way')
        }, 3000);
    }); 
}

/*
//Self executing function - so to avoid calling function below it. 
//Preferred way of asynchronous coding
(async function nonBlockingTestOutput() {

    const output = await nonBlockingTest(); 
    console.log(output);
    //return nonBlockingTest().then(output => console.log(output)); //or write: .then(console.log): 
})();
*/

//Callback method of the above method
/*
const myAsync = async() => {
    const output = await nonBlockingTest(); 
    console.log(output)
};

myAsync(); 
*/

//or

//Callback function that calls itself
(async () => {
    try {
        const output = await nonBlockingTest();
    console.log(output);
    
    } catch {
        //handle error
    }
})(); 

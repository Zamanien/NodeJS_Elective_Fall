const express = require('express');
const app = express(); 
//const port = 8080; 

//Parse JSON - Post won't work without this
app.use(express.json());

//List of cars
let cars = [

    {id: 0, "brand" : "Volkswagen",     "model" : "Golf MK7",   "type" : "Hatchback"}, 
    {id: 0, "brand" : "Alfa-Ro moeo",   "model" : "Stelvio",    "type" : "Hatchback"},
    {id: 0, "brand" : "Volvo",          "model" : "Excellence", "type" : "SUV"},
    {id: 0, "brand" : "Audi",           "model" : "Q7",         "type" : "SUV"},
    {id: 0, "brand" : "Porsche",        "model" : "911",        "type" : "Hatchback"},
    {id: 0, "brand" : "Skoda",          "model" : "FABIA",      "type" : "Stationcar"},
    {id: 0, "brand" : "Mercedes",       "model" : "AMG",        "type" : "Sedan"},
    {id: 0, "brand" : "BMW",            "model" : "M3",         "type" : "Sedan"},
    {id: 0, "brand" : "Mitsubishi",     "model" : "Outlander",  "type" : "SUV"},
    {id: 0, "brand" : "Hyandai",        "model" : "X3",         "type" : "Hatchback"},
    {id: 0, "brand" : "Toyota",         "model" : "Yars",       "type" : "Hatchback"},
    {id: 0, "brand" : "Tesla",          "model" : "S",          "type" : "Sedan"}


]

let id_cars = 0; 
//For loop that assigns id to the dummy data
function initialAssign() {
    //loops through the array of cars
    for(i = 0; i < cars.length; i++) {
        id_cars++; 
        //increment and assign new ID 
        cars[i].id = id_cars; 
      //  console.log(cars[i]);
    }
}
/*
//Assigns id to new car elements
function new_car_id(){
    id_cars++;
    cars[cars.length - 1].id = id_cars; 
}
*/

initialAssign(); 

//netadata about the API on endpoint "/"
app.get("/", (req, res) => {
    return res.send({metadata: "This API is served with Express & allows CRUD on a list called 'Cars'. The HTTP methods available are: GET, PUT, POST, PATCH & DELETE"})
});

//Get request - Displays all cars
app.get("/cars", (req, res) => {
    return res.send({cars: cars});
});


//Get request - Displays specifc car (Esben version)
app.get("/cars/:id", (req, res) => {

    //loops through array of cars. Increments
    for (let i = 0; i < cars.length; i++) {
        //if id of array of cars == the input (req.paramts.id)
        if (cars[i].id == req.params.id) {
            //return (as json) key:cars and value: array of cars with the current index (i)
            return res.send({cars: cars[i]});
        }
        
    }//else return that car with specific doesn't exist
    return res.send({"Car not available ":req.params.id});

});


/*
//get request by id - Latif metode (no forloop)
app.get("/cars:id", (req, res) => {

    //Won't return data
    const car = cars.find(car => car.id === Number(req.params.id)); 

    //Debug
    console.log(car); //Shows undefined (if null === data). Needs to be parsed

    return res.send({data:car});
});
*/



//Post request with callback function that takes request and respond as paramters (ID handled by Server)
app.post("/cars", (req, res) => {

    //Pushes the new car into the array (push() automatically pushes to the last index)
    cars.push(req.body);
    
    //increments id
    id_cars++;

    //Cars array (-1 because 0 index) assigned as id_cars
    cars[cars.length - 1].id = id_cars;

    //returns (as json) key (cars) with value being array with the length of the car array
    return res.send({cars: cars[cars.length - 1]});

});
/*

//Works only if id is hard coded
let nextCarId = 14; 

//Anders latif - Post method
app.post("/cars", (req, res) => {
    //the new car that takes req.body (from postman - body)
    const newCar = req.body; 

    newCar.id = nextCarId++; 

    //problematic. No unique ID. The same ID can be assigned to multiple items
    //newCar.id = cars.length + 1; 
    
    //Pushes the new object into the array
    cars.push(newCar);

    return res.send({ data: newCar});
});
*/


//patch request with callback function that takes request and respond as paramters
app.patch("/cars/:id", (req, res) => {

    

});

//Anders Latif - Delete method
app.patch("/cars/:id", (req, res) => {
    
    // kortere metode  
    //car = cars.map(car => car); 

    //Samme metode som ovenover (flere parametre)- Bedre for debugging
    cars = cars.map(car => {
        if (car.id === Number(req.params.id)) {
            //spread operator 
            return { ...car, ...req.body, id: car.id, }; 
        }
        //Returns list of car --> Otherwise the output will show partly 'null'
        return car;
    });

    return res.send({ data: cars}); 
})

/*
// delete request with callback function that takes request and respond as paramters
app.delete("/cars/:id", (req, res) => {

    for (let i = 0; i < cars.length; i++) {
        if(cars[i].id == req.params.id){
                
            cars.splice(i, 1); 

            return res.send({cars: cars[i]});
        }
        return res.send({"Car not available at": req.params.id});
    }

});
*/

//Anders Latif - Delete Method
app.delete("/cars/:id", (req, res) => {

    /*
    //method 1:                                //looper (lambda?)
    const foundIndex = cars.findIndex(car => car.id == Number(req.params.id)); 
    console.log(foundIndex); 

    cars.splice();

    */

    //method 2 (preferred): 
    const filteredCotntent = cars.filter( car => car.id !== Number(req.params.id));
    console.log(filteredCotntent); 

    return res.send({data: cars})
});


//Environment Variable
//If port is defined then that should be the port itherwise fallback to port 80
console.log(process.env.PORT)

const port = process.env.PORT || 80; //preferred - cleaner


//const port = process.env.PORT ? process.env.PORT : 80; 

//Port handling
app.listen(port, (error) => {
    if (error) {
        console.log('Error launching the server');
    }                              //Number highlights the port
    console.log('Up on port: ' + Number(port)); 
});

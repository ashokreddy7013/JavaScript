/*
  * 1) Object Creation
  * 2) Adding and Deleting props
  * 3) Retrieval
  * 4) Object Literal
  * 5) dot , [] notation
  * 6) Nested Objects
*/
//
let fridge = {};
fridge.eggs = 10;
fridge.veg = 'Tomotos';
console.log(fridge);

// Object Literal
let car = {
    brand : 'Audi',
    color: 'white',
    fuel : 'Diesel',
    price : 2500000
};
console.log(car);

// Access the properties dot , brackets
console.log(`Brand : ${car.brand}`);
console.log(`Brand : ${car['brand']}`);

// Nested Object
let employee = {
    name : 'John',
    age : 40,
    designation : 'Manager',
    company : {
        name : 'Infosys',
        location : 'Bangalore'
    }
};
console.log(employee);

// Access the nested Object
console.log(employee.company);

// Delete props from an Object
console.log(employee);
delete employee.company;
employee.designation = 'Sr.Manager';
console.log(employee);

// JSON
// Convert Object to String
employee = {
    name : 'John',
    age : 40,
    designation : 'Manager',
    company : {
        name : 'Infosys',
        location : 'Bangalore'
    }
};
console.log(employee);
let empStr = JSON.stringify(employee);
console.log(empStr);

let theStr = '{"name":"John","age":40,"designation":"Manager","company":{"name":"Infosys","location":"Bangalore"}}';
let newObj = JSON.parse(theStr);
console.log(newObj);
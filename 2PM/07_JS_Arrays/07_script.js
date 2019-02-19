// creation of arrays
let array = [10,20,30,40,50];

// Accessing an array and its properties
console.log(array);
console.log(array[0]);

// Access not existed property from an array
console.log(array[100]);

// Accessing length of an Array
console.log(`Length : ${array.length}`);

// reverse the array using reverse()
array = [10,20,30,40,50];
console.log(array);
array.reverse();
console.log(array);

// Remove the first value of the array: shift()
array = [10,20,30,40,50];
console.log(array);
array.shift();
console.log(array);

// Add value to front of the array:unshift()
array = [10,20,30,40,50];
console.log(array);
array.unshift(60);
console.log(array);

// Remove the last value of the array: pop()
array = [10,20,30,40,50];
console.log(array);
array.pop();
console.log(array);

// Add value the end of the array: push()
array = [10,20,30,40,50];
console.log(array);
array.push(60);
console.log(array);

// Remove an element from an Array , Arguments: colors.splice(pos,n):
// Splice(index)
array = [10,20,30,40,50];
console.log(array);
array.splice(1);
console.log(array);

// Splice(index,noOfElemnts)
array = [10,20,30,40,50];
console.log(array);
array.splice(1,1);
console.log(array);

// Splice(index,1,replaceElement)
array = [10,20,30,40,50];
console.log(array);
array.splice(1,1,80);
console.log(array);

// Create a copy of an array. Typically assigned to a new variable:slice();
let arr1 = [10,20,30,40];
let arr2 = arr1.slice();
arr1.splice(2);
console.log(arr2);

// indexOf()
array = [10,20,30,40,50];
console.log(array.indexOf(100));

// join() , split()
array  = ['html','css','js','bootstrap'];
console.log(array);
let theStr = array.join(' - ');
console.log(theStr);

let newArray = theStr.split(' - ');
console.log(newArray);

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Loop from an Array
// Example 1 : Using Normal For-loop
let technologies = ['html','css','javascript','bootstrap'];
let output = '';
for(let i = 0; i<technologies.length; i++){
    output += `${technologies[i].toUpperCase()} `;
}
console.log(output);

// Example 2 : Using for-in loop
output = '';
for(let index in technologies){
    output += `${technologies[index].toUpperCase()} `;
}
console.log(output);

// Example 3 : Using for-of loop
output = '';
for(let value of technologies){
    output += `${value.toUpperCase()} `;
}
console.log(output);

// Example 4 : Using forEach Function
output = '';
technologies.forEach(function(value) {
    output += `${value.toUpperCase()} `;
});
console.log(output);

// Example 5 : Using forEach Arrow Functions
output = '';
technologies.forEach(value => output += `${value.toUpperCase()} `);
console.log(output);

// Array of Objects
let employees = [
    {
        name : 'John',
        age : 35,
        designation : 'Manager',
        active : true
    },
    {
        name : 'Williams',
        age : 45,
        designation : 'Sr.Manager',
        active : false
    },
    {
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        active : true
    },
    {
        name : 'Mahesh',
        age : 23,
        designation : 'Trainee',
        active : false
    }
];

let activeEmployees = employees.filter(function(employee) {
    return employee.active;
});
console.log(activeEmployees);

let inActiveEmployees = employees.filter(function(employee) {
    return !employee.active;
});
console.log(inActiveEmployees);

let seniorEmployees = employees.filter(function(employee) {
    return employee.age >= 35;
});
console.log(seniorEmployees);

let juniorEmployees = employees.filter(function(employee) {
    return employee.age < 35;
});
console.log(juniorEmployees);
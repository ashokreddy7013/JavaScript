// Assignment operator =
let abc = 100;
console.log(`Value : ${abc}`);

// Arithmetic operators + - * /
let num1 = 10;
let num2 = 20;
console.log(`Sum : ${num1 + num2}`);
console.log(`Sub : ${num1 - num2}`);
console.log(`Mul : ${num1 * num2}`);
console.log(`Div : ${num1 / num2}`);

// Short hand math += , -= , *= , /=
let a = 10;
let b = 20;
let add = 30;
add = add * (a + b);
add *= (a + b);
console.log(add);

// Conditional operators < , > , <= , >= , !=
let age = 25;
if(age < 18){
    console.log('You are Minor');
}
else{
    console.log('You are Major');
}

// Unary Operator ++ , --
let x = 10;
x = x + 1; // 11
x += 1; // 12
x++; // 13
console.log(x); // 13

// Logical operators AND , OR
let inRelation = true;
let parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log('Get marry soon');
}
else{
    console.log('Wait until the parents Agreed');
}

// String Concatenation Operator
let name = 'John';
let age1 = 40;
console.log(name + " " + age1);
console.log(`${name} ${age1}`);

// Ternary operator (? :)
age = 10;
let message = '';
(age < 18) ? message = 'You are Minor' : message = 'You are Major';
console.log(message);

// Type of operator
let employeeName = 'Rajan';
console.log(`value : ${employeeName} Type : ${typeof employeeName}`);

// == operator
a = 10;
b = "10";
if(a == b){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}

// === operator
a = 10;
b = "10";
if(a === b){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}
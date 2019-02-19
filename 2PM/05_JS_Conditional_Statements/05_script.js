// If Else condition Example
let time = 10;
if(time >= 0 && time <= 12){
    console.log('Good Morning');
}
else if(time > 12 && time <= 17){
    console.log('Good Afternoon');
}
else if(time > 17 && time <= 23){
    console.log('Good Evening');
}
else{
    console.log('Enter Proper Timer');
}


// For loop Example to display from 0 - 10 values
let output = '';
for(let i = 0; i<= 10; i++){
    if(i <= 9){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
}
console.log(output);

// for-loop to print 20 - 0 diff 2
output = '';
for(let i = 20; i >= 0; i-=2){
    if(i > 0){
        output += `${i} - `;
    }
    else{
        output += `${i}`;
    }
}
console.log(output);

// Print the 10 Starts
let theNumber = 10;
output = '';
for(let i=1; i<=10; i++){
    for(let j=1; j<=i; j++){
        output += '*';
    }
    output += '\n';
}
console.log(output);

// print numbers
theNumber = 9;
output = '';
for(let i = theNumber; i >= 1; i--){
    for(let j = 1; j <= i; j++){
        output += i;
    }
    output += '\n';
}
console.log(output);

// While loop Example to display from 0 - 10 values
console.log(`---------------------- from While ---------- `);
output = '';
let i =0;
while(i <= 10){
    if(i <= 9){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
    i++;
}
console.log(output);

// print 20 - 0 diff 2
output = '';
i = 20;
while(i >= 0){
    if(i > 0){
        output += `${i} - `;
    }
    else{
        output += `${i}`;
    }
    i -= 2;
}
console.log(output);

// print 10 stars
output = '';
theNumber = 10;
while(i<=10){
    let j = 1;
    while(j<=i){
        output += '*';
        j++;
    }
    output += '\n';
    i++;
}
console.log(output);

// Print Numbers
theNumber = 9;
output = '';
i = theNumber;
while(i >= 1){
    let j = 1;
    while(j <= i){
        output += i;
        j++;
    }
    output += '\n';
    i--;
}
console.log(output);

// Do while loop Example to display from 0 - 10 values
console.log(`---------------------- from Do-While ---------- `);
output = '';
i =0;
do{
    if(i <= 9){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
    i++;
}
while(i <= 10);
console.log(output);

// print 20 - 0 diff 2
output = '';
i = 20;
do{
    if(i > 0){
        output += `${i} - `;
    }
    else{
        output += `${i}`;
    }
    i -= 2;
}
while(i >= 0);
console.log(output);

// Print 10 Stars
output = '';
theNumber = 10;
i = 1;
do{
    let j = 1;
    do{
        output += '*';
        j++;
    }
    while(j<=i);
    output += '\n';
    i++;
}
while(i<=10);
console.log(output);

// Print Numbers
theNumber = 9;
output = '';
i = theNumber;
do{
    let j = 1;
    do{
        output += i;
        j++;
    }
    while(j <= i);
    output += '\n';
    i--;
}
while(i >= 1);
console.log(output);

// Switch statement
let day = new Date().getDay();
let fullDay = '';
switch(day){
    case 0:
        fullDay = 'SUNDAY';
        break;
    case 1:
        fullDay = 'MONDAY';
        break;
    case 2:
        fullDay = 'Tuesday';
        break;
    case 3:
        fullDay = 'Wednesday';
        break;
    default:
        fullDay = '';
        break;
}
console.log(`Today is : ${fullDay}`);
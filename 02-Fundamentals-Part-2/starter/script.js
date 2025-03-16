/*
//strict mode = write secure javascript
'use strict';
// strict mode limits certain things and shows certain errors

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log('I can drive :D');

//This are reserve word for future features under the use strict
//const interface = 'Audio';
//const private = 534;
*/

// Lesson 33. Functions

//function piece of code that we can reuse over and over again

//function can hold one or more lines of code

function logger(){
    console.log('My name is Chris');
}

logger(); // This is called invoking the function, running the function, or calling the function

// Everytime you envoke the function it will print "My name is Chris"
logger();
logger();
logger();

// the location where apples and oranges are consider parameters, you will use this as variables
function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with $(apples) apples and $ {oranges} oranges.`;
    return juice;
}

fruitProcessor(5, 0); // This argument will be inserted to apple (5) and oranges (0)

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

const num = Number('23');
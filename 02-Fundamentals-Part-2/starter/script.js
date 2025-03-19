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

*/
 /*
//Function declaration
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}

const age1 = calcAge(1991);
console.log(age1);

//Function expression
const calcAge2 = function (birthYeah) {
    return 2031 - birthYeah;
}

const age2 = calcAge2(1991);

console.log(age1, age2);
*/
/*
//Function expression
const calcAge2 = function (birthYeah) {
    return 2031 - birthYeah;
}

//Arrow function => great for one liner
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'))
console.log(yearsUntilRetirement(1980, 'Bob'))
*/

/*

//Functions Calling Other Functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));
*/

//Reviewing Functions

const calcAge = function(birthYeah) {
    return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;
    return retirement;


    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        return -1;
        console.log(`${firstName} has already retired`)
    }
}

// return '${firstName} retires in ${retirement} years';

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
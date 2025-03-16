/*
let  variableName = 'Welcome to variables';

console.log(variableName);

// Null meaning unknown value or nothing

let age = null;

console.log(age);

// Undefined meaning variable has been declared but not assigned a value

let name;

// Objects are collections of key-value pairs

const person = { // object
    name: 'John', // key: value 
    age: 30,
    isEmployed: true
};

// (.) Dot notation

console.log(person.name); // (objectName.keyName)

// Array is a collection of items
const arr = [1, 2, 3, 4, 5]; // array has indexes i.e. 1, 2, 3 ...


// Date 

const date = new Date();
console.log(date);

// Statically typed language - type of variable is known at compile time
let message = 'Hello World';

console.log(typeof message);

message = 10;

console.log(typeof message);

// Dynamically typed language - type of variable is known at runtime

// Declare a variable without specifying its type
let dynamicVar;

// Assign a number
dynamicVar = 42;
console.log(`Value: ${dynamicVar}, Type: ${typeof dynamicVar}`); // Output: Value: 42, Type: number

// Change the value to a string
dynamicVar = "Hello, world!";
console.log(`Value: ${dynamicVar}, Type: ${typeof dynamicVar}`); // Output: Value: Hello, world!, Type: string

// Change the value to an object
dynamicVar = { name: "Alice", age: 30 };
console.log(`Value: ${JSON.stringify(dynamicVar)}, Type: ${typeof dynamicVar}`); 
// Output: Value: {"name":"Alice","age":30}, Type: object

// Change the value to a function
dynamicVar = function () {
  return "I am a function!";
};
console.log(`Value: ${dynamicVar()}, Type: ${typeof dynamicVar}`); // Output: Value: I am a function!, Type: function


//Strict Equality
console.log(5 === 5); // true
console.log(5 === '5'); // false

// Loose equality operator Doesn't compare DATA TYPES Avoid using it
console.log(5 == '5'); // true

console.log(0 == '' ); // false

//Logical Operators

// AND Operator
console.log(true && false); // false 
console.log(true && true); // true

// OR Operator
console.log(true || false); // true At least one operand is true
console.log(false || false); // false

// NOT Operator
console.log(!true); // false
console.log(!false); // true    

*/

//Challenge 2

/* Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.



👋 OPTIONAL: You can watch my solution in video format in the next lecture

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

 Write your code below. Good luck! 

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}`);
  } else {console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}`);
   }



const day = 'monday'; //Depending on the day, the code will execute different tasks

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
}


if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
}
else if (day === 'tuesday') {
    console.log('Prepare theory videos');
}
else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
}
else if (day === 'friday') {
    console.log('Record videos');
}
else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
}
else {
    console.log('Not a valid day');
} 

// The conditional (Ternary) Operator

const age = 23;
age >= 18 ? console.log('I like to drink wine'):
console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink)

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2)

console.log(`I like to drink $(age >= 18 ? ${age >= 18 ? 'wine' : 'water'}`);

*/
/*CHALLENGE #4
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉



👋 OPTIONAL: You can watch my solution in video format in the next lecture
const bill = 275;
*/

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * .15 :
bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


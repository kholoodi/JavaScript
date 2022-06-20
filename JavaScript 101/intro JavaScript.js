//One line comment
/* mulitable linnes comments  */

let color = 'Red';
console.log(color);
console.log(typeof color);
let bool = 2>3;
console.log( bool);
//Template Literals ``
let message = `welcome
 to 
 javascript`; 
console.log( message);
console.log(typeof message);
let language = 'C#';
message = `welcome to ${language}`; 
console.log( message);

//undefined
let name;
console.log(name);
console.log(typeof name);

//NaN = NOT number if we expect  result is number but the result is not number 
let num = 5;
console.log( num * 'JavaScript');

//postfix & prefix
let number = 2;
let result = number++ + 4; // postfix
console.log(result);
console.log(number);
number = 2;
result = ++number + 4; // prefix
console.log(result);
console.log(number);

//And OR Not
let first = true, second = false;
let andResult = first && second; // and
let orResult = first || seocnd;  // or
let notResult = !first // not
console.log(andResult);
console.log(orResult);
console.log(notResult);

// == compare between values 
// === compare values and data types

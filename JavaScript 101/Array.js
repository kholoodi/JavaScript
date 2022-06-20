let colors = ['Red','Blue', 'Green'];
console.log(colors);
let length = colors.length;
let include = colors.includes('black'); //  include means look if the item in array or not 
console.log(length);
console.log(include);

//Add and remove at the end of array 
colors.push('Yellow'); //add new element to the array 
console.log(colors);
colors.pop(); // remove element in the end also pop can keeps removeable value
console.log(colors);
//Add and remove at the begining of array 
colors.unshift('white'); //Add element at the begining 
console.log(colors);
colors.shift(); //remove eleement at the end
console.log(colors);
const redColor = colors.shift(); // shift keeps the removeable value
console.log(colors);
console.log(redColor)
//isArray check the variable is an array or not 
let color = 'black';
console.log(Array.isArray(colors));
console.log(Array.isArray(color));





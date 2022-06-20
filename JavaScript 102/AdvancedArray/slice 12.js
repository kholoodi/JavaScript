// slice reuturn a new array which is a  part of main array 
const colors =['black','red','green', 'blue', 'white'];

const rgbColors = colors.slice(1,4); //  copy  1 <= index < 4
console.log(rgbColors); // ['red', 'green', 'blue']

const rgbColors = colors.slice(-4,-1); //  copy  1 <= index < 4
console.log(rgbColors); // ['red', 'green', 'blue']

const rgbColors = colors.slice(1); // copy  1 <= index 
console.log(rgbColors); //['red', 'green', 'blue', 'white']

const rgbColors = colors.slice(); // copy all index 
console.log(rgbColors);  // ['black', 'red', 'green', 'blue', 'white']
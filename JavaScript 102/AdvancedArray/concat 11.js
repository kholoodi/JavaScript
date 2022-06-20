//concat return a new array that is reslut for marge two arries 

const primaryColors =['red','yellow', 'blue'];
const secandrayColors = ['green', 'orange', 'violet'];

const colors = primaryColors.concat(secandrayColors);
console.log(colors); //['red', 'yellow', 'blue', 'green', 'orange', 'violet']

const colors1 = primaryColors.concat(secandrayColors, 'black','white');
console.log(colors1); //['red', 'yellow', 'blue', 'green', 'orange', 'violet', 'black', 'white']


const colors2 = primaryColors.concat();
console.log(colors2); //['red', 'yellow', 'blue']
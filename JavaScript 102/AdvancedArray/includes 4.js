// "include" if this value in array (true) or not (false) 
//index -3 -2 -1
// index 0  1  2
const colors = ['red', 'green','blue'];

const iscontenRed = colors.includes('red');
console.log(iscontenRed); // true 

// strat reserach on index 1 
const iscontenRed1 = colors.includes('red',1);
console.log(iscontenRed1); //false 

//serach with muince index 
const iscontenRed2 = colors.includes('red' ,-2);
console.log(iscontenRed2); //false 
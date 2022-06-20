// indexOf and lastIndexOf  return index foe given value  they return -1 if not find  
// indexOf V.S lastindexOf  
//indexOf => start resarech from left to right 
//lastIndexOf => start resarech from right to left 

//index          -4     -3       -2     -1
// index         0       1        2      3
const colors = ['red', 'green', 'blue','green'];

const index = colors.indexOf('green');//1
console.log(index); 
// start reserach by index 2 
const index1 = colors.indexOf('green',2); //3
console.log(index1);

const index2 = colors.indexOf('black'); //-1
console.log(index2);

const index3 = colors.indexOf('green',-3); //1
console.log(index3);

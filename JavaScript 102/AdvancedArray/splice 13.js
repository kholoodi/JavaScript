// splice using to remove, add & excahange  elements in array

const colors =['black','red','green', 'blue', 'white'];
//colors.splice(3); // reomve index >= 3
//console.log(colors); //['black', 'red', 'green']*/

//colors.splice(2,2); // remove 2 elements  from index = 2 / colors.splice(indesxNumber ,elelmentsNumber);
//console.log(colors); //['black', 'red', 'white']

/* exchange */
//colors.splice(2,2,'gray','yellow' );  // exchange 2 at index 2 elements 
//console.log(colors); //['black', 'red', 'gray', 'yellow', 'white']

/*Add */
colors.splice(2,0,'gray','yellow' );  // start add at index  =2 / 0 don't remove any element
console.log(colors); //['black', 'red', 'gray', 'yellow', 'green', 'blue', 'white']



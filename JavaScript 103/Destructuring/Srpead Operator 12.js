//spread Operator = spread an array to variables 

let first = [1,2];
let second = [3,4,5];
let thrid = [first, second]
console.log(thrid) //[ [ 1, 2 ], [ 3, 4, 5 ] ]

thrid = [...first, second]
console.log(thrid) //[ 1, 2, [ 3, 4, 5 ] ]

thrid = [...first, ...second]
console.log(thrid)//[ 1, 2, 3, 4, 5 ]
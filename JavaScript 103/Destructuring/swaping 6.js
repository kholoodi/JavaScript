//using destructure for swap values 

let first = 7, second = 5;
console.log(first, second); //7 5

[first, second] = [second, first];
console.log(first, second);// 5 7

[first, second] = [first, first];
console.log(first, second); //5 5
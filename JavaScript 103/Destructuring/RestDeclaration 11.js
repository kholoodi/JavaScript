//rest declaration

let numbers = [1, 2, 3, 4, 5]
//let [first, second, ...others] = numbers
// ...others defined array to the rest elemrnts 
//console.log(first, second, others) //1 2 [3, 4 ,5]
//console.log(first, second, others[0]) //1 2 3

numbers = [1,2]
let [first, second, ...others] = numbers
console.log(first, second ,others) //1 2 []
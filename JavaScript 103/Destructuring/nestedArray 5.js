// destructure with nested Array 

let numbers  =[1,2, [3,4]]
//let [first,second, third] = numbers 
//console.log(first,second,third) /// 1 2 [3,4]

//let [first,second, third] = numbers 
//console.log(first,second,third[0]) // 1 2 3 

let [first,second, [firstValue, secondValue]] = numbers 
console.log(first,second,firstValue, secondValue) //1 2 3 4
// map return  new array depened on given operation 
const numbers = [3, 7, 9] 

const squareNum = numbers.map(function(currentValue){
    return currentValue * currentValue;
})
console.log(squareNum) //[9, 49, 81]
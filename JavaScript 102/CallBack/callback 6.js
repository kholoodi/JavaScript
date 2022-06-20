

function operation (firstNumber, secondNumber, opcallback)
{
    return `[:[${opcallback(firstNumber , secondNumber)}]:]`; 
}

//callback with Arrow function which defined before 
const sum = (firstNumber, secondNumber)=> firstNumber + secondNumber;
console.log(operation(5,2 ,sum));
console.log(operation(12,4 ,sum)); 


function sub (firstNumber, secondNumber)
{
    return firstNumber - secondNumber;
}
function mult(firstNumber, secondNumber)
{
    return firstNumber * secondNumber;
}

function operation (firstNumber, secondNumber, opcallback)
{
    return `[:[${opcallback(firstNumber , secondNumber)}]:]`; 

}
// Two ways  for callback 
// 1- call function that defind before and call it.
console.log(operation(5,2 ,sub)) ;

// 2- defined function when call in this way we must defined function each time calling 
console.log(operation(5,2 ,function(firstNumber, secondNumber){
    return firstNumber +secondNumber;
})) ; 

function sum (firstNumber, secondNumber)
{
    return firstNumber + secondNumber;
}
function sub (firstNumber, secondNumber)
{
    return firstNumber - secondNumber;
}
function mult(firstNumber, secondNumber)
{
    return firstNumber * secondNumber;
}

// callback is calling function as paramter in anther function in example "opcallback" is a function
function operation (firstNumber, secondNumber, opcallback)
{
    return `[:[${opcallback(firstNumber , secondNumber)}]:]`; // return the result as string 

}

console.log(operation(5,2 ,sum)) ; // sum is callback function //[:[7]:]
console.log(operation(5,2 ,sub)) ; //[:[3]:]
console.log(operation(5,2 ,mult)) ; //[:[10]:]
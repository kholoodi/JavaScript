
function operation (firstNumber, secondNumber, opcallback)
{
    return `[:[${opcallback(firstNumber , secondNumber)}]:]`; 

}

//callback with Arrow function  (paramters) => { retrun function code} or (paramters) => function code
console.log(operation(5,2 ,(firstNumber, secondNumber)=> firstNumber + secondNumber)) ; 
//One line code is defoult return 
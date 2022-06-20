// (...) in Rest Declaration using aggrrgation values in array (تجيع القيم)
// (...) in spread operator using to separated values in various variables (تفكيك القيم)

function sum (first, second, ...others) // rest Declaration
{
    console.log(others) //[ 7, 8, 9 ]
    console.log(...others) //7 8 9 //spread
    return first + second
}

console.log(sum (1,2 ,7,8,9))
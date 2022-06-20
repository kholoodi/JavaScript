function numberSum(num) {
    if ( num == 1 )
    return 1
    else if (num == 0)
    return 0
    else
    return num + numberSum(num -1)

}

console.log( numberSum(3))
console.log( numberSum(2))
console.log( numberSum(5))
console.log( numberSum(7))
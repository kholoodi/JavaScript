function sumOdd(arr) {
    let sum = 0 ;
    for(let i =0; i< arr.length; i++)
    {
        if (arr[i] % 2 != 0)
        {
            sum = sum + arr[i]
        }
    }
    return sum;
}

console.log(sumOdd([1,2,3,4,5]))
console.log(sumOdd([2,9,4,7]))
console.log(sumOdd([34,2,5,8]))
console.log(sumOdd([2,4,8]))
function sumEven(arr) {
    let sumeven = 0 ;
    for(let i =0; i< arr.length; i++)
    {
        if (arr[i] % 2 == 0)
        {
            sumeven = sumeven + arr[i]
        }
    }
    return sumeven;
}

console.log(sumEven([1,6,3]))
console.log(sumEven([2,7,5,10,0]))
console.log(sumEven([33,2,5,8]))
console.log(sumEven([2,4,8]))
function sumEven(arr) {
    const total = arr.reduce(function(accumulator,currentValue){
        if (currentValue % 2 ==0)
            return accumulator + currentValue 
    });
    return total;
}

console.log(sumEven([1,6,3]))
console.log(sumEven([2,7,5,10,0]))
console.log(sumEven([33,2,5,8]))
console.log(sumEven([2,4,8]))
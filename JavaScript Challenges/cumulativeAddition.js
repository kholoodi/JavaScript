function cumulativeAddition(array) {
    const sum = array.reduce(function(accumulator, currentValue){
        return accumulator + currentValue});
    const length = array.length;
    return [sum , length]
}

console.log(cumulativeAddition([2 , 4 , 9 , 23 , 435]))
console.log(cumulativeAddition([32 , 9 , 3 , 8]))
console.log(cumulativeAddition([99 , 314 , 8 , 200 , 23 , 2]))
console.log(cumulativeAddition([72 , 86]))
console.log(cumulativeAddition([55]))
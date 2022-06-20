function getMean(arr) {
	const total = arr.reduce(function(accumulator, currentValue, index, array){
        return accumulator + currentValue});
    const length = arr.length;
        return total/ length;
}

console.log( getMean([1,2, 3, 4, 5]))
console.log( getMean([8, 9]))
console.log( getMean([1, 5, 7, 3]))
console.log( getMean([2, 7, 1, 9,8]))

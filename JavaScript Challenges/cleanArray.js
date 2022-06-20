function cleanArray(arr) {
	const array = arr.filter(function(currentValue){
        return currentValue != null;
    });
    return array
} 

console.log(cleanArray([2,null,4,5]))
console.log(cleanArray([null,7,8,null,9]))
console.log(cleanArray([null,null,null,null]))
console.log(cleanArray([2,7,8]))
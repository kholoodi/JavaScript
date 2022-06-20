// reduce operation on array elements 
const numbers = [2, 4, 1, 3, 5];
//reduce take 4 paramter 
const total = numbers.reduce(function(accumulator, currentValue, index, array){
    //console.log(`index: ${index}`); // index start at 1 
    //console.log(`currentvalue: ${currentValue}`) //(index & currentValue start at scandNumber )

    // accumulator takes value of the first element in array then takes return value 
    //console.log(`accumulator: ${accumulator}`) 
    //return accumulator + 1;
    return accumulator + currentValue;
} ,100); // when add 100 to total  a 100 is an initial value for accumulator & currentValue, index start at first index 
console.log(total);

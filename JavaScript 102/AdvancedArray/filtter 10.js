// filter  return array depened on given condition 
const numbers = [2, 3, 7, 4, 9]

const evenNumbers = numbers.filter(function(currentValue){
    return currentValue % 2 === 0;
});

console.log(evenNumbers); //[2,4]
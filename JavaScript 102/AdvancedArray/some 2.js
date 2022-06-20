// some return true if one element at least is vaild for the given condition else some if false      
const numbers = [11, 13, 26, 15, 12];

const eighteen = numbers.some(function(element){
    return element >= 18;  
});
console.log(eighteen); //true 


const numbers2 = [11, 13, 15, 12];

const eighteen2 = numbers2.some(function(element){
    return element >= 18;  
});
console.log(eighteen2); // false
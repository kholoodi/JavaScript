// every element in array must be true with given condition 

const age = [22,23,25,27,21]

const areAdults = age.every(function (element){
return element >= 18;
});
 console.log(areAdults); // true
 
 
const age1 = [22,13,25,27,21]
const areAdults1 = age1.every(function (element){
return element >= 18;
});
 console.log(areAdults1); // false 
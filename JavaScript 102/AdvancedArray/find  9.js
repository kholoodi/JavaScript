// find return first elelment  which is ture with given condtion 
 const numbers =[11, 7, 9, 15];

 const el = numbers.find(function(element){
     return element % 3 === 0;
 });
 console.log(el); //9

 const el1 = numbers.find(function(element){
    return element % 4 === 0;
});
console.log(el1); // undefined 
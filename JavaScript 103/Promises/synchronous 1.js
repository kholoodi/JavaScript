//syonchronus & Asyonchronous
//syonchronus = programming is extuted normally from left right and from top to down 
//here time of program is time for all setps 

//Asyonchronous = programming is jump setp that is takes more time  extut the next one 
//here time of program is time for setp that has longest time  

//by setTimeout() promgram stops for given time 

console.log(1)
console.log(2)
//here stop exucuting for 3 second
setTimeout(() =>{ console.log(3)}, 3000);
console.log(4)
console.log(5)
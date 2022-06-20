//معرفة اشارة الرقم 
// Math.sign retrun 1, -1 ,0, NaN (Not Number) depended on the input 

const number1 = Math.sign(3); //1
console.log(number1);

const number2 = Math.sign(-3); //-1
console.log(number2);

const number3 = Math.sign(0); //0
console.log(number3);

const number4 = Math.sign('a');// NaN
console.log(number4);
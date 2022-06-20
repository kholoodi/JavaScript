 
 // experssion & statment
 /*  (parameter1, parameter2) => {
             return experssion} */

let add1 = (num1 ,num2) => { 
    return num1 + num2;
}

//1---(parameter1, parameter2) => { return experssion}
let add2 = (num1 ,num2) => { return num1 + num2;}

//2--(parameter1, parameter2) =>  experssion
let add3 = (num1 ,num2) =>  num1 + num2;

//3--(parameter1, parameter2) => { statment}
let add4 = (num1 ,num2) => { let result = num1 + num2;}


//parameters
//1--(parameter1, parameter2, parameter2) => { ....}
let add5 = (num1 ,num2, num3) =>  num1 + num2 + num3;

//2--single parameter => {...}
let reslut =  num1 => { let result = num1}

//3-- () => {...}
let print = () => console.log("This arrow function has no parameters")

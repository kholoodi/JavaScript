let User1 = {
    firstName: "Fatma",
    lastName :"Khalid"
}
let User2 = {
    firstName: "Ail",
    lastName :"Khalid"
}

let printFullName = function(age){
    console.log("Hello, "+this.firstName+ " "+this.lastName+". Your age is "+age)
}

// Bind return new function that must call to run 
///***Bind  method 

//let newFunction = printFullName.bind(User1, '35');
//newFunction(); //Hello, Fatma Khalid. Your age is 35


let newFunction = printFullName.bind(User1);
newFunction('35'); //Hello, Fatma Khalid. Your age is 35


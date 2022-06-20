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

//call method
//printFullName(User) //Hello, undefined undefined
//printFullName.call(User)  //Hello, Fatma Khalud

//***call method
printFullName.call(User1,"27") //Hello, Fatma Khalud. Your age is 27
printFullName.call(User2,"25") //Hello, Ail Khalid. Your age is 25




// destructure  with nested object  or 2 leve object

let  student = {
//name has nested object {firstName, lastName}
    name:{
        firstName: 'Ali'  , 
        lastName:  'Nasser'
    },
    age:25
}
//How destructure the  nested object 
let {name: {lastName: yourLastName}} = student;
console.log(yourLastName)//Nasser
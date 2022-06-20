//Object destructring {,} = object 

//defind object 
let student  = {
    name : "Ali",
    age : 25,
    gender: true
}

/***assign object values to the varibles **/
 //let {name: nameValue, age: ageValue} =student;
 //console.log(nameValue, ageValue) // Ali 25

 /**can using the same names  object***/
 //let { name ,age, gender } =student
// console.log(name, age, gender) //Ali 25 true

/***when we find variables have the same names of objects names we must use () to tell complar here destructure */
let name = 'saleh' , age = 30;
({name, age} = student); // destructure
console.log(name, age) //Ali 25
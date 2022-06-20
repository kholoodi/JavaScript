// using '' with variable name let as using sambles or spece in name 

let  student = {
    name:{
        firstName: 'Ali'  , 
        lastName:  'Nasser'
    },
    '@My age':25
}


console.log(student.name.firstName) // Ali
console.log(student['@My age']) //25
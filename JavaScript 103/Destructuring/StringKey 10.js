//In JavaScript we can use '' with names of variables in object
 //'' allows as to using special characters with the variables names like space in 'my age' for example

 let student ={
     name: {
         firstname: 'Ali',
         lastName: 'Nasser'
     },
     'my age':25
 }

 //for access to variables that names with ''
//deal with thses as key values 
 console.log(student['my age']) //25
 
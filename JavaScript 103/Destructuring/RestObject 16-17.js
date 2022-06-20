// The rest declaration with object is return rest values as object 

let student ={
    name: 'Hind',
    age: 18,
    gender: true
};

//let { name , ...others} = student;
//console.log(name, others); //Hind {age: 18, gender: true}

//----Using defoult value 
let { name , nikName = 'Unknown'} = student;
console.log(name, nikName); //Hind {age: 18, gender: true}
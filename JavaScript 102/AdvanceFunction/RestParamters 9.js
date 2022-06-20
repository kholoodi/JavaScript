// ...names = keep the rest paramters in array named "names"]]
// names is rest parameter the rest parameters is a last parameter receives 
let studentName = function(name1,name2, ...names){
    console.log(name1, name2, names)
}

studentName("Hind", "khalid", "Abdullah","Reem") //Hind khalid  ['Abdullah', 'Reem']
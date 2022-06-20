//Regular Expression function
//Sreach function تسخدم لمعرفة الاندكس للنص الموصوف 
const myString = 'I love JavaScript'
const regex = /JavaScript/
const regex1 = /c#/
let newString  =  myString.search(regex)
// return first index for given vaule
// reurrn -1 if not found
let newString1  =  myString.search(regex1)

console.log(newString) //7
console.log(newString1) //-1
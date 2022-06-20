//Regular Expression function
// 1- Test function  returns True /False 
//تتحقق من وجود النص المحدد
const myString = 'I love JavaScript'
const regex = /JavaScript/
const constInRegex = regex.test(myString)
//looking for regex value in myString
console.log(constInRegex) //true
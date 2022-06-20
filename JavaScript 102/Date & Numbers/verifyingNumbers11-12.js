// verifying if number is intger تحقق من القيمة رقمية 
const number = 3.12;
const isInt = Number.isInteger(number); //false
console.log(isInt)
const number2 = 3;
const isInt2 = Number.isInteger(number2);//true 
console.log(isInt2)

//التحقق من ان القمية غير رقمية 
// verifying if the input value  is not numeric value
// isNaN if value is nmeric return false else true 
//isNaN => is not a number 
function sequare(number){
    if (isNaN(number))
        return 'Invaild Input'
    return number *number
}

console.log(sequare(3)); //9
console.log(sequare('a'));// Invaild Input / isNaN  retrun true
console.log(sequare('3'));//9 / isNaN  retrun fales 



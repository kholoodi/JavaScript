//تجميع وتفكيك عناصر المصفوفة باستخدام طريقة التعريف 
/*let numbers = [1,2,3,4,5]
let [first, second, ...others] = numbers
 
console.log(others) //[3,4,5]  rest 
console.log(...others) // 3 4 5  spread*/



//تجيع عناصر المصفوفة في حال كانت فارغة 
let numbers1 = [1,2]
let [first1, second1, ...others1] = numbers1
console.log(first1, second1, others1) // 1 2 []
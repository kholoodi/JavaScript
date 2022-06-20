// IIFE = immediately invoked function expression 
// نمط IIEF هو استدعا للدالة فور انشائها 

/*let name = function(n){
    console.log(n)
}
name("Reem");*/
/**في المثال السابق لم يعد المتغير name 
 * يحتفظ بقمية الدالة لان الالدالة تم استدعئها
 * فقط يمتك فيمة في حال كانت الدالة ترجع قيمة 
 */

//IIFE
(function(n){
    console.log(n)
}) ("Reem") 
 //("Reem") calling 
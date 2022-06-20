/*function rectangleOrSequareArea(w,l){
    if (l == undefined){
        l =w 
    }
    
    return w * l 
}*/
function rectangleOrSequareArea(w,l = w){
    return w * l
}

let area = rectangleOrSequareArea(4)
console.log(area) //16

let area = rectangleOrSequareArea(4,5)
console.log(area) //20


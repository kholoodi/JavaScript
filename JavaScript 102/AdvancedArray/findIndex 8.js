// findIndex return index of first value which is ture  with given condition
const ages = [12, 14, 19, 21];

const index = ages.findIndex(function(element){
    return element >= 18;
});
console.log(index);//2

const index1 = ages.findIndex(function(element){
    return element >= 25;
});
console.log(index1); //-1
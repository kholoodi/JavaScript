const colors = ['red', 'green','blue'];
let colorNumber = 5;
 
switch(colorNumber){
    case 1:
        console.log(colors[0]);
        break;
    case 2:
        console.log(colors[1]);
        break;
    case 3:
        console.log(colors[2]);
        break;
        //many cases to one result 
    case 4:
    case 5:
        console.log('black');
        break;
        //default case 
    default:
        console.log('white');
        break;
    
}
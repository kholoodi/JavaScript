//Destructure is extract values from object 
// for example destruture Array is exteact thier elmemts values to variables

let ages  = [25, 30, 35]

// destructure the first element 
//let [firstAge] = ages 
//console.log(firstAge)

// destructure the first  and second elements 
 //let [firstAge ,secondAge]  = ages
//console.log(firstAge,secondAge)

// destructure the all elements
let [firstAge, secondAge, thirdAge] = ages
//console.log(firstAge,secondAge, thirdAge)
//---------------------------------------------------------
//-------Undefind destructure
let colors = ['red', 'blue']
//let [firstcolor, secondcolor, thirdcolor] = colors //red blue undefined

//using defoult value 
//let [firstcolor, secondcolor, thirdcolor ='green'] = colors //red blue green

colors = ['red', 'blue','black']
//let [firstcolor, secondcolor, thirdcolor ='green'] = colors   //red blue black

//console.log(firstcolor, secondcolor, thirdcolor) 
//---------------------------------------------------

// skip element with ,
colors = ['red', 'blue','green']
//let [,firstcolor, secondcolor] = colors  ///blue green
//console.log(firstcolor, secondcolor) 
let [, ,firstcolor] = colors //green
console.log(firstcolor) 

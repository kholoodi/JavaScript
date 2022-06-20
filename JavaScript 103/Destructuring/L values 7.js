// values move from right to left,same thing hapens in destructure 

let colors = ['red', 'blue'];
[colors[0], colors[1]] = ['green','black','white']
console.log(colors) // ['green','black']
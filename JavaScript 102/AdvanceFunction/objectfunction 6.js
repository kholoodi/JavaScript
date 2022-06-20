


let object = {
    //key : value 
    title : 'How to write a function in an object ',

    //key : value (function)
    function1 : function(){
        return console.log('function1')},

    //key : value (arrow function)
    function2: () => {
        return console.log("function2")
    },
    //function name 
    function3(){
        return console.log("function3")
    }

}
object.function1()
object.function2()
object.function3()
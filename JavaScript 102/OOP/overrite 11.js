
class Animals{
    constructor(name, color)
    {
        this.name = name;
        this.color = color;
        this.speed = 0;
    }

    run(speed){
        this.speed = speed;
        return `${this.name} runs with speed ${this.speed}`
    }
    makeSound(){
       console.log('Sound...')
    }

}
///Cat class inherit from Animals
class Cat extends Animals{
    makeSound(){
        console.log('Mew...')
     }
    
}

 const cat  = new Cat('sonwy','white')
 cat.makeSound()  // calling the makeSound method in the sub class

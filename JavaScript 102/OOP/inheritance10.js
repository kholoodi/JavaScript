
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

}
///Cat class inherit from Animals
class Cat extends Animals{
    
    makeSound(){
        return 'Mew...'
    }
}
//Fox class inherit from Animals
class Fox extends Animals{
    
    makeSound(){
        return 'brak...'
    }
}
 const cat  = new Cat('sonwy','white')
 console.log(cat)

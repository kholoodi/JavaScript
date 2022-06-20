//create class
class Car {
    // static is common attribute among objects 
    static numberOfCar = 0;

    constructor(name, color, currentSpeed){
        this.name = name ;
        this.color = color;
        this.currentSpeed = currentSpeed;
        //each time when cerate a new object we call constructor and static menthod 
        Car.incrementNuberOfcars()
    }
      move(speed)
      {
       this.currentSpeed = speed; 
       return `This ${this.name} is move at speed of ${this.currentSpeed} KM per hour`
      }
      stop(){ 
       this.currentSpeed = 0;
       return `The ${this.name} is stopped`
       }
       
       // static method 
       static incrementNuberOfcars(){
           Car.numberOfCar++;
       }
}

const car1 = new Car('camry', 'white', 0);
const car2 = new Car('corella', 'black',0);
console.log(Car.numberOfCar);


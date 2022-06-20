// create an Object 
const car = {
    //Attributes
    //key:value
    name:'camry',
    color: 'white' ,
    currentSpeed: 0,
    //Actions
    move: function(speed){
        //this here refer to an object "car"
        this.currentSpeed = speed; 
        return `This ${this.name} is move at speed of ${this.currentSpeed} KM per hour`
    },
    stop: function(){ 
        this.currentSpeed = 0;
        return `The ${this.name} is stopped`
        }
}
//ObjectName.key
//console.log(car.name);
//car.stop()
console.log(car.move(100));
console.log(car.stop());
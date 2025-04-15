class mobile{
   constructor(make,model){
    this.make = make
    this.model = model       
    }
    start(){
        return`${this.make} ${this.model} is started`;
    }
}
let car = new mobile('Toyota', 'Camry');
console.log(car.start());
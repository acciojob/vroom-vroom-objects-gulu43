// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;
}
Car.prototype.getMakeModel = function(){
    return `${this._make} ${this._model}`;
}


function SportsCar(make, model, topSpeed) {
	Car.call(this,make,model);
	this.make = make;
	this.model = model;
	this.topSpeed = topSpeed;
}
SportsCar.prototype.getTopSpeed = function(){
    return this._topSpeed ;
}
SportsCar.prototype = Object.create(Car.prototype);

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

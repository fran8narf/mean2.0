var Car = (function () {
    function Car() {
    }
    //GETTERS
    Car.prototype.getColour = function () {
        return this.colour;
    };
    Car.prototype.getModel = function () {
        return this.model;
    };
    Car.prototype.getSpeed = function () {
        return this.speed;
    };
    //SETTERS
    Car.prototype.setColour = function (colour) {
        this.colour = colour;
    };
    Car.prototype.setModel = function (model) {
        this.model = model;
    };
    Car.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    return Car;
}());
var carOne = new Car();
var carTwo = new Car();
var carThree = new Car();
carOne.setColour("Red");
carTwo.setColour("Blue");
carThree.setColour("Orange");
console.log("El color del coche 1 es: " + carOne.getColour());
console.log("El color del coche 2 es: " + carTwo.getColour());
console.log("El color del coche 3 es: " + carThree.getColour());

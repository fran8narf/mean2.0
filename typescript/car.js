var Car = (function () {
    //constructor
    function Car(model) {
        if (model === void 0) { model = null; }
        this.speed = 0;
        if (model == null) {
            this.model = "BMW";
        }
        else {
            this.model = model;
        }
        this.colour = "White";
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
    Car.prototype.speedUp = function () {
        this.speed += 10;
    };
    Car.prototype.speedDown = function () {
        this.speed -= 10;
    };
    return Car;
}());
var carOne = new Car('Renault Clio');
carOne.setSpeed(0);
carOne.speedUp();
carOne.speedUp();
carOne.speedUp();
carOne.speedDown();
var carTwo = new Car();
var carThree = new Car();
carOne.setColour("Red");
/*carTwo.setColour("Blue");
carThree.setColour("Orange");*/
console.log("El modelo del coche 1 es: " + carOne.getModel());
console.log("El color del coche 1 es: " + carOne.getColour());
console.log("La velocidad del coche 1 es: " + carOne.getSpeed());
/*console.log("El color del coche 2 es: "+carTwo.getColour());
console.log("El color del coche 3 es: "+carThree.getColour());*/ 

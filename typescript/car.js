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

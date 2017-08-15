class Car{

	public colour: string;
	public model: string;
	public speed: number;

	//GETTERS
	public getColour(){
		return this.colour;
	}	
	public getModel(){
		return this.model;
	}

	public getSpeed(){
		return this.speed;
	}

	//SETTERS
	public setColour(colour: string){
		this.colour = colour;
	}
	public setModel(model: string){
		this.model = model;
	}
	public setSpeed(speed: number){
		this.speed = speed;
	}

}

var carOne = new Car();
var carTwo = new Car();
var carThree = new Car();

carOne.setColour("Red");
carTwo.setColour("Blue");
carThree.setColour("Orange");

console.log("El color del coche 1 es: "+carOne.getColour());
console.log("El color del coche 2 es: "+carTwo.getColour());
console.log("El color del coche 3 es: "+carThree.getColour());
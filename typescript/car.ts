class Car{

	public colour: string;
	public model: string;
	public speed: number = 0;

	//GETTERS
	public getColour(){
		return this.colour;
	}	
	public getModel(){
		return this.model;
	}

	public getSpeed():number{
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

	public speedUp(){
		this.speed+= 10;
	}

	public speedDown(){
		this.speed-= 10;
	}

}

var carOne = new Car();
carOne.speedUp();
carOne.speedUp();
carOne.speedUp();
carOne.speedDown();

var carTwo = new Car();
var carThree = new Car();

carOne.setColour("Red");
/*carTwo.setColour("Blue");
carThree.setColour("Orange");*/

console.log("El color del coche 1 es: "+carOne.getColour());
console.log("La velocidad del coche 1 es: "+carOne.getSpeed());

/*console.log("El color del coche 2 es: "+carTwo.getColour());
console.log("El color del coche 3 es: "+carThree.getColour());*/
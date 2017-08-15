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
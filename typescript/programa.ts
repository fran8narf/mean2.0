class Programa{
	public nombre:string;
	public version:number;

	setNombre(nombre:string){
		this.nombre = nombre;
	}
	getNombre(){
		return this.nombre;
	}

	setVersion(version:number){
		this.version = version;
	}
	getVersion(){
		return this.version;
	}
}

class VideoEditor extends Programa{
	public Timeline:number;

	setTimeline(Timeline:number){
		this.Timeline = Timeline;
	}
	getTimeline(){
		return this.Timeline;
	}
	getAllData():string{
		return this.getNombre()+" -Versión: "+this.getVersion()+" -Timeline: "+this.getTimeline();
	}
}

var editorOne = new VideoEditor();

editorOne.setNombre("SonyVegas");
editorOne.setVersion(1.0);
editorOne.setTimeline(1200);

console.log(editorOne.getAllData());
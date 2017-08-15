//DECORADORES: Hace una copia de la clase y mediante unos parámetros se modifica la clase original para extender una clase sin tocar la original.
function arranque(lanzar: string){
	return (target: Function)=>{
		target.prototype.saludo = function(): void {
			alert(lanzar);
		}
	}
}

@arranque("Lanzamiento del ejemplo de un decorador en TS.")
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

var programaDos = new Programa();
programaDos.saludo();

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

//Lógica del formulario

var programas = [];

function guardar(){
	var nombre = ( <HTMLInputElement>document.getElementById('nombre')).value.toString();

	var programa = new Programa();

	programa.setNombre(nombre);
	programa.setVersion(1);

	programas.push(programa);

	var list = "";

	for (var i = 0; i < programas.length; i++){
		list = list+"<li>"+programas[i].getNombre()+"</li>";
	}

	var listado = <HTMLElement> document.getElementById("lista");
	listado.innerHTML = list;

	( <HTMLInputElement>document.getElementById('nombre')).value = "";
}

var i = 0;
setInterval(()=>{
	console.log("hola."+i);
	i+=1;
}, 1000);

var frutas = [
	"manzana",
	"pera",
	"uva",
	"banano"
]

var recorrer = frutas.map(fruta =>{
	console.log(fruta);
	console.log(fruta.length);
});
function holaMundo(message){
	return 'Hola Mundo -'+message;
}

var message = "Bienvenido al mundo de TypeScript cambiando!";

var tag = <HTMLElement>document.getElementById("container");

tag.innerHTML = holaMundo(message);

//VARIABLES Y TIPOS DE TS
var nombre:string = "Fran";
var edad:number = 26;
var programador:boolean = true;

var lenguajes:Array<string> = ["PHP","JavaScript","CSS", "HTML5"];

tag.innerHTML = nombre +" - "+edad+".";

//alert("HOLA MUNDO!");

//DIFERENCIAS ENTRE LET Y VAR para definir variables.
var a = 7;
var b = 12;

if ( a === 7 ){
	let a = 4;
	var b = 1;

	console.log("DENTRO DEL IF 'a' vale: "+a+" Y 'b' vale: "+b);
}
console.log("FUERA DEL IF 'a' vale: "+a+" Y 'b' vale: "+b);

//Funciones y tipado de las mismas

function devolverNumero( num:number ):string {
	return "Número devuelto: "+num;
}

function devolverString ( texto: string):number {
	if (texto === 'hola'){
		return 66;
	}else{
		return 0;
	}
}

alert(devolverNumero(10));
alert(devolverString('holo'));

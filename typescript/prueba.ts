function holaMundo(message){
	return 'Hola Mundo -'+message;
}

var message = "Bienvenido al mundo de TypeScript cambiando!";

var tag = <HTMLElement>document.getElementById("container");

tag.innerHTML = holaMundo(message);

alert("HOLA MUNDO!");
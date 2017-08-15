function holaMundo(message) {
    return 'Hola Mundo -' + message;
}
var message = "Bienvenido al mundo de TypeScript cambiando!";
var tag = document.getElementById("container");
tag.innerHTML = holaMundo(message);

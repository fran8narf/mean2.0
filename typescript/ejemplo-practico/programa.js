var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//DECORADORES: Hace una copia de la clase y mediante unos parámetros se modifica la clase original para extender una clase sin tocar la original.
function arranque(lanzar) {
    return function (target) {
        target.prototype.saludo = function () {
            alert(lanzar);
        };
    };
}
var Programa = (function () {
    function Programa() {
    }
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa = __decorate([
        arranque("Lanzamiento del ejemplo de un decorador en TS.")
    ], Programa);
    return Programa;
}());
var programaDos = new Programa();
programaDos.saludo();
var VideoEditor = (function (_super) {
    __extends(VideoEditor, _super);
    function VideoEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoEditor.prototype.setTimeline = function (Timeline) {
        this.Timeline = Timeline;
    };
    VideoEditor.prototype.getTimeline = function () {
        return this.Timeline;
    };
    VideoEditor.prototype.getAllData = function () {
        return this.getNombre() + " -Versión: " + this.getVersion() + " -Timeline: " + this.getTimeline();
    };
    return VideoEditor;
}(Programa));
var editorOne = new VideoEditor();
editorOne.setNombre("SonyVegas");
editorOne.setVersion(1.0);
editorOne.setTimeline(1200);
//Lógica del formulario
var programas = [];
function guardar() {
    var nombre = document.getElementById('nombre').value.toString();
    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(1);
    programas.push(programa);
    var list = "";
    for (var i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }
    var listado = document.getElementById("lista");
    listado.innerHTML = list;
    document.getElementById('nombre').value = "";
}
var i = 0;
setInterval(function () {
    console.log("hola." + i);
    i += 1;
}, 1000);
var frutas = [
    "manzana",
    "pera",
    "uva",
    "banano"
];
var recorrer = frutas.map(function (fruta) {
    console.log(fruta);
    console.log(fruta.length);
});

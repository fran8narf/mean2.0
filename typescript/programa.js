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
    return Programa;
}());
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
console.log(editorOne.getAllData());

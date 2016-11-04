var App = (function () {
    function App() {
    }
    App.prototype.constryctor = function () {
        this.aritstaList = new Array();
    };
    App.prototype.main = function () {
        var artista1 = new Artista();
        artista1.nombre = "Ricardo";
        artista1.presentarse();
    };
    App.prototype.crearartista = function () {
        alert("Vamos a crear un artista con POO");
    };
    return App;
}());
var app = new App;
//# sourceMappingURL=app.js.map
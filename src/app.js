var Aplicacion = (function () {
    function Aplicacion() {
        this.albumList = new Array();
    }
    Aplicacion.prototype.agregarAlbum = function () {
        var inputAlbumNombre = document.getElementById("album_nombre");
        var inputAlbumFechaLanzamiento = document.getElementById("album_fechaLanzamiento");
        var nombreAlbum = inputAlbumNombre.value;
        var fechaLanzamiento = new Date(inputAlbumFechaLanzamiento.value);
        var nuevoAlbum = new Album(nombreAlbum, fechaLanzamiento);
        this.albumList.push(nuevoAlbum);
        alert("Album agregado con éxito");
    };
    Aplicacion.prototype.listarAlbums = function () {
        var tablaAlbumsElement = document.getElementById("table_albums");
        var htmlTablaAlbums = "<tr><th>Nombre</th><th>Fecha de lanzamiento</th></tr>";
        for (var i = 0; i < this.albumList.length; i++) {
            htmlTablaAlbums = htmlTablaAlbums +
                "<tr>" +
                "<td>" + this.albumList[i].nombre + "</td>" +
                "<td>" + this.albumList[i].fechaLanzamiento + "</td>" +
                "</tr>";
        }
        tablaAlbumsElement.innerHTML = htmlTablaAlbums;
        tablaAlbumsElement.style.visibility = "visible";
    };
    return Aplicacion;
}());
var app = new Aplicacion();
//# sourceMappingURL=app.js.map
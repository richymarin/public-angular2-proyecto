class Aplicacion
{
    private albumList:Array<Album>;

    constructor(){
        this.albumList = new Array<Album>();
    }

    public agregarAlbum()
    {
        let inputAlbumNombre: HTMLInputElement = (document.getElementById("album_nombre") as HTMLInputElement);
        let inputAlbumFechaLanzamiento: HTMLInputElement = (document.getElementById("album_fechaLanzamiento") as HTMLInputElement);
        
        let nombreAlbum: string = inputAlbumNombre.value;
        let fechaLanzamiento: Date = new Date(inputAlbumFechaLanzamiento.value); 

        let nuevoAlbum: Album = new Album(nombreAlbum, fechaLanzamiento);
        this.albumList.push(nuevoAlbum);

        alert("Album agregado con éxito");
    }

    public listarAlbums()
    {
        let tablaAlbumsElement:HTMLElement = document.getElementById("table_albums");
        let htmlTablaAlbums:string = "<tr><th>Nombre</th><th>Fecha de lanzamiento</th></tr>";

        for(let i=0; i<this.albumList.length; i++){
            htmlTablaAlbums = htmlTablaAlbums +
                                "<tr>" +
                                "<td>" + this.albumList[i].nombre  + "</td>" +
                                "<td>" + this.albumList[i].fechaLanzamiento  + "</td>" +                                
                                "</tr>";            
        }
        
        tablaAlbumsElement.innerHTML = htmlTablaAlbums;
        tablaAlbumsElement.style.visibility = "visible";        
    }
}

let app:Aplicacion = new Aplicacion();



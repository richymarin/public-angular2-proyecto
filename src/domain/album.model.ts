class Album
{
    public nombre: string;
    public fechaLanzamiento: Date;    
    private artistasList:Array<Artista>; 

    constructor(nombre:string, fechaLanzamiento:Date){

        this.nombre = nombre;
        this.fechaLanzamiento = fechaLanzamiento;

        this.artistasList = new Array<Artista>();
    }
     
    
}
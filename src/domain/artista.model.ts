class Artista
{
    public nombre: string;
    public edad: number;

    constructor (){}

    public presentarse()
    {
        alert ("Hola soy : " + this.nombre);
    }
}
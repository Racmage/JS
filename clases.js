class Persona{
constructor(nombre, apellido){
    this.nombre= nombre;
    this.apellido= apellido;
}
get nombre(){
return this._nombre
}
set nombre(nombre){
this._nombre=nombre;
}
set apellido(apellido){
    this._apellido= apellido;
}
}
let persona1 = new Persona ("Camilo", "Rocha");
console.log(persona1)
let persona2 = new Persona ('Camilo', 'Rocha');
console.log(persona2)
persona1.nombre ="Camilo Enrique";
console.log(persona1.nombre);
////////////////////////////////////////////////////
class Persona2{
    static contadorPersonas =0;
    static get MAX_OBJ(){
        return 5;
    }
    static saludar(){
        console.log('Saludes desde el metodo estatico')
    }
    static saludar2(persona){
        console.log(persona.nombre);
    }
}
let persona3= new Persona2()
console.log(persona3.saludar()); //No se puede por el static
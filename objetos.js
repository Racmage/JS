let persona = {
    nombre: "Juan",
    apellido:"Bejarano",
    telefono: 1234567890,
    email: "juan.bejarano@gmail.com",
    edad: 18
}
let persona2= new Object();
persona2.nombre="Jorge"
persona2.apellido="Torres"

let persona3 ={
    nombre: "David",
    apellido: "Perez",
    telefono: 1819283 ,
    email: "david.perez@gmail.com",
    edad: 20,
    nombreCompleto: function (){return this.nombre+' '+this.apellido}
}
/////////////////////
console.log(persona3.nombreCompleto())
console.log(persona["nombre"])

for (propiedad in persona){
    console.log(persona[propiedad]);
}
let personaArray = Object.values(persona)
console.log(personaArray)
let personaString=JSON.stringify(persona)
console.log(personaString)
console.log(persona)
function Persona (nombre ='Juan', apellido, email, nombreCompleto){
this.nombre = nombre;
this.apellido = apellido;
this.email = email;
this.nombreCompleto = function(){
return this.nombre + ' ' + this.apellido
}
}
let padre = new Persona("Camilo", "Rocha", "Camiloroc98@gmail.com");
console.log(padre)
let madre = new Persona("Laura", "Contreras", "lauco@unal.edu.co");
console.log(madre)
Persona.prototype.tel;
madre.tel=12345;
padre.tel=33221;
console.log(madre)
console.log(padre)
///
function fSaludar(nombre){
    return ("Hola "+ nombre);
};
var cliente1 ={
    saludar : fSaludar
}
console.log(cliente1.saludar("Santi"));
///
var constructor = function (precio)
{
    let miObjeto = {
        precioBase: precio,
        iva: 1.21,
        calcularIva: function(){
            return (this.precioBase*this.iva)
        }
    }
    return miObjeto;
}
precio1 = constructor(100);
console.log(precio1);

function miFuncion(){
    let count=1
    function contador(){
        return count;
    }
    return contador();
}
console.log(miFuncion())
class Persona{
    static contadorPersonas=0;
    email="default email"

    static get max_obj(){
        return 5;
    }
    constructor(nombre, apellido){
        this._nombre=nombre;
        this._apellido=apellido;
        if (Persona.contadorPersonas < Persona.max_obj){
        this.idPersona= ++Persona.contadorPersonas;
        }
        else{
            console.log('Se ha alcanzado el numero maximo de usuarios')
        }
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
    this._nombre = nombre;
    }
    get apellido(){
    return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return `${this.idPersona} ${this._nombre} ${this._apellido}`
    }
    toString(){
        return this.nombreCompleto();
    }
    }
    persona1= new Persona("J","B");
    console.log(persona1.toString())
    
    class Empleado extends Persona{
constructor(nombre,apellido,cargo){
        super(nombre, apellido);
        this._cargo=cargo;
}
get cargo(){
    return this._cargo;
     }
set cargo(cargo){
this._cargo = cargo;
     }
     nombreCompleto(){
        return `${super.nombreCompleto()} ${this._cargo}`
}
    }
    empleado1= new Empleado("Juan","Bejarano","Ing. sistemas");
    empleado2= new Empleado("David","Bejarano","Ing. Aeronautica");
    empleado3= new Empleado("Lalia","Gonzales","Derecho");
    empleado4= new Empleado("Leonel","Gomez","Psicología");
    console.log(empleado1.nombreCompleto());
    console.log(empleado2.nombreCompleto());
    console.log(empleado3.nombreCompleto());
    console.log(empleado4.nombreCompleto());
    empleado5= new Empleado("Juan","Bejarano","Ing. sistemas"); //Excede el numero de usuarios aquí
    console.log(empleado5.nombreCompleto());

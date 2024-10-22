function Estacion(){
    let mes; //Proporcionar numero de mes en esta linea. ejm: let mes=3
    let estacion;
    if (mes<=12 && mes>=1){
    estacion="Invierno"
    }
    if (mes>=3 && mes<=5){
    estacion="Primavera"
    }
    if (mes>=6 && mes<=8){
    estacion="Verano"
    }
    if (mes>=9 && mes<=11){
    estacion="Otoño"
    }
    return estacion;
}
console.log(Estacion());
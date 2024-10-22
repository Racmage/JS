let autos = new Array('BMW', 'Mercedes Benz', 'Volvo');
const coches = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(coches[1]);
for (let contador=0;contador<coches.length;contador++){
    console.log(contador+': '+coches[contador]);
}
coches[1]='modificado';
coches.push('Nissan');
console.log(coches)
coches[coches.length]='Audi';
console.log(coches)
coches.pop();
console.log(coches)
console.log(Array.isArray(coches));
console.log(coches instanceof Array);
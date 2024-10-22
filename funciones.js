function miFuncion(a,b)
{
    console.log("Suma: "+(a+b))
}

function suma(num1,num2)
{
    let resultado;
    resultado= num1+num2;
    return resultado;
}
miFuncion(5,3)
console.log(suma(2,4))
let x = function (a,b){return a+b};
let resultado=x(1,2);

const factorial= function fac(n)
{
    return n<2 ? 1 : n*fac(n-1);
};
console.log(factorial(3));
const sumarFuncionFlecha =(nu1,nu2) => nu1+nu2;
resultado1= sumarFuncionFlecha(3,4)
console.log(resultado1)
//////////////////////////////////////////////////////
var u=10;
function foo(){
    var v=20
    function bar(){
        var z=15;
        var output=u+v+z;
        return output;
    }
    return bar();
}
console.log(foo());
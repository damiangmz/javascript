
function conversion (){
    let dolar = 138.60;
    let euro = 138.91;
    let resultado = 0;
    let ingresarMoneda = prompt("Ingrese la moneda a la que desea convertir ");
    if (ingresarMoneda === "dolar") {
        let valor = parseInt(prompt("ingrese un numero"));
        resultado = valor / dolar;
        alert("el cambio de pesos a dolar es: $" + resultado.toFixed(2))
    }
    else if (ingresarMoneda === "euro"){
        let valor = parseInt(prompt("ingrese un numero"));
        resultado = valor / euro;
        alert("el cambio de pesos a euro es: $" + resultado.toFixed(2));
    }
    else{
        alert("Ingrese dolar o euro")
    }
}
conversion()

class CrearMoneda{  //crear objeto
    constructor(nombre, cotizacion){
        this.nombre = nombre;
        this.cotizacion = cotizacion;
    }

}
let moneda1 = new CrearMoneda("peso chileno" , 15.92);
let moneda2 = new CrearMoneda("real" , 139.67)

console.log(moneda1);
console.log(moneda2);
const array = []; //agregando array
array.push(moneda1 , moneda2);

console.log(array);


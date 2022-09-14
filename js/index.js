
/*function conversion (){
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
let pesoChileno = new CrearMoneda("peso chileno" , 15.92);
let real = new CrearMoneda("real" , 139.67)

const MonedasCreadas = []; //array para acumular monedas creadas



MonedasCreadas.push(pesoChileno); //sumado al array 
MonedasCreadas.push(real);
console.log(MonedasCreadas);

const nombreMonedas = MonedasCreadas.map((el) => el.nombre); //MAP para ver nombres de monedas creadas
console.log(nombreMonedas);

const filtrarMoneda = MonedasCreadas.filter((el) => el.nombre.includes('peso chileno')); //filtrar moneda con nombre peso chileno 
console.log(filtrarMoneda);*/
let dolar = 138.60;
let euro = 138.91;
let real = 139.67;
let PesoChileno = 15.92


const importe = document.querySelector("#importe");
const valor = document.querySelector("#valor");
importe.oninput = () => { //entrega de DOM
    texto.innerHTML = importe.value
}
let de = document.getElementById("de");
let a = document.getElementById("a");
if (de == 1 && a == 2) {
    let resultado = importe / dolar;
    alerte (resultado)
}





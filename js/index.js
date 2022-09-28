
let resultado = 0;
//constructor de objetos (monedas)
function monedas (nombre, cotizacion){
  this.nombre = nombre;
  this.cotizacion = cotizacion;
}
//monedas
const dolar = new monedas("dolar", 138.6);
const euro = new monedas ("euro", 139.91);
const real = new monedas ("real", 139.67);

//array de monedas
const listaMonedas = []; 
listaMonedas.push(dolar);
listaMonedas.push(euro);
listaMonedas.push(real);
console.log(listaMonedas);

//funcion para convertir monedas
function convertir() {
  
  let valor = parseInt(document.getElementById("importe").value);
  
  if (document.getElementById("dolar").checked) {
    resultado = valor / dolar.cotizacion;
     
  }
  else if (document.getElementById("euro").checked){
    resultado = valor / euro.cotizacion;
  }
  else if(document.getElementById("real").checked){
    resultado = valor/ real.cotizacion;
  }
  container.innerHTML= "$"+ " " + resultado.toFixed(2);
  //cada operacion que haga se agregue a un array para despues guardarla en el local storage
  let historialDeCotizacion =[];
  historialDeCotizacion.push(resultado);  
  localStorage.setItem("historial", resultado);
}
let boton = document.getElementById("cotizador"); //Incorporacion de evento click
boton.addEventListener("click", convertir);

/*let nombre = prompt("Ingrese su nombre") //Probando localStorage y json
localStorage.setItem("usuario" , nombre);*/
const monedaCl = { id:1, nombre: "peso chileno", valor: "6" }; 
const enjson = JSON.stringify(monedaCl);
localStorage.setItem("moneda", enjson);

let container = document.getElementById("resultado"); //div para mostrar resultados
container.innerHTML= "$"+ " " + resultado;

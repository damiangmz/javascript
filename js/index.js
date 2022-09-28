let dolar = 138.6;
let euro = 138.91;
let real = 139.67;
let resultado = 0;


const importe = document.querySelector("#importe"); //Interaccion con el dom
const valor = document.querySelector("#valor");
importe.oninput = () => {
  //entrega de DOM
  texto.innerHTML = importe.value;
};

function convertir() {
  //funcion para convertir monedas
  let valor = parseInt(document.getElementById("importe").value);
  
  if (document.getElementById("dolar").checked) {
    resultado = valor / dolar;
     
  }
  else if (document.getElementById("euro").checked){
    resultado = valor / euro;
  }
  else if(document.getElementById("real").checked){
    resultado = valor/ real;
  }
  container.innerHTML= resultado.toFixed(2);
}
let boton = document.getElementById("cotizador"); //Incorporacion de evento click
boton.addEventListener("click", convertir);

let nombre = prompt("Ingrese su nombre") //Probando localStorage y json
localStorage.setItem("usuario" , nombre);
const monedaCl = { id:1, nombre: "peso chileno", valor: "6" }; 
const enjson = JSON.stringify(monedaCl);
localStorage.setItem("moneda", enjson);

let container = document.getElementById("resultado"); //div para mostrar resultados
container.innerHTML= resultado;

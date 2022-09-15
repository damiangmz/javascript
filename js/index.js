let dolar = 138.6;
let euro = 138.91;
let real = 139.67;
let PesoChileno = 15.92;

const importe = document.querySelector("#importe"); //Interaccion con el dom
const valor = document.querySelector("#valor");
importe.oninput = () => {
  //entrega de DOM
  texto.innerHTML = importe.value;
};

function convertir() {
  //funcion para convertir monedas
  let valor = parseInt(document.getElementById("importe").value);
  let resultado = 0;
  if (document.getElementById("dolar").checked) {
    resultado = valor / dolar;
    alert("el resultado es de: $" + resultado.toFixed(2));
  }
  else if (document.getElementById("euro").checked){
    resultado = valor / euro;
    alert("el resultado es de: $" + resultado.toFixed(2));
  }
  else if(document.getElementById("real").checked){
    resultado = valor/ real;
    alert("el resultado es de: $" + resultado.toFixed(2));

  }
}
let boton = document.getElementById("cotizador"); //Incorporacion de evento click
boton.addEventListener("click", convertir);

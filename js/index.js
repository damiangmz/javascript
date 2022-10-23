
const monedaEl_one = document.getElementById('moneda-uno');
const monedaEl_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-dos'); 
const cambioEl = document.getElementById('cambio');
const resultado = document.getElementById('resultado')
const tazaEl = document.getElementById('tasa');

let mensaje = document.getElementById('mje')

function calculate(){ //funcion para calcular conversion
  let moneda_one = monedaEl_one.value;
  let moneda_two = monedaEl_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
  .then(res => res.json() )
   .then(data => {
       const tasa = data.rates[moneda_two];
       cambioEl.innerText = `1 ${moneda_one} = ${tasa} ${moneda_two}`;
       cantidadEl_two.value = (cantidadEl_one.value * tasa).toFixed(2);
    } );
    let inputCantidad = cantidadEl_one.value
    if (inputCantidad < 0 ){  //condicional
       alertaMensaje()
    }
}
function alertaMensaje(){ //sweetalert
    Swal.fire({
        icon: 'error',
        text: 'Ingrese un importe mayor a 0',
      })
    
}
function otrasMonedas (nombre, cotizacion){  //constructor de ojetos-monedas
    this.nombre = nombre;
    this.cotizacion = cotizacion;
}
let dolarBlue = new otrasMonedas("dolar blue", 291);
console.log(dolarBlue)
let dolarTurista = new otrasMonedas("dolar turista", 319);
let dolarBna = new otrasMonedas("dolar bna",159.5 );

let arrayMonedas = []; //array de monedas
arrayMonedas.push(dolarBlue);
arrayMonedas.push(dolarTurista);
arrayMonedas.push(dolarBna);
console.log(arrayMonedas);

//Event listeners
monedaEl_one.addEventListener('change', calculate);
cantidadEl_one.addEventListener('input', calculate);
monedaEl_two.addEventListener('change', calculate);
cantidadEl_two.addEventListener('input', calculate);

tasa.addEventListener('click', () =>{
    const temp = monedaEl_one.value;
    monedaEl_one.value = monedaEl_two.value;
    monedaEl_two.value = temp;
    calculate();
} );








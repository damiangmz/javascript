const monedaEl_one = document.getElementById('moneda-uno');
const monedaEl_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-dos'); //ver esto
const cambioEl = document.getElementById('cambio');
const resultado = document.getElementById('resultado')
const tazaEl = document.getElementById('tasa');

function calculate(){
  let moneda_one = monedaEl_one.value;
  let moneda_two = monedaEl_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
  .then(res => res.json() )
   .then(data => {
       const tasa = data.rates[moneda_two];
       
       cambioEl.innerText = `1 ${moneda_one} = ${tasa} ${moneda_two}`;

       cantidadEl_two.value = (cantidadEl_one.value * tasa).toFixed(2);
       
       

    } );
}

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


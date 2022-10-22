
const monedaEl_one = document.getElementById('moneda-uno');
const monedaEl_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-dos'); //ver esto
const cambioEl = document.getElementById('cambio');
const resultado = document.getElementById('resultado')
const tazaEl = document.getElementById('tasa');
let inputInicial = document.getElementById('cantidad-uno').value;
let mensaje = document.getElementById('mje')

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
if (inputInicial === 2) {
    msj = 'Lo sentimos no tenemos poliza disponible';
    mje.innerHTML = `
    <div>
        <span>${msj}</span>
        
    </div>
    `;
    
}
console.log(inputInicial);

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

//login
function validar() {
	let nombre, apellidos, correo, usuario, clave, telefono, expresion;
	nombre = document.getElementById("nombre").value;
	apellidos = document.getElementById("apellidos").value;
	correo = document.getElementById("correo").value;
	usuario = document.getElementById("usuario").value;
	clave = document.getElementById("clave").value;
	telefono = document.getElementById("telefono").value;

	expresion = /\w+@\w+\.+[a-z]/;

	if (nombre === "" || apellidos === ""  || correo === "" || usuario === "" || clave === "" || telefono === ""){
		alert("Todos los campos son obligatorios");
		return false;
	}
	else if (nombre.length>2){
		alert("El nombre es muy largo");
		return false;
	}
	else if (apellidos.length>80){
		alert("Los apellidos son muy largos");
		return false;
	}
	else if (correo.length>100){
		alert("El correo es muy largo");
		return false;
	}
	else if (!expresion.test(correo)){
		alert("El correo no es válido");
		return false;
	}
	else if (usuario.length>20 || clave.length>20){
		alert("El usuario y la clave solo deben tener 20 caracteres como máximo");
		return false;
	}
	else if (telefono.length>15){
		alert("El teléfono es muy largo");
		return false;
	}
	else if (isNaN(telefono)){
		alert("El teléfono ingresado no es de tipo numerico");
		return false;
	}
    else{
        location.remplace("login.html")
    }
}

let boton = document.getElementById('boton')
boton.addEventListener('click', ()=>{
	prompt("hola")
});
